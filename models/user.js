var mongoose = require('mongoose');

var userSchema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    name: String,
    type: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);