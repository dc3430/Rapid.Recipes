var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var recipeSchema = new Schema({
    recipe: {
        name: String,
        type: String,
    },
    ingredients: {
        type: String,

    },
    author: {
        name: String,
    }
});

module.exports = mongoose.model('Recipes', recipeSchema);