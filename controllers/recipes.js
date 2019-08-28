var Recipe = require('../models/recipe');

module.exports = {
    index,
}


function index(req, res) {
  res.render('recipes/index');
  }