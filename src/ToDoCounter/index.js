import React, { useContext } from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoCounter.css";

const ToDoCounter = () => {
  const { totalToDo, completedToDo } = useContext(ToDoContext);
  return (
    <>
      <h4 className="ToDoCounter">
        Has completado {completedToDo} de {totalToDo} To Do's
      </h4>
    </>
  );
};

export { ToDoCounter };
