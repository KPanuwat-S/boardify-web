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
