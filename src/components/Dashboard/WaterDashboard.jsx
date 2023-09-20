
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // eslint-disable-line no-unused-vars
import css from "./Dashboard.module.css";

const WaterDashboard = (props) => {

	// const data = [
	// 	{
	// 		id: 1,
	// 		year: 2016,
	// 		userGain: 80000,
	// 		userLost: 823,
	// 	},
	// 	{
	// 		id: 2,
	// 		year: 2017,
	// 		userGain: 60000,
	// 		userLost: 700,
	// 	},
	// 	{
	// 		id: 3,
	// 		year: 2018,
	// 		userGain: 5000,
	// 		userLost: 900,
	// 	},
	// 	{
	// 		id: 4,
	// 		year: 2019,
	// 		userGain: 90000,
	// 		userLost: 823,
	// 	},
	// ];

	const data = [
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
				ml: 65,
			},);
		}
	} if (props.time === 'year') {
		for (let i = 0; i < monthNames.length; i++) {
			data.push({
				id: i,
				time: monthNames[i],
				ml: 65,
			},);
		}
	}

	const [chartData] = useState({
		labels: data.map(item => item.time),
		datasets: [
			{
				label: 'Water consumption',
				data: data.map(item => item.ml),
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