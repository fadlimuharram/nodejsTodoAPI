const mongoose = require('mongoose');
const validator = require('validator');


var User = mongoose.model('Users',{
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

// var baruUser = new User({
//     email:'  fadlimuharram@hotmail.com  '
// });

// baruUser.save().then((doc)=>{
//     console.log('Berhasil Di Save ',doc);
    
// },(e)=>{
//     console.log('Tidak Dapat Save');
// });

module.exports = { User }
