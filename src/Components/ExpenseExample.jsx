import React from 'react'

import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { getBalance } from './../graphql/queries';

// Calculate the balance based on expenses
const calculateBalance = (expenses) => {
    const totalExpenseAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
    return totalExpenseAmount;
};

// Fetch expenses and calculate the balance
const fetchExpensesAndBalance = async () => {
    try {
        // Fetch the list of expenses from the API
        const response = await API.graphql(graphqlOperation(listExpenses));
        const expenses = response.data.listExpenses;

        // Calculate the balance based on expenses
        const balance = calculateBalance(expenses);

        console.log('Expenses:', expenses);
        console.log('Balance:', balance);
    } catch (error) {
        console.error('Error fetching expenses:', error);
    }
};

useEffect(() => {
    // Call the function to fetch expenses and balance
    fetchExpensesAndBalance();
}, [])



function ExpenseExample() {
    return (
        <div>ExpenseExample</div>
    )
}

export default ExpenseExample