import { createSlice } from '@reduxjs/toolkit';
import mealsOperations from './meals-operations';

const initialState = {
  today: null,
  todayReady: false,
  month: null,
  year: null,
  modalMealOn: false,
  modalWaterOn: false,
  modalEditOn: false,
};

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    clearMealData(state, _) {
      state.today = null;
      state.month = null;
      state.year = null;
      state.todayReady = false;
    },
    setModalMealOn(state, _) {
      state.modalMealOn = true;
    },
    setModalWaterOn(state, _) {
      state.modalWaterOn = true;
    },
    setModalEditOn(state, _) {
      state.modalEditOn = true;
    },
    setModalsOff(state, _) {
      state.modalWaterOn = false;
      state.modalMealOn = false;
      state.modalEditOn = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(mealsOperations.fetchDay.fulfilled, (state, action) => {
        // console.log('Fetch day fulfield', action.payload);
        state.today = action.payload;
        state.todayReady = true;
      })
      .addCase(mealsOperations.fetchDay.pending, (state, _) => {
        // state.todayReady = false;
        // console.log('today ready false');
      })
      .addCase(mealsOperations.fetchMonth.fulfilled, (state, action) => {
        console.log('Fetch month fulfield');
        state.month = action.payload;
      })
      .addCase(mealsOperations.fetchYear.pending, (state, action) => {
        console.log('Fetch year pending');
      })
      .addCase(mealsOperations.fetchYear.fulfilled, (state, action) => {
        console.log('Fetch year fulfield');
        state.year = action.payload;
      })
      .addCase(mealsOperations.waterIntake.fulfilled, (state, action) => {
        // console.log('Water intake fulfield', action.payload);
        state.today = action.payload;
        if (state.month) {
          state.month[state.month.length - 1].water = action.payload.water;
        }
        if (state.year) {
          state.year[state.year.length - 1].water = action.payload.water;
        }
      })
      .addCase(mealsOperations.recordMeal.fulfilled, (state, action) => {
        // console.log('Record meal fulfield', action.payload);
        state.today = action.payload;
        if (state.month) {
          state.month[state.month.length - 1] = action.payload;
        }
        if (state.year) {
          state.year[state.year.length - 1] = action.payload;
        }
        state.modalMealOn = false;
      })
      .addCase(mealsOperations.editMeal.fulfilled, (state, action) => {
        // console.log('Edit meal fulfield', action.payload);
        state.today = action.payload;
      });
  },
});

export const {
  clearMealData,
  setModalMealOn,
  setModalWaterOn,
  setModalsOff,
  setModalEditOn,
} = mealsSlice.actions;
