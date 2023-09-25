import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // eslint-disable-line no-unused-vars
import useDashboardMonth from "helpers/useDashboardMonth";
// import useDashboardYear from "helpers/useDashboardYear";
import css from "./Dashboard.module.css";

const WaterDashboard = (props) => {

	const userMonthData = useDashboardMonth();
	// const userYearData = useDashboardYear();

	const dashboardMonthData = []
	const MonthWaterIntakeArray = []

	function calculateMonthAverage(array) {
		let sum = 0;
		MonthWaterIntakeArray.forEach((element) => {
			sum += parseFloat(element);
		});
		props.setAverageWater(sum / array.length)
	}

	for (let day = 1; day <= props.numberOfDaysInMonth; day++) {
		let found = false;

		for (const userDayObj of userMonthData) {
			const userDayDate = new Date(userDayObj.date);
			const dayOfMonth = userDayDate.getDate();
			if (dayOfMonth === day) {
				dashboardMonthData.push({
					date: day,
					ml: userDayObj.water,
				});
				if (userDayObj.water !== 0 && userDayObj.water !== '0') {
					MonthWaterIntakeArray.push(userDayObj.water.toString())
				}
				found = true;
				break;
			}
		}
		setTimeout(() => {
			calculateMonthAverage(MonthWaterIntakeArray)
		}, 0)
		if (!found) {
			dashboardMonthData.push({
				date: day,
				ml: 0,
			});
		}
	}

	// console.log(dashboardMonthData);

	// const dashboardYearData = []
	// for (let month = 1; month <= props.numberOfDaysInMonth; month++) {
	// 	let found = false;

	// 	for (const userDayObj of userMonthData) {
	// 		const userDataDate = new Date(userDayObj.date);
	// 		const monthOfYear = userDataDate.getDate();
	// 		if (monthOfYear === month) {
	// 			dashboardYearData.push({
	// 				date: month,
	// 				kcal: parseFloat(userDayObj.calories),
	// 				ml: parseFloat(userDayObj.water),
	// 				kg: parseFloat(userDayObj.weight),
	// 			});
	// 			found = true;
	// 			break;
	// 		}
	// 	}

	// 	if (!found) {
	// 		dashboardYearData.push({
	// 			date: month, 
	// 			ml: 0, 
	// 		});
	// 	}
	// }

	// console.log(dashboardMonthData);

	const [chartData] = useState({
		labels: dashboardMonthData.map(item => item.date - 1),
		datasets: [
			{
				label: 'Your water consumption',
				data: dashboardMonthData.map(item => item.ml),
				backgroundColor: '#006eff',
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
}


export default WaterDashboard;