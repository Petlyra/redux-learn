import React from "react";
import "./Todos.css";
import ActionButton from "./ActionButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, resetTodos } from "../redux/actions/todos-actions";
import { selectTodos } from "../redux/selector/todo-selector";
import { TodoItem } from "./TodoItem";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  return (
    <div className={"todos-root-box"}>
      <div className={"todos-buttons-box"}>
        <ActionButton
          fullWidth
          label={"Fetch TODOS"}
          onClick={() => dispatch(fetchTodos())}
        />
        <ActionButton
          fullWidth
          label={"Clear TODOS"}
          onClick={() => dispatch(resetTodos())}
        />
      </div>
      <div className={"todos-box"}>
        {todos && todos.map((todo) => <TodoItem {...todo} />)}
      </div>
    </div>
  );
};
