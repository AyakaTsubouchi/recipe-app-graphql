const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishSchema = new Schema({
  name: String,
  genre: String,
  recipe: String,
  ingredients: String,
  time: Number,
  authorId: String,
});

module.exports = mongoose.model("Dish", dishSchema);
