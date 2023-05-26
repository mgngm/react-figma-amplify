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
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-white">
                    {showOTP ? "Confirm your e-mail" : "Sign up for an account"}
                </h1>

                {showOTP ? (<form className="space-y-4 md:space-y-6">
                    <div>
                        <label htmlFor="otp" className="block mb-2 text-sm font-medium text-white">Enter Your OTP</label>
                        <input type="text" name="otp" id="otp" className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" onChange={(e) => setOtp(e.target.value)} />
                    </div>
                    <button onClick={(e) => confirmSignUp(e)} className="w-full text-black bg-yellow-100 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Confrim OTP</button>
                    <button onClick={(e) => resendConfirmationCode(e)} className="w-full text-black bg-purple-100 hover:bg-purple-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Resend Confirmation</button>
                </form >) : (
                    <form className="space-y-4 md:space-y-6">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                            <input type="email" name="email" id="email" className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@company.com" required="" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required="" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button onClick={(e) => signUp(e)} className="w-full text-black bg-yellow-100 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>
                        <p className="text-sm font-light text-gray-400">
                            already a memeber? <a onClick={() => authState(false)} className="font-medium cursor-pointer hover:underline">Sign in</a>
                        </p>
                    </form >)
                }
            </div >
        </div >
    )
}

export default RegisterUI