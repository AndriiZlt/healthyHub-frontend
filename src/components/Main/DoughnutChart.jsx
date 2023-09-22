import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // eslint-disable-line no-unused-vars

const data = [
  {
    id: 1,
    year: 2016,
    userGain: 100,
    userLost: 823,
  },
  {
    id: 2,
    year: 2017,
    userGain: 400,
    userLost: 900,
  },
  // {
  //   id: 3,
  //   year: 2018,
  //   userGain: 4000,
  //   userLost: 900,
  // },
  // {
  //   id: 4,
  //   year: 2019,
  //   userGain: 30000,
  //   userLost: 823,
  // },
];

const DoughnutChart = () => {
  const [chartData] = useState({
    // labels: data.map(item => item.year),
    datasets: [
      {
        label: 'users gained',
        data: data.map(item => item.userGain),
        backgroundColor: [
          'rgb(69, 255, 188)',
          'rgba(54, 163, 235, 0)',
          // 'rgb(255, 205, 86)',
        ],
        borderColor: 'red',
        borderRadius: [180, 0],
        borderWidth: 0,
        hoverOffset: 0,
        tension: 0.5,
        // clip: { left: 55, top: true, right: -2, bottom: 0 },
        // borderAlign: 'right',
      },
    ],
  });

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {
      // const { ctx, data } = chart;
      // ctx.save();
      // ctx.font = '30px';
    },
  };
  return (
    <div style={{ width: 400, backgroundColor: 'white' }}>
      {/* <Line data={chartData} />
      <Pie data={chartData} /> */}
      <Doughnut data={chartData} plugins={[textCenter]} />
    </div>
  );
};

export default DoughnutChart;
