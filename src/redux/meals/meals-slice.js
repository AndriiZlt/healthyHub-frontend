import { createSlice } from '@reduxjs/toolkit';
import mealsOperations from './meals-operations';

const initialState = {
  today: null,
};

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(mealsOperations.fetchDay.fulfilled, (state, action) => {
      console.log('Fetch day fulfield', action.payload);
      state.today = action.payload;
    });
  },
});
