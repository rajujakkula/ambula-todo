import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  // IT IS FOR RETRIEVE DATA ,WHICH IS STORED IN "tasks" VARIALABLE, USING MAP FUNCTION
  // BELOW CODE IS RELATED TO useState HOOK CONCEPT
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Shopping Mall",
      day: "Dec 6th at 2:00 PM",
      completed: true,
    },
    {
      id: 2,
      text: "Movie Time",
      day: "Dec 7th at 3:00 PM",
      completed: true,
    },
    {
      id: 3,
      text: "Tea Time",
      day: "Dec 8th at 4:00PM",
      completed: false,
    },
  ]);

  // SHOW ADD  HIDE TASK
  const [showAddTask, setShowAddTask] = useState(false);

  // TO STORE THE COUNT OF COMPLETED TASKS
  const [counttasks, setCounttasks] = useState(0);

  // ADD TASK
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setCounttasks(0);
    setTasks([...tasks, newTask]);
  };

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // DOUBLE CLICK TO MARK AS COMPLETED
  const toggleReminder = (id) => {
    setCounttasks(0);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
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
      <div className="length-tasks">
        <p className="total-tasks">Total Tasks - {tasks.length}</p>
        <p className="total-tasks completed-tasks">Completed - {counttasks}</p>
      </div>
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
          setCounttasks={setCounttasks}
        />
      ) : (
        <p
          style={{
            color: "#ff0000",
            fontSize: "1rem",
            marginTop: "1rem",
            textAlign: "center",
          }}
        >
          NO TASKS TO SHOW
        </p>
      )}
    </div>
  );
}

export default App;
