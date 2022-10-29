import React, { useContext } from "react";
import { ToDoContext } from "../ToDoContext";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";
import { ToDoSearch } from "../ToDoSearch";

const AppUI = () => {
  const { error, loading, searchedToDo, completeToDo, deleteToDo } =
    useContext(ToDoContext);

  return (
    <>
      <h1 className="appTitle">Get this shit</h1>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {error && <p>Aquí hay un error, auxilio</p>}
        {loading && <p>Aquí se está cargando algo</p>}
        {!loading && !searchedToDo.length && <p>¡Crea tu primer To Do!</p>}
        {searchedToDo.map((oneToDo) => (
          <ToDoItem
            key={oneToDo.text}
            text={oneToDo.text}
            complete={oneToDo.complete}
            onComplete={() => completeToDo(oneToDo.text)}
            onDelete={() => deleteToDo(oneToDo.text)}
          />
        ))}
      </ToDoList>
      <CreateToDoButton />
    </>
  );
};

export { AppUI };
