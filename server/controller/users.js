const {ObjectID} = require('mongodb');
const _ = require('lodash');

var {User} = require('./../models/user');

var $create = (req,res)=>{
    var body = _.pick(req.body,['email','password']);
    var user = new User(body);

    user.save().then((user)=>{
        res.send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    });
}

module.exports = {
    create:$create
}
