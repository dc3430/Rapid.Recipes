var Recipe = require('../models/recipe');

module.exports = {
  index, // show all
  show, // show one
  createRecipe, // create new recipe
  new: newRecipe, // serve new recipe form (can be served for update too)
  edit, // update recipe
  delete: deleteRecipe, // delete your recipe
  update // updating recipe
}


function update(req, res) {
  Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, recipe) {
    res.render(`recipes/show`);
  });
}

function index(req, res) { //home page
  Recipe.find({}, (err, recipes) => {
    console.log(err)
    console.log(recipes)
    res.render('recipes/index', { recipes })
  })
}

function show(req, res) { // Recipe Details
  Recipe.findById(req.params.id, function(err, recipe) {
    res.render('recipes/show', { title: 'Recipe Details', recipe });
  });
}

function newRecipe(req, res) { // page adding the new recipes
  res.render('recipes/new', { user: req.user });
}

function createRecipe(req, res) { //the post 
  Recipe.create(req.body, function(err, recipe) {
    console.log(recipe)
    res.redirect(`/ingredients/${recipe._id}`);
  });
  // console.log(req.body)
}

function edit(req, res) {
  Recipe.findById(req.params.id, (err, recipe) => {
    if (err) throw err
    res.render('recipes/edit', { 
      recipe,
      user: req.user 
    })
  })
}

function deleteRecipe(req, res){
  Recipe.findByIdAndDelete(req.params.id, function (err, recipe) {
      if (err) return res.redirect('/recipes')
      res.redirect('/recipes');
  });
}

