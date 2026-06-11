import express from 'Express'
import cors from 'cors'
import mongoose from 'mongoose'
import TodoModel from "./models/todoList.js"

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("connectionString").then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error(err);
  });


app.get("/getTasks",(req,res) => {
     TodoModel.find({})
        .then((todoList) => res.json(todoList))
        .catch((err) => res.json(err))
})

// Add new task to the database
app.post("/addTodoList", (req, res) => {
  const {description,completed} = req.body
    TodoModel.create({
        description: description,
        completed:completed ,
    })
        .then((todo) => res.json(todo))
        .catch((err) => res.json(err));
});

// Delete task from the database
app.delete("/deleteTodoList/:id", (req, res) => {
    const id = req.params.id;
    console.log(id)
    TodoModel.findByIdAndDelete({ _id: id })
        .then((todo) => res.json(todo))
        .catch((err) => res.json(err));
});


app.listen(PORT, () => {
    console.log("Server is running")
})