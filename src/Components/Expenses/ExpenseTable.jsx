import React, { useEffect, useState } from 'react'
import { amountToZAR, fetchExpenses, fetchAccountsAndExpenses } from './../../utils/helper'
import { expenseData } from '../../constants/expense';

function ExpenseTable() {



    const ExpenseTableData = ({ data }) => {


        const [expenses, setExpenses] = useState([])
        const [accounts, setAccounts] = useState([])

        useEffect(() => {
            fetchAccountsAndExpenses().then(res => {
                setExpenses(res.expenses)
                setAccounts(res.accounts)
            }).catch(err => console.error(err))
        }, []);


        const inItems = data.filter(item => item.type === 'in');
        const outItems = data.filter(item => item.type === 'out');


        let availableBalance = 0;
        let totalExpenses = 0;

        // TODO get amount of expenses
        expenses.forEach(item => {
            totalExpenses += item.amount
        })

        accounts.forEach(item => {
            availableBalance += item.amount
        })

        // Calculate the percentage of amount spent
        function calculateSpentPercentage(spentAmount, balance) {
            if (balance === 0) {
                return 0; // Return 0 if the total amount is 0 to avoid division by zero error
            }

            // const spentAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
            let spentPercentage = (spentAmount / balance) * 100;

            if (spentPercentage > 100) {
                spentPercentage = 100;
            }

            return spentPercentage.toFixed(2);
        }

        // Calculate the remaining percentage after deducting expenses
        function calculateRemainingPercentage(balance, spentAmount) {
            if (balance === 0) {
                return 0; // Return 0 if the total amount is 0 to avoid division by zero error
            }

            const remainingAmount = balance - spentAmount;
            const remainingPercentage = (remainingAmount / balance) * 100;
            return remainingPercentage.toFixed(2);
        }

        return (
            <>
                <MoneyInTable item={accounts} totalAmount={availableBalance - totalExpenses} percentageRemaining={calculateRemainingPercentage(availableBalance, totalExpenses)} />
                <MoneyOutTable item={expenses} totalAmount={totalExpenses} percentageSpent={calculateSpentPercentage(totalExpenses, availableBalance)} />
            </>
        );
    };


    const MoneyInTable = ({ item, totalAmount, percentageRemaining }) => {
        return (
            <>
                <div className="flex items-center justify-between gap-2">
                    <div className="flex">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-teal-200">
                            Money In
                        </h1>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                            className="bg-teal-400 h-2.5 rounded-full w-full"
                            style={{ width: `${percentageRemaining}%` }}
                        ></div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-400">
                        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3 text-right">
                                    Amount
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {item &&
                                item.map((i, idx) => (
                                    <tr key={idx} className="border-b bg-gray-800 border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium capitalize whitespace-nowrap text-white"
                                        >
                                            {i.name}
                                        </th>
                                        <td className="px-6 py-4 text-right">
                                            {amountToZAR(i.amount)}
                                        </td>
                                    </tr>
                                ))}
                            <tr className="border-b bg-gray-900 border-gray-700 text-right">
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4 text-right">
                                    Total <span className="font-semibold text-red-200">{amountToZAR(totalAmount)}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        );
    };

    const MoneyOutTable = ({ item, totalAmount, percentageSpent }) => {
        return (
            <>
                <div className="flex items-center justify-between gap-2">
                    <div className="flex">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-red-200">
                            Money In
                        </h1>
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div
                            className="bg-red-400 h-2.5 rounded-full w-full"
                            style={{ width: `${percentageSpent}%` }}
                        ></div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-400">
                        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3 text-right">
                                    Amount
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {item &&
                                item.map((i, idx) => (
                                    <tr key={idx} className="border-b bg-gray-800 border-gray-700">
                                        <td scope="row"
                                            className="px-6 py-4 capitalize font-medium whitespace-nowrap text-white">
                                            {i.title}
                                        </td>
                                        <td className="px-6 py-4">{i.date}</td>
                                        <td className="px-6 py-4">{i.category}</td>
                                        <td className="px-6 py-4 text-right">
                                            {amountToZAR(i.amount)}
                                        </td>
                                    </tr>
                                ))}
                            <tr className="border-b bg-gray-900 border-gray-700">
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4"></td>
                                <td className="px-6 py-4 text-right">
                                    Total <span className="font-semibold text-red-200">{amountToZAR(totalAmount)}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        );
    };


    return (
        <div className="p-10">
            <ExpenseTableData data={expenseData} />
        </div >

    )
}

export default ExpenseTable