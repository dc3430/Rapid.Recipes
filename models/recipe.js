var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
    categories: {
        type: String,
        enum: [Breakfast, lunch, Dinner]
    },
    ingredients: {
        type: String,

    },
    author: {
        name: String,
    }
});

module.exports = mongoose.model('Recipes', recipeSchema);