import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import arrowBackPath from "../../assets/Dashboard/arrow-left.svg";
import arrowDownPath from "../../assets/Dashboard/arrow-down.svg";
import CaloriesDashboard from "./CaloriesDashboard";
import WaterDashboard from "./WaterDashboard";
import WeightDashboard from "./WeightDashboard";
import css from "./Dashboard.module.css";

const Dashboard = () => {
	const [time, setTime] = useState("month");
	const [timeToggleHidden, setTimeToggleHidden] = useState(true);
	const [averageCalories, setAverageCalories] = useState(0);
	const [averageWater, setAverageWater] = useState(0);
	const [averageWeight, setAverageWeight] = useState(0);



	const date = new Date();
	const monthNames = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];
	const calculateMonth = date.getMonth();
	const lastMonth = calculateMonth >= 0 ? monthNames[calculateMonth] : "December";
	const calculateYear = date.getFullYear();
	const firstDayOfNextMonth = new Date(calculateYear, calculateMonth + 1, 1);
	firstDayOfNextMonth.setDate(firstDayOfNextMonth.getDate() - 1);
	const numberOfDaysInMonth = firstDayOfNextMonth.getDate();

	const handleDateQueryButtonClick = () => {
		setTimeToggleHidden(!timeToggleHidden);
	};

	const handleToggleDashboardTime = () => {
		setTimeToggleHidden(true);
		setTime(prevTime => (prevTime === "month" ? "year" : "month"));
	};

	return (
		<section className={css.dashboardSection}>
			<div className={css.dashboardHeading}>
				<div className={css.dashboardDateQuery}>
					<button className={css.goBackButton}>
						<NavLink to="/main" className={css.goBackButtonLink}>
							<img
								src={arrowBackPath}
								alt="arrow back"
								className={css.arrowBack}
							/>
						</NavLink>
					</button>
					<div className={css.dateQueryContainer}>
						<div className={css.dateQuery}>
							<p className={css.dateQueryText}>Last {time}</p>
							{!timeToggleHidden && (
								<button
									className={css.dateQuerySecondaryButton}
									onClick={handleToggleDashboardTime}
								>
									Last {time === "month" ? "year" : "month"}
								</button>
							)}
							<button
								className={css.dateQueryButton}
								onClick={handleDateQueryButtonClick}
							>
								<img
									src={arrowDownPath}
									alt="arrow up"
									className={css.arrowDown}
									style={{
										transform: !timeToggleHidden
											? "rotate(0deg)"
											: "rotate(180deg)",
									}}
								/>
							</button>
						</div>
					</div>
				</div>
				<p className={css.dashboardMonth}>
					{time === "month" ? lastMonth : calculateYear}
				</p>
			</div>
			<div className={css.dashboardBlockContent}>
				<div className={css.caloriesBlock}>
					<div className={css.blockHeading}>
						<p className={css.blockHeadingText}>Calories</p>
						<p className={css.blockAverageValue}>
							Average value:{" "}
							<span className={css.blockAverageValueSpan}>
								{averageCalories} kcal
							</span>
						</p>
					</div>
					<div className={css.dashboardContainer}>
						<div className={css.caloriesDashboard}>
							<CaloriesDashboard
								time={time}
								numberOfDaysInMonth={numberOfDaysInMonth}
								setAverageCalories={setAverageCalories}
							/>
						</div>
					</div>
				</div>
				<div className={css.waterBlock}>
					<div className={css.blockHeading}>
						<p className={css.blockHeadingText}>Water</p>
						<p className={css.blockAverageValue}>
							Average value:{" "}
							<span className={css.blockAverageValueSpan}>
								{averageWater} ml
							</span>
						</p>
					</div>
					<div className={css.dashboardContainer}>
						<div className={css.waterDashboard}>
							<WaterDashboard
								time={time}
								numberOfDaysInMonth={numberOfDaysInMonth}
								setAverageWater={setAverageWater}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={css.weightBlock}>
				<div className={css.blockHeading}>
					<p className={css.blockHeadingText}>Weight</p>
					<p className={css.blockAverageValue}>
						Average value:{" "}
						<span className={css.blockAverageValueSpan}>
							{averageWeight} kg
						</span>
					</p>
				</div>
				<WeightDashboard
					time={time}
					numberOfDaysInMonth={numberOfDaysInMonth}
					setAverageWeight={setAverageWeight}
				/>
			</div>
		</section>
	);
};

export default Dashboard;
