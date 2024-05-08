import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../index";

export type CountState = {
  currentCount: number;
};

export const initialState: CountState = {
  currentCount: 0,
};

const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    setIncreaseCount(state, action: PayloadAction<number>) {
      state.currentCount = state.currentCount + action.payload;
    },
    setDecreaseCount(state, action: PayloadAction<number>) {
      state.currentCount = state.currentCount - action.payload;
    },
  },
});

export const { setIncreaseCount, setDecreaseCount } = countSlice.actions;
export const selectCount = (state: RootState) => state.count;

export const selectCurrentCount = createSelector(
  selectCount,
  ({ currentCount }) => currentCount
);

export default countSlice