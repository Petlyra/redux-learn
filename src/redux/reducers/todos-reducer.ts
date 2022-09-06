import { AnyAction } from "redux";
import {
  FETCH_TODOS,
  FETCH_TODOS_FULFILLED,
  RESET_TODOS,
} from "../actions/actions";
import { TodosState } from "../../types/todo-type";

const initialState: TodosState = {
  todos: [],
};

export const todosReducer = (
  state: TodosState = initialState,
  action: AnyAction
): TodosState => {
  switch (action.type) {
    case FETCH_TODOS_FULFILLED:
      const updatedTodos = state.todos.concat(Array.of(action.payload));
      return {
        ...state,
        todos: updatedTodos,
      };
    case FETCH_TODOS:
      return { ...state };
    case RESET_TODOS:
      return { ...initialState };
    default:
      return { ...state };
  }
};
