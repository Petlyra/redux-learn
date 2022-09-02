import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "./redux/counter-selector";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./redux/counter-actions";
import { Dispatch } from "redux";

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(2);

  const incrementAsync = (amount: number, dispatch: Dispatch) => {
    setTimeout(() => dispatch(incrementByAmount(amount)), 2000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="box">
          <button
            className={"button"}
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <span>{count}</span>
          <button
            className={"button"}
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <input
            className={"input"}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e: any) => setIncrementAmount(e.target.value)}
          />
          <button
            className={"button"}
            onClick={() => dispatch(incrementByAmount(incrementAmount || 0))}
          >
            Add
          </button>
          <button
            className={"button"}
            onClick={() => incrementAsync(incrementAmount || 0, dispatch)}
          >
            Async
          </button>
          <button
            className={"button"}
            style={{ width: "100%" }}
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
