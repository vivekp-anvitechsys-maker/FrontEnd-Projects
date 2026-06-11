import {mongoose} from 'mongoose'

const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    },
});

const TodoModel = mongoose.model("todo", todoSchema);

export default TodoModel;
