import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todayMeals: {
    breakfast: { carbons: null, protein: null, fat: null },
    lunch: { carbons: null, protein: null, fat: null },
    dinner: { carbons: null, protein: null, fat: null },
    snack: { carbons: null, protein: null, fat: null },
    water: [],
  },
  allMeals: [
    { '1.8.23': { carbs: 1, proteins: 2, fats: 3, water: 4 } },
    { '2.8.23': { carbs: 1, proteins: 2, fats: 3, water: 4 } },
    { '3.8.23': { carbs: 1, proteins: 2, fats: 3, water: 4 } },
    { '4.8.23': { carbs: 1, proteins: 2, fats: 3, water: 4 } },
    { '5.8.23': { carbs: 1, proteins: 2, fats: 3, water: 4 } },
    { '6.8.23': { carbs: 1, proteins: 2, fats: 3, water: 4 } },
    { '7.8.23': { carbs: 1, proteins: 2, fats: 3, water: 4 } },
    { '8.8.23': { carbs: 1, proteins: 2, fats: 3, water: 4 } },
    { '9.8.23': { carbs: 1, proteins: 2, fats: 3, water: 4 } },
    { '10.8.23': { carbs: 1, proteins: 2, fats: 3, water: 4 } },
  ],
};

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});
