import React, {useEffect, useState} from 'react';
import {createRoot} from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<TaskList/>);
function TaskList() {
    const [tasks, setTasks] = useState([
        {id: 1, description: "Follow the lecture!", completed: true},
        {id: 2, description: "Read the exercise", completed: false},
        {id: 3, description: "Complete the exercise", completed: false},
    ]);
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setTasks(old => [...old, {description, completed: false}])
        setDescription("")
    }

    return <div>
        <h2>Tasks</h2>
        {tasks.map(({id, description, completed}) => <label key={id}>
            <input type="checkbox" checked={completed} onChange={e => {
                setTasks(old => old.map (
                    task => task.id === id
                ? ({...task, completed: e.target.checked})
                : task
            ))
            }}/>
            {description}
        </label>)}
        <form onSubmit={handleSubmit}>
            <div>
                Task description: <input value={description} onChange={e => setDescription(e.target.value)}/>
            </div>
            <div><button disabled={!description}>Add task</button></div>
        </form>
    </div>;
}

