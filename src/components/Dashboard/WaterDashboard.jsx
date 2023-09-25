import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // eslint-disable-line no-unused-vars
import useDashboardMonth from 'helpers/useDashboardMonth';
// import useDashboardYear from "helpers/useDashboardYear";
import css from './Dashboard.module.css';

const WaterDashboard = props => {
  const userMonthData = useDashboardMonth();
  // const userYearData = useDashboardYear();

  const dashboardMonthData = [];
  const MonthWaterIntakeArray = [];

  function calculateMonthAverage(array) {
    let sum = 0;
    MonthWaterIntakeArray.forEach(element => {
      sum += parseFloat(element);
    });
    props.setAverageWater(sum / array.length);
  }

  for (let day = 1; day <= props.numberOfDaysInMonth; day++) {
    let found = false;

    for (const userDayObj of userMonthData) {
      const userDayDate = new Date(userDayObj.date);
      const dayOfMonth = userDayDate.getDate();
      if (dayOfMonth === day) {
        dashboardMonthData.push({
          date: day,
          ml: userDayObj.water,
        });
        if (userDayObj.water !== 0 && userDayObj.water !== '0') {
          MonthWaterIntakeArray.push(userDayObj.water.toString());
        }
        found = true;
        break;
      }
    }
    setTimeout(() => {
      calculateMonthAverage(MonthWaterIntakeArray);
    }, 0);
    if (!found) {
      dashboardMonthData.push({
        date: day,
        ml: 0,
      });
    }
  }

  // console.log(dashboardMonthData);

  // const dashboardYearData = []
  // for (let month = 1; month <= props.numberOfDaysInMonth; month++) {
  // 	let found = false;

  // 	for (const userDayObj of userMonthData) {
  // 		const userDataDate = new Date(userDayObj.date);
  // 		const monthOfYear = userDataDate.getDate();
  // 		if (monthOfYear === month) {
  // 			dashboardYearData.push({
  // 				date: month,
  // 				kcal: parseFloat(userDayObj.calories),
  // 				ml: parseFloat(userDayObj.water),
  // 				kg: parseFloat(userDayObj.weight),
  // 			});
  // 			found = true;
  // 			break;
  // 		}
  // 	}

  // 	if (!found) {
  // 		dashboardYearData.push({
  // 			date: month,
  // 			ml: 0,
  // 		});
  // 	}
  // }

  // console.log(dashboardMonthData);

  const [chartData] = useState({
    labels: dashboardMonthData.map(item => item.date - 1),
    datasets: [
      {
        // label: 'Your water consumption',
        data: dashboardMonthData.map(item => item.ml),
        // backgroundColor: '#006eff',
        borderColor: '#E3FFA8',
        borderWidth: 1,
        hoverOffset: 4,
        tension: 0.4,
        pointBorderWidth: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#E3FFA8',
        pointBorderHoverColor: '#E3FFA8',
        pointHitRadius: 10,
        hoverBackgroundColor: '#E3FFA8',
        fill: false,
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
            return 'milliliters';
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
        // type: '1K',
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
            return `${value / 1000}L`;
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

export default WaterDashboard;
