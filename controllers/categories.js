var categories = require('../models/category');

module.exports = {
    index,
};

function index(req, res) {
    res.render('categories/index');
};