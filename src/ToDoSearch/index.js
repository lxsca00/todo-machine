import React, { useContext } from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoSearch.css";

const ToDoSearch = () => {
  const { searchValue, setSearchValue } = useContext(ToDoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        className="ToDoSearch"
        placeholder="Aquí va un To Do"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </>
  );
};

export { ToDoSearch };
