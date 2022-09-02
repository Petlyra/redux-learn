import { AnyAction } from "redux";
import { DECREMENT, INCREMENT, INCREMENT_BY_AMOUNT, RESET } from "./actions";

const initialState = {
  value: 0,
};

export const counterReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    case INCREMENT_BY_AMOUNT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case RESET:
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
};
