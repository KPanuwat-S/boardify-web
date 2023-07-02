// import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
export default function CardPerLabel() {
  const dataTask = [
    {
      id: 1,
      labelName: "S",
      taskTotal: 3,
    },
    {
      id: 2,
      labelName: "M",
      taskTotal: 2,
    },
    {
      id: 3,
      labelName: "L",
      taskTotal: 8,
    },
  ];

  const labels = dataTask.map(({ labelName }) => labelName);
  const x = dataTask.map(({ taskTotal }) => taskTotal);

  const data = {
    labels: labels, //["sprint1","sprint2","sprint3"]
    datasets: [
      {
        // label: "My First dataset",
        backgroundColor: "#44546F",
        borderColor: "rgb(255, 99, 132)",
        barPercentage: 0.8,

        // categoryPercentage: 1,
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
    responsive: true,
    maintainAspectRatio: false,
    borderRadius: "5",
    minRotation: "10",
    scales: {
      y: {
        beginAtZero: true,
        max: 36,
        min: 0,
        ticks: {
          stepSize: 9,
        },

        border: {
          dash: [1, 3, 0],
          display: false,
          color: "red",
        },
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          color: "gray",
        },
        // ticks: {
        //   autoSkip: true,
        //   maxRotation: 45,
        //   minRotation: 45,
        // },
      },
    },
  };
  const LineChart = () => {
    return (
      <div>
        <Bar style={{ height: "300px" }} data={data} options={options} />
      </div>
    );
  };

  return <div>{LineChart()}</div>;
}
