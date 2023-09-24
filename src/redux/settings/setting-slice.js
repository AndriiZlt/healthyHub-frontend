import { createSlice } from '@reduxjs/toolkit';
import settingsOperations from './settings-operations';

const initialState = {
  user: {
    name: null,
    gender: null,
    // avatarURL: null,
    age: null,
    height: null,
    weight: null,
    activity: null,
  },
};

const settingsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(settingsOperations.saveSettings.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(
        settingsOperations.cancelSettings.fulfilled,(state, _) => {
          state.user = initialState.user;
        })
      .addCase(settingsOperations.updateAvatar.fulfilled, (state, action) => {
        state.user.avatarURL = action.payload;
      });
  },
});

export default settingsSlice.reducer;
