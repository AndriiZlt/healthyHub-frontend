import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
// import { mealsSlice } from 'redux/meals/meals-slice';
// import { store } from 'redux/store';

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
  tempEmail: null,
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
      .addCase(authOperations.register.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(authOperations.register.rejected, (state, _) => {
        console.log('register rejected');
        state.regData = initialState.regData;
        state.isLoading = false;
      })
      .addCase(authOperations.logIn.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        console.log('Login fulfield', action.payload.token);
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(authOperations.logIn.rejected, (state, _) => {
        console.log('Login rejected');
        state.user = initialState.user;
        state.isLoading = false;
      })
      .addCase(authOperations.logOut.fulfilled, (state, action) => {
        console.log('Logout fulfield', action.payload);
        // state.tempEmail = state.user.email;
        state.isLoggedIn = false;
        state.user = initialState.user;
        state.regData = initialState.regData;
        state.isLoading = false;
      })
      .addCase(authOperations.logOut.rejected, (state, _) => {
        console.log('Logout rejected');
        state.isLoading = false;
      })
      .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
        console.log('Fetching user fulfield', action.payload);
        if (action.payload.status === 401) {
          state.user = initialState.user;
          state.isLoggedIn = false;
          state.regData = initialState.regData;
        } else {
          console.log('Current user:', action.payload);
          state.user = action.payload.data;
        }
        state.isLoading = false;
      })
      .addCase(authOperations.fetchCurrentUser.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.user = initialState.user;
        state.regData = initialState.regData;
        state.isLoading = false;
      })
      .addCase(authOperations.checkEmail.fulfilled, (state, action) => {
        console.log(action.payload.data.message);
        state.isLoading = false;
      })
      .addCase(authOperations.checkEmail.rejected, (state, _) => {
        console.log('Email check rejected');
        state.isLoading = false;
      })
      .addCase(authOperations.saveSettings.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(authOperations.saveSettings.fulfilled, (state, action) => {
        console.log('Save settings fulfield', action.payload);
        state.user = { ...state.user, ...action.payload };
        state.isLoading = false;
      })
      .addCase(authOperations.saveSettings2.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(authOperations.saveSettings2.fulfilled, (state, action) => {
        console.log('Save settings2 fulfield', action.payload);
        state.user.weight = action.payload.weight;
      })
      .addCase(authOperations.updateAvatar.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(authOperations.updateAvatar.fulfilled, (state, action) => {
        console.log('UpdateAvatar fulfield', action.payload);
        state.user.avatarURL = action.payload;
        state.isLoading = false;
      })

      .addCase(authOperations.changeGoal.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(authOperations.changeGoal.fulfilled, (state, action) => {
        state.user.goal = action.payload;
        state.isLoading = false;
      })

      .addCase(authOperations.forgotPassword.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(authOperations.forgotPassword.fulfilled, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { setRegData, setUserData, setLoadingTrue, setLoadingFalse } =
  authSlice.actions;
