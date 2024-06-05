import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const[tasks, setTasks] = useState(TASKS);
  const[category, setCategory] = useState("All");

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]); 
  };

  function deleteTask (deletedTask) {
    setTasks(tasks.filter(item => item.text !== deletedTask));
  };

  const filteredTasks = tasks.filter((task) => {
    return category === "All" || task.category === category;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories = {CATEGORIES} 
        selectedCategory ={category} 
        onSelectCategory={setCategory}
      />

      <NewTaskForm 
        categories={CATEGORIES.filter((category) => category !== "All")} 
        onTaskFormSubmit={handleAddTask}
      />

      <TaskList tasks = {filteredTasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
