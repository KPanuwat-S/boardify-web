// import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
export default function CardPerList() {
  const dataTask = [
    {
      id: 1,
      cardName: "sprint1",
      taskTotal: 5,
    },
    {
      id: 2,
      cardName: "sprint2",
      taskTotal: 7,
    },
    {
      id: 3,
      cardName: "sprint3",
      taskTotal: 8,
    },
    {
      id: 4,
      cardName: "sprint4",
      taskTotal: 5,
    },
    {
      id: 5,
      cardName: "sprint5",
      taskTotal: 0,
    },
    {
      id: 6,
      cardName: "sprint6",
      taskTotal: 3,
    },
    {
      id: 7,
      cardName: "sprint7",
      taskTotal: 6,
    },
    {
      id: 8,
      cardName: "sprint8",
      taskTotal: 8,
    },
  ];

  const labels = dataTask.map(({ cardName }) => cardName);
  const x = dataTask.map(({ taskTotal }) => taskTotal);

  const data = {
    labels: labels, //["sprint1","sprint2","sprint3"]
    datasets: [
      {
        // label: "My First dataset",
        backgroundColor: "#44546F",
        borderColor: "rgb(255, 99, 132)",
        barPercentage: 1,

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
        max: 8,
        min: 0,
        ticks: {
          stepSize: 2,
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
        ticks: {
          autoSkip: true,
          maxRotation: 45,
          minRotation: 45,
        },
      },
    },
  };
  const BarChart = () => {
    return (
      <div>
        <Bar style={{ height: "300px" }} data={data} options={options} />
      </div>
    );
  };

  return <div> {BarChart()}</div>;
}
