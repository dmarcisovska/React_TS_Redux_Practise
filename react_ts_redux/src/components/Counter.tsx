import type { RootState } from "@reduxjs/toolkit/query";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../state/counter/counterSlice"
import Button from "@mui/material/Button";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="card">
      <h2> Counter component</h2>
      <Button onClick={() => dispatch(increment)}  variant="contained"> Increment</Button>
      <Button onClick={() => dispatch(decrement)}  variant="outlined"> Decrement</Button>
      <p>count is {count}</p>
    </div>
  );
}

export default Counter;
