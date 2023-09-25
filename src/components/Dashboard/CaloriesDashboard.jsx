import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from 'chart.js/auto'; // eslint-disable-line no-unused-vars
import useDashboardMonth from 'helpers/useDashboardMonth';
// import useDashboardYear from "helpers/useDashboardYear";
import css from './Dashboard.module.css';

ChartJS.register(
  LineElement,
  CategoryScale, //x axis
  LinearScale, //y axis
  PointElement,
  Legend,
  Tooltip
);

const CaloriesDashboard = props => {
  const userMonthData = useDashboardMonth();
  // const chart = [];

  // for (let i = 1; i < 32; i++) {
  //   chart.forEach(day => {
  //     if (day.date === i) {
  //       chart.push(day);
  //     }
  //   });
  //   if chart[i]
  // }

  // console.log('userMonthData', userMonthData);
  const dashboardMonthData = [];
  const MonthCaloriesArray = [];
  function calculateMonthAverage(array) {
    let sum = 0;
    MonthCaloriesArray.forEach(element => {
      sum += parseFloat(element);
    });
    props.setAverageCalories(sum / array.length);
  }

  for (let day = 1; day <= props.numberOfDaysInMonth; day++) {
    let found = false;

    for (const userDayObj of userMonthData) {
      const userDayDate = new Date(userDayObj.date);
      const dayOfMonth = userDayDate.getDate();
      if (dayOfMonth === day) {
        dashboardMonthData.push({
          date: day,
          kcal: userDayObj.calories,
        });
        if (userDayObj.calories !== 0 && userDayObj.calories !== '0') {
          MonthCaloriesArray.push(userDayObj.calories.toString());
        }
        found = true;
        break;
      }
    }
    setTimeout(() => {
      calculateMonthAverage(MonthCaloriesArray);
    }, 0);

    if (!found) {
      dashboardMonthData.push({
        date: day,
        kcal: 0,
      });
    }
  }

  // console.log(dashboardMonthData);

  // const userYearData = useDashboardYear();

  // const dashboardYearData = []
  // const YearCaloriesArray = []

  // function calculateYearAverage(array) {
  // 	let sum = 0;
  // 	DailyCaloriesArray.forEach((element) => {
  // 		sum += element;
  // 	});
  // 	return sum / array.length;
  // }

  // props.setAverageCalories(calculateYearAverage(DailyCaloriesArray))

  // for (let month = 1; month <= numberOfDaysInMonth; month++) {
  // 	let found = false;

  // 	for (const userDayObj of userMonthData) {
  // 		const userDataDate = new Date(userDayObj.date);
  // 		const monthOfYear = userDataDate.getDate();
  // 		if (monthOfYear === month) {
  // 			dashboardYearData.push({
  // 				date: month,
  // 				kcal: parseFloat(userDayObj.calories),
  // 			});
  // 		YearCaloriesArray.push(parseFloat(userDayObj.calories))
  // 		found = true;
  // 		break;
  // 		}
  // 	}

  // 	if (!found) {
  // 		dashboardYearData.push({
  // 			date: month,
  // 			kcal: 0,
  // 			ml: 0,
  // 			kg: 0,
  // 		});
  // 	}
  // }

  const [chartData] = useState({
    labels: userMonthData.map(item => item.date),
    datasets: [
      {
        data: userMonthData.map(item => item.calories),
        // backgroundColor: '#E3FFA8',
        borderColor: '#E3FFA8',
        borderWidth: 1,

        tension: 0.4,
        pointBorderWidth: 0,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#E3FFA8',
        pointBorderHoverColor: '#E3FFA8',
        // legend: false,
        hoverBackgroundColor: '#E3FFA8',
      },
    ],
  });

  const options = {
    maintainAspectRatio: false,
    margin: 0,
    plugins: {
      tooltip: {
        padding: {
          top: 8,
          bottom: 8,
          left: 6,
          right: 6,
        },
        displayTitle: false,
        displayColors: false,
        backgroundColor: '#0F0F0F',
        titleAlign: 'center',
        titleMarginBottom: 2,
        bodyColor: '#B6B6B6',
        yAlign: 'bottom',
        bodyAlign: 'center',
        bodyFont: {
          size: 14,
          weight: 500,
        },
        titleFont: {
          size: 32,
          color: '#FFFFFF',
          weight: 500,
        },
        cornerRadius: 8,
        callbacks: {
          title: function (item) {
            return item[0].dataset.data[item[0].dataIndex];
          },
          label: function (item) {
            return 'calories';
          },
        },
      },
      legend: { display: false },
      fill: false,
    },

    layout: {
      margin: {
        left: 0,
        right: 0,
      },
      padding: {
        left: 0,
        right: 0,
      },
    },
    scales: {
      y: {
        min: 0,
        border: {
          display: true,
        },
        grid: {
          color: '#292928',
        },
        ticks: {
          stepSize: 1000,
          min: 0,
          max: 3000,
          color: '#B6B6B6',
          font: {
            size: 10,
          },
          callback: function (value, index, ticks) {
            const value2 = this.getLabelForValue(value);
            if (value2 === '0') {
              return '0';
            }

            return `${value / 1000}K`;
          },
        },
      },
      x: {
        stepSize: 1000,
        min: 0,
        border: {
          display: true,
        },
        grid: {
          color: '#292928',
        },
        ticks: {
          maxTickLimit: 1000,
          color: '#B6B6B6',
          font: {
            size: 10,
          },
        },
      },
    },
  };

  return (
    <div className={css.dashboardContent}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default CaloriesDashboard;
