import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// --------------------------------------------------

export const {
  increment: incrementCounter,
  decrement: decrementCounter,
  incrementByAmount: incrementCounterByAmount,
} = counterSlice.actions;

// --------------------------------------------------

export const counterValue = createSelector(
  (state: RootState) => state.counter.value,
  (value) => value,
);

export const counterValue2 = (state: RootState) => state.counter.value;

// --------------------------------------------------

export default counterSlice.reducer;
