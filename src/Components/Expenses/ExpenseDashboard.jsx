import React, { useEffect, useState, useContext } from 'react';
import bublle from './../../assets/bubble.png'
import { getCurrentUser } from '../../utils/helper';



const ExpenseDashboard = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
        getCurrentUser().then(user => {
            setUser(user)
        }).catch(err => console.error("error fetching uses", err))
    }, []);

    // TODO: CRUD Operations
    // TODO: Update UI 


    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-yellow-200">
                Expense Information
            </h1>

            <div className="mx-auto bg-white shadow-md rounded-md overflow-hidden">
                <div className="p-4">
                    <h3 className="text-gray-400 text-lg font-semibold">Company Details</h3>
                    <div className="">
                        <p className="text-gray-600">
                            <span className="font-semibold">Company:</span>Tswalano Corp.
                        </p>
                    </div>
                </div>

                {user && (
                    <div className="p-4">
                        <h3 className="text-gray-400  text-lg font-semibold">User Details</h3>
                        <div className="">
                            <p className="text-gray-600">
                                <span className="font-semibold">Agent:</span> {user.email}
                            </p>
                            <p className="text-gray-600">{user.sub}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExpenseDashboard;
