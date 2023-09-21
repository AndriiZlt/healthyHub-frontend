import { createSlice } from '@reduxjs/toolkit';
import mealsOperations from './meals-operations';

const initialState = {
  today: null,
  month: null,
  yaer: null,
};

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    clearMealData(state, _) {
      console.log('Clearing meals data');
      state.today = null;
      state.month = null;
      state.year = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(mealsOperations.fetchDay.fulfilled, (state, action) => {
        console.log('Fetch day fulfield', action.payload);
        state.today = action.payload;
      })
      .addCase(mealsOperations.fetchMonth.fulfilled, (state, action) => {
        console.log('Fetch month fulfield', action.payload);
        state.month = action.payload;
      })
      .addCase(mealsOperations.fetchYear.fulfilled, (state, action) => {
        console.log('Fetch year fulfield', action.payload);
        state.year = action.payload;
      })
      .addCase(mealsOperations.waterIntake.fulfilled, (state, action) => {
        console.log('Water intake fulfield', action.payload);
        state.today = action.payload;
      });
  },
});

export const { clearMealData } = mealsSlice.actions;
