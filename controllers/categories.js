var Category = require('../models/category');

module.exports = {
    index,
    create, //create new update in categories
    new: newRecipe, //not sure if i need this
    delete: deleteCategory // delete your recipe
};

function deleteCategory(req, res){
    Category.deleteOne(req.params.id, function () {
        res.redirect('categories/create');
    });
}
  
function newRecipe(req, res) {
    res.render('categories/index');
};

function create(req, res) {
    var recipe = new Recipe(req.body); //new recipe
    Category.save(function(err) { //handling err
      if (err) return res.render('create/index'); // redirect back to recipes index
      res.redirect('/create');
    });
  };

function index(req, res) {
    res.render('categories/index');
};