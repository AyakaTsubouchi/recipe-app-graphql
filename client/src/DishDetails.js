import React from "react";
import { getDishQuery } from "./queries/queries";

import { graphql } from "react-apollo";

const DishDetails = (props) => {
  const displayDetail = () => {
    const { dish } = props.data;
    if (dish) {
      return (
        <div>
          <h1>{dish.name}</h1>
          <p>{dish.genre}</p>
          {dish.author.dishes.map((item) => {
            return <li ley={item.id}>{item.name}</li>;
          })}
        </div>
      );
    } else {
      return <p>no dish is selected...</p>;
    }
  };
  return (
    <>
      <div>
        <ul>
          <li>{displayDetail()}</li>
        </ul>
      </div>
    </>
  );
};

export default graphql(getDishQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.dishId,
      },
    };
  },
})(DishDetails);
