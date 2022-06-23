import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";

const ToDoList = ({ toDo, handleUpdate, deleteTask }) => {
  return (
    <ul className="list-group d-grid gap-2">
      {toDo && toDo.length ? (
        ""
      ) : (
        <div className="default-color no-task">No Tasks.....</div>
      )}
      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task) => {
            return (
              <li
                key={task.id}
                className="list-group-item rounded d-flex justify-content-between align-items-center"
              >
                <div className="todo-title">{task.title}</div>
                <div className="form-check form-check-inline">
                  <span
                    onClick={() => handleUpdate(task)}
                    className="badge edit py-2 px-3 mx-3 icon"
                  >
                    <FaPencilAlt />
                  </span>
                  <span
                    onClick={() => deleteTask(task.id)}
                    className="badge delete py-2 px-3 mx-3 icon"
                  >
                    <AiFillDelete />
                  </span>
                </div>
              </li>
            );
          })}
    </ul>
  );
};

export default ToDoList;
