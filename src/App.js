import React, { useState } from "react";
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
function App() {
  // IT IS FOR RETRIEVE DATA ,WHICH IS STORED IN "tasks" VARIALABLE, USING MAP FUNCTION
  // BELOW CODE IS RELATED TO useState HOOK CONCEPT
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Shopping Mall",
      day: "Dec 6th at 2:00 PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Movie Time",
      day: "Dec 7th at 3:00 PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Tea Time",
      day: "Dec 8th at 4:00PM",
      reminder: false,
    },
  ]);
  // SHOW ADD  HIDE TASK
  const [showAddTask, setShowAddTask] = useState(false);

  // ADD TASK
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // DOUBLE CLICK REMINDER
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onShow={() => setShowAddTask(!showAddTask)}
        toggleShow={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <p style={{ color: "#ff0000", fontSize: "1rem" }}>NO TASKS TO SHOW</p>
      )}
    </div>
  );
}

export default App;
