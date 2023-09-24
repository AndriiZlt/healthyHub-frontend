import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mealsOperations from 'redux/meals/meals-operations';
import mealsSelectors from 'redux/meals/meals-selectors';

const calculateMonth = data => {
	const result = {
		breakfast: { calories: 0 },
		lunch: { calories: 0 },
		dinner: { calories: 0 },
		snack: { calories: 0 },
		date: '',
		calories: 0,
		water: 0,
	};
	const meals = ['breakfast', 'lunch', 'dinner', 'snack'];
	for (const meal of meals) {
		for (const record in data[meal]) {
			for (const stat in data[meal][record]) {
				if (stat !== '_id' && stat !== 'name') {
					result[meal][stat] += data[meal][record][stat];
				}
			}
		}
	}
	for (const meal of meals) {
		for (const nutrient in result[meal]) {
			result[nutrient] += result[meal][nutrient];
		}
	}
	result.date = data.date;
	result.calories = data.calories
	result.water = data.water;
	result.weight = data.weight;
	return result;
};

const useDashboardMonth = () => {
	const chart = [];
	const dispatch = useDispatch();
	const month = useSelector(mealsSelectors.getMonth);

	useEffect(() => {
		dispatch(mealsOperations.fetchMonth());
	}, [dispatch]);

	for (const day in month) {
		const result = calculateMonth(month[day]);

		chart.push({
			date: result.date || "0",
			calories: result.calories || "0",
			water: result.water || "0",
			weight: result.weight || "0",
		});
	}
	return chart;
};

export default useDashboardMonth;
