import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // eslint-disable-line no-unused-vars

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
    userGain: 50000,
    userLost: 900,
  },
  {
    id: 3,
    year: 2018,
    userGain: 4000,
    userLost: 900,
  },
  {
    id: 4,
    year: 2019,
    userGain: 30000,
    userLost: 823,
  },
];

const Test = () => {
  const [chartData] = useState({
    labels: data.map(item => item.year),
    datasets: [
      {
        label: 'users gained',
        data: data.map(item => item.userGain),
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        borderColor: 'black',
        borderWidth: 1,
        hoverOffset: 1,
        tension: 0.5,
      },
    ],
  });
  return (
    <div style={{ width: 700, backgroundColor: 'white' }}>
      {/* <Line data={chartData} />
      <Pie data={chartData} /> */}
      <Doughnut data={chartData} />
    </div>
  );
};

export default Test;