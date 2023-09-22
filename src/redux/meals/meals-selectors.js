const getCurrentDay = state => state.meals.today;
const getMonth = state => state.meals.month;
const getYear = state => state.meals.year;
const getTodayReady = state => state.meals.todayReady;

const mealsSelectors = {
  getCurrentDay,
  getMonth,
  getYear,
  getTodayReady,
};

export default mealsSelectors;
