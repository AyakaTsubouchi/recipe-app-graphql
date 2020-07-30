const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose
  .connect(
    "mongodb+srv://ayaka:1e07e0801@cluster0-jbcvm.mongodb.net/graphql-recipe?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(4000, () => {
      console.log("now listening for request on port 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
