const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');


var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());//sebagai middleware

var route = require('./route')(app);

app.listen(port,()=>{
    console.log(`Start pada port ${port}`);
});

module.exports = {app};