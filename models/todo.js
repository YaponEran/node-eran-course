var mongoose = require('mongoose');

var Todo  = mongoose.model('Todo', {
    text:{
        type: String,
        require: true
    }
});

module.exports = Todo;

