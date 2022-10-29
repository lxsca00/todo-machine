//import './App.css';
import React, { useState } from "react";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";
import { ToDoSearch } from "../ToDoSearch";

// const defaultToDo = [
//   { text: "Revisar mi masterlist", complete: true },
//   { text: "Pagar envios", complete: true },
//   { text: "Deprimirse", complete: false },
//   { text: "Llorar y terminar cursos", complete: false },
//   {
//     text: "Revisar sobre ES7 React/Redux/GraphQL/React-Native snippets",
//     complete: false,
//   },
// ];

function App() {
  const localStorageToDos = localStorage.getItem("TODOS_V1");
  let parsedToDos;

  if (!localStorageToDos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedToDos = [];
  } else {
    parsedToDos = JSON.parse(localStorageToDos);
  }

  const [toDo, setToDo] = useState(parsedToDos);
  const [searchValue, setSearchValue] = useState("");

  const completedToDo = toDo.filter((oneToDo) => !!oneToDo.complete).length;

  const totalToDo = toDo.length;

  let searchedToDo = [];

  if (!searchValue.length >= 1) {
    searchedToDo = toDo;
  } else {
    searchedToDo = toDo.filter((oneToDo) => {
      const toDoText = oneToDo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return toDoText.includes(searchText);
    });
  }

  const saveToDos = (newToDos) => {
    const stringifyToDo = JSON.stringify(newToDos)
    localStorage.setItem("TODOS_V1", stringifyToDo)
    setToDo(newToDos)
  }

  const completeToDo = (text) => {
    const toDoIndex = toDo.findIndex((oneToDo) => oneToDo.text === text);
    const newToDo = [...toDo];
    newToDo[toDoIndex].complete = true;
    saveToDos(newToDo);
  };

  const deleteToDo = (text) => {
    const toDoIndex = toDo.findIndex((oneToDo) => oneToDo.text === text);
    const newToDo = [...toDo];
    newToDo.splice(toDoIndex, 1);
    saveToDos(newToDo);
  };

  return (
    <>
      <h1 className="appTitle">Get this shit</h1>
      <ToDoCounter total={totalToDo} completed={completedToDo} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <ToDoList>
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
}

export default App;
