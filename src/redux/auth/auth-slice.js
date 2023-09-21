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
    token: null,
  },
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
  isLoading: false,
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
    setLoadingTrue(state, _) {
      state.isLoading = true;
    },
    setLoadingFalse(state, _) {
      state.isLoading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.regData = initialState.regData;
        state.isLoading = false;
      })
      .addCase(authOperations.register.rejected, (state, _) => {
        console.log('register rejected');
        state.isLoading = false;
      })
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        console.log('after login', action.payload);
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(authOperations.logIn.rejected, (state, _) => {
        console.log('Login rejected');
        state.isLoading = false;
      })
      .addCase(authOperations.logOut.fulfilled, (state, _) => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.regData = initialState.regData;
        state.isLoading = false;
      })
      .addCase(authOperations.logOut.rejected, (state, _) => {
        console.log('Logout rejected');
        state.isLoading = false;
      })
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        if (action.payload.email) {
          console.log('Current user:', action.payload);
          state.user = action.payload;
        } else {
          state.user = initialState.user;
          state.isLoggedIn = false;
          state.regData = initialState.regData;
        }
        state.isLoading = false;
      })
      .addCase(authOperations.fetchCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(authOperations.checkEmail.fulfilled, (state, action) => {
        console.log(action.payload.data.message);
        state.isLoading = false;
      })
      .addCase(authOperations.checkEmail.rejected, (state, _) => {
        console.log('Email check rejected');
        state.isLoading = false;
      });
  },
});

export const { setRegData, setUserData, setLoadingTrue, setLoadingFalse } =
  authSlice.actions;
