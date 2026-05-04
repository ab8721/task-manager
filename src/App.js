import { useState } from "react";
import { useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const[task, setTask] = useState("");
  const[tasks,setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const addTask = () => {
    setTasks([...tasks, {text: task, completed: false}]);
    setTask("");
  }
  const deleteTask = (index) => {
    setTasks(tasks.filter((_,i) => i !== index))
  };
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((t,i) => {
        if (i === index) {
          return {...t, completed: !t.completed};
        }
        return t;
    });
    setTasks(updatedTasks);
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return(
    <div className="container">
      <h1>To-Do App</h1>

      <TaskInput
        task = {task}
        setTask = {setTask}
        addTask = {addTask}
      />

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>

  );
}

export default App;
