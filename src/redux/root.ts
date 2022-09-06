import { AnyAction, applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";
import { Reducer } from "react";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "./epic/root-epic";

const sagaMiddleware = createSagaMiddleware();
const epicMiddleware = createEpicMiddleware();

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: hardSet,
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer as Reducer<any, AnyAction>
);

export const configureStore = () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, epicMiddleware))
  );

  sagaMiddleware.run(rootSaga);
  epicMiddleware.run(rootEpic);

  return store;
};
