import React from "react";
import "./CreateToDoButton.css";

const CreateToDoButton = ({ onOpenModal }) => {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => onOpenModal((prevState) => !prevState)}
    >
      +
    </button>
  );
};

export { CreateToDoButton };
