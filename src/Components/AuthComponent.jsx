import React, { useState } from 'react'

import LoginUI from './LoginUI';
import RegisterUI from './RegisterUI';

function AuthComponent() {

    const [showSiginUI, setShowSiginUI] = useState(false)
    const [error, setError] = useState("")

    return (
        <section>
            <div className="flex flex-col items-center justify-center mx-auto lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://soundy.cloud/assets/rocket.png" alt="logo" />
                    RocketLab.
                </a>
                {showSiginUI ? (<RegisterUI params={{ authState: setShowSiginUI, setError }} />) : (<LoginUI params={{ authState: setShowSiginUI, setError }} />)}

{}
                <p className="text-sm text-red-400 py-4">{error}</p>
            </div>
        </section>
    )
}

export default AuthComponent