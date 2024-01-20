import React, { useState } from "react";
import {
  reset,
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "../counterSlice";
import { useDispatch, useSelector } from "react-redux";
import "./counter.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [val, setVal] = useState(0);

  const handleReset = () => {
    setVal(0);
    dispatch(reset());
  };

  return (
    <>
      <div className="controls">
        <button className="inc-dec" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <h3>{count}</h3>
        <button className="inc-dec" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <input
          type="text"
          value={val}
          onChange={(event) => setVal(event.target.value)}
        ></input>

        <button className="inc-dec" onClick={handleReset}>
          reset
        </button>
        <button
          className="inc-dec"
          onClick={() => dispatch(incrementByAmount(+val))}
        >
          Increment by Input
        </button>
        <button
          className="inc-dec"
          onClick={() => dispatch(decrementByAmount(+val))}
        >
          Decrement by Input
        </button>
      </div>
    </>
  );
}
