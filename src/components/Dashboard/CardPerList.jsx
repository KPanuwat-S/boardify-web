// import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCardsInOneBoardAsync } from "../../features/board/card/Slice/cardSlice";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
export default function CardPerList() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card.cards);
  useEffect(() => {
    dispatch(getAllCardsInOneBoardAsync());
  }, [dispatch]);

  if (!cards) {
    return <div>Loading...</div>;
  }

  const dataTask = cards.map((card) => ({
    id: card.id,
    cardName: card.name,
    taskTotal: card.taskTotal,
  }));

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
