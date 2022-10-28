//import './App.css';

import { CreateToDoButton } from "./CreateToDoButton/CreateToDoButton";
import { ToDoCounter } from "./ToDoCounter/ToDoCounter";
import { ToDoItem } from "./ToDoItem/ToDoItem";
import { ToDoList } from "./ToDoList/ToDoList";
import { ToDoSearch } from "./ToDoSearch/ToDoSearch";

const toDo = [
  { text: "Revisar mi masterlist", complete: false },
  { text: "Pagar envios", complete: true },
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
    <h1 className="appTitle">Get this shit</h1>
      <ToDoCounter />
      <ToDoSearch />
      <ToDoList>
        {toDo.map(oneToDo => (
          <ToDoItem key={oneToDo.text} text={oneToDo.text} complete={oneToDo.complete}/>
        ))}
        
      </ToDoList>
      <CreateToDoButton />
    </>
  );
}

export default App;
