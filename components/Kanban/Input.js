import * as React from "react";
import useTasks from "../../hooks/useTask";

const Input = () => {
  const [newTask, setNewTask] = React.useState("");
  const { addTask } = useTasks();

  const onSubmit = (e) => {
    e.preventDefault();
    if (newTask.length === 0) return;
    addTask(newTask, "todo");
    setNewTask("");
  };

  return (
    <form onSubmit={onSubmit} className="mb-4 w-full text-black">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add New Task"
        className="w-full rounded-md px-4 py-2 border"
      />
    </form>
  );
};

export default Input;
