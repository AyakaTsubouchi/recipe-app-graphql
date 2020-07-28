import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

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

const DishList = (props) => {
  const displayDishes = () => {
    var data = props.data;
    if (data.loading) {
      return <div>Loading Recipes...</div>;
    } else {
      return data.dishes.map((dish) => {
        return (
          <>
            <li key={dish.id}>
              {dish.name}
              {dish.time}
            </li>
          </>
        );
      });
    }
  };

  console.log(props);
  return (
    <div>
      <ul id="dish-list">{displayDishes()}</ul>
    </div>
  );
};

export default graphql(getDishesQuery)(DishList);
