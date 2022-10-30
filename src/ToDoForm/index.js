import React, { useContext, useState } from "react";
import { ToDoContext } from "../ToDoContext";

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
      <div>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit">
          Añadir nuevo To Do
        </button>
      </div>
    </form>
  );
};

export { ToDoForm };
