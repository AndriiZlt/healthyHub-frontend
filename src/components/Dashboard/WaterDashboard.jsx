import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // eslint-disable-line no-unused-vars
import css from "./Dashboard.module.css";

const WaterDashboard = (props) => {

	const data = [
	];

	const monthNames = [
		"Jan", "Feb", "Mar", "Apr", "May", "June",
		"July", "Aug", "Sep", "Oct", "Nov", "Dec"
	];

	if (props.time === 'month') {
		for (let i = 0; i < props.numberOfDaysInMonth; i++) {
			data.push({
				time: i + 1,
				ml: 65,
			},);
		}
	}

	if (props.time === 'year') {
		for (let i = 0; i < monthNames.length; i++) {
			data.push({
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