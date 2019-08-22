var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/recipes', {
    useNewUrlParser: true,
    useCreateIndex: true
});

var db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDBat ${db.host}:${db.port}`);
});

db.on('err', function() {
    console.log('Mongo has thrown an error', err);
})