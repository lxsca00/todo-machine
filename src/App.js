//import './App.css';

import { CreateToDoButton } from "./CreateToDoButton";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoItem } from "./ToDoItem";
import { ToDoList } from "./ToDoList";
import { ToDoSearch } from "./ToDoSearch";

const toDo = [
  { text: "Revisar mi masterlist", complete: false },
  { text: "Pagar envios", complete: false },
  { text: "Deprimirse", complete: false },
  { text: "Llorar y terminar cursos", complete: false },
  {
    text: "Revisar sobre ES7 React/Redux/GraphQL/React-Native snippets",
    complete: false,
  },
];

function App() {
  return (
    <>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {toDo.map(oneToDo => (
          <ToDoItem key={oneToDo.text} text={oneToDo.text}/>
        ))}
        
      </ToDoList>
      <CreateToDoButton />
    </>
  );
}

export default App;
