/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from 'uuid';

const CreateTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: 1,
    name: "telly",
    status: "drop",
  });
  const handleSubmit=(e)=>{
    e.preventDefault();

    if(task.name.length < 3) 
    return toast.error("A task must have mre than 3 characters")
    if(task.name.length > 100) 
    return toast.error("A task must not be more than 100 characters")

    setTasks((prev)=>{
        const list = [...prev,task]

        localStorage.setItem("tasks",JSON.stringify(list));
        return  list;
    })
    toast.success("Task created successfully")

    setTask({
        id:"",
        name:"",
        status:"Drop"
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="border-slate-400 bg-slate-100 rounded-md mr-4 h-12 w-64 px-1"
        value={task.name}
        onChange={(e)=>setTask({...task,id:uuidv4(),name:e.target.value})}
      />
      <button className="bg-cyan-500 rounded-md px-4 h-12 text-white hover:bg-cyan-700">
        Create
      </button>
    </form>
  );
};

export default CreateTask;
