//ingredients type string - arrayof strings
var mongoose = require('mongoose');

var Schema = new Schema;

var ingredientSchema = new Schema({
    ingredient: {
        type: [],
        name: String
    },
    price: {
        type: Number,
        min: 0,
    }
    
});

module.exports = mongoose.model('Ingredient', ingredientSchema);