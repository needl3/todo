import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircleHalfStroke,
  faDumpster,
} from "@fortawesome/free-solid-svg-icons";
import TodoItemStyled from "../wrappers/TodoItem";
import { useState } from "react";
import Edit from "./Edit";

export default function TodoItem({ updateTodo, item }) {
  const [localState, setState] = useState({
    ...item,
    ...{ editActive: false},
  });
  return (
    <>
      {localState.editActive && (
        <Edit
          setLocal={(v) => {
            setState({ ...localState, ...v, ...{editActive: false} });
          }}
          item={localState}
        />
      )}
      <TodoItemStyled>
        <li
          id='todo-item'
          className={localState.checked ? "checked" : "not-checked"}
        >
          <button
            id='check-button'
            onClick={() => {
              setState({ ...localState, checked: !localState.checked });
            }}
          >
            <FontAwesomeIcon
              icon={localState.checked ? faCheckCircle : faCircleHalfStroke}
            />
          </button>
          <input
            id='title'
            type='text'
            readOnly={true}
            onClick={() => {
              setState({ ...localState, ...{ editActive: true } });
            }}
            value={localState.title}
          ></input>
          <div id='edit'>
            <button onClick={() => updateTodo(-1)}>
              <FontAwesomeIcon icon={faDumpster} />
            </button>
          </div>
        </li>
      </TodoItemStyled>
    </>
  );
}
