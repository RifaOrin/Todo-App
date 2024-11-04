import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  function handleAddTodos(newTodo) {
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  }
  function deleteTodo(id) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <TodoInput addTodos={handleAddTodos} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </>
  );
}

export default App;
