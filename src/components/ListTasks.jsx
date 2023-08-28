/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Section from "./Section";

const ListTasks = ({ tasks, setTasks }) => {
  const [shifts, setShifts] = useState([]);
  const [drag, setDrag] = useState([]);
  const [Closed, setClosed] = useState([]);

  useEffect(() => {
    const Shifts = tasks.filter((task) => task.status === "shift");
    const Drag = tasks.filter((task) => task.status === "drag");
    const closed = tasks.filter((task) => task.status === "closed");
    setShifts(Shifts);
    setDrag(Drag);
    setClosed(closed);
  }, [tasks]);

  const statuses = ["shifts", "drag", "closed"];
  return (
    <div className="flex gap-16 text-white">
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          shifts={shifts}
          drag={drag}
          Closed={Closed}
        />
      ))}
    </div>
  );
};

export default ListTasks;
