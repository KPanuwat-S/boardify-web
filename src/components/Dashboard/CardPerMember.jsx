// import React from "react";
import Chart from "chart.js/auto";
import { useEffect } from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
export default function CardPerMember() {
  const { taskMemberData } = useSelector((state) => state.card.dashBoard);

  const [memberData, setMemberData] = useState([]);

  useEffect(() => {
    if (taskMemberData) setMemberData(taskMemberData);
  }, [taskMemberData]);
  const labels = memberData.map(({ firstName }) => firstName);
  const x = memberData.map(({ totalTask }) => totalTask);

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
