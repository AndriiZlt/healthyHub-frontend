import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // eslint-disable-line no-unused-vars
import css from './Dashboard.module.css';

const WaterMonthChart = props => {
  const userMonthData = [...props.userMonthData];
  // console.log('userMonthData in WATER month chart', userMonthData);
  let sum = 0;
  userMonthData.forEach(element => {
    sum += element.water;
  });
  const average = Math.floor(sum / userMonthData.length);

  const labels = [];
  for (let i = 1; i <= props.numberOfDaysInMonth; i++) {
    labels.push(i);
  }

  const [chartData] = useState({
    labels: labels,
    datasets: [
      {
        data: userMonthData.map(item => item.water),
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
    // aspectRatio: 1,
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
    <div className={css.waterBlock}>
      <div className={css.blockHeading}>
        <p className={css.blockHeadingText}>Water</p>
        <p className={css.blockAverageValue}>
          Average value:{' '}
          <span className={css.blockAverageValueSpan}>{average} ml</span>
        </p>
      </div>
      <div className={css.dashboardContainer}>
        <div className={css.waterDashboard}>
          <div className={css.dashboardContent}>
            <Line data={chartData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterMonthChart;
