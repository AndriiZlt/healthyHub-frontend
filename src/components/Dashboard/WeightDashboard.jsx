import React from 'react';
import css from "./Dashboard.module.css";

const WeightDashboard = (props) => {

	const days = [];
	for (let i = 0; i < props.numberOfDaysInMonth; i++) {
		days.push(<li key={i}>
			<p className={css.weightDashboardKg}>{/* SERVER DATA, ЗАБРАТИ 70 */70}</p>
			<p className={css.weightDashboardDate}>{i + 1}</p>
		</li>);
	}


	const months = []
	const monthNames = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];
	for (let i = 0; i < monthNames.length; i++) {
		months.push(<li key={i}>
			<p className={css.weightDashboardKg}>{/* SERVER DATA, ЗАБРАТИ 70 */70}</p>
			<p className={css.weightDashboardDate}>{monthNames[i]}</p>
		</li>);
	}


	const time = props.time
	if (time === 'month') {
		return <div className={css.WeightDashboardContainer}>
			<ul className={css.weightDashboardList}>
				{days}
			</ul>
		</div>;
	}

	if (time === 'year') {
		return <div className={[css.dashboardContainer, css.WeightDashboardContainer]}>
			<ul className={css.weightDashboardList} style={{ justifyContent: 'space-between', padding: '24px 24px 36px 24px' }}>
				{months}
			</ul>
		</div>;
	}
};

export default WeightDashboard;
