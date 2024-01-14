import React from 'react';
import "./text-box.css"
function TodoItem({ task, deleteTask, toggleCompleted }) {
    function handleChange() {
        task = toggleCompleted(task.id);
    }
    var temp = "";
    if (task.completed === true){
        temp = "todo-item-crossed"
    }
    else{
        temp = "todo-item"
    }
    return (
        <div className={temp}>
                <input 
                    type="checkbox"
                    checked={task.completed}
                    onChange={handleChange}
                />
                <div>{task.text}</div>
                <button onClick={() => deleteTask(task.id)}>
                    x
                </button>
        </div>
    );
}
export default TodoItem;