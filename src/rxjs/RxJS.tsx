import { Observable, Observer } from "rxjs";

export const RxJS = () => {
  const observable: Observable<number> = new Observable((subscriber) => {
    try {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete();
    } catch (err: any) {
      subscriber.error(err);
    }
  });

  const observer: Observer<number> = {
    next: value => console.log(value * 2),
    complete: () => console.log("Complete"),
    error: err => console.log(err)
  };

  const subscription = observable.subscribe(observer);

  subscription.unsubscribe();

  return (
    <div />
  );
};