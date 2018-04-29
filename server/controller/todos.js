const {ObjectID} = require('mongodb');
const _ = require('lodash');


var {Todo} = require('./../models/todo');

var $create = (request,response)=>{
    var baruTodo = new Todo({
        tulisan: request.body.tulisan
    });

    baruTodo.save().then((doc)=>{
        response.send(doc);
    },(e)=>{
        response.status(400).send(e);
    });

    //console.log(request.body);//test body parser
}

var $index = (request,response)=>{
    Todo.find().then((todos)=>{
        response.send({todos});
    },(e)=>{
        response.status(400).send(e);
    })
}

var $show = (request,response)=>{
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
}

var $delete = (request,response)=>{
    var id = request.params.id;
    if(!ObjectID.isValid(id)){
        return response.status(404).send({});
    }

    Todo.findByIdAndRemove(id).then((todo)=>{
        if(!todo){
            return response.send({});
        }
        response.send(todo);
    }).catch((e)=>{
        response.status(400).send(e);
    });
}

var $update = (request,response)=>{
    var id = request.params.id;
    var body = _.pick(request.body,['tulisan','selesai']);

    if(!ObjectID.isValid(id)){
        return response.status(404).send({});
    }

    if(_.isBoolean(body.selesai && body.selesai)){
        body.selesaiPada = new Date().getTime();
    }else{
        body.selesai = false;
        body.selesaiPada = null;
    }

    Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
        if(!todo){
            return response.status(404).send();
        }
        response.send({todo});
    }).catch((e)=>{
        response.status(400).send(e);
    })

}

module.exports = {
    create : $create,
    index : $index,
    show : $show,
    delete : $delete,
    update : $update
}