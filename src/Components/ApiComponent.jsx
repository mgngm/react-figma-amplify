import React, { useState, useEffect, useContext } from 'react'

import { API, graphqlOperation } from 'aws-amplify';
import { listTodos } from './../graphql/queries'
import { createTodo, deleteTodo } from './../graphql/mutations';

import { FaTimesCircle } from "react-icons/fa";

import { Auth as AuthProvider } from "../contexts/Auth";


function ApiComponent() {

    const ininState = {name:"",description:""}

    const [todo, setTodo] = useState(ininState)

    const [results, setResults] = useState([])
    const [error, setError] = useState()

    async function addItem(e) {
        e.preventDefault();
        setError("")

        try {
            await API.graphql(graphqlOperation(createTodo, { input: { name: todo.name, description:todo.description} }));
            setTodo(ininState)
            checkUser()
        } catch (error) {
            console.log(error)
            setError(error.message)
        }

    }

    async function deleteItem(id) {
        setError("")
        try {
            const res = await API.graphql(graphqlOperation(deleteTodo, { input: { id } }));
            // console.log(res.errors[0].errorType)
            checkUser()
        } catch (error) {
            console.log("error on delete item", error.errors[0].errorType)
            if (error?.errors) {
                // setError(error.errors[0].errorType)
                setError("unAuthorised")
            } else {
                setError(error.message)
            }
        }

    }

    async function checkUser() {
        try {
            const todoData = await API.graphql(graphqlOperation(listTodos))
            const items = todoData.data.listTodos.items
            setResults(items)
        } catch (err) {
            setResults([])

            console.log("error on effect", err)
            if (err?.errors) {
                console.log(err.errors)
                setError("unAuthorised")
            } else {
                setError(err.message)
                // setError("error fetching items..., please try again");
            }

        }
    }

    function setInput(key, value) {
        setTodo({ ...todo, [key]: value })
    }

    useEffect(() => {
        checkUser();
    }, []);
    // 459043257
    return (
        <div className="flex flex-col items-center gap-8 w-full relative pt-24">
            <div className="flex flex-col gap-10 sm:gap-14 items-center">
                <div className="md:text-center px-2 w-80 sm:w-fit">
                    <h2 className="text-5xl font-bold text-purple-med dark:text-yellow">Amplify API (GraphQL)</h2>
                    <h2 className="text-2xl pt-4 dark:text-white">Add your favourite items</h2>
                </div>
            </div>
            <div className="grid grid-cols-2 w-3/4 gap-8">



                <div>
                    <form className="flex flex-col gap-2 items-center mb-4">
                        <input value={todo.name || ""}  onChange={event => setInput('name', event.target.value)}type="text" placeholder="Title" className="rounded w-full p-4 text-gray-800 border-gray-200 bg-white" />
                        <input value={todo.description || ""} onChange={event => setInput('description', event.target.value)} type="text" placeholder="Description" className="rounded w-full p-4 text-gray-800 border-gray-200 bg-white" />
                        <button onClick={(e) => addItem(e)} className="px-8 bg-indigo-500 rounded text-white font-bold p-4 uppercase w-full">Add</button>
                        <p className="text-sm text-red-400 py-4">{error}</p>
                    </form>
                </div>
                <div className="flex flex-col">

                    {results.map((res) => (
                        <div key={res.id} className="flex justify-between hover:bg-red-200 bg-gray-200 text-gray-900 p-4 mb-2 rounded-md">
                            <div>
                                <p>{res.name}</p>
                                <p className="text-xs text-gray-400">{res.owner}</p>
                            </div>
                            <span onClick={() => deleteItem(res.id)} className="cursor-pointer hover:text-red-500 text-xl"><FaTimesCircle className="text-red-600" /></span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ApiComponent
