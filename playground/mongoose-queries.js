const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5ae53b5b78a76e48e16035ba1';

if(!ObjectID.isValid(id)){
    return console.log('ID Tidak Valid');
}

Todo.find({
 _id:id
}).then((todos)=>{
    console.log(todos);
});

Todo.findOne({
    _id:id
}).then((todos)=>{
       console.log(todos);
});

Todo.findById(id).then((todos)=>{
    if(!todos){
        return console.log('id not found');
    }
    console.log(todos);
}).catch((e)=>{
    console.log(e);
});
