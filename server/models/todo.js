var mongoose = require('mongoose');


var Todo = mongoose.model('Todo',{
    tulisan:{
        type:String,
        required: true,
        minlength:1,
        trim:true
    },
    selesai:{
        type:Boolean,
        default:false
    },
    selesaiPada:{
        type:Number,
        default: null
    }
});

// var baruTodo = new Todo({
//     tulisan:'     ini di edit 3   '
// });

// baruTodo.save().then((doc)=>{
//     console.log('Berhasil Di Save ',doc);
    
// },(e)=>{
//     console.log('Tidak Dapat Save');
// });

module.exports = { Todo }
