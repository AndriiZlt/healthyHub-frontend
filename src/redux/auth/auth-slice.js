import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  temporaryCredentials: { name: null, email: null, password: null },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTemporaryCredentials(state, action) {
      console.log('setTemporaryCredentials action.payload', action.payload);
      state.temporaryCredentials = action.payload;
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

export const { setTemporaryCredentials } = authSlice.actions;
