var mongoose = require('mongoose');

var userSchema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    name: String,
    type: String,
    recipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipes'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);