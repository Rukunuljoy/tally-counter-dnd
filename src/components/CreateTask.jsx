/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const CreateTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: 1,
    name: "telly",
    status: "drop",
  });
  console.log(task);
  const handleSubmit=(e)=>{
    e.preventDefault();

    setTasks((prev)=>{
        const list = [...prev,task]

        localStorage.setItem("tasks",JSON.stringify(list));
        return  list;
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
