const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const configAPI = require('./../config/api');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        minlength:1,
        trim:true,
        unique:true,
        validate:{
            validator:(value) => validator.isEmail(value),
            message:'{VALUE} is not a valid email'
        }
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    tokens:[{
        access:{
            type:String,
            required:true
        },
        token:{
            type:String,
            required:true
        }
    }]
});

UserSchema.methods.toJSON = function(){
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject,['_id','email']);
};

UserSchema.methods.generateAuthToken = function(){
   var user = this;
   var access = 'auth';
   var token =  jwt
        .sign({
            _id: user._id.toHexString(),
            access
        },configAPI.secretKey)
        .toString();
    user.tokens = user.tokens.concat([
        {
            access,
            token
        }
    ]);
    return user.save().then(()=>{
        return token;
    });
};

UserSchema.statics.findByToken = function(token){
    var User = this;
    var decoded;

    try{
        decoded = jwt.verify(token,configAPI.secretKey);
    }catch(e){
        return Promise.reject();
    }

    return User.findOne({
        '_id': decoded._id,
        'tokens.token' : token,
        'tokens.access':'auth'
    });
};

var User = mongoose.model('Users',UserSchema);

// var baruUser = new User({
//     email:'  fadlimuharram@hotmail.com  '
// });

// baruUser.save().then((doc)=>{
//     console.log('Berhasil Di Save ',doc);
    
// },(e)=>{
//     console.log('Tidak Dapat Save');
// });

module.exports = { User }
