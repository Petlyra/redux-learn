import { incrementAction } from "./counter-actions";
import { all, put, takeEvery } from "redux-saga/effects";
import { INCREMENT_ASYNC } from "./actions";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export function* incrementAsync() {
  yield delay(2000);
  yield put(incrementAction());
}

export function* watchIncrementAsync() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync);
}

export default function* rootSaga() {
  yield all([
    watchIncrementAsync()
  ])
}