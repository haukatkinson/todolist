import { useState } from "react";
import React from "react";
import Todo from "../component/Todo";

const TodoList = ({ todos, taskDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} taskDelete={taskDelete} />
      ))}
    </ul>
  );
};
export { TodoList };
