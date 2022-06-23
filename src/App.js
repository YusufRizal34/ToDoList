import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ToDoList from "./components/ToDoList";

function App() {
  /*eslint-disable */
  const [toDo, setToDo] = useState([
    { id: 1, title: "Makan" },
    { id: 2, title: "Tidur" },
  ]);
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  const addTask = () => {
    if (newTask !== "") {
      let num = toDo.length + 1;
      let newEntry = {
        id: num,
        title: newTask,
      };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    let tasks = toDo.filter((task) => {
      return task.id !== id;
    });
    setToDo(tasks);
  };

  const changeTask = (event) => {
    let newEntry = {
      id: updateData.id,
      title: event.target.value,
    };
    setUpdateData(newEntry);
  };

  const handleUpdate = (task) => {
    setUpdateData({
      id: task.id,
      title: task.title,
    });
  };

  const updateTask = () => {
    let tasks = [...toDo].filter((task) => task.id !== updateData.id);
    let updateObjects = [...tasks, updateData];
    setToDo(updateObjects);
    setUpdateData("");
  };

  const cancelUpdate = () => {
    setUpdateData("");
  };

  return (
    <div className="container w-50 background">
      <div className="my-3">
        <h2 className="title default-color">TO DO LIST APP</h2>
      </div>
      {updateData && updateData ? (
        <>
          <div className="row mb-3">
            <div className="col">
              <input
                autoFocus
                value={updateData && updateData.title}
                onChange={(event) => changeTask(event)}
                type="text"
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-auto">
              <button onClick={updateTask} className="btn btn-lg mx-3 update">
                Update
              </button>
              <button onClick={cancelUpdate} className="btn btn-lg cancel">
                Cancel
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="row mb-3">
            <div className="col">
              <input
                autoFocus
                value={newTask}
                onChange={(event) => setNewTask(event.target.value)}
                className="form-control form-control-lg"
              />
            </div>
            <div className="col-auto">
              <button onClick={addTask} className="btn btn-lg add">
                Add Task
              </button>
            </div>
          </div>
        </>
      )}

      <ToDoList
        toDo={toDo}
        handleUpdate={handleUpdate}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
