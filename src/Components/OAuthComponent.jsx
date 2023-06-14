import React, { useEffect, useState } from 'react';
import { Amplify, Hub, Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { FaGoogle, FaAmazon, FaFacebookF, FaApple } from "react-icons/fa";

function OAuthComponent() {

    const [user, setUser] = useState(null);
    const [customState, setCustomState] = useState(null);

    useEffect(() => {

        const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
            switch (event) {
                case "signIn":
                    console.log("signIn", data)
                    setUser(data);
                    break;
                case "signOut":
                    console.log("signOut")
                    setUser(null);
                    break;
                case "customOAuthState":
                    console.log("customOAuthState", data)
                    setCustomState(data);
                case "signIn_failure":
                    console.log("signIn_failure", data)
                    setCustomState(data);
                    break;
            }
        });

        Auth.currentAuthenticatedUser()
            .then(currentUser => setUser(currentUser))
            .catch(() => console.log("Not signed in"));

        return unsubscribe;
    }, []);

    return (
        <div className="flex flex-col items-center gap-8 w-full relative pt-24">
            <div className="flex flex-col gap-10 sm:gap-14 items-center">
                <div className="md:text-center px-2 w-80 sm:w-fit">
                    <h2 className="text-5xl font-bold text-yellow-400">Welcome to OAuth</h2>
                    <h2 className="text-2xl pt-4">Sign in with your Provider</h2>
                </div>
                {/* Auth.federatedSignIn({ provider: 'Google' }) */}
                <div className="grid grid-cols-2 gap-8">
                    <button onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
                        <FaGoogle className='w-5 h-5 mr-2 -ml-1' />
                        Sign in with Google
                    </button>

                    <button onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Facebook })} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
                        <FaFacebookF className='w-5 h-5 mr-2 -ml-1' />
                        Sign in with Facebook
                    </button>

                    <button onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Apple })} type="button" className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
                        <FaApple className='w-5 h-5 mr-2 -ml-1' />
                        Sign in with Apple
                    </button>

                    <button onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Amazon })} type="button" className="text-white bg-yellow-400 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
                        <FaAmazon className='w-5 h-5 mr-2 -ml-1' />
                        Sign in with Amazon
                    </button>

                    <button onClick={() => Auth.federatedSignIn()} type="button" className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
                        Open Hosted UI
                    </button>

                    <button onClick={() => Auth.signOut()} type="button" className="text-white bg-gray-400 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
                        Sign Out
                    </button>
                </div>
            </div>
        </div>

    )
}

export default OAuthComponent