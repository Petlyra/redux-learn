import { ofType } from "redux-observable";
import { FETCH_TODOS } from "../actions/actions";
import { map, mergeMap } from "rxjs";
import { ajax } from "rxjs/internal/ajax/ajax";
import { fetchTodosFulfilled } from "../actions/todos-actions";

export const fetchTodoEpic = (action$: any) =>
  action$.pipe(
    ofType(FETCH_TODOS),
    mergeMap(() =>
      ajax
        .getJSON("https://jsonplaceholder.typicode.com/todos/1")
        .pipe(map((response: any) => fetchTodosFulfilled(response)))
    )
  );
