
const Student = require('../models/student.model')

exports.create = (req, res) =>{
   if(!req.body.name){
        return res.status(400).send({
            'message': 'Name cant be empty'
        })
    }

    if(!req.body.major){
        return res.status(400).send({
            'message': 'Major cant be empty'
        })
    }


    const student = new Student({
        name : req.body.name || 'Untitled',
        age : req.body.age,
        major : req.body.major

    })

    student.save()
        .then(data=> res.send(data))
        .catch(err =>{
            res.status(500).send({
                'message': 'Create student went wrong!!',
                'error': err
            })
        });
}


exports.findAll =(req, res) =>{
    Student.find().then( students =>{
        res.send(students)
        }
    ).catch( err =>{
        res.status(500).send({
            'message': 'Get all strudents went wrong!!',
            'error': err
        })
    })
}


exports.findOne =(req, res) =>{

    const id = req.params.id;

    Student.findById(id).then( students =>{
        if(!students){
            res.status(400).send({
                'message' : 'Todo not avalible!'
            }
         )
        }
        res.send(students)
    }
    ).catch( err =>{
        res.status(500).send({
            'message': 'Get speficic student went wrong!!',
            'error': err
        })
    })
}



exports.update = (req, res) =>{
    const id = req.params.id;

    if(!req.body.name){
        return res.status(400).send({
            'message': 'student name cant be empty'
        })
    }
    if(!req.body.major){
        return res.status(400).send({
            'message': 'major cant be empty'
        })
    }
    Student.findByIdAndUpdate(id, {
        name : req.body.name || 'Untitled',
        age: req.body.age,
        major: req.body.major
    }, {new:true}).then(student =>{
        res.send(student)
    }).catch(err =>{
        res.status(500).send({
            'message': 'Update student went wrong!!',
            'error': err
        })
})}


exports.delete = (req, res) =>{
    const id = req.params.id;
    //     Todo.findByIdAndDelete(id)
    Student.findByIdAndRemove(id).then( students =>{
        res.send({
            'message': 'Student removed!'
        })
        }
    ).catch( err =>{
        res.status(500).send({
            'message': 'Delete student went wrong!!',
            'error': err
        })
    })
}

