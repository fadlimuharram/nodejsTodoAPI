
var todosCtrl = require('./controller/todos');
var usersCtrl = require('./controller/users');

module.exports = function(app){
    app.post('/todos',todosCtrl.create);

    app.get('/todos',todosCtrl.index);

    app.get('/todos/:id',todosCtrl.show);

    app.delete('/todos/:id',todosCtrl.delete);

    app.patch('/todos/:id',todosCtrl.update);

    app.post('/users',usersCtrl.create);
}