var express = require('express');
var router = express.Router();
var recipesCtrl = require('../controllers/recipes');

// GET /recipes
router.get('/', recipesCtrl.index);//will display all recipes in the DB
router.get('/new', recipesCtrl.new);//form to add a new recipe
router.get('/:id', recipesCtrl.show);//will provide recipe details This is where we can add the ingredients later

router.post('/', recipesCtrl.createRecipe);//will add the recipe to the database
router.post('/:id', recipesCtrl.update) // will update the recipe
router.delete('/:id', recipesCtrl.delete)//will delete the recipe from the database
router.get('/:id/edit', recipesCtrl.edit);//will bring up the form to update the recipe


//install isLoggedIn, before recipeCtrl

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}
module.exports = router;
