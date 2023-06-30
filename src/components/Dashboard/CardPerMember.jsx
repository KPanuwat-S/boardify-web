// import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
export default function CardPerMember() {
  const dataTask = [
    {
      id: 1,
      memberName: "Name: STANG",
      taskTotal: 5,
    },
    {
      id: 1,
      memberName: "Name: Nattanicha",
      taskTotal: 8,
    },
    {
      id: 1,
      memberName: "Name: Sunny",
      taskTotal: 10,
    },
    {
      id: 1,
      memberName: "Name: Nay",
      taskTotal: 15,
    },
    {
      id: 1,
      memberName: "Name: Fang",
      taskTotal: 20,
    },
  ];

  const labels = dataTask.map(({ memberName }) => memberName);
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
