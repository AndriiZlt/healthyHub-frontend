// import React from 'react';
import { useSelector } from 'react-redux';
import mealsSelectors from 'redux/meals/meals-selectors';

const useCalculatedData = () => {
  const data = useSelector(mealsSelectors.getCurrentDay);

  const result = {
    breakfast: { carbonohidrates: 0, protein: 0, fat: 0, calories: 0 },
    lunch: { carbonohidrates: 0, protein: 0, fat: 0, calories: 0 },
    dinner: { carbonohidrates: 0, protein: 0, fat: 0, calories: 0 },
    snack: { carbonohidrates: 0, protein: 0, fat: 0, calories: 0 },
    carbonohidrates: 0,
    protein: 0,
    fat: 0,
    calories: 0,
  };
  const meals = ['breakfast', 'lunch', 'dinner', 'snack'];
  for (const item of meals) {
    for (const record of data[item]) {
      for (const stat in record) {
        if (stat !== '_id' && stat !== 'name') {
          result[item][stat] += record[stat];
        }
      }
    }
  }
  for (const meal of meals) {
    for (const nutrient in result[meal]) {
      result[nutrient] += result[meal][nutrient];
    }
  }
  console.log('calculated result=>', result);
  return result;
};

export default useCalculatedData;
