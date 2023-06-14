import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from "aws-amplify";
import { createExpenses } from './../../graphql/mutations'
import { getCurrentUser } from '../../utils/helper';

const ExpenseForm = () => {

  const initialState = {
    userExpensesId: "xx",
    title: "", date: "",
    amount: "", category: "", description: ""
  }
  const [formState, setFormState] = useState(initialState)


  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log();

    try {
      await API.graphql(graphqlOperation(createExpenses, { input: formState }))
      setFormState(initialState)
      console.log("expense has been created");
    } catch (err) {
      console.log('error creating todo:', err)
    }


  };


  useEffect(() => {

    getCurrentUser().then(res => {
      setFormState({ ...formState, "userExpensesId": res.sub });
    }).catch(err => console.log("error fetching user", err))

  }, [])


  return (
    <div>
      <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-yellow-200">
        Add Expense
      </h1>
      <form className="rounded-lg shadow-md">

        <div className="mb-4">
          <label htmlFor="title" className="block text-white font-bold mb-2">
            Title
          </label>
          <input
            onChange={(e) => handleChange(e)}
            value={formState.title}
            name="title"
            type="text"
            id="title"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-white font-bold mb-2">
            Category
          </label>
          <select onChange={(e) => handleChange(e)} name="category" id="countries" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option defaultValue={null}>Category</option>
            <option value="Car Expenses">Car Expenses</option>
            <option value="Mobile & Data">Mobile & Data</option>
            <option value="Savings">Savings</option>
            <option value="Others">Others</option>
          </select>

        </div>

        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div className="mb-4">
            <label htmlFor="amount" className="block text-white font-bold mb-2">
              Amount
            </label>
            <input
              onChange={(e) => handleChange(e)}
              name="amount"
              type="number"
              id="amount"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>


          <div className="mb-4">
            <label htmlFor="date" className="block text-white font-bold mb-2">
              Date
            </label>
            <input
              onChange={(e) => handleChange(e)}
              name="date"
              type="date"
              id="date"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-white font-bold mb-2">
            Description
          </label>
          <textarea
            onChange={(e) => handleChange(e)}
            name='description'
            id="description"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            required
          ></textarea>
        </div>
        <button
          onClick={(e) => handleSubmit(e)}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
