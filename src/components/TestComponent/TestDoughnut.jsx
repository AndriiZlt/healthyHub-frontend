import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // eslint-disable-line no-unused-vars

const data = [
  {
    percentage: 50,
  },
  {
    percentage: 50,
  },
];

const Test = () => {
  const [chartData] = useState({
    datasets: [
      {
        data: data.map(item => item.percentage),
        backgroundColor: ['rgb(69, 255, 188)', 'rgba(54, 163, 235, 0)'],
        borderColor: 'red',
        borderRadius: [180, 0],
        borderWidth: 0,
        hoverOffset: 0,
        tension: 2,
        // clip: { left: 55, top: true, right: -2, bottom: 0 },
        // borderAlign: 'right',
      },
    ],
  });

  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart, args, pluginOptions) {},
  };
  return (
    <div style={{ width: 400, backgroundColor: 'white' }}>
      <Doughnut data={chartData} plugins={[textCenter]} />
    </div>
  );
};

export default Test;
