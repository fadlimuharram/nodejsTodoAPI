const {ObjectID} = require('mongodb');
const _ = require('lodash');

var {User} = require('./../models/user');

var $create = (req,res)=>{
    var body = _.pick(req.body,['email','password']);
    var user = new User(body);

    user.save().then((user)=>{
        return user.generateAuthToken();
        //res.send(user);
    }).then((token)=>{
        res.header('x-auth',token).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    });
}

var $me = (req,res)=>{
    res.send(req.user);
};

module.exports = {
    create:$create,
    me:$me
}
