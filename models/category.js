var mongoose = require('mongoose');

var categorySchema = mongoose.Schema;

var categorySchema = new mongoose.Schema({
    breakfast: {
        type: String,
    },
    lunch: {
        type: String,
    },
    dinner: {
        type: String,
    },  
});

module.exports = mongoose.model('Category', categorySchema);