import React from "react";
import "./ToDoCounter.css";

const ToDoCounter = ({ total, completed }) => (
  <>
    <h4 className="ToDoCounter">
      Has completado {completed} de {total} To Do's
    </h4>
  </>
);

export { ToDoCounter };
