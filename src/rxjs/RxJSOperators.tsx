import { map, Observer, of } from "rxjs";

export const RxJSOperators = () => {
  const observer: Observer<number> = {
    next: value => console.log(value * 2),
    complete: () => console.log("Complete"),
    error: err => console.log(err)
  };

  of(1, 2, 3)
    .pipe(map((x) => x * 2))
    .subscribe(observer)
    .unsubscribe();

  return (
    <div />
  );
};