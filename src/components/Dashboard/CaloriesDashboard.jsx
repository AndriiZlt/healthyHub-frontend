import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // eslint-disable-line no-unused-vars
import useDashboardMonth from "helpers/useDashboardMonth";
// import useDashboardYear from "helpers/useDashboardYear";
import css from "./Dashboard.module.css";

const CaloriesDashboard = (props) => {

	const userMonthData = useDashboardMonth();

	const dashboardMonthData = []
	const MonthCaloriesArray = []

	function calculateMonthAverage(array) {
		let sum = 0;
		MonthCaloriesArray.forEach((element) => {
			sum += parseFloat(element);
		});
		props.setAverageCalories(sum / array.length)
	}


	for (let day = 1; day <= props.numberOfDaysInMonth; day++) {
		let found = false;

		for (const userDayObj of userMonthData) {
			const userDayDate = new Date(userDayObj.date);
			const dayOfMonth = userDayDate.getDate();
			if (dayOfMonth === day) {
				dashboardMonthData.push({
					date: day,
					kcal: userDayObj.calories,
				});
				if (userDayObj.calories !== 0 && userDayObj.calories !== '0') {
					MonthCaloriesArray.push(userDayObj.calories.toString())
				}
				found = true;
				break;
			}
		}
		setTimeout(() => {
			calculateMonthAverage(MonthCaloriesArray)
		}, 0)

		if (!found) {
			dashboardMonthData.push({
				date: day,
				kcal: 0,
			});
		}
	}

	// console.log(dashboardMonthData);

	// const userYearData = useDashboardYear();

	// const dashboardYearData = []
	// const YearCaloriesArray = []

	// function calculateYearAverage(array) {
	// 	let sum = 0;
	// 	DailyCaloriesArray.forEach((element) => {
	// 		sum += element;
	// 	});
	// 	return sum / array.length;
	// }

	// props.setAverageCalories(calculateYearAverage(DailyCaloriesArray))

	// for (let month = 1; month <= numberOfDaysInMonth; month++) {
	// 	let found = false;

	// 	for (const userDayObj of userMonthData) {
	// 		const userDataDate = new Date(userDayObj.date);
	// 		const monthOfYear = userDataDate.getDate();
	// 		if (monthOfYear === month) {
	// 			dashboardYearData.push({
	// 				date: month,
	// 				kcal: parseFloat(userDayObj.calories), 
	// 			});
	// 		YearCaloriesArray.push(parseFloat(userDayObj.calories))
	// 		found = true;
	// 		break;
	// 		}
	// 	}

	// 	if (!found) {
	// 		dashboardYearData.push({
	// 			date: month,
	// 			kcal: 0,
	// 			ml: 0,
	// 			kg: 0,
	// 		});
	// 	}
	// }

	// console.log(dashboardMonthData);
	const [chartData] = useState({
		labels: dashboardMonthData.map(item => item.date),
		datasets: [
			{
				label: 'Your Calories',
				data: dashboardMonthData.map(item => item.kcal),
				backgroundColor: '#ff0d00',
				borderColor: '#E3FFA8',
				borderWidth: 1,
				hoverOffset: 4,
				tension: 0.3,
			},
		],
	});
	return (
		<div className={css.dashboardContent}>
			<Line data={chartData} />
		</div>
	);

};

export default CaloriesDashboard;