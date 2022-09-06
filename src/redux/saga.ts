import { incrementByAmountAction } from "./actions/counter-actions";
import { all, put, takeEvery } from "redux-saga/effects";
import { INCREMENT_ASYNC } from "./actions/actions";
import { AnyAction } from "redux";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function* incrementAsync(action: AnyAction) {
  yield delay(2000);
  yield put(incrementByAmountAction(action.payload));
}

export function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
