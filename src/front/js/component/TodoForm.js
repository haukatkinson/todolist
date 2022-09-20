import { useState } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTodo, taskDelete }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
  });
  function randomId() {
    Math.floor(Math.random() * 10000);
  }
  function handleOnChange(e) {
    setTodo({ ...todo, task: e.target.value, id: { randomId } });
  }
  function handleSubmit(e) {
    e.preventDefault();
    addTodo({ ...todo, id: { randomId } });
    setTodo({ ...todo, task: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todoInput"
        onChange={handleOnChange}
        value={todo.task}
      ></input>
      <input type="submit" style={{ display: "none" }} />
    </form>
  );
};

export { TodoForm };
