import React from "react";
import "./ToDoItem.css";

function ToDoItem({text, complete, onComplete, onDelete}) {

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${complete && "Icon-check--active"}`}
        onClick={onComplete}
      >
        √
      </span>
      <p 
        className={`TodoItem-p ${complete && "TodoItem-p--complete"}`}>
        {text}
      </p>
      <span 
        className="Icon Icon-delete" 
        onClick={onDelete}>
        X
      </span>
    </li>
  );
}

export { ToDoItem };
