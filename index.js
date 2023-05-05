const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
// import json data here
const chefData = require("./data/data.json");
const recipeData = require("./data/recepi.json");

app.use(cors());

// default Route
app.get("/", (req, res) => {
  res.send("Server Running");
});

// route : chefData
app.get("/chef-data", (req, res) => {
  res.send(chefData);
});

// route : filter recipe by chefData
app.get("/chef-data/:id", (req, res) => {
  const id = req.params.id;
  const FilterRecipe = recipeData?.filter((recipe) => recipe.category_id == id);
  res.send(FilterRecipe);
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
