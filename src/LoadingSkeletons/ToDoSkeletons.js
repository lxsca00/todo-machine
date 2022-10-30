import React from "react";
import "./ToDoSkeletons.css";

const ToDoError = ({ error }) => <p>{error}</p>;

const ToDoLoading = () => (
  <div className="ToDoLoadingContainer">
    <div className="load">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  </div>
);

const EmptyToDo = () => {
  <p>¡Crea tu primer To Do!</p>;
};

export { ToDoError, ToDoLoading, EmptyToDo };
