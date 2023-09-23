import { createSlice } from '@reduxjs/toolkit';
import mealsOperations from './meals-operations';

const initialState = {
  today: null,
  todayReady: false,
  month: null,
  year: null,
  modalMealOn: false,
  modalWaterOn: false,
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
      state.todayReady = false;
    },
    setModalMealOn(state, action) {
      state.modalMealOn = true;
    },
    setModalWaterOn(state, _) {
      console.log('set modal water on');
      state.modalWaterOn = true;
    },
    setModalsOff(state, _) {
      state.modalWaterOn = false;
      state.modalMealOn = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(mealsOperations.fetchDay.fulfilled, (state, action) => {
        console.log('Fetch day fulfield', action.payload);
        state.today = action.payload;
        state.todayReady = true;
      })
      .addCase(mealsOperations.fetchDay.pending, (state, _) => {
        // state.todayReady = false;
        // console.log('today ready false');
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
      })
      .addCase(mealsOperations.recordMeal.fulfilled, (state, action) => {
        console.log('Record meal fulfield', action.payload);
        state.today = action.payload;
        state.modalMealOn = false;
      });
  },
});

export const { clearMealData, setModalMealOn, setModalWaterOn, setModalsOff } =
  mealsSlice.actions;
