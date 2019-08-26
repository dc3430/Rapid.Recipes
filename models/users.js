var mongoose = require('mongoose');

var userSchema = new Schema({
    name: String,
    email: String,
    googleId: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);