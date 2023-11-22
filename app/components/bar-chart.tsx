"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BarChart = ({ data }: { data: EmployeeData[] }) => {
  const [chartData, setChartData] = useState({
    labels: [] as string[],
    datasets: [
      {
        label: "Dynamic Bar Chart",
        data: [] as number[],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    // Process data for chart
    const departmentCounts: { [key: string]: number } = {};

    // Count the occurrences of each department
    data.forEach((entry) => {
      departmentCounts[entry.department] =
        (departmentCounts[entry.department] || 0) + 1;
    });

    const labels: string[] = Object.keys(departmentCounts);
    const values: number[] = Object.values(departmentCounts);

    setChartData({
      labels,
      datasets: [
        {
          label: "Dynamic Bar Chart",
          data: values,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
        },
      ],
    });
  }, [data]);

  return (
    <div className="container pb-10">
      <h1 className="text-xl text-center pb-8">Dynamic Bar Chart</h1>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: "All Departments",
                font: { weight: "bold" },
              },
              grid: { display: false },
            },
            y: {
              title: {
                display: true,
                text: "Number of Employees",
                font: { weight: "bold" },
              },
              grid: { display: false },
            },
          },
          plugins: {
            legend: { display: false },
            tooltip: { enabled: true, intersect: false },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
