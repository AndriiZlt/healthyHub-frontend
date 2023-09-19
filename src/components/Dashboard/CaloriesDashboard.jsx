import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // eslint-disable-line no-unused-vars
import css from "./Dashboard.module.css";



const CaloriesDashboard = (props) => {

	const time = props.time === 'month' ? 'month' : 'year'

	const data = [
		{
			id: 1,
			month: "Jan",
			userGain: 80,
		},
		{
			id: 2,
			month: "Feb",
			userGain: 69,
		},
		{
			id: 3,
			month: "Mar",
			userGain: 59,
		},
		{
			id: 4,
			month: "Apr",
			userGain: 65,
		},
		{
			id: 5,
			month: "May",
			userGain: 80,
		},
		{
			id: 6,
			month: "June",
			userGain: 69,
		},
		{
			id: 7,
			month: "July",
			userGain: 59,
		},
		{
			id: 8,
			month: "Aug",
			userGain: 65,
		},
		{
			id: 9,
			month: "Sep",
			userGain: 80,
		},
		{
			id: 10,
			month: "Oct",
			userGain: 69,
		},
		{
			id: 11,
			month: "Nov",
			userGain: 59,
		},
		{
			id: 12,
			month: "Dec",
			userGain: 65,
		},
	];

	// for (let i = 0; i < props.numberOfDaysInMonth; i++) {
	// 	data.push({
	// 		id: i,
	// 		month: "Dec",
	// 		userGain: 65,
	// 	});
	// }

	const [chartData] = useState({
		labels: data.map(item => item.month),
		datasets: [
			{
				label: 'Your Calories',
				data: data.map(item => item.userGain),
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