import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";


function TaskList({tasks, onDeleteTask}) {
   
  return (
    <div className="tasks">
       {/*display a list of tasks using Task component */}
      {tasks.map((task) => (
        <Task key={uuid()} text={task.text} category={task.category} onDeleteTask={onDeleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
