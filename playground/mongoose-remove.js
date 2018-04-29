const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5ae53c6e4853dd4c6ae11b8d';

if(!ObjectID.isValid(id)){
    return console.log('ID Tidak Valid');
}

Todo.remove({}).then((result)=>{
    console.log(result);
});

Todo.findOneAndRemove({_id:id}).then((todo)=>{
    console.log(todo);
});

Todo.findByIdAndRemove(id).then((todo)=>{
    console.log(todo);
});

