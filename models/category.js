var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var categorySchema = new mongoose.Schema({
    name: String,
    type: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);