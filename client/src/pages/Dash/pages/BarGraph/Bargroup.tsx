import React, { useEffect, useRef } from "react";
import Card from "../../components/Card.tsx";
import Chart from "chart.js/auto";

function Bargroup(): JSX.Element {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<"bar"> | null>(null);

  useEffect(() => {
    const data = {
      labels: [
        "16/08",
        "17/08",
        "18/08",
        "19/08",
        "20/08",
        "21/08",
        "22/08",
        "23/08",
      ],
      datasets: [
        {
          label: "Series 1",
          data: [44, 55, 41, 64, 22, 43, 21, 24],
          backgroundColor: "#7699FF",
          barPercentage: 0.8,
          categoryPercentage: 0.5,
          borderRadius: 50,
        },
        {
          label: "Series 2",
          data: [53, 32, 33, 52, 13, 44, 32, 42],
          backgroundColor: "#49BEFF",
          barPercentage: 0.8,
          categoryPercentage: 0.5,
          borderRadius: 50,
        },
      ],
    };

    const ctx = chartRef.current?.getContext("2d");

    if (ctx) {
      // Destroy previous chart instance if exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create new chart instance
      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: data,
        options: {
          responsive: true,
        },
      });
    }

    // Cleanup function to destroy the chart
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <Card>
      <div className="p-4">
        <div className="flex justify-between">
          <div className="font-bold text-xl">Sales Overview</div>
          <div className="p-1 rounded-lg border-solid border-2 border-gray-400">
            <select id="">
              <option value="March 2023">March 2023</option>
            </select>
          </div>
        </div>
        <canvas ref={chartRef}></canvas>
      </div>
    </Card>
  );
}

export default Bargroup;
