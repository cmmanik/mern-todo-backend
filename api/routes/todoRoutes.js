const express = require ('express');
const router = express.Router();
const todoControllers = require('../controllers/todoControlers');

// Get all todo
router.get('/', todoControllers.getallTodo);

// Get a single todo
router.get('/:id', todoControllers.getSingleTodo);

// Create a todos
router.post('/', todoControllers.createTodo);

// Updata a todo

router.patch('/:id', todoControllers.update);

// Delete todo 
router.delete('/:id', todoControllers.deleteTodo);

module.exports = router;