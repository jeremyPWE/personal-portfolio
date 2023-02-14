import * as React from "react";
import { v4 as uuid } from "uuid";
import taskReducer from "./reducer";

const initialTasks = {
  todo: [
    {
      id: uuid(),
      title: "Drag and drop",
    },
    {
      id: uuid(),
      title: "Delete task by dragging it to bin",
    },
    {
      id: uuid(),
      title: "New task automatically appears here",
    },
  ],
  ongoing: [
    {
      id: uuid(),
      title: "Task is stored locally",
    },
  ],
  completed: [
    {
      id: uuid(),
      title: "Try using this simple kanban board",
    },
  ],
};

const TaskContext = React.createContext({});

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(taskReducer, initialTasks, () => {
    try {
      const storedTasks = localStorage.getItem("tasks");
      return storedTasks ? JSON.parse(storedTasks) : initialTasks;
    } catch (error) {
      return initialTasks;
    }
  });

  React.useEffect(() => {
    if (typeof localStorage === "undefined") {
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(state));
  }, [state]);

  const addTask = (newTask, statusType) => {
    dispatch({ type: "ADD_TASK", payload: { newTask, statusType } });
  };

  const updateTask = (destination, source) => {
    dispatch({ type: "UPDATE_TASK", payload: { source, destination } });
  };

  const deleteTask = (source) => {
    dispatch({ type: "DELETE_TASK", payload: source });
  };

  return (
    <TaskContext.Provider value={{ state, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

const useTasks = () => React.useContext(TaskContext);

export default useTasks;
