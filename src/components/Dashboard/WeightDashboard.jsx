import React from 'react';
import useDashboardMonth from "helpers/useDashboardMonth";
import useDashboardYear from "helpers/useDashboardYear";
import css from "./Dashboard.module.css";

const WeightDashboard = (props) => {

	const userMonthData = useDashboardMonth();
	const userYearData = useDashboardYear();
	console.log(userYearData);

	const MonthWeightsArray = []
	function calculateMonthAverage(array) {
		let sum = 0;
		MonthWeightsArray.forEach((element) => {
			sum += parseFloat(element);
		});
		props.setAverageWeight(sum / array.length)
	}

	const days = []

	for (let day = 1; day <= props.numberOfDaysInMonth; day++) {
		let found = false;

		for (const userDayObj of userMonthData) {
			const userDayDate = new Date(userDayObj.date);
			const dayOfMonth = userDayDate.getDate();
			if (dayOfMonth === day) {
				days.push(<li key={day}>
					<p className={css.weightDashboardKg}>{userDayObj.weight}</p>
					<p className={css.weightDashboardDate}>{day}</p>
				</li>);
				if (userDayObj.weight !== 0 && userDayObj.weight !== '0') {
					MonthWeightsArray.push(userDayObj.weight.toString())
				}
				found = true;
				break;
			}
		}
		setTimeout(() => {
			calculateMonthAverage(MonthWeightsArray)
		}, 0)
		if (!found) {
			days.push(<li key={day}>
				<p className={css.weightDashboardKg}>0</p>
				<p className={css.weightDashboardDate}>{day}</p>
			</li>);
		}
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
