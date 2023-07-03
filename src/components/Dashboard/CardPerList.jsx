// import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCardsInOneBoardAsync } from "../../features/board/card/Slice/cardSlice";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { useState } from "react";
export default function CardPerList() {
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  const cardItems = useSelector((state) => state.card.cardItems);
  console.log("cardItems in card list", cardItems);
  const [chart, setChart] = useState([]);
  useEffect(() => {
    dispatch(getAllCardsInOneBoardAsync(id));
  }, []);
  useEffect(() => {
    if (cardItems.length > 0) setChart(cardItems);
  }, [cardItems]);

  if (!chart) {
    return <div>Loading...</div>;
  }

  const dataTask = chart.map((card) => ({
    id: card.id,
    cardName: card.name,
    // taskTotal: card.taskTotal,
  }));

  const labels = dataTask.map(({ cardName }) => cardName);
  const x = chart.map((el) => el.tasks.length);

  // const x = [5, 10, 20];
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
