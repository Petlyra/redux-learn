import { applyMiddleware, createStore } from "redux";
import { rootEpic, rootReducer } from "./root";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store: any = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(rootEpic);
  return store;
}
