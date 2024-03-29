import React, { useContext, useEffect, useState } from 'react'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { Auth as AuthContext } from '../contexts/Auth'
import { Auth } from 'aws-amplify';

import { FaGoogle } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

function LoginUI({ params }) {

    const { authState, setError } = params
    const [loading, setLoading] = useState(false)

    const [name, setName] = useContext(AuthContext)
    const navigate = useNavigate();

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()


    async function signIn(e) {
        e.preventDefault();

        setLoading(true)
        try {
            const user = await Auth.signIn(username, password);
            console.log(user)
            setName(user.username)
            setLoading(false)

            navigate("/labs");
        } catch (error) {
            setError(error?.message)
            setLoading(false)
            console.log('error signing in', error);
        }
    }

    function loginUI() {
        Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google }).then(res=>{
            console.log(res);
        }).catch(err=>console.error(err))
    }


    return (
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
                    Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                        <input type="email" name="email" id="email" className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required="" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border rounded focus:ring-3 focus:ring-primary-300 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" required="" />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="remember" className="text-gray-300">Remember me</label>
                            </div>
                        </div>
                        <a href="#" className="text-sm font-medium hover:underline">Forgot password?</a>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <button onClick={(e) => signIn(e)} className="w-full text-black bg-yellow-100 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">{loading ? "Loading..." : "Sign In"}</button>

                        <button onClick={() => loginUI()} type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 inline-flex items-center">
                            <FaGoogle className='mr-2' />
                            Google Sign In
                        </button>
                    </div>
                    <p className="text-sm font-light text-gray-400">
                        Don’t have an account yet? <a onClick={() => authState(true)} className="font-medium cursor-pointer hover:underline text-primary-500">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default LoginUI