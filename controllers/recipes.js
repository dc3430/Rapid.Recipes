var Recipe = require('../models/recipe');

module.exports = {
    index,
    new: newRecipe, // still need to create the function
    create, // still need to create the function
    delete: deleteOne // still need to create the function
}

function deleteOne(req, res){
  todos.deleteOne(req.params.id);
  res.redirect('/todos');
}

function create(req, res) {
  var recipe = new Recipe(req.body); //new recipe
  recipe.save(function(err) { //handling err
    if (err) return res.render('recipes/index'); // redirect back to recipes index
    res.redirect('/recipes');
  });
};

function newRecipe(req, res) {
  res.render('recipes/index');
};

function index(req, res, next) {
  res.render('recipes/index');
    // console.log(req.query)
    // let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // // Default to sorting by name
    // let sortKey = req.query.sort || 'name';
    // Recipe.find(modelQuery)
    // .sort(sortKey).exec(function(err, recipes) {
    //   if (err) return next(err);
    //   // Passing search values, name & sortKey, for use in the EJS
    //   res.render('recipes/index', { 
    //     recipes, 
    //     user: req.user,
    //     name: req.query.name, 
    //     sortKey 
    //   });
    // });
  }