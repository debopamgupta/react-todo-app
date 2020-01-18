import React from "react";

const ListItem = props => {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.todo.done}
        id="checkboxes"
        onChange={event => props.toggleTodoDone(event, props.index)}
      />
      <span className={props.todo.done ? "done" : ""}>{props.todo.title}</span>
      <button id="removeBtn" onClick={() => props.removeTodo(props.index)}>
        Remove
      </button>
    </li>
  );
};

export default ListItem;
