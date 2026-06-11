import { useEffect, useState } from "react"
import axios from "axios"

function App() 
{
  const port = 5000
  const [newTask,setNewTask] = useState("")
  const [filter,setFilter] = useState("all")
  const [tasks,setTasks] = useState([])
  const [searchValue,setSearchValue] = useState("")

  useEffect(() => {
    axios.get(`http://localhost:${port}/getTasks`).
    then(result => {
      setTasks(result.data)
    })
  },[])


  function handleChange(event)
  {
    const {value} = event.currentTarget
    setNewTask(value)
  }

  // Function to add task to the database
  function addTask()
  {
    if(newTask == "")
      return

    axios.post(`http://localhost:${port}/addTodoList`, {description: newTask,completed: false})
    .then(res => {
    console.log(res.data);
    window.location.reload();
    })
    .catch(err => console.log(err));

    setNewTask("")
  }

  function changeFilter(type)
  {
    setFilter(type)
  }

  const filteredTasks = tasks.filter((e) => {
    if(filter == "complete")
    {
      if(e.description.includes(searchValue))
      {
        return e.completed
      }
    }
    else if(filter == "incomplete")
    {
      if(e.description.includes(searchValue))
      {
        return !e.completed
      }
    }
    else if(e.description.includes(searchValue))
    {
      return e
    }
  })

  function deleteTask(event)
  {

    const {id} = event.currentTarget

     // Delete task from database
    
        axios.delete(`http://localhost:${port}/deleteTodoList/` + id)
            .then(result => {
                console.log(result);
                window.location.reload();
            })
            .catch(err =>
                console.log(err)
            )

  }

  

  const taskElements = filteredTasks.map((e) => {
       
    return(
        <div key={e._id} className={`${e.completed ? 'bg-green-400' : "bg-red-400"} my-5 flex flex-col md:flex-row rounded-xl`}>
          <span className="mr-auto p-5">{e.description}</span>
            <div className="task-button-box p-5">
              <button id={e._id} className="mx-2 rounded-xl p-2 bg-blue-500" onClick={deleteTask}>Delete 🗑️</button>
            </div>
        </div>
    )
  })



 
  return (
    <>
      <h1 className="text-center text-2xl mt-10">React To Do List Application 📝</h1>
      <div className="main-box flex items-center flex-col bg-cyan-800 rounded-lg w-[80%] mx-auto my-[50px]">
        <div className="header w-[80%] flex flex-col items-center md:flex-row my-10">
          <input className="w-[80%] h-[40px] p-2 rounded-l-xl outline-none text-black" value={newTask} type="text" placeholder="Enter a Task ..... 📝" onChange={handleChange}></input>
          <button className="bg-teal-500 w-[20%] md:flex-1 h-[40px] my-5 md:m-0 rounded-r-xl" onClick={addTask}>Add ➕</button>
        </div>

        <div className="filters-box w-[50%] flex flex-col md:flex-row md:w-[80%] justify-center items-center">
          <button className={`w-[50%] md:w-[20%] rounded-xl m-2 bg-emerald-500 p-2 ${filter === 'all' ? 'bg-violet-500' : ""}`} onClick={() => changeFilter("all")}>All 📝</button>
          <button className={`w-[50%] md:w-[20%] rounded-xl m-2 bg-emerald-500 p-2 ${filter === 'complete' ? 'bg-violet-500' : ""}`} onClick={() => changeFilter("complete")}>Completed ✅</button>
          <button className={`w-[50%] md:w-[20%] rounded-xl m-2 bg-emerald-500 p-2 ${filter === 'incomplete' ? 'bg-violet-500' : ""}`} onClick={() => changeFilter("incomplete")}>Incomplete ⏳</button>
        </div>
        <div className="task-box my-5 flex flex-col w-[80%]">
          {taskElements.length > 0 ?
          taskElements : <h1>No Tasks please add Task..... </h1>}
        </div>
      </div>
    </>
  )
}

export default App
