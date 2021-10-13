import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
        "rgba(255, 206, 86)",
        "rgba(75, 192, 192)",
        "rgba(75, 192, 192)",
        "rgba(255, 206, 86)",
      ],
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const VerticalBar = () => <Bar data={data} options={options} />;

export default VerticalBar;
