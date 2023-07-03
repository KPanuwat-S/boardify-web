// import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
export default function CardPerDueDate() {
  // const dataTask = [
  //   {
  //     id: 1,
  //     status: "complete",
  //     taskTotal: 7,
  //   },
  //   {
  //     id: 2,
  //     status: "Due soon",
  //     taskTotal: 1,
  //   },
  //   {
  //     id: 3,
  //     status: "Due later",
  //     taskTotal: 5,
  //   },
  //   {
  //     id: 3,
  //     status: "Overdue",
  //     taskTotal: 0,
  //   },
  //   {
  //     id: 3,
  //     status: "No due date",
  //     taskTotal: 33,
  //   },
  // ];

  const labels = dataTask.map(({ status }) => status);
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
  const BarChart = () => {
    return (
      <div>
        <Bar style={{ height: "300px" }} data={data} options={options} />
      </div>
    );
  };

  return <div>{BarChart()}</div>;
}
