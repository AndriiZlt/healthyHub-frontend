import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // eslint-disable-line no-unused-vars
import css from "./Dashboard.module.css";

const data = [
	{
		id: 1,
		year: 2016,
		userGain: 80000,
		userLost: 823,
	},
	{
		id: 2,
		year: 2017,
		userGain: 60000,
		userLost: 700,
	},
	{
		id: 3,
		year: 2018,
		userGain: 5000,
		userLost: 900,
	},
	{
		id: 4,
		year: 2019,
		userGain: 90000,
		userLost: 823,
	},
];
const WaterDashboard = () => {
	const [chartData] = useState({
		labels: data.map(item => item.year),
		datasets: [
			{
				label: 'Water consumption',
				data: data.map(item => item.userGain),
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