function TaskItem({ 
    text,
    completed,
    toggleTask,
    deleteTask,
    index
}) {
    return (
        <li>
            <span
                onClick={() => toggleTask(index)}
                style={{
                    textDecoration: completed ? "line-through" : "none",
                    cursor: "pointer"
                }}
            >
                {text}
            </span>

            <button onClick={() => deleteTask(index)}>
                Delete
            </button>
            </li>
    );
    }

export default TaskItem;