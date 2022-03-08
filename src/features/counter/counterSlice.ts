import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { fetchCount } from "./counterAPI";

export interface CounterState {
  value: string;
  status: "idle" | "loading" | "failed";
}

const initialState: CounterState = {
  value: "Default value",
  status: "idle",
};

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async () => {
    const response = await fetchCount();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      });
  },
});

export const selectCount = (state: RootState) => state.counter;

export default counterSlice.reducer;
