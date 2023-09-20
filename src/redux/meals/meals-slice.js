import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  today: {
    breakfast: { carbons: null, protein: null, fat: null },
    lunch: { carbons: null, protein: null, fat: null },
    dinner: { carbons: null, protein: null, fat: null },
    snack: { carbons: null, protein: null, fat: null },
    water: [],
    weight: null,
  },
};

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});
