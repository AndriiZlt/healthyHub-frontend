import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  userData: {
    name: null,
    email: null,
    password: null,
    goal: null,
    gender: null,
    age: null,
    height: null,
    weight: null,
    activity: null,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRegData(state, action) {
      console.log('setting RegData:', action.payload);
      state.regData = action.payload;
    },
    setDetails(state, action) {
      console.log('setting details:', action.payload);
      state.userData = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logOut.fulfilled, (state, _) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        state = action.payload;
      });
  },
});

export const { setRegData, setDetails } = authSlice.actions;
