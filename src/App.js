//import './App.css';

import { CreateToDoButton } from "./CreateToDoButton/CreateToDoButton";
import { ToDoCounter } from "./ToDoCounter/ToDoCounter";
import { ToDoItem } from "./ToDoItem/ToDoItem";
import { ToDoList } from "./ToDoList/ToDoList";
import { ToDoSearch } from "./ToDoSearch/ToDoSearch";

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
