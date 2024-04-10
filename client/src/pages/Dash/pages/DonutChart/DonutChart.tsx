import React, { useEffect, useRef } from "react";
import Card from "../../components/Card.tsx";
import Chart from "chart.js/auto";

function DonutChart(): JSX.Element {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<"doughnut"> | null>(null);

  useEffect(() => {
    const data = [40, 30, 30];

    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        chartInstance.current = new Chart(ctx, {
          type: "doughnut",
          data: {
            datasets: [
              {
                label: "Dataset",
                data: data,
                backgroundColor: ["#7699FF", "#ecf2fe", "#EEEEEE"], // Three different colors
                hoverOffset: 4,
              },
            ],
          },
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <Card>
      <div className="p-4 flex">
        <div className="flex flex-col gap-6 w-1/2">
          <div className="font-bold text-xl">Yearly Breakup</div>
          <div className="font-bold text-2xl">$36,358</div>
          <div className="flex">
            <div className="h-6 w-6">
              <img src="./images/left-arrow.webp" alt="" />
            </div>
            <span className="font-semibold text-md">+9%</span>
            <span className="font-normal text-slate-500">last year</span>
          </div>
          <div className="flex gap-3">
            <div className="flex justify-center items-center gap-1">
              <div className="bg-[#7699FF] w-4 h-4 rounded-full"></div>
              <div>2024</div>
            </div>
            <div className="flex justify-center items-center gap-1">
              <div className="bg-[#EEEEEE] w-4 h-4 rounded-full"></div>
              <div>2023</div>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </Card>
  );
}

export default DonutChart;
