var mongoose = require('mongoose');


var User = mongoose.model('Users',{
    email:{
        type:String,
        required: true,
        minlength:1,
        trim:true
    }
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
