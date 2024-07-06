import { ChevronLeft } from "@/atoms/chevron-left";
import React from "react";
import { Card } from "../sidebar-a";
import { cardsData } from "@/constants/sidebar-items";

interface SidebarCSectionProps {
  onStageChange?: (stage: number) => void;
}

const SidebarC: React.FC<SidebarCSectionProps> = ({ onStageChange }) => {
  const handleBackToHomeClick = () => {
    if (onStageChange) onStageChange(1);
  };

  return (
    <div
      style={{
        width: "27%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: "15px",
      }}
    >
      <div className="w-full text-gray-600 p-6 pb-0">
        {/* Back to Home Button */}
        <div className="w-full flex" onClick={handleBackToHomeClick}>
          <span className="rounded-full bg-gray-100 w-8 h-8 flex justify-center p-1 mr-2">
            <ChevronLeft />
          </span>
          <button className="bg-gradient-to-b from-blue-500 to-blue-900 text-white px-4 py-1 rounded-md mb-4">
            Back to Home
          </button>
        </div>

        {/* Given Information Section */}
        <h2 className="text-lg font-bold mb-2 mt-1">Given Information</h2>
        <div className="border-t border-b border-gray-300 py-4 mb-2">
          <h3 className="text-md font-semibold mb-2">Your Search</h3>
          <p className="text-xs">
            This is an example text that represents the entered information.
          </p>
        </div>
      </div>
      <div className="w-full text-gray-600 p-6 pt-0">
        <h2 className="text-md font-bold mb-4">Recent</h2>
        <div className="space-y-3">
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

export default SidebarC;
