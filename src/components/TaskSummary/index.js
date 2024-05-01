import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, BarElement } from 'chart.js';
import './index.css'

Chart.register(
  LinearScale,
  CategoryScale,
  BarElement
);

const TaskSummary = ({ pendingCount, progressCount, completedCount }) => {
  const chartData = {
    labels: ['Pending', 'In Progress', 'Completed'],
    datasets: [
      {
        label: 'Task Status',
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: ['rgba(255,99,132,0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 206, 86, 0.8)'],
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [pendingCount, progressCount, completedCount]
      }
    ]
  };

  return (
    <div className="chart-container" style={{ width: '50%', height: '400px',paddingBottom:'100px', }}>
      <h2 className='head'>Task Status Chart</h2>
      <Bar
        data={chartData}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }}
      />
    </div>
  );
};

export default TaskSummary;
