/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onCreateTodo(filter: $filter, owner: $owner) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onUpdateTodo(filter: $filter, owner: $owner) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
    $filter: ModelSubscriptionTodoFilterInput
    $owner: String
  ) {
    onDeleteTodo(filter: $filter, owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateAccounts = /* GraphQL */ `
  subscription OnCreateAccounts(
    $filter: ModelSubscriptionAccountsFilterInput
    $owner: String
  ) {
    onCreateAccounts(filter: $filter, owner: $owner) {
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
export const onUpdateAccounts = /* GraphQL */ `
  subscription OnUpdateAccounts(
    $filter: ModelSubscriptionAccountsFilterInput
    $owner: String
  ) {
    onUpdateAccounts(filter: $filter, owner: $owner) {
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
export const onDeleteAccounts = /* GraphQL */ `
  subscription OnDeleteAccounts(
    $filter: ModelSubscriptionAccountsFilterInput
    $owner: String
  ) {
    onDeleteAccounts(filter: $filter, owner: $owner) {
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
export const onCreateExpenses = /* GraphQL */ `
  subscription OnCreateExpenses(
    $filter: ModelSubscriptionExpensesFilterInput
    $owner: String
  ) {
    onCreateExpenses(filter: $filter, owner: $owner) {
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
export const onUpdateExpenses = /* GraphQL */ `
  subscription OnUpdateExpenses(
    $filter: ModelSubscriptionExpensesFilterInput
    $owner: String
  ) {
    onUpdateExpenses(filter: $filter, owner: $owner) {
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
export const onDeleteExpenses = /* GraphQL */ `
  subscription OnDeleteExpenses(
    $filter: ModelSubscriptionExpensesFilterInput
    $owner: String
  ) {
    onDeleteExpenses(filter: $filter, owner: $owner) {
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
