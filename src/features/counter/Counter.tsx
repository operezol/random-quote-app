import React, { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { incrementAsync, selectCount } from "./counterSlice";

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <>
      {count.status === "loading" && <p>Loading...</p>}
      {count.status === "idle" && (
        <>
          <p>{count.value.quote}</p>
          <p>{count.value.author}</p>
        </>
      )}
      {count.status === "failed" && <p>Error</p>}
      <button onClick={() => dispatch(incrementAsync())}>Add Async</button>
    </>
  );
}
