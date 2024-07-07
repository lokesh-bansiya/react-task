import { ChevronLeft } from "@/atoms/chevron-left";
import { DocumentIcon } from "@/atoms/document-icon";
import React from "react";

interface SidebarBSectionProps {
  onStageChange?: (stage: number) => void;
}

const SidebarB: React.FC<SidebarBSectionProps> = ({ onStageChange }) => {
  const uploadedFiles = [
    { name: "Case document.pdf" },
    { name: "Case document.pdf" },
    { name: "Case document.pdf" },
    { name: "Case document.pdf" },
    { name: "Case document.pdf" },
    { name: "Case document.pdf" },
    { name: "Case document.pdf" },
  ];

  const handleBackToHomeClick = () => {
    if (onStageChange) onStageChange(0); // Set the stage to 0 to navigate back to the home stage
  };

  return (
    <div
      style={{
        width: "25%",
        minHeight: "100vh",
        backgroundColor: "white",
        borderRadius: "15px",
      }}
    >
      <div className="w-full text-gray-600 p-6">
        {/* Back to Home Button */}
        <div className="w-full flex" onClick={handleBackToHomeClick}>
          <span className="rounded-full bg-gray-100 w-7 h-7 flex justify-center p-0.5 mr-2">
            <ChevronLeft />
          </span>
          <button className="bg-gradient-to-b from-blue-500 to-blue-900 text-white px-4 py-1 text-sm rounded-md mb-4">
            Back to Home
          </button>
        </div>

        {/* Given Information Section */}
        <h2 className="text-lg font-bold mb-2">Given Information</h2>
        <div className="border-t border-b border-gray-300 py-4 mb-4">
          <h3 className="text-md font-semibold mb-2">Text Entered</h3>
          <p className="text-xs">
            This text provides an overview of the information provided by the
            user.
          </p>
        </div>

        {/* Uploaded Items Section */}
        <h2 className="text-md font-semibold mb-4">Uploads</h2>
        <div className="bg-gray-100 p-4 rounded-md space-y-4">
          <ul className="space-y-2">
            <h2 className="text-xs mb-4">Uploaded Files</h2>
            {uploadedFiles?.map((file, index) => (
              <li
                key={index}
                className="flex items-center p-2 bg-white border border-gray-200 rounded-md justify-between shadow-sm"
              >
                <div className="flex text-xs w-auto justify-center">
                  <DocumentIcon />
                  {file.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarB;
