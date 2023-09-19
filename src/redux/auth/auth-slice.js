import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
    goal: null,
    gender: null,
    age: null,
    height: null,
    weight: null,
    activity: null,
  },
  token: null,
  isLoggedIn: false,
  regData: {
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
      for (const item in action.payload) {
        state.regData[item] = action.payload[item];
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.regData = initialState.regData;
      })
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        console.log('login fulfilled', action.payload);
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logOut.fulfilled, (state, _) => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        // state.user = action.payload;
      })
      .addCase(authOperations.checkEmail.fulfilled, (state, action) => {
        console.log(action.payload.data.message);
      });
  },
});

export const { setRegData, setUserData, setToken } = authSlice.actions;
