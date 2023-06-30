// import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
export default function CardPerDueDate() {
  const dataTask = [
    {
      id: 1,
      status: "complete",
      taskTotal: 5,
    },
    {
      id: 2,
      status: "Due soon",
      taskTotal: 10,
    },
    {
      id: 3,
      status: "Due later",
      taskTotal: 15,
    },
    {
      id: 3,
      status: "Overdue",
      taskTotal: 20,
    },
    {
      id: 3,
      status: "No due date",
      taskTotal: 32,
    },
  ];

  const labels = dataTask.map(({ status }) => status);
  const x = dataTask.map(({ taskTotal }) => taskTotal);

  const data = {
    labels: labels, //["sprint1","sprint2","sprint3"]
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: x, //[5,10,20]
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  const LineChart = () => {
    return (
      <div>
        <Bar data={data} options={options} />
      </div>
    );
  };

  return <div>{LineChart()}</div>;
}
