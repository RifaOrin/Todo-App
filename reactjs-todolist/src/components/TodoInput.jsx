import { useState } from "react";

export default function TodoInput(props) {
  //   const { addTodos } = props; // can do it by desturcturing method too then u dont have to write props.addTodos
  const [todoValue, setTodoValue] = useState("");
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
