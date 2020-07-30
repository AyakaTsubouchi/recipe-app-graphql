import React from "react";
import { getDishesQuery } from "./queries/queries";

import { graphql } from "react-apollo";

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
