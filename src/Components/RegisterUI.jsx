import React, { useContext, useEffect, useState } from 'react'

import { Auth as AuthContext } from '../contexts/Auth'
import { Auth } from 'aws-amplify';

import { useNavigate } from "react-router-dom";

function RegisterUI({ params }) {

    const { authState, setError } = params
    const [loading, setLoading] = useState(false)

    const [name, setName] = useContext(AuthContext)
    const navigate = useNavigate();

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [otp, setOtp] = useState()

    const [showOTP, setShowOTP] = useState(false)

    async function signUp(e) {

        e.preventDefault();
        setLoading(true)

        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email: username,          // optional
                },
                autoSignIn: { // optional - enables auto sign in after user is confirmed
                    enabled: true,
                }
            });
            console.log(user);
            setLoading(false)
            setShowOTP(true)
        } catch (error) {
            setError(error?.message)
            setLoading(false)
            console.log('error signing up:', error);
        }
    }

    async function resendConfirmationCode(e) {
        e.preventDefault();
        
        try {
            await Auth.resendSignUp(username);
            console.log('code resent successfully');
        } catch (err) {
            console.log('error resending code: ', err);
        }
    }
    
    async function confirmSignUp(e) {
        e.preventDefault();
        try {
            await Auth.confirmSignUp(username, otp);
            //   TODO clear states SignIn states, set signin glab context state & navigate to /labs
            navigate("/labs")
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }

    return (
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    {showOTP ? "Confirm your e-mail" : "Sign up for an account"}
                </h1>

                {showOTP ? (<form className="space-y-4 md:space-y-6">
                    <div>
                        <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Your OTP</label>
                        <input type="text" name="otp" id="otp" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => setOtp(e.target.value)} />
                    </div>
                    <button onClick={(e) => confirmSignUp(e)} className="w-full text-black bg-yellow-100 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Confrim OTP</button>
                    <button onClick={(e) => resendConfirmationCode(e)} className="w-full text-black bg-purple-100 hover:bg-purple-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Resend Confirmation</button>
                </form >) : (
                    <form className="space-y-4 md:space-y-6">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button onClick={(e) => signUp(e)} className="w-full text-black bg-yellow-100 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            already a memeber? <a onClick={() => authState(false)} className="font-medium cursor-pointer hover:underline dark:text-primary-500">Sign in</a>
                        </p>
                    </form >)
                }
            </div >
        </div >
    )
}

export default RegisterUI