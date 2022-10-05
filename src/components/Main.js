import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";
import TodoItem from "./TodoItem";
import MainStyled from "../wrappers/Main";
import { addCall, deleteCall } from "../shared/calls";

export default function Main({ accessToken }) {
  const [todos, updateTodos] = useState([]);
  const handleUpdate = (v, id) => {
    if (typeof v === "number" && v < 0) {
      let newTodo = [];
      newTodo = todos.filter((e) => {
        if(e.id !== id) return true
        else{
          deleteCall(e, accessToken)
        }
      });
      updateTodos(newTodo);
    }
  };
  return (
    <MainStyled>
      <div id='todo-container'>
        <h1>Whatcha Planning Today?</h1>
        <ul id='todo-created'>
          {todos.map((todo) => {
            return (
              <TodoItem
                token={accessToken}
                item={todo}
                updateTodo={(v) => handleUpdate(v, todo.id)}
                key={todo.id}
              />
            );
          })}
        </ul>
        <button
          id='add-todo'
          onClick={async () => {
            const data = {
              id: (todos.length && todos[todos.length - 1].id + 1) || 0,
              title: "",
              checked: false,
              description: "",
            };
            updateTodos([...todos, data]);
            const res = await addCall(data, accessToken);
          }}
        >
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
      </div>
    </MainStyled>
  );
}
