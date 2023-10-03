import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://healthy-hub.onrender.com/api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const logIn = createAsyncThunk('auth/login', async credentials => {
  console.log('Login in with', credentials);
  try {
    const { data } = await axios.post('/user/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log('Error in Login', error.response.data);
    throw error();
  }
});

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/user/register', credentials);
    if (data) {
      console.log('Succesfull registration, login in...');
      const { email, password } = credentials;
      const { data } = await axios.post('/user/login', { email, password });
      token.set(data.token);
      console.log('token=>', data.token);
      return data;
    }
  } catch (error) {
    console.log('Error in Register', error.response.data);
    throw new Error('Error in Register');
  }
});

const logOut = createAsyncThunk('/user/logout', async (_, thunkAPI) => {
  console.log('Login out');
  try {
    const { data } = await axios.post('/user/logout');
    token.unset();
    return data;
  } catch (error) {
    console.log('error in loging out', error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  '/user/refresh',
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.user.token;
    if (!persistedToken) {
      console.log('No user');
      return {
        email: null,
        name: null,
      };
    }
    token.set(persistedToken);
    try {
      const response = await axios.get('/user/current');
      console.log('status of fetching current user:', response.status);

      return response;
    } catch (error) {
      console.log('error in fetching current user', error.message);
    }
  }
);

const checkEmail = createAsyncThunk('user/checkEmail', async credentials => {
  try {
    const response = await axios.post('/user/check-email', credentials);
    return response;
  } catch (error) {
    console.log('Error in check email', error.message);
    throw error;
  }
});

const forgotPassword = createAsyncThunk('', async credentials => {
  try {
    const response = await axios.patch('/user/change-password', credentials);
    return response;
  } catch (error) {
    console.log('Error in change password', error.message);
    throw error;
  }
});

const saveSettings = createAsyncThunk(
  'user/change-settings',
  async credentials => {
    try {
      const { data } = await axios.patch('/user/change-settings', credentials);
      return data;
    } catch (error) {
      console.log('Error in Settings', error.response.data);
      throw error();
    }
  }
);

const saveSettings2 = createAsyncThunk(
  'user/change-settings2',
  async userData => {
    try {
      const { data } = await axios.patch(
        '/user/change-settings',
        userData.setting
      );
      const token = userData.token;
      const goal = userData.goal;
      const avatarURL = userData.avatarURL;
      return { ...data, token, goal, avatarURL };
    } catch (error) {
      console.log('Error in Settings', error.response.data);
      throw error();
    }
  }
);

const updateAvatar = createAsyncThunk('user/avatars', async avatarData => {
  try {
    const { data } = await axios.post('/user/avatars', avatarData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log('data after avatar update', data);
    return data.avatarURL;
  } catch (error) {
    console.log('Error in Settings', error.response.data);
    throw error();
  }
});

const changeGoal = createAsyncThunk('user/change-goal', async credentials => {
  try {
    const { data } = await axios.patch('/user/change-goal', credentials);
    return data.goal;
  } catch (error) {
    throw error();
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  checkEmail,
  forgotPassword,
  saveSettings,
  updateAvatar,
  saveSettings2,
  changeGoal,
};

export default authOperations;
