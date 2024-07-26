import { createSlice } from '@reduxjs/toolkit';

interface SecondPageState {
  count: number;
}

const initialState: SecondPageState = { count: 0 };

const secondPageSlice = createSlice({
  name: 'secondPage',
  initialState,
  reducers: {
    decrementbyOne: (state) => {
      state.count -= 1;
    },
  },
});

export const { decrementbyOne } = secondPageSlice.actions;
export default secondPageSlice;
