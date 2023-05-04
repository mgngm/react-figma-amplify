/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItems = /* GraphQL */ `
  subscription OnCreateItems(
    $filter: ModelSubscriptionItemsFilterInput
    $owner: String
  ) {
    onCreateItems(filter: $filter, owner: $owner) {
      id
      title
      description
      severity
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateItems = /* GraphQL */ `
  subscription OnUpdateItems(
    $filter: ModelSubscriptionItemsFilterInput
    $owner: String
  ) {
    onUpdateItems(filter: $filter, owner: $owner) {
      id
      title
      description
      severity
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteItems = /* GraphQL */ `
  subscription OnDeleteItems(
    $filter: ModelSubscriptionItemsFilterInput
    $owner: String
  ) {
    onDeleteItems(filter: $filter, owner: $owner) {
      id
      title
      description
      severity
      createdAt
      updatedAt
      owner
    }
  }
`;
