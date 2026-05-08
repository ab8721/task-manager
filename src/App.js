import { useState } from "react";
import { useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import "./App.css";
import ReactGA from "react-ga4";

function App() {
  const[task, setTask] = useState("");
  const[tasks,setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const addTask = () => {
    setTasks([...tasks, {text: task, completed: false}]);
    setTask("");
    ReactGA.event({
      category: "Task",
      action: "Added Task",
    });
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((_,i) => i !== index))
    ReactGA.event({
      category: "Task",
      action: "Deleted Task",
  });
  };
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((t, i) => {
      if (i === index) {
        const updated = { ...t, completed: !t.completed };

        ReactGA.event({
          category: "Task",
          action: updated.completed ? "Completed Task" : "Uncompleted Task",
        });

        return updated;
      }
      return t;
    });

    setTasks(updatedTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    ReactGA.initialize("G-ER0MT737N4");
    ReactGA.send("pageview");
  }, []);

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
