import TaskItem from "./TaskItem";

function TaskList({tasks, toggleTask, deleteTask}) {
    return ( 
        <ul>
            {tasks.map((t, index) => (
            <TaskItem
                key={index}
                text={t.text}
                completed={t.completed}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                index={index}
            />
            ))}
        </ul>
    )
}

export default TaskList;