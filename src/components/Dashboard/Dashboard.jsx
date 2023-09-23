import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios"
import authSelectors from "../../redux/auth/auth-selectors";
import arrowBackPath from "../../assets/Dashboard/arrow-left.svg";
import arrowDownPath from "../../assets/Dashboard/arrow-down.svg";
import CaloriesDashboard from "./CaloriesDashboard";
import WaterDashboard from "./WaterDashboard";
import WeightDashboard from "./WeightDashboard";
import css from "./Dashboard.module.css";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
	const [time, setTime] = useState("month");
	const [timeToggleHidden, setTimeToggleHidden] = useState(true);
	const [userData, setUserData] = useState([]) // setUserData(res.body)

	const currentDate = new Date();
	const month = currentDate.getMonth();
	const monthNames = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	];

	const lastMonth = month >= 0 ? monthNames[month] : "December";

	const year = currentDate.getFullYear();
	const firstDayOfNextMonth = new Date(year, month + 1, 1);
	firstDayOfNextMonth.setDate(firstDayOfNextMonth.getDate() - 1);
	const numberOfDaysInMonth = firstDayOfNextMonth.getDate();


	const token = useSelector(authSelectors.getToken);
	console.log(token);
	axios.defaults.baseURL = "https://andriizlt.github.io/healthyHub-frontend"
	axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	// axios.get('/api/user/current')
	// 	.then(res => console.log(res))
	// 	.catch(err => console.log(err))

	const monthData = []
	for (let i = 0; i < numberOfDaysInMonth; i++) {
		monthData.push({
			time: i + 1,
			kcal: '',
			water: '',
			weight: ''
		},);
	}

	const YearData = []
	for (let i = 0; i < monthNames.length; i++) {
		YearData.push({
			time: monthNames[i],
			kcal: '',
			water: '',
			weight: ''
		},);
	}

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
					{time === "month" ? lastMonth : year}
				</p>
			</div>
			<div className={css.dashboardBlockContent}>
				<div className={css.caloriesBlock}>
					<div className={css.blockHeading}>
						<p className={css.blockHeadingText}>Calories</p>
						<p className={css.blockAverageValue}>
							Average value:{" "}
							<span className={css.blockAverageValueSpan}>
								{/* COUNTED AVERAGE VALUE, ЗАБРАТИ 1700 */ 1700} kcal
							</span>
						</p>
					</div>
					<div className={css.dashboardContainer}>
						<div className={css.caloriesDashboard}>
							<CaloriesDashboard
								time={time}
								numberOfDaysInMonth={numberOfDaysInMonth}
								monthData={monthData}
								YearData={YearData}
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
								{/* COUNTED AVERAGE VALUE, ЗАБРАТИ 1700 */ 1700} ml
							</span>
						</p>
					</div>
					<div className={css.dashboardContainer}>
						<div className={css.waterDashboard}>
							<WaterDashboard
								time={time}
								numberOfDaysInMonth={numberOfDaysInMonth}
								monthData={monthData}
								YearData={YearData}
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
							{/* COUNTED AVERAGE VALUE, ЗАБРАТИ 70 */ 70} kg
						</span>
					</p>
				</div>
				<WeightDashboard
					time={time}
					numberOfDaysInMonth={numberOfDaysInMonth}
				/>
			</div>
		</section>
	);
};

export default Dashboard;
