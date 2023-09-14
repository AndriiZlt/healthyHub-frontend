import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log('Error in Register', error.response.data);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log('Error in Login', error.response.data);
  }
});

const logOut = createAsyncThunk('/users/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log('error in loging out', error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  '/user/refresh',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;
    if (!persistedToken) {
      return {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
      };
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log('error in fetching current user', error.message);
    }
  }
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default authOperations;
