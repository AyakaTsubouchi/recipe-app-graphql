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

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

//the definitions in AddBook() should match with addBook()
//todo time String to Int
const addDishMutation = gql`
  mutation AddDish(
    $name: String!
    $genre: String!
    $recipe: String!
    $time: Int
    $ingredients: String
    $authorId: ID
  ) {
    addDish(
      name: $name
      genre: $genre
      recipe: $recipe
      time: $time
      ingredients: $ingredients
      authorId: $authorId
    ) {
      name
      id
    }
  }
`;

const getDishQuery = gql`
  query getDish($id: ID) {
    dish(id: $id) {
      name
      genre
      author {
        name
        dishes {
          name
        }
      }
    }
  }
`;

export { getDishesQuery, getAuthorsQuery, addDishMutation, getDishQuery };
