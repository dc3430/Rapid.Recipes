var Recipe = require('../models/recipe');

module.exports = {
  index, // show all
  show, // show one
  createRecipe, // create new recipe
  new: newRecipe, // serve new recipe form (can be served for update too)
  edit: updateRecipe, // update recipe
  delete: deleteRecipe, // delete your recipe
  edit
  
}

// post.save(function(req, res) {
//   if (!err) {
//     post.find({})
//       .populate('postedBy')
//       .populate('comments.postBy')
//       .exec(function(err, post) {
//          console.log(JSON.stringify(posts, null, "\t"))
//        });
//   }
// });

function edit(req, res) {
  recipe.findById(req.params.id, function(err, recipe) {
    res.render('recipe/editRecipes', {
      recipe, 
      title: 'Modify your Recipe',
      user: req.user,
    });
  });
}

function index(req, res) {
  Recipe.find({}, (err, recipes) => {
    console.log(err)
    console.log(recipes)
    res.render('recipes/index', { recipes })
  })
}

function show(req, res) {
  // Recipe Details
  Recipe.findById(req.params.id, function(err, recipe) {
    res.render(`recipes/new`, { title: 'Recipe Details', recipe });
  });
}

function newRecipe(req, res) {
    res.render('recipes/new', { user: req.user });
}

function createRecipe(req, res) {
    Recipe.create(req.body, function(err) {
      res.redirect('/recipes');
    });
}

function updateRecipe (req, res) {
  // update recipe
  Recipe.findByIdAndUpdate(req.params.id, req.body, function(err, recipe) {
    res.render('/editRecipe');
  });
}

function deleteRecipe(req, res){
    Recipe.findByIdAndDelete(req.params.id, function (err, recipe) {
        if (err) return res.redirect('/recipes')
        res.redirect(`/recipes/${recipe._id}`);
    });
}

