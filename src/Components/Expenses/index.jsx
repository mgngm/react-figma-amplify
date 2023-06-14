import React from 'react'
import ExpenseForm from './ExpenseForm'
import ExpenseDashboard from './ExpenseDashboard'
import ExpenseChart from './ExpenseChart'
import ExpenseTable from './ExpenseTable'

function Expense() {
    return (
        <div className="flex flex-col items-center gap-8 w-full relative pt-24">
            <div className="flex flex-col gap-10 sm:gap-14 items-center">
                <div className="md:text-center px-2 w-80 sm:w-fit">
                    <h2 className="text-5xl font-bold text-purple-med dark:text-yellow">Explore Your Expense</h2>
                    <h2 className="text-2xl pt-4 dark:text-white">Calculate your Expenses</h2>
                </div>
            </div>

            <div className="flex pt-10 flex-col md:flex-row lg:gap-0 gap-4 items-center">
                <div className="grid grid-cols-2 gap-2">
                   <ExpenseForm />
                   <ExpenseDashboard />
                   <ExpenseChart />
                   <ExpenseTable />
                    {/*  <ExpenseDashboard /> */}

                    {/* <ExpenseChart />
                    <ExpenseChart />
                    <ExpenseChart />
                    <ExpenseChart /> */}
                    {/* <ExpenseTable /> */}
                </div>
            </div>
        </div>

    )
}

export default Expense