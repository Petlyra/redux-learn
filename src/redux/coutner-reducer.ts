import { AnyAction } from "redux";
import { DECREMENT, INCREMENT, INCREMENT_BY_AMOUNT, RESET } from "./actions";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
};

export const counterReducer = (state: CounterState = initialState, action: AnyAction): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      };
    case INCREMENT_BY_AMOUNT:
      return {
        ...state,
        value: state.value + action.payload
      };
    case RESET:
      return {
        ...initialState
      };
    default:
      return { ...state };
  }
};
