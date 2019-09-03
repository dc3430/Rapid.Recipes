var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ingredientSchema = new Schema({
    // ingredient: {
        name: String,
        amount: String,
    // },
});
// var any = new Schema({name: String})
var recipeSchema = new Schema({
    title: {
        type: String,
    },
    ingredient: [ingredientSchema],
    instruction: {
        type: String,
    },
    category: {
        type: String,
    },
    user: {
        type: String,
    },
});

module.exports = mongoose.model('Recipes', recipeSchema);