import { TodoType } from "../../types/todo-type";

export const selectTodos = (state: any): TodoType[] => state.todosReducer.todos;
