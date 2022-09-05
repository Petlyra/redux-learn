import { ofType } from "redux-observable";
import { DECREMENT, INCREMENT, INCREMENT_BY_AMOUNT } from "./actions";
import { map } from "rxjs";
import { decrement, increment, incrementByAmount } from "./counter-actions";

export const incrementEpic = (action$: any) => action$.pipe(
  ofType(INCREMENT),
  map(() => increment())
);

export const decrementEpic = (action$: any) => action$.pipe(
  ofType(DECREMENT),
  map(() => decrement())
);

export const incrementByAmountEpic = (action$: any) => action$.pipe(
  ofType(INCREMENT_BY_AMOUNT),
  map((action: any) => incrementByAmount(action.amount))
);