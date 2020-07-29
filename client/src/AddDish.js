import React from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const getAuthorQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;
const AddDish = (props) => {
  const displayAuthor = () => {
    const data = props.data;
    if (data.loading) {
      return <option>data loading</option>;
    } else {
      return data.authors.map((author) => <option>{author.name}</option>);
    }
  };
  return (
    <div>
      <form id="add-dish">
        <div className="field">
          <label>Name</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Time</label>
          <input type="number" />
        </div>
        <div className="field">
          <label>Recipe</label>
          <input type="text" rows="4" />
        </div>
        <div className="field">
          <label>Author</label>
          <select>
            <option value="">choose the author</option>
            {displayAuthor()}
          </select>
        </div>
      </form>
    </div>
  );
};

export default graphql(getAuthorQuery)(AddDish);
