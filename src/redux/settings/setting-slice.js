import { createSlice } from '@reduxjs/toolkit';
import settingsOperations from './settings-operations';

const initialState = {
  user:{ 
    name: null,
  gender: null,
  age: null,
  height: null,
  weight: null,
  activity: null,
}
};

const settingsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},

extraReducers: (builder) => {
builder
 .addCase(settingsOperations.saveSettings.fulfilled, (state, action) => {
 state.user = action.payload;
})
 .addCase(settingsOperations.cancelSettings.fulfilled, (state, _) => 
  state.user = initialState.user
   )
  },
});


export default settingsSlice.reducer;

