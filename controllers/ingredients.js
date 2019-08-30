var Recipe = require('../models/recipe');

module.exports = {
    index,
    create: createIngredient,
    delete: deleteIngredients,
    // new: newView,
}

// function newView(req, res) {
    
// }

function deleteIngredients(req, res) {
    Ingredients.findByIdAndDelete(req.params.id, function(err, ingredients) {

    });
}

function createIngredient(req, res) {
    // console.log(req.body)
    // console.log(req.params)        //call the model get the id of the recipe
    Recipe.findById(req.body.id, function(err, recipe) { //req.body.id the whole thing for ingredients id
        recipe.ingredients.push({   // push ingredient to array
            name: req.body.ingredient, //the name of the recipe
            amount: req.body.amount
        }) 
        Recipe.replaceOne({ _id: recipe._id}, recipe, function() {
            res.redirect('/ingredients/' + req.body.id);
        })
    })

    // Recipe.findByIdAndUpdate(req.body.id, { ingredient: [{'name': req.body.ingredient}] }, function(err) {
    // // Recipe.findByIdAndUpdate(req.body.id, { title: 'newtitle' }, function(err) {
    //     console.log(err)
    //     // console.log(doc)
    //     res.redirect('/ingredients/' + req.body.id);
    // });
            // recipe.save(function(err) {
            //     res.redirect('/ingredients')
        // });
    //  });
}

function index(req, res) {
    Recipe.findById(req.params.id, (err, recipe) => {
    //   console.log(err)
    //   console.log(recipe)
      res.render('ingredients/index', { recipe })
    })
  }

