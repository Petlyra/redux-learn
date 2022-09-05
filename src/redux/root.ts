import { combineReducers } from "redux";
import { counterReducer } from "./coutner-reducer";
import { combineEpics } from "redux-observable";
import { decrementEpic, incrementByAmountEpic, incrementEpic } from "./epics";

export const rootReducer = combineReducers({
  counterReducer
});

export const rootEpic = combineEpics(
  incrementEpic,
  decrementEpic,
  incrementByAmountEpic
);
