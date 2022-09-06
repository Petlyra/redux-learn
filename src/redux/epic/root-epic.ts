import { combineEpics } from "redux-observable";
import { fetchTodoEpic } from "./todo-epic";

export default combineEpics(fetchTodoEpic);
