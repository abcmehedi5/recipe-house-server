const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const catergory = require("./Data/Category.json");
const chefs = require("./Data/Chef.json");
const recipes = require("./Data/Recipes.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Running Recipe House");
});
// get catergory
app.get("/category", (req, res) => {
  res.send(catergory);
});
// get chefs
app.get("/chefs", (req, res) => {
  res.send(chefs);
});
// chefs recipes find by id
app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const singleChef = chefs.find((cf) => cf._id == id);
  res.send(singleChef);
});
// recipes get
app.get("/recipes/:id", (req, res) => {
  const id = req.params.id;
  const chefRecipes = recipes.filter((recipe) => recipe.chefId == id);
  res.send(chefRecipes);
});

// single recipe find
app.get("/recipe/:id", (req, res) => {
  const id = req.params.id;
  const singleRecipe = recipes.find((recipe) => recipe._id == id);
  res.send(singleRecipe);
});

app.listen(port, () => {
  console.log(`Recipe House is runing on port ${port}`);
});
