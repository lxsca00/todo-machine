import React, { useContext } from "react";
import { ToDoContext } from "../ToDoContext";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";
import { ToDoSearch } from "../ToDoSearch";
import { Modal } from "../Modal";
import { ToDoForm } from "../ToDoForm";
import { EmptyToDo, ToDoError, ToDoLoading } from "../LoadingSkeletons/ToDoSkeletons";

const AppUI = () => {
  const {
    error,
    loading,
    searchedToDo,
    completeToDo,
    deleteToDo,
    openModal,
    setOpenModal,
  } = useContext(ToDoContext);

  return (
    <>
      <h1 className="appTitle">Get this task!</h1>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {error && <ToDoError error={error}/>}
        {loading && <ToDoLoading/>}
        {!loading && !searchedToDo.length && <EmptyToDo/>}
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
      {!!openModal && (
        <Modal>
          <ToDoForm/>
        </Modal>
      )}
      <CreateToDoButton 
        onOpenModal={setOpenModal}
      />
    </>
  );
};

export { AppUI };
