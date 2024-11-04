import React from "react";

export default function TodoInput(props) {
  const { todoValue, setTodoValue } = props; // can do it by desturcturing method too then u dont have to write props.addTodos

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter todo..."
      ></input>
      <button
        onClick={() => {
          props.addTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
