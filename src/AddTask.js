import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please Add Task, Before Submit");
      return;
    }
    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
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
      <div className="form-control-check">
        <label htmlFor="check"> set Reminder</label>
        <input
          id="check"
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save_Task" />
    </form>
  );
};

export default AddTask;
