var Recipe = require('../models/recipe');

module.exports = {
    index,
    create: createIngredient,
    // delete: deleteIngredients,
    // new: newView,
}

// function newView(req, res) {
    
// }

// function deleteIngredients(req, res) {

// }

function createIngredient(req, res) {
    Recipe.findById(req.params.id, recipe => {
        recipe.ingredients.push(req.body)
            recipe.save(function(err) {
                res.redirect('/ingredients')
        })
     })
}

function index(req, res) {
    Recipe.find({}, (err, ingredients) => {
      console.log(err)
      console.log(ingredients)
      res.render('ingredients/index', { ingredients })
    })
  }

