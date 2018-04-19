var mongoose = require('mongoose');

var PostModel = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    student:{
        type:String,
        require: true

    }
});

var postmodel = module.exports = mongoose.model('Cats', PostModel);