var express = require('express');
var router = express.Router();
var ingredientsCtrl = require('../controllers/ingredients');

// base is /ingredients
router.get('/:id', ingredientsCtrl.index);

router.post('/:id', ingredientsCtrl.create);//will add the ingredients to the database

router.delete('/:id', ingredientsCtrl.delete)//will delete the ingredients from the database



//install isLoggedIn, before recipeCtrl

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}
module.exports = router;