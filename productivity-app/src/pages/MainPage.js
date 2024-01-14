import Draggable from "react-draggable";
// import { v4 as uuidv4 } from "uuid";
import ToDoWindow from "../ToDoWindow";
import WeatherWindow from "../WeatherWindow";

const DATA = [
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false },
  ];
function MainPage(){
    return(
        <div>
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
            
            <div className="handle">
                {ToDoWindow(DATA)}
            </div>    
            </Draggable>
            <div>
                <WeatherWindow/>
            </div>
        </div>
    )
}

export{ MainPage}