var Recipe = require('../models/recipe');

module.exports = {
  index, // show all
  show, // show one
  createRecipe, // create new recipe
  new: newRecipe, // serve new recipe form (can be served for update too)
  edit: updateRecipe, // update recipe
  delete: deleteRecipe // delete your recipe
}

function index(req, res) {
  Recipe.find({}, (err, recipes) => {
    console.log(err)
    console.log(recipes)
    res.render('recipes/index', { recipes })
  })
}

function show(req, res) {
  // Search recipes by user logged in 
}

function newRecipe(req, res) {
    res.render('recipes/create');
}

function createRecipe(req, res) {
    Recipe.create(req.body, function(err) {
      res.redirect('/recipes')
    });
}

function updateRecipe (req, res) {
  // update recipe
}

function deleteRecipe(req, res){
    Recipe.findByIdAndDelete(req.params.id, function (err, recipe) {
        if (err) return res.redirect('/recipes')
        res.redirect(`/recipes/${recipe._id}`);
    });
}

