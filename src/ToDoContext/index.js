import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider(props) {
  const {
    item: toDo,
    saveItem: saveToDo,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

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

  const completeToDo = (text) => {
    const toDoIndex = toDo.findIndex((oneToDo) => oneToDo.text === text);
    const newToDo = [...toDo];
    newToDo[toDoIndex].complete = true;
    saveToDo(newToDo);
  };

  const deleteToDo = (text) => {
    const toDoIndex = toDo.findIndex((oneToDo) => oneToDo.text === text);
    const newToDo = [...toDo];
    newToDo.splice(toDoIndex, 1);
    saveToDo(newToDo);
  };

  return (
    <ToDoContext.Provider
      value={{
        loading,
        error,
        totalToDo,
        completedToDo,
        searchValue,
        setSearchValue,
        searchedToDo,
        completeToDo,
        deleteToDo,
      }}
    >
      {props.children}
    </ToDoContext.Provider>
  );
}

export {ToDoContext, ToDoProvider}
