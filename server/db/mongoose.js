var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localfadli:fadlilocal@ds163119.mlab.com:63119/todoapi');

module.exports = {
    mongoose
}