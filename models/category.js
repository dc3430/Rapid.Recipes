var mongoose = require('mongoose');

var categorySchema = mongoose.Schema;

var categorySchema = new mongoose.Schema({
    category: {
        type: mongoose.Types.ObjectId, 
        ref: 'Category',
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);