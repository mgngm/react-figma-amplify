/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        complete
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAccounts = /* GraphQL */ `
  query GetAccounts($id: ID!) {
    getAccounts(id: $id) {
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
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        amount
        user {
          id
          name
          email
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        userAccountsId
        owner
      }
      nextToken
    }
  }
`;
export const getExpenses = /* GraphQL */ `
  query GetExpenses($id: ID!) {
    getExpenses(id: $id) {
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
export const listExpenses = /* GraphQL */ `
  query ListExpenses(
    $filter: ModelExpensesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        userExpensesId
        owner
      }
      nextToken
    }
  }
`;
