import { createSlice } from '@reduxjs/toolkit';

interface FirstPageState {
  count: number;
}

const initialState: FirstPageState = { count: 0 };

const firstPageSlice = createSlice({
  name: 'firstPage',
  initialState,
  reducers: {
    incrementByTwo: (state) => {
      state.count += 2;
    },
  },
});

export const { incrementByTwo } = firstPageSlice.actions;
export default firstPageSlice;
