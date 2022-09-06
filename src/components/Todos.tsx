import React from "react";
import "./Todos.css";
import ActionButton from "./ActionButton";

export const Todos = () => {
  return (
    <div className={"todos-box"}>
      <ActionButton fullWidth label={"Show TODOS"} onClick={null} />
    </div>
  );
};
