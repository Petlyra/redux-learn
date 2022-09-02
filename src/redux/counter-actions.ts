import { DECREMENT, INCREMENT, INCREMENT_BY_AMOUNT, RESET } from "./actions";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const incrementByAmount = (amount: number) => ({
  type: INCREMENT_BY_AMOUNT,
  payload: amount,
});

export const reset = () => ({
  type: RESET,
});
