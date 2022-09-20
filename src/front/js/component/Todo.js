import React from "react";

export default function Todo({ todo, taskDelete }) {
  function handleDelete() {
    taskDelete(todo.id);
  }
  return (
    <div style={{ display: "flex" }}>
      <li>{todo.task}</li>
      <button className="delete" onClick={handleDelete}>
        <i class="far fa-trash"></i>
      </button>
    </div>
  );
}
