import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const orderMeals = meals => {};

const fetchMeals = createAsyncThunk('meals/getMeals', async userId => {
  try {
    const { data } = await axios.get('/meals', userId);
    console.log(data);
  } catch (error) {
    console.log('Error in Register', error.response.data);
    throw error();
  }
});

const mealsOperations = {
  fetchMeals,
};

export default mealsOperations;
