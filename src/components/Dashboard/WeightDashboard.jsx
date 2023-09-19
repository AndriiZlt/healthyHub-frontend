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

	const time = props.time

	if (time === 'month') {
		return <div className={css.WeightDashboardContainer}>
			<ul className={css.weightDashboardList}>
				{days}
			</ul>
		</div>;
	} else {
		return <div className={[css.dashboardContainer, css.WeightDashboardContainer]}>
			<ul className={css.weightDashboardList} style={{ justifyContent: 'space-between', padding: '24px 24px 36px 24px' }}>
				<li>
					<p className={css.weightDashboardKg}>{/* SERVER DATA, ЗАБРАТИ 70 */70}</p>
					<p className={css.weightDashboardDate}>January</p>
				</li>
				<li>
					<p className={css.weightDashboardKg}>{/* SERVER DATA, ЗАБРАТИ 70 */70}</p>
					<p className={css.weightDashboardDate}>February</p>
				</li>
				<li>
					<p className={css.weightDashboardKg}>{/* SERVER DATA, ЗАБРАТИ 70 */70}</p>
					<p className={css.weightDashboardDate}>March</p>
				</li>
				<li>
					<p className={css.weightDashboardKg}>{/* SERVER DATA, ЗАБРАТИ 70 */70}</p>
					<p className={css.weightDashboardDate}>April</p>
				</li>
				<li>
					<p className={css.weightDashboardKg}>{/* SERVER DATA, ЗАБРАТИ 70 */70}</p>
					<p className={css.weightDashboardDate}>May</p>
				</li>
				<li>
					<p className={css.weightDashboardKg}>{/* SERVER DATA, ЗАБРАТИ 70 */70}</p>
					<p className={css.weightDashboardDate}>June</p>
				</li>
				<li>
					<p className={css.weightDashboardKg}>{/* SERVER DATA, ЗАБРАТИ 70 */70}</p>
					<p className={css.weightDashboardDate}>July</p>
				</li>
				<li>
					<p className={css.weightDashboardKg}>{/* SERVER DATA, ЗАБРАТИ 70 */70}</p>
					<p className={css.weightDashboardDate}>August</p>
				</li>
				<li>
					<p className={css.weightDashboardKg}>{/* SERVER DATA, ЗАБРАТИ 70 */70}</p>
					<p className={css.weightDashboardDate}>September</p>
				</li>
				<li>
					<p className={css.weightDashboardKg}>{/* SERVER DATA, ЗАБРАТИ 70 */70}</p>
					<p className={css.weightDashboardDate}>October</p>
				</li>
				<li>
					<p className={css.weightDashboardKg}>{/* SERVER DATA, ЗАБРАТИ 70 */70}</p>
					<p className={css.weightDashboardDate}>November</p>
				</li>
				<li>
					<p className={css.weightDashboardKg}>{/* SERVER DATA, ЗАБРАТИ 70 */70}</p>
					<p className={css.weightDashboardDate}>December</p>
				</li>
			</ul>
		</div>;
	}
};

export default WeightDashboard;
