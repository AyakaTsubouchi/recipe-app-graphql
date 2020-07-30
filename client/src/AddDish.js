import React, { useState } from "react";
import { graphql, compose } from "react-apollo";
import {
  getAuthorsQuery,
  addDishMutation,
  getDishesQuery,
} from "./queries/queries";

const AddDish = (props) => {
  const [name, setName] = useState("");
  const [time, setTime] = useState();
  const [recipe, setRecipe] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [ingredients, setIngredients] = useState("");

  const displayAuthor = () => {
    const data = props.getAuthorsQuery;
    if (data.loading) {
      return <option>data loading</option>;
    } else {
      return data.authors.map((author) => <option>{author.name}</option>);
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
    props.addDishMutation({
      variables: {
        name,
        genre,
        recipe,
        ingredients,
        time,
        authorId,
      },
      refetchQueries: [{ query: getDishesQuery }],
    });
  };
  return (
    <div>
      <form id="add-dish" onSubmit={submitForm}>
        <div className="field">
          <label>Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="field">
          <label>Author</label>
          <select onChange={(e) => setAuthorId(e.target.value)}>
            <option value="">choose the author</option>
            {displayAuthor()}
          </select>
        </div>
        <button>＋</button>
      </form>
    </div>
  );
};

export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addDishMutation, { name: "addDishMutation" })
)(AddDish);
