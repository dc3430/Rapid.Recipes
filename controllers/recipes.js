var Recipe = require('../models/recipe');

module.exports = {
    index,
}

function index(req, res, next) {
    console.log(req.query)
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    Recipe.find(modelQuery)
    .sort(sortKey).exec(function(err, recipes) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('recipes/index', { 
        recipes, 
        user: req.user,
        name: req.query.name, 
        sortKey 
      });
    });
  }