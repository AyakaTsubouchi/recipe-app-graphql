const graphql = require("graphql");
const _ = require("lodash");
const Dish = require("../models/dishe");
const Author = require("../models/author");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const DishType = new GraphQLObjectType({
  name: "Dish",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    recipe: { type: GraphQLString },
    ingredients: { type: GraphQLString },
    time: { type: GraphQLInt },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        // code to get data from db / other source
        console.log(parent);
        // return _.find(authors, { id: parent.authorId });
      },
    },
  }),
});
const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    dishes: {
      type: new GraphQLList(DishType),
      resolve(parent, args) {
        // return _.filter(books,{authorId:parent.id})
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    dish: {
      type: DishType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db / other source
        console.log(typeof args.id);
        // return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to get data from db / other source
        // return _.find(authors, { id: args.id });
      },
    },
    dishes: {
      type: new GraphQLList(DishType),
      resolve(parent, args) {
        // return books
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        // return authors
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLInt },
      },

      resolve(parent, args) {
        let author = new Author({
          name: args.name,
          age: args.age,
        });
        return author.save();
      },
    },

    addDish: {
      type: DishType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: GraphQLString },
        recipe: { type: new GraphQLNonNull(GraphQLString) },
        ingredients: { type: GraphQLString },
        time: { type: GraphQLInt },
        authorId: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let dish = new Dish({
          name: args.name,
          genre: args.genre,
          recipe: args.recipe,
          ingredients: args.ingredients,
          time: args.time,
          authorId: args.authorId,
        });
        return dish.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
