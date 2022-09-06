import React from "react";
import { TodoType } from "../types/todo-type";

export const TodoItem = (todo: TodoType) => {
  return (
    <div
      key={todo.id}
      style={{ display: "flex", flexDirection: "column", fontSize: 16 }}
    >
      {JSON.stringify(todo)}
    </div>
  );
};
