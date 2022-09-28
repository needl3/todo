import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircleHalfStroke,
  faDumpster,
} from "@fortawesome/free-solid-svg-icons";
import TodoItemStyled from "../wrappers/TodoItem";

export default function TodoItem(props) {
  return (
    <TodoItemStyled>
      <div
        id='todo-item'
        className={props.item.checked ? "checked" : "not-checked"}
      >
        <button
          id="check-button"
          onClick={() => {
            props.onChange(props.item.checked);
          }}
        >
          <FontAwesomeIcon
            icon={props.item.checked ? faCheckCircle : faCircleHalfStroke}
          />
        </button>
        <input
          id='title'
          type='text'
          onChange={(e) => props.onChange(e.target.value)}
        >
          {props.title}
        </input>
        <div id='edit'>
          <button onClick={() => props.onChange(-1)}>
            <FontAwesomeIcon icon={faDumpster} />
          </button>
        </div>
      </div>
    </TodoItemStyled>
  );
}
