const express = require('express');
const path = require('path');
const Grid = require('gridfs-stream');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const app = express();

//Db Model / db model
var {mongoose} = require('./db/mongoose');
const Posts = require('./models/post');
const Todo = require('./models/todo');

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


app.post('/todo', (req, res)=>{
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    }, (e)=>{
        res.status(404).send(e);
    });
});


app.get('/todo', (req, res)=>{
    Todo.find().then((todos)=>{
        res.send({todo: todos})
    }, (e)=>{

    });
});

const port = process.env.PORT || 8080;
app.listen(port, ()=> console.log(`port runiing on: ${port}`))