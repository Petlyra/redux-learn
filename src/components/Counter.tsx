import React, { useState } from "react";
import "../App.css";
import {
  decrementAction,
  incrementAction,
  incrementAsyncAction,
  incrementByAmountAction,
  reset,
} from "../redux/actions/counter-actions";
import { useDispatch, useSelector } from "react-redux";
import { selectCount } from "../redux/selector/counter-selector";
import ActionButton from "./ActionButton";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(2);

  return (
    <div className="box">
      <ActionButton label={"-"} onClick={() => dispatch(decrementAction())} />
      <span>{count}</span>
      <ActionButton label={"+"} onClick={() => dispatch(incrementAction())} />
      <input
        className={"input"}
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={(e: any) => setIncrementAmount(e.target.value)}
      />
      <ActionButton
        label={"Add"}
        onClick={() =>
          dispatch(incrementByAmountAction(Number(incrementAmount) || 0))
        }
      />
      <ActionButton
        label={"Async"}
        onClick={() =>
          dispatch(incrementAsyncAction(Number(incrementAmount) || 0))
        }
      />
      <ActionButton
        fullWidth
        label={"Reset"}
        onClick={() => dispatch(reset())}
      />
    </div>
  );
};
