import React, { useState } from "react";
import arrowBackPath from "../../assets/Dashboard/arrow-left.svg"
import arrowDownPath from "../../assets/Dashboard/arrow-down.svg"
// import CaloriesDashboard from "./CaloriesDashboard";
// import WaterDashboard from "./WaterDashboard";
import css from "./Dashboard.module.css";

const Dashboard = () => {
	const [time, setTime] = useState('month')
	const [timeToggleHidden, setTimeToggleHidden] = useState(true)


	const handleDateQueryButtonClick = (event) => {
		event.currentTarget.classList.toggle(css.arrowDownRotated);
		setTimeToggleHidden(!timeToggleHidden);
	};

	const handleToggleDashboardTime = () => {
		setTimeToggleHidden(!timeToggleHidden);
		return time === 'month' ? setTime('year') : setTime('month')
		// return time === 'month' ? 'year' : 'month';    In this case, 'setTime' is assigned a value but never used, which will result in a build error.
	}

	const currentDate = new Date();
	currentDate.setMonth(currentDate.getMonth() - 1);
	const previousMonth = currentDate.getMonth();
	const monthNames = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	return <section className={css.dashboardSection}>
		<div className={css.dashboardHeading}>
			<div className={css.dashboardHeading}>
				<button className={css.goBackButton}>
					<a href="/healthyHub-frontend/main" className={css.goBackButtonLink}><img src={arrowBackPath} alt="arrow back" className={css.arrowBack} /></a>
				</button>
				<div className={css.dateQueryContainer}>
					<div className={css.dateQuery}>
						<p className={css.dateQueryText}>Last {time}</p>
						{!timeToggleHidden && (
							<button className={css.dateQuerySecondaryButton} onClick={handleToggleDashboardTime}>
								Last {time === 'month' ? 'year' : 'month'}
							</button>
						)}
						<button className={css.dateQueryButton} onClick={handleDateQueryButtonClick}><img src={arrowDownPath} alt="arrow up" className={css.arrowDown} /></button>
					</div>
				</div>
			</div>
			<p className={css.dashboardMonth}>{monthNames[previousMonth]}</p>
		</div>
		<div className={css.dashboardContent}>
			<div className={css.caloriesBlock}>
				<div className={css.blockHeading}>
					<p className={css.blockHeadingText}>Calories</p>
					<p className={css.blockAverageValue}>Average value: <span className={css.blockAverageValueSpan}>{/* COUNTED AVERAGE VALUE, ЗАБРАТИ 1700 */1700} kcal</span></p>
				</div>
				<div className={css.dashboardContainer}>
					<div className={css.caloriesDashboard}>{/*<CaloriesDashboard />*/}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
				</div>
			</div>
			<div className={css.waterBlock}>
				<div className={css.blockHeading}>
					<p className={css.blockHeadingText}>Water</p>
					<p className={css.blockAverageValue}>Average value: <span className={css.blockAverageValueSpan}>{/* COUNTED AVERAGE VALUE, ЗАБРАТИ 1700 */1700} ml</span></p>
				</div>
				<div className={css.dashboardContainer}>
					<div className={css.waterDashboard}>{/*<WaterDashboard />*/}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
				</div>
			</div>
		</div>
		<div className={css.weightBlock}>
			<div className={css.blockHeading}>
				<p className={css.blockHeadingText}>Weight</p>
				<p className={css.blockAverageValue}>Average value: <span className={css.blockAverageValueSpan}>{/* COUNTED AVERAGE VALUE, ЗАБРАТИ 68 */68} kg</span></p>
			</div>
			<div className={css.dashboardContainer}>
				<div className={css.weightDashboard}>{/*<WeightDashboard />*/}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </div>
			</div>
		</div>
	</section>;
};

export default Dashboard;
