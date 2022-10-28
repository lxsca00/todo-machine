import React from "react";

const ToDoItem = (props) => (
    <li>
        <span>A</span>
        <p>{props.text}</p>
        <span>X</span>
    </li>
)

export {ToDoItem}