import { gql } from "apollo-boost";

const getDishesQuery = gql`
  {
    dishes {
      name
      id
      genre
      recipe
      ingredients
      time
    }
  }
`;

const getAuthorQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

export { getDishesQuery, getAuthorQuery };
