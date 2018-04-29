const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

const port = process.env.PORT || 3000;

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

app.get('/todos/:id',(request,response)=>{
    var id = request.params.id;

    if(!ObjectID.isValid(id)){
        return response.status(404).send({});
    }
    Todo.findById(id).then((todos)=>{
        if(!todos){
            return response.send({});
        }
        response.send({todos});
    }).catch((e)=>{
        response.status(400).send(e);
    });
});

app.listen(port,()=>{
    console.log(`Start pada port ${port}`);
});

module.exports = {app};