import React from "react";
import { TodoType } from "../types/todo-type";

export const TodoItem = (todo: TodoType) => {
  return <div style={{ fontSize: 18 }}>{JSON.stringify(todo)}</div>;
};
