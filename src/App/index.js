//import './App.css';
import React from "react";
import { ToDoProvider } from "../ToDoContext";
import { AppUI } from "./AppUI";

//  const defaultToDo = [
//    { text: "Revisar mi masterlist", complete: true },
//    { text: "Pagar envios", complete: true },
//    { text: "Deprimirse", complete: false },
//   { text: "Llorar y terminar cursos", complete: false },
//    {
//      text: "Revisar sobre ES7 React/Redux/GraphQL/React-Native snippets",
//      complete: false,
//    },
//  ];

function App() {
  return (
    <ToDoProvider>
      <AppUI/>
    </ToDoProvider>
  );
}

export default App;
