import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Labs() {

    const topics = [
        {
            id: 1,
            name: "Amplify Auth",
            link: "/auth"
        },
        {
            id: 2,
            name: "Amplify API (GraphQL)",
            link: "/api"
        },
        {
            id: 3,
            name: "Amplify PubSub",
            link: "/pubsub"
        }
    ]

    return (
        <div className="flex flex-col items-center gap-8 w-full relative pt-24">
            <div className="flex flex-col gap-10 sm:gap-14 items-center">
                <div className="md:text-center px-2 w-80 sm:w-fit">
                    <h2 className="text-5xl font-bold text-purple-med dark:text-yellow">Welcome to Labs</h2>
                    <h2 className="text-2xl pt-4 dark:text-white">Explore the offers of Amplify</h2>
                </div>


                <div className="grid grid-cols-3 gap-4">
                    {
                        topics.map(topic => (
                            <div key={topic.id} className="flex flex-wrap justify-between items-center box-border w-64 p-4 rounded-md bg-slate-500">
                                <p>{topic.name}</p>
                                <Link to={topic.link}><FaArrowRight /></Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Labs