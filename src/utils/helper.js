
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { listExpenses } from './../graphql/queries';

function amountToZAR(amount) {
  const formattedAmount = amount.toLocaleString("en-ZA", {
    style: "currency",
    currency: "ZAR"
  });

  return formattedAmount;
}

// TODO: Get logged in user
async function getCurrentUser() {
  try {
    const user = await Auth.currentUserInfo();
    console.log(user);
    return user.attributes
  } catch (err) {
    console.log(err)
    return null
  }
}

// TODO: Fetch User Accounts

// TODO: Fetch User Expenses
async function fetchExpenses() {
  try {
    const expenseData = await API.graphql(graphqlOperation(listExpenses));
    const expense = expenseData.data.listExpenses.items;
    return expense;
  } catch (error) {
    console.log('Error fetching todos', error);
    throw error;
  }
}

// GraphQL query to fetch User, Accounts, and Expenses
const fetchAccountsAndExpensesQuery = /* GraphQL */ `
  query FetchAccountsAndExpenses($userId: ID!) {
    getUser(id: $userId) {
      id
      name
      email
      accounts {
        items {
          id
          name
          amount
        }
      }
      expenses {
        items {
          id
          title
          description
          category
          amount
          date
        }
      }
    }
  }
`;

// Function to fetch Accounts and Expenses together
const fetchAccountsAndExpenses = async (userId) => {
  try {
    // get user ID
    const uid = await getCurrentUser();

    // Execute the GraphQL query
    const response = await API.graphql(
      graphqlOperation(fetchAccountsAndExpensesQuery, { userId: uid.sub})
    );

    // Extract the User, Accounts, and Expenses data from the response
    const { getUser } = response.data;
    const user = {
      id: getUser.id,
      name: getUser.name,
      email: getUser.email,
    };
    const accounts = getUser.accounts.items;
    const expenses = getUser.expenses.items;

    // Return the fetched data as an object
    return { user, accounts, expenses };
  } catch (error) {
    console.log('Error fetching accounts and expenses', error);
    throw error;
  }
};



export { amountToZAR, getCurrentUser, fetchExpenses, fetchAccountsAndExpenses };
