import React from "react";
// import styles from "./styles.module.css";
import AreaCard from "./pages/AreaChart/AreaCard.tsx";
import Bargroup from "./pages/BarGraph/Bargroup.tsx";
import DonutChart from "./pages/DonutChart/DonutChart.tsx";
import TableChart from "./pages/TableChart/TableChart.tsx";
import TimelineChart from "./pages/Timeline/TimelineChart.tsx";

function Home() {
  return (
    <>
      <div className="p-4 nowrap gap-2">
        <div className="flex flex-row gap-8 mb-4 bg-none">
          <div className="w-2/3">
            <Bargroup />
          </div>
          <div className="w-1/3 flex flex-col gap-4">
            <DonutChart />
            <AreaCard />
          </div>
        </div>
        <div className="flex gap-6 bg-none">
          <div className="w-1/3">
            <TimelineChart />
          </div>
          <div className="w-2/3">
            <TableChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
