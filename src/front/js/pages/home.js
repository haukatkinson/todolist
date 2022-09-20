import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Todo } from "../component/Todo";
import { TodoForm } from "../component/TodoForm";
import { TodoList } from "../component/TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }
  function taskDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Todo List</h1>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} taskDelete={taskDelete} />
        </header>
      </div>
    </>
  );
};

export { Home };
