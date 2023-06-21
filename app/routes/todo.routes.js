module.exports = (app) =>{
    const todos = require('../controllers/todo.controller');
    
    app.post('/todos', todos.create);

    app.get('/todos', todos.findAll);

    app.get('/todos/:id', todos.findOne);

    app.put('/todos/:id', todos.update);

    app.delete('/todos/:id', todos.delete);

    const student = require('../controllers/student.controller');
    app.post('/student', student.create);
    app.get('/student', student.findAll);
    app.get('/student/:id', student.findOne);
    app.put('/student/:id', student.update);
    app.delete('/student/:id', student.delete);

}