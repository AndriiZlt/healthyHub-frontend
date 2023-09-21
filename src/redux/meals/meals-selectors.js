const getCurrentDay = state => state.meals.today;
const getMonth = state => state.meals.month;
const getYear = state => state.meals.year;

const mealsSelectors = {
  getCurrentDay,
  getMonth,
  getYear,
};

export default mealsSelectors;
