import { FaTimes } from "react-icons/fa";

const Task = ({ tasks, onDelete, onToggle }) => {
  return (
    <div
      // ADDING COMPLETED CLASS TO THE DIV
      className={`tasksStyle ${tasks.completed ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(tasks.id)}
    >
      <h3>
        {tasks.text}
        <FaTimes
          style={{ color: "ff0000", cursor: "pointer" }}
          onClick={() => onDelete(tasks.id)}
        />
      </h3>
      <p>{tasks.day}</p>
    </div>
  );
};

export default Task;
