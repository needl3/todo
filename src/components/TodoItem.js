import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircleHalfStroke,
  faDumpster,
} from "@fortawesome/free-solid-svg-icons";
import TodoItemStyled from "../wrappers/TodoItem";
import { useEffect, useState } from "react";
import Edit from "./Edit";
import { updateCall } from "../shared/calls";

export default function TodoItem({ updateTodo, item, token }) {
  const [localState, setState] = useState(item);
  const [editActive, setEdit] = useState(undefined);
  useEffect(() => {
    // This if clause executes only once at first to ignore firing of effect for the first time
    if (editActive === undefined) setEdit(false);
    else {
      updateCall(localState, token);
      let localStorageItem = JSON.parse(localStorage.getItem("todos"))
      for(let i=0;i<localStorageItem.length;i++){
        if(localState.id === localStorageItem[i].id){
          localStorageItem[i] = localState;
        }
      }
      localStorage.setItem("todos", JSON.stringify(localStorageItem))
    }
  }, [JSON.stringify(localState)]);
  return (
    <>
      {editActive && (
        <Edit
          setLocal={(v) => {
            setState({ ...localState, ...v });
            setEdit(false);
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
              setEdit(true);
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
