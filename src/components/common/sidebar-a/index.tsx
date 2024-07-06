import { FailedIcon } from "@/atoms/failed-icon";
import { ProgressIcon } from "@/atoms/progress-icon";
import { RightCheckIcon } from "@/atoms/right-check-icon";
import { CardProps, cardsData } from "@/constants/sidebar-items";
import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div
      style={{
        width: "30%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: "15px",
      }}
    >
      <div className="w-full text-gray-600 p-6">
        <h2 className="text-xl font-bold mb-4">Recent Studies</h2>
        <div className="space-y-4">
          {cardsData?.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              date={card.date}
              status={card.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Card: React.FC<CardProps> = ({ title, date, status }) => {
  return (
    <div className="bg-white text-gray-800 p-4 rounded-md border border-gray-400">
      <h6 className="text-sm font-bold mb-2 text-blue-500">{title}</h6>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{date}</span>
        <span
          className={`text-xs px-2 py-1 rounded-full flex ${
            status === "completed"
              ? "bg-green-100 text-green-700"
              : status === "in progress"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status === "completed" && <RightCheckIcon />}
          {status === "in progress" && <ProgressIcon />}
          {status === "failed" && <FailedIcon />}
          <span className="ml-1"> {status}</span>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
