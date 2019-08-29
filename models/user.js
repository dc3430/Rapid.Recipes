var mongoose = require('mongoose');

var userSchema = mongoose.Schema;


var userSchema = new mongoose.Schema({
    name: String,
    type: String,
    recipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipes'
    }],
    title: String,
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'  
     },
     comments: [{
         text: String,
         postedBy: {
             type: mongoose.Schema.Types.ObjectId,
             ref: 'User'
         }
     }] 
}, {
    timestamps: true
});





module.exports = mongoose.model('User', userSchema);