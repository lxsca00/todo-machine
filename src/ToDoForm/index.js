import React, { useContext, useState } from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoForm.css"

const ToDoForm = () => {
  const [newToDoValue, setNewToDoValue] = useState("");
  const { addToDo, setOpenModal } = useContext(ToDoContext);

  const onChange = (event) => {
    setNewToDoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false)
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addToDo(newToDoValue);
    setOpenModal(false)
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo To Do</label>
      <textarea
        placeholder="Deprimirse en la noche"
        value={newToDoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button type="button" 
        className="TodoForm-button TodoForm-button--cancel"
        onClick={onCancel}>
          Cancelar
        </button>
        <button 
        className="TodoForm-button TodoForm-button--add"
        type="submit">
          Añadir nuevo To Do
        </button>
      </div>
    </form>
  );
};

export { ToDoForm };
