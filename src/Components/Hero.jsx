import React from 'react'
import { Link } from 'react-router-dom'
import planet from "./../assets/bubble.png";

function Hero() {


    console.log( process.env);

    return (
        <div className="flex flex-col gap-24">
            <div className="flex flex-col gap-20">
                <div className="flex flex-col lg:flex-row pt-32 px-8 justify-center items-center gap-32">
                    <div style={{ maxWidth: "420px" }} className="flex flex-col gap-8 items-start dark:text-white text-purple-med">
                        <div>
                            <h1 className="text-7xl font-bold">Amplify <span className='text-yellow-400'>Playground</span></h1>
                            {/* <div style={{ height: "88px" }} className="flex items-baseline whitespace-nowrap">
                                <h1 className="text-7xl pb-4 font-bold text-transparent">
                                    c</h1>
                                <div className="w-6 h-1.5 bg-purple-dk dark:bg-yellow animate-blink"></div>
                            </div> */}
                        </div>
                        <h2 className="text-xl md:mb-16">
                            All amplify demos in one centralised playground for Troubleshooting
                        </h2>
                        {/* <Link to="/labs" className="mt-12 flex-1 flex items-center bg-yellow-50 gap-2 px-6 py-4 rounded-full hover:scale-105 transition-all font-bold text-gray-950 text-xl shadow-xl">
                            Explore Now</Link> */}
                    </div>
                    <div className="relative w-full max-w-lg sm:max-w-sm">
                        <img src={planet} alt="image" width="100%" className="absolute sm:-bottom-40 md:-right-28 left-0 bottom-0 animate-float z-40" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero