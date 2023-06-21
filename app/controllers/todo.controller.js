const Todo = require('../models/todo.model')

exports.create = (req, res) =>{
   if(!req.body.description){
        return res.status(400).send({
            'message': 'Description cant be empty'
        })
    }

    const todo = new Todo({
        name : req.body.name || 'Untitled',
        description: req.body.description
    })

    todo.save()
        .then(data=> res.send(data))
        .catch(err =>{
            res.status(500).send({
                'message': 'Something went wrong!!',
                'error': err
            })
        });
}

exports.update = (req, res) =>{
    const id = req.params.id;

    if(!req.body.description){
        return res.status(400).send({
            'message': 'Description cant be empty'
        })
    }
    Todo.findByIdAndUpdate(id, {
        name : req.body.name || 'Untitled',
        description: req.body.description
    }, {new:true}).then(todo =>{
        res.send(todo)
    }).catch(err =>{
        res.status(500).send({
            'message': 'Something went wrong!!',
            'error': err
        })
})}

exports.findAll =(req, res) =>{
    Todo.find().then( todos =>{
        res.send(todos)
        }
    ).catch( err =>{
        res.status(500).send({
            'message': 'Something went wrong!!',
            'error': err
        })
    })
}


exports.findOne =(req, res) =>{

    const id = req.params.id;

    Todo.findById(id).then( todos =>{
        if(!todos){
            res.status(400).send({
                'message' : 'Todo not avalible!'
            }
         )
        }
        res.send(todos)
    }
    ).catch( err =>{
        res.status(500).send({
            'message': 'Something went wrong!!',
            'error': err
        })
    })
}


exports.delete = (req, res) =>{
    const id = req.params.id;
    //     Todo.findByIdAndDelete(id)
    Todo.findByIdAndRemove(id).then( todos =>{
        res.send({
            'message': 'Removed!'
        })
        }
    ).catch( err =>{
        res.status(500).send({
            'message': 'Something went wrong!!',
            'error': err
        })
    })
}

// }

