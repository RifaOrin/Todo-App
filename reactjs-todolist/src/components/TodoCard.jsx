import React from "react";

export default function TodoCard(props) {
  const { children } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            props.edit(props.id);
          }}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            props.delete(props.id);
          }}
        >
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
