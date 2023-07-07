import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please Add Task, Before Submit");
      return;
    }

    onAdd({ text, day, completed: false });

    setText("");
    setDay("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="inputTask">Task</label>
        <input
          id="inputTask"
          type="text"
          placeholder="Add task.."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="inputDay">Day & Time</label>
        <input
          id="inputDay"
          type="text"
          placeholder="Add Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <input type="submit" value="Save_Task" />
    </form>
  );
};

export default AddTask;
