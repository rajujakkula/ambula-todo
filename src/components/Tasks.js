import Task from "./Task";
import { useEffect } from "react";

const Tasks = ({ tasks, onDelete, onToggle, setCounttasks }) => {
  // IT IS USED FOR COUNTING OF COMPLETED TASKS
  useEffect(() => {
    setCounttasks(0);
    tasks.map(
      (task) => task.completed === true && setCounttasks((prev) => prev + 1)
    );
  }, [setCounttasks, tasks]);

  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          tasks={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};
export default Tasks;
