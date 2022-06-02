import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
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

// const tasks = [
//     {
//       id: 1,
//       text: "Shopping Mall",
//       day: "Dec 6th",
//       reminder: true,
//     },
//     {
//       id: 2,
//       text: "Movie Time",
//       day: "Dec 7th",
//       reminder: true,
//     },
//     {
//       id: 3,
//       text: "Tea Time",
//       day: "Dec 8th",
//       reminder: false,
//     },
//   ];
