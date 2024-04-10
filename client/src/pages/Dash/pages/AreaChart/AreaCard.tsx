import React from "react";
import Card from "../../components/Card.tsx";

function AreaCard(): JSX.Element {
  return (
    <Card>
      <div className="flex justify-between p-5">
        <div className=" flex flex-col gap-4">
          <div className="text-xl font-bold">Monthly Earnings</div>
          <div className="text-2xl font-semibold">$6,820</div>
          <div className="flex">
            <div className="h-6 w-6">
              <img src="./images/down-right-arrow.webp" alt="" />
            </div>
            <span className="font-semibold text-md">+9%</span>
            <span className="font-normal text-slate-500">last year</span>
          </div>
        </div>
        <div className="w-16">
          <img src="./images/dollar-symbol.webp" alt="" />
        </div>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#DFF5FF"
            fillOpacity="1"
            stroke="#67C6E3"
            strokeWidth="5"
            d="M0,320L24,266.7C48,213,96,107,144,85.3C192,64,240,128,288,160C336,192,384,192,432,186.7C480,181,528,171,576,186.7C624,203,672,245,720,245.3C768,245,816,203,864,176C912,149,960,139,1008,154.7C1056,171,1104,213,1152,202.7C1200,192,1248,128,1296,122.7C1344,117,1392,171,1416,197.3L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
          ></path>
        </svg>
      </div>
    </Card>
  );
}

export default AreaCard;
