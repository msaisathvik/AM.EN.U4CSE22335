import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const StockChart = ({ data, average }) => {
  const chartData = {
    labels: data.map((entry) => new Date(entry.lastUpdatedAt).toLocaleTimeString()),
    datasets: [
      {
        label: 'Price',
        data: data.map((entry) => entry.price),
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Average',
        data: data.map(() => average),
        borderColor: 'red',
        borderDash: [5, 5],
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default StockChart;
