import "../styles/components/Tasks.css";
import { getTasks, postNewTasks } from "../utils/api";
import { useRef, useState, useEffect } from "react";

function Tasks() {

  const inputText = useRef(""); //store the current input

  const [tasks, setTasks] = useState([]); //the tasks array

  // gets all the tasks from the database and sets the 'tasks' array to all of the tasks in the database (goes from App.js -> api.js -> index.js(backend) and returns json)
  useEffect(() => {
    getTasks().then((allTasks) => setTasks(allTasks));
  }, []);

  // submit function
  function onSubmit(e) {
    e.preventDefault();
    addNewTask();
  }

  // function that is called when the user submits the form
  function addNewTask() {
    const text = inputText.current.value; // get current value

    postNewTasks(text) //call from api.js
      .then((response) => response.json())
      .then((data) => {
        const newData = [...tasks, data.task]; //add the tasks to array
        setTasks(newData);

        inputText.current.value = ""; //set current input to empty
      });
  }

  return (
    <div className="app">
      <header className="app__header">
        <h1>Task Management Slightly Modified</h1>
      </header>
      <form className="app__form" onSubmit={onSubmit}>
        <input
          ref={inputText}
          type="text"
          placeholder="Describe the task"
          className="app__form-input"
        />
        <button className="app__btn">
          <span className="app_btn-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="#fff"
            >
              <path d="M2 2h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm4.655 8.595a.75.75 0 0 1 0 1.06L4.03 14.28a.75.75 0 0 1-1.06 0l-1.5-1.5a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l.97.97 2.095-2.095a.75.75 0 0 1 1.06 0ZM9.75 2.5h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5Zm0 5h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5Zm0 5h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5Zm-7.25-9v3h3v-3Z"></path>
            </svg>
          </span>
          <span className="app__btn-text">Save Task</span>
        </button>
      </form>
      <div className="tasks">
      {tasks.map((task) => {
        return (
            <p key={task.id} className="task">
              {"👉 "} {task.text}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Tasks;
