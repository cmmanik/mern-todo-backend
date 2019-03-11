const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TodoSchema = new Schema({
    description: {
        type:String
    },
    responsible:{
        type:String
    },
    priority: {
        type:String
    },
    iscomplete:{
        type:Boolean
    }
}, {timestamps:true})

const Todo = mongoose.model('Todo', TodoSchema)
module.exports = Todo