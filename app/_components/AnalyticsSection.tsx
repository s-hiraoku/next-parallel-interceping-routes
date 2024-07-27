"use client";

import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56, 55, 70, 60, 85, 90, 75, 65],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const teamData = {
  labels: [
    "Lion Leaders",
    "Panther Power",
    "Shark Sharks",
    "Falcon Force",
    "Eagle Eyes",
  ],
  datasets: [
    {
      label: "Q1",
      data: [120, 150, 170, 140, 160],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Q2",
      data: [140, 160, 180, 150, 170],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
    {
      label: "Q3",
      data: [150, 170, 190, 160, 180],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      label: "Q4",
      data: [160, 180, 200, 170, 190],
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Sales Data",
    },
  },
};

const teamOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Team Sales Data",
    },
  },
};

export const AnalyticsSection: React.FC = () => {
  return (
    <div className="container space-y-6">
      <h1 className="text-3xl font-bold mb-4">Total Sales</h1>
      <div className="bg-white shadow rounded-lg p-4">
        <div className="h-64">
          <Bar data={data} options={options} />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">Team Performance</h2>
      <div className="bg-white shadow rounded-lg p-4">
        <div className="h-64">
          <Bar data={teamData} options={teamOptions} />
        </div>
      </div>
    </div>
  );
};
