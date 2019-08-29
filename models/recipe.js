var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ingredientSchema = new Schema({
    ingredient: {
        name: String,
        type: String,
        amount: String,
    },
});

var recipeSchema = new Schema({
    title: {
        type: String,
    },
    ingredients: [ingredientSchema],
    instruction: {
        type: String,
    },
    category: {
        type: String,
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
});

module.exports = mongoose.model('Recipes', recipeSchema);