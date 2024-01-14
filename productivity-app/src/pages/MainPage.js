import Draggable from "react-draggable";
import ToDoWindow from "../ToDoWindow";
import "../text-box.css";

function MainPage(){
    return(
        <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[1, 1]}
        scale={1}
        onStart={Draggable.handleStart}
        onDrag={Draggable.handleDrag}
        onStop={Draggable.handleStop}>
        <div className="todo-list handle">
            <div>To-Do List</div>
            <div className="To-Do wrapper">
                {ToDoWindow()}
        </div>

        </div>    
        </Draggable>
    )
}

export{ MainPage}