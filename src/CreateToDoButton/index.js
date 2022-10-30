import React from "react";
import "./CreateToDoButton.css";

const CreateToDoButton = ({onOpenModal}) => {
  
  const onClickButton = (message) => {
    alert(message)
  }

  return (
  <button className="CreateTodoButton" onClick={() => onOpenModal(prevState => !prevState)}>
    +
  </button>
)};

export { CreateToDoButton };
