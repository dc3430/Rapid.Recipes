var Recipe = require('../models/recipe');

module.exports = {
  index, // show all
  show, // show one
  createRecipe, // is add - create new recipe 
  new: newRecipe, // serve new recipe form (can be served for update too)
  edit, // update recipe
  delete: deleteRecipe, // delete your recipe
  update // updating recipe
}


function update(req, res) {
  Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, recipe) {
    res.render(`recipes/show`, { recipe });
  });
}

function index(req, res) { //home page
  Recipe.find({}, (err, recipes) => {
    // console.log('- index log -')
    // console.log(err)
    // console.log(recipes)
    res.render('recipes/index', { recipes })
  })
}

function show(req, res) { // Recipe Details
  console.log(req.params.id)
  Recipe.findById(req.params.id, function(err, recipe) {
    // console.log(err);
    // console.log(recipe);
    res.render('recipes/show', { recipe: recipe });
  });
}


function newRecipe(req, res) { // new recipes page
  res.render('recipes/new', { user: req.user });
}

function createRecipe(req, res) {  //add to database
  // console.log('- create log -')
  // console.log(req.body);
  Recipe.create(req.body, function(err, created) { //created is giving you the objected
    // console.log(err)
    res.redirect('/ingredients/' + created._id);
  });
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


