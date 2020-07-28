import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import DishList from "./DishList";

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
      </ApolloProvider>
    </>
  );
};

export default App;
