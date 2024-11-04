import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  function deleteTodo(id) {
    const newTodoList = todos.filter((todos, index) => {
      return index !== id;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  function editTodo(id) {
    const todoTobeEdited = todos[id];
    persistData(todoTobeEdited);
    setTodoValue(todoTobeEdited);
    deleteTodo(id);
  }
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);
  return (
    <>
      <TodoInput
        addTodos={handleAddTodos}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
    </>
  );
}

export default App;
