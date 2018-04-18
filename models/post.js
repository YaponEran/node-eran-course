var mongoose = require('mongoose');

var PostModel = mongoose.Schema({
    name:{
        type: String
    },
    student:{
        type:String
    }
});

var postmodel = module.exports = mongoose.model('Cats', PostModel);