const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());//sebagai middleware

app.post('/todos',(request,response)=>{
    var baruTodo = new Todo({
        tulisan: request.body.tulisan
    });

    baruTodo.save().then((doc)=>{
        response.send(doc);
    },(e)=>{
        response.status(400).send(e);
    });

    //console.log(request.body);//test body parser
    
});

app.get('/todos',(request,response)=>{
    Todo.find().then((todos)=>{
        response.send({todos});
    },(e)=>{
        response.status(400).send(e);
    })
});

app.listen(3000,()=>{
    console.log('Start pada port 3000');
});

module.exports = {app};