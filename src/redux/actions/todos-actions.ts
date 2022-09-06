import { FETCH_TODOS, FETCH_TODOS_FULFILLED, RESET_TODOS } from "./actions";
import { TodoType } from "../../types/todo-type";

export const fetchTodos = () => ({
  type: FETCH_TODOS,
});

export const fetchTodosFulfilled = (todo: TodoType) => ({
  type: FETCH_TODOS_FULFILLED,
  payload: todo,
});

export const resetTodos = () => ({
  type: RESET_TODOS,
});
