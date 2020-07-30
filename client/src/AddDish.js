import React, { useState } from "react";
import { graphql } from "react-apollo";
import { getAuthorQuery } from "./queries/queries";

const AddDish = (props) => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [recipe, setRecipe] = useState("");
  const [author, setAuthor] = useState("");

  const displayAuthor = () => {
    const data = props.data;
    if (data.loading) {
      return <option>data loading</option>;
    } else {
      return data.authors.map((author) => <option>{author.name}</option>);
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log(name, time, recipe, author);
  };
  return (
    <div>
      <form id="add-dish" onSubmit={submitForm}>
        <div className="field">
          <label>Name</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label>Time</label>
          <input type="number" onChange={(e) => setTime(e.target.value)} />
        </div>
        <div className="field">
          <label>Recipe</label>
          <input type="text" onChange={(e) => setRecipe(e.target.value)} />
        </div>
        <div className="field">
          <label>Author</label>
          <select onChange={(e) => setAuthor(e.target.value)}>
            <option value="">choose the author</option>
            {displayAuthor()}
          </select>
        </div>
        <button>＋</button>
      </form>
    </div>
  );
};

export default graphql(getAuthorQuery)(AddDish);
