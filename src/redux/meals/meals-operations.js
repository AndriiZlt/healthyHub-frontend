import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const orderMeals = meals => {};

const fetchMeals = createAsyncThunk('meals/getMeals', async userId => {
  try {
    const { data } = await axios.get('/meals', userId);
    console.log(data);
  } catch (error) {
    console.log('Error in Register', error.response.data);
    throw error();
  }
});

const fetchDay = createAsyncThunk('meals/fetchDay', async () => {
  console.log('Fetching day...');
  try {
    const { data } = await axios.get('/user/day');
    // console.log('data', data);
    if (data.message === 'Day not found!') {
      console.log('creating day...');
      const { data } = await axios.post('/user/day');
      console.log('data after creating', data);
      return data;
    } else {
      return data[0];
    }
  } catch (error) {
    console.log('Error in fetching day', error.response.data);
    throw error();
  }
});

const fetchMonth = createAsyncThunk('meals/fetchMonth', async () => {
  console.log('Fetching month...');
  try {
    const { data } = await axios.get('/user/day/month');
    console.log('data in fetching month', data);
    return data[0];
  } catch (error) {
    console.log('Error in fetching month', error.response.data);
    throw error();
  }
});

const fetchYear = createAsyncThunk('meals/fetchYear', async () => {
  console.log('Fetching month...');
  try {
    const { data } = await axios.get('/user/day/year');
    console.log('data in fetching year', data);
    return data[0];
  } catch (error) {
    console.log('Error in fetching year', error.response.data);
    throw error();
  }
});

const waterIntake = createAsyncThunk('meals/waterIntake', async waterIntake => {
  console.log('Sending water intake', waterIntake);
  try {
    const { data } = await axios.patch('/user/day/water', waterIntake);
    return data;
  } catch (error) {
    console.log('Error in water intake sending', error.response.data);
    throw error();
  }
});

const mealsOperations = {
  fetchMeals,
  waterIntake,
  fetchDay,
  fetchMonth,
  fetchYear,
};

export default mealsOperations;
