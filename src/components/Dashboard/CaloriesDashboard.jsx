import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // eslint-disable-line no-unused-vars
import css from "./Dashboard.module.css";



const CaloriesDashboard = (props) => {

	const data = [
		// {
		// 	id: 1,
		// 	month: "Jan",
		// 	userGain: 80,
		// }
	];

	const monthNames = [
		"Jan", "Feb", "Mar", "Apr", "May", "June",
		"July", "Aug", "Sep", "Oct", "Nov", "Dec"
	];

	if (props.time === 'month') {
		for (let i = 0; i < props.numberOfDaysInMonth; i++) {
			data.push({
				id: i,
				time: i,
				kcal: 65,
			},);
		}
	} if (props.time === 'year') {
		for (let i = 0; i < monthNames.length; i++) {
			data.push({
				id: i,
				time: monthNames[i],
				kcal: 65,
			},);
		}
	}


	const [chartData] = useState({
		labels: data.map(item => item.time),
		datasets: [
			{
				label: 'Your Calories',
				data: data.map(item => item.kcal),
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