import { ChevronLeft } from "@/atoms/chevron-left";
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
        width: "30%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: "15px",
      }}
    >
      <div className="w-full text-gray-600 p-6">
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
        <h2 className="text-xl font-bold mb-2">Given Information</h2>
        <div className="border-t border-b border-gray-300 py-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">Text Entered</h3>
          <p className="text-sm">
            This is an example text that represents the entered information.
            This text provides an overview of the information provided by the
            user.
          </p>
        </div>

        {/* Uploaded Items Section */}
        <h2 className="text-lg font-semibold mb-4">Uploads</h2>
        <div className="bg-gray-100 p-4 rounded-md space-y-4">
          <ul className="space-y-2">
            <h2 className="text-sm mb-4">Uploaded Files</h2>
            {uploadedFiles?.map((file, index) => (
              <li
                key={index}
                className="flex items-center p-2 bg-white border border-gray-200 rounded-md justify-between shadow-sm"
              >
                <div className="flex text-sm w-auto justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="red"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="red"
                      d="M10.5 14.25h3"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="green"
                      d="M10.5 18.75h-3"
                    />
                  </svg>
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
