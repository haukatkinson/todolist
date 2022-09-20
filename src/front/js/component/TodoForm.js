import { useState } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import propTypes from "prop-types";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
  });
  const randomId = Math.floor(Math.random() * 10000);

  function handleOnChange(e) {
    setTodo({ ...todo, task: e.target.value, id: { randomId } });
  }
  function handleSubmit(e) {
    e.preventDefault();
    addTodo({ ...todo, id: { randomId } });
    setTodo({ ...todo, task: "" });
  }
  console.log(todo);

  return (
    <div id="container" class="container">
      <div class="row">
        <div class="d-flex align-items-center justify-content-center">
          <form
            class="form-inline justify-content-center"
            onSubmit={handleSubmit}
          >
            <input
              className="todoInput d-flex flex-row justify-content-center"
              onChange={handleOnChange}
              value={todo.task}
              placeholder="Enter daily task's"
            ></input>
            <input type="submit" style={{ display: "none" }} />
          </form>
        </div>
      </div>
    </div>
  );
};

export { TodoForm };
