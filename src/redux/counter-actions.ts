import { DECREMENT, INCREMENT, INCREMENT_ASYNC, INCREMENT_BY_AMOUNT, RESET } from "./actions";

export const incrementAction = () => ({
  type: INCREMENT
});

export const decrementAction = () => ({
  type: DECREMENT
});

export const incrementByAmountAction = (amount: number) => ({
  type: INCREMENT_BY_AMOUNT,
  payload: amount
});

export const incrementAsyncAction = (amount: number) => ({
  type: INCREMENT_ASYNC,
  payload: amount
});

export const reset = () => ({
  type: RESET
});
