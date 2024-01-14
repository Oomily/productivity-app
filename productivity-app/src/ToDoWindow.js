import React, { useState } from "react";
import TodoItem from "./ToDo";
import "./text-box.css"
import { v4 as uuidv4 } from "uuid";
//var randomColor = require("randomcolor");

function ToDoWindow(color) {
    const [tasks, setTasks] = useState([]);

    function addTask(text) {
        const newTask = {
            id: uuidv4(),
            text,
            completed: false
        };
        setTasks(tasks.concat([newTask]));
        document.getElementById("todo").value = ""
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }
    function toggleCompleted(id) { setTasks(tasks?.map(task => {
        console.log(id)
        console.log(task.id)
        if (task.id === id) {
            const newTask = {
                id: task.id,
                text: task.text,
                completed: !task.completed
            };
            return newTask;
        } 
        else { return task;
        }}
        
        ));
    }
   return (
        <div className="todo-list">
            {tasks.map(task => (
            <TodoItem
                key={task.id} 
                task={task}
                deleteTask={deleteTask}
                toggleCompleted={toggleCompleted} 
            />))}
            <p>
                <input type="text" id="todo" align="center"/>
                <button onClick={() => addTask(document.getElementById('todo').value)}>Add</button>
            </p>
        </div>
    );
   }
   export default ToDoWindow;