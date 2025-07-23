import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function UsageChart({ data }) {
  const labels = data.map((d) => d.date);
  const values = data.map((d) => d.occupancy);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Occupancy (%)',
        data: values,
        borderColor: '#004e92',
        backgroundColor: 'rgba(0, 78, 146, 0.2)',
        tension: 0.3,
        pointRadius: 2,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Line data={chartData} />
    </div>
  );
}
