const getCurrentDay = state => state.meals.today;
const getMonth = state => state.meals.month;
const getYear = state => state.meals.year;
const getTodayReady = state => state.meals.todayReady;
const getModalMealOn = state => state.meals.modalMealOn;
const getModalWaterOn = state => state.meals.modalWaterOn;
const detModalEditOn = state => state.meals.modalEditOn;

const mealsSelectors = {
  getCurrentDay,
  getMonth,
  getYear,
  getTodayReady,
  getModalMealOn,
  getModalWaterOn,
  detModalEditOn,
};

export default mealsSelectors;
