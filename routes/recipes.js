var express = require('express');
var router = express.Router();
var recipesCtrl = require('../controllers/recipes');

// GET /recipes
router.get('/', isLoggedIn, recipesCtrl.index);//will display all recipes in the DB
router.get('/new', isLoggedIn, recipesCtrl.new);//form to add a new recipe
router.get('/:id', isLoggedIn, recipesCtrl.show);//will provide recipe details This is where we can add the ingredients later
router.get('/:id/edit', isLoggedIn, recipesCtrl.edit);//will bring up the form to update the recipe

<<<<<<< HEAD
router.post('/', isLoggedIn, recipesCtrl.createRecipe);//will add the recipe to the database
=======
router.post('/new', isLoggedIn, recipesCtrl.createRecipe);//will add the recipe to the database
>>>>>>> 36d350204e5f1eca68e77ef4f9fed3b5a2ba7588
router.put('/:id', isLoggedIn, recipesCtrl.update) // will update the recipe
router.delete('/:id', isLoggedIn, recipesCtrl.delete)//will delete the recipe from the database


//install isLoggedIn, before recipeCtrl

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}
module.exports = router;
