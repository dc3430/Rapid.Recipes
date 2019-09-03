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

function createIngredient(req, res) {  // adds to db
    console.log(req.params.id)
    Recipe.findById(req.params.id, (err, recipe) => {
        console.log('- create ingredient -')
        // console.log(recipe.ingredient)
        recipe.ingredient.push(req.body)
            recipe.save(function(err) {
                res.redirect('/ingredients/' + recipe._id)
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

function index(req, res) { //display page
    Recipe.findById(req.params.id, (err, recipe) => {
      console.log(err)
    //   console.log(recipe)
      res.render('ingredients/index', { recipe })
    })
  }
