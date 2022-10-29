import React from "react";
import "./CreateToDoButton.css";

const CreateToDoButton = () => {
  
  const onClickButton = (message) => {
    alert(message)
  }

  return (
  <button className="CreateTodoButton" onClick={() => onClickButton("Auxilio que es esto")}>
    +
  </button>
)};

export { CreateToDoButton };
