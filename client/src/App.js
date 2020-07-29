import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import DishList from "./DishList";
import AddDish from "./AddDish";

// apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <div id="main">app</div>
        <DishList />

        <AddDish />
      </ApolloProvider>
    </>
  );
};

export default App;
