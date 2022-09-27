import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";

export default function App() {
  const [todos, updateTodos] = useState([]);
  const handleChange = (value, id) => {
    let newTodo = [...todos];
    if (typeof value === "boolean") newTodo[id].checked = !value;
    else if (typeof value === "number") {
      if (value < 0){
        let adjustedTodos = [] 
        let elementFound = false;
        newTodo.map(t=>{
          if(t.id !== id){
            t.id -= elementFound
            adjustedTodos.push(t)
          }
          else
            elementFound = true
        })
        newTodo = adjustedTodos
      }
    } else newTodo[id].title = value;
    updateTodos(newTodo);
    console.log(newTodo);
  };
  return (
    <div id='todo-container'>
      <h1>Whatcha Planning Today?</h1>
      <div id='todo-created'>
        {todos.map((todo) => {
          return (
            <TodoItem
              item={todo}
              onChange={(v) => handleChange(v, todo.id)}
              key={todo.id}
            />
          );
        })}
      </div>
      <button
        id='add-todo'
        onClick={() =>
          updateTodos([
            ...todos,
            { id: todos.length, name: null, checked: false },
          ])
        }
      >
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>
    </div>
  );
}
