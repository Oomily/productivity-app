import ToDo from "./ToDo.js";

function ToDoWindow(props){
    const taskList = props?.map((task) => (
        <ToDo id={task.id} name={task.name} completed={task.completed} />));
    console.log(taskList.length)
    return (
        <div className="todoapp stack-large">
          <h1>To-Do List</h1>
          <form>
            <input
              type="text"
              id="new-todo-input"
              className="input input__lg"
              name="text"
              autoComplete="off"
            />
            <button type="submit" className="btn btn__primary btn__lg">
              Add
            </button>
          </form>
            {taskList}
        </div>
      );
}
  
export default ToDoWindow;