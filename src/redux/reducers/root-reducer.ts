import { combineReducers } from "redux";
import { counterReducer } from "./coutner-reducer";
import { todosReducer } from "./todos-reducer";

export default combineReducers({
  counterReducer,
  todosReducer,
});
