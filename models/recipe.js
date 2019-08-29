var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// var ingredientSchema = new Schema({
//     ingredient: {
//         name: String,
//         type: String,
//     },
//     price: {
//         type: Number,
//         min: 0,
//     }
// });

var recipeSchema = new Schema({
    title: {
        type: String,
    },
    ingredients: { 
        type: String,
    },
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