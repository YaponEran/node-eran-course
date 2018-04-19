const mongoose = require('mongoose');

//Mongo db connection by url
mongoose.Promise = global.Promise;
const mongoURI = 'mongodb://Erandal:12345@ds247499.mlab.com:47499/eranbase';
mongoose.connect(mongoURI);
var db = mongoose.connection;
db.on('open', function(){
    console.log('Db...')
});

module.exports = {
    mongoose: mongoose
};