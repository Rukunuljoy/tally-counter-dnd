import { useEffect, useState } from "react"
import CreateTask from "./components/CreateTask"
import ListTasks from "./components/ListTasks"
import toast, { Toaster } from 'react-hot-toast';

function App() {
const [tasks,setTasks] = useState([])
console.log("tasks",tasks)

useEffect(()=>{
  setTasks(JSON.parse(localStorage.getItem("tasks")));
},[])
  return (
    <>
    <Toaster />
    <div className="bg-gray-700 gap-20 flex flex-col items-center w-screen h-screen pt-32">
      <CreateTask tasks={tasks} setTasks={setTasks}/>
      <ListTasks tasks={tasks} setTasks={setTasks}/>
      
    </div>
    </>
  )
}

export default App
