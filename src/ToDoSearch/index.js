import React from "react";
import './ToDoSearch.css'

const ToDoSearch = ({ searchValue, setSearchValue}) => {
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }

  return (
  <>
    <input 
      className="ToDoSearch" 
      placeholder="Aquí va un To Do"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  </>
);}

export {ToDoSearch};
