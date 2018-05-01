
var todosCtrl = require('./controller/todos');
var usersCtrl = require('./controller/users');
var {authenticate} = require('./middleware/authenticate');
module.exports = function(app){
    app.post('/todos',todosCtrl.create);

    app.get('/todos',todosCtrl.index);

    app.get('/todos/:id',todosCtrl.show);

    app.delete('/todos/:id',todosCtrl.delete);

    app.patch('/todos/:id',todosCtrl.update);

    app.post('/users',usersCtrl.create);

    app.get('/users/me',authenticate,usersCtrl.me);
}