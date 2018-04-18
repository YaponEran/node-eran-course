const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const app = express();

//Db Model
const Posts = require('./models/post');

//Mongo db connection by url
const mongoURI = 'mongodb://Erandal:12345@ds247499.mlab.com:47499/eranbase';
mongoose.connect(mongoURI);
var db = mongoose.connection;
db.on('open', function(){
    console.log('Db...')
})
//View Engine

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.engine('hbs', hbs.__express);
//Midelware
app.use(bodyParser.json());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    Posts.find({}, function(err, post){
        if(err){
            console.log(err);
        }else{
            res.render('index', {
                title:post
            });
        }
    })
});

app.post('/test', (req, res)=>{
    var post = new Posts({
        name: req.body.name,
        student:req.body.student
    });
    post.save(function(err){
        if(err){
            console.log(err);
            return;
        }else{
            res.redirect('/');
        }
    })
});

const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`port runiing on: ${port}`))