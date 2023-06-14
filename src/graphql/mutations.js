/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      complete
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      complete
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      complete
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      accounts {
        items {
          id
          name
          amount
          createdAt
          updatedAt
          userAccountsId
          owner
        }
        nextToken
      }
      expenses {
        items {
          id
          title
          description
          category
          amount
          date
          createdAt
          updatedAt
          userExpensesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      accounts {
        items {
          id
          name
          amount
          createdAt
          updatedAt
          userAccountsId
          owner
        }
        nextToken
      }
      expenses {
        items {
          id
          title
          description
          category
          amount
          date
          createdAt
          updatedAt
          userExpensesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      accounts {
        items {
          id
          name
          amount
          createdAt
          updatedAt
          userAccountsId
          owner
        }
        nextToken
      }
      expenses {
        items {
          id
          title
          description
          category
          amount
          date
          createdAt
          updatedAt
          userExpensesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createAccounts = /* GraphQL */ `
  mutation CreateAccounts(
    $input: CreateAccountsInput!
    $condition: ModelAccountsConditionInput
  ) {
    createAccounts(input: $input, condition: $condition) {
      id
      name
      amount
      user {
        id
        name
        email
        accounts {
          nextToken
        }
        expenses {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      userAccountsId
      owner
    }
  }
`;
export const updateAccounts = /* GraphQL */ `
  mutation UpdateAccounts(
    $input: UpdateAccountsInput!
    $condition: ModelAccountsConditionInput
  ) {
    updateAccounts(input: $input, condition: $condition) {
      id
      name
      amount
      user {
        id
        name
        email
        accounts {
          nextToken
        }
        expenses {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      userAccountsId
      owner
    }
  }
`;
export const deleteAccounts = /* GraphQL */ `
  mutation DeleteAccounts(
    $input: DeleteAccountsInput!
    $condition: ModelAccountsConditionInput
  ) {
    deleteAccounts(input: $input, condition: $condition) {
      id
      name
      amount
      user {
        id
        name
        email
        accounts {
          nextToken
        }
        expenses {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      userAccountsId
      owner
    }
  }
`;
export const createExpenses = /* GraphQL */ `
  mutation CreateExpenses(
    $input: CreateExpensesInput!
    $condition: ModelExpensesConditionInput
  ) {
    createExpenses(input: $input, condition: $condition) {
      id
      title
      description
      category
      amount
      date
      user {
        id
        name
        email
        accounts {
          nextToken
        }
        expenses {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      userExpensesId
      owner
    }
  }
`;
export const updateExpenses = /* GraphQL */ `
  mutation UpdateExpenses(
    $input: UpdateExpensesInput!
    $condition: ModelExpensesConditionInput
  ) {
    updateExpenses(input: $input, condition: $condition) {
      id
      title
      description
      category
      amount
      date
      user {
        id
        name
        email
        accounts {
          nextToken
        }
        expenses {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      userExpensesId
      owner
    }
  }
`;
export const deleteExpenses = /* GraphQL */ `
  mutation DeleteExpenses(
    $input: DeleteExpensesInput!
    $condition: ModelExpensesConditionInput
  ) {
    deleteExpenses(input: $input, condition: $condition) {
      id
      title
      description
      category
      amount
      date
      user {
        id
        name
        email
        accounts {
          nextToken
        }
        expenses {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      userExpensesId
      owner
    }
  }
`;
