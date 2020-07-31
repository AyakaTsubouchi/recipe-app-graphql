import React, { useState } from "react";
import { getDishesQuery } from "./queries/queries";

import { graphql } from "react-apollo";

import DishDetails from "./DishDetails";

const DishList = (props) => {
  const [selected, setSelected] = useState(null);
  const displayDishes = () => {
    var data = props.data;
    if (data.loading) {
      return <div>Loading Recipes...</div>;
    } else {
      return data.dishes.map((dish) => {
        return (
          <>
            <li key={dish.id} onClick={(e) => setSelected(dish.id)}>
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
      <h1>selected dish</h1>
      <DishDetails dishId={selected} />
    </div>
  );
};

export default graphql(getDishesQuery)(DishList);
