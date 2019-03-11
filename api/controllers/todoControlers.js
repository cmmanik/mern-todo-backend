
const Todo = require('../models/Todo');

// Get all todo
const getallTodo =  (req, res, next) => {
    Todo.find()
        .then((todos) => {
            if(todos) {
                res.json(
                    todos
                )
            }else {
                res.json({
                    meassge: 'NO to do list avaiable!'
                })
            }
        }).catch((err) => {
            res.json({
                meassge:'Server error!',
                error:err
            })
        });
    }
// Get a single todo
const getSingleTodo =  (req, res, next) => {
    let id = req.params.id;
    Todo.findById(id)
        .then((todos) => {
            if(todos) {
                res.json(todos)
            }else {
                res.json({
                    meassge: 'NO to do list avaiable!'
                })
            }
        }).catch((err) => {
            res.json({
                meassge:'Server error!',
                error:err
            })
        });
}
// Create a todos
const createTodo =  (req, res, next) => {
    let todo = new Todo(req.body)
    todo.save()
        .then((todo) => {
            res.json({
                meassge:'Todo add Succesfully',
                todo
            })
        }).catch((err) => {
            res.json({
                meassge:'Server error!',
                error:err
            })
        });
}

// Updata a todo

const update = (req, res, next) => {
    let id = req.params.id;
    Todo.findOneAndUpdate({_id:id}, {$set:req.body})
    .then((todo) => {
        Todo.findById(id)
            .then((todo) => {
                res.json({
                    todo
                })
            }).catch((err) => {
                res.json({
                    meassage:'Server Error',
                    error:err
                })
            });
            }).catch((err) => {
    }).catch((err) => {
        res.json({
            meassage:'Server Error',
            error:err
        })
    });
}

// Delete todo 
const deleteTodo = (req, res, next) => {
    let id =  req.params.id;
    Todo.findByIdAndDelete(id)
        .then((result) => {
            res.json({
                meassge: 'Todo delete sucesfully',
                result
            })
        }).catch((err) => {
            res.json({
                meassge: 'Server error',
                error:err
            })
        });
}

module.exports = {
    getallTodo,
    getSingleTodo,
    createTodo,
    update,
    deleteTodo
};