function TaskInput({task, setTask, addTask}) {
  return (
    <div>
      <input 
        type = "text" 
        placeholder = "Enter a task"
        value = {task}
        onChange = {(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default TaskInput;