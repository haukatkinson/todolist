import React from "react";
import { FaTrash } from "react-icons/fa";

export default function Todo({ todo, taskDelete }) {
  function handleDelete() {
    taskDelete(todo.id);
  }
  return (
    <div className="listTodos text-center" style={{ display: "flex" }}>
      <li className="todoTask">
        <span>{todo.task}</span>
        <FaTrash className="trash" onClick={handleDelete} />
      </li>
    </div>
  );
}
