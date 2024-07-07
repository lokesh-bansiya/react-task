import { CrossIcon } from "@/atoms/cross-icon";
import { DocIcon } from "@/atoms/doc-icon";
import { UploadIcon } from "@/atoms/upload-icon";
import React, { useState } from "react";

interface UploadSectionProps {
  onStageChange?: (stage: number) => void;
}

const UploadSection: React.FC<UploadSectionProps> = ({ onStageChange }) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles?.splice(index, 1);
      return updatedFiles;
    });
  };

  const handleStartClick = () => {
    if (onStageChange) onStageChange(1); // Set the stage to 0 to navigate back to the home stage
  };

  return (
    <div
      style={{
        width: "74%",
        minHeight: "100vh",
        backgroundColor: "white",
        borderRadius: "15px",
      }}
    >
      <section className="p-6 rounded-lg">
        <header className="mb-8">
          <h1 className="text-md font-semibold text-gray-600 mb-2">
            Get complete info about any case from AI-driven research assistance
          </h1>
        </header>

        <textarea
          placeholder="Ex: Land dispute, Mumbai, judgments"
          className="w-full text-xs p-3 border border-gray-300 rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="w-full p-10 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 text-center">
          <div className="flex flex-col items-center justify-center">
            <UploadIcon />
            <input
              type="file"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer text-blue-600"
            >
              Drag and drop here or click here to upload a file
            </label>
            <p className="text-sm font-semibold mt-2">Maximum uploads: 1</p>
            <p className="text-xs text-gray-500">
              Supported file formats: .jpg, .png, .pdf
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-md font-semibold text-gray-600 mb-4">
            Uploaded Files
          </h3>
          <ul className="space-y-2">
            {uploadedFiles?.map((file, index) => (
              <li
                key={index}
                className="flex items-center p-3 bg-white border border-gray-200 rounded justify-between shadow-sm"
              >
                <div className="flex w-auto">
                  <DocIcon />
                  {file.name}
                </div>
                <span onClick={() => handleRemoveFile(index)}>
                  <CrossIcon />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex justify-end mt-2">
          <button
            className="bg-gradient-to-b from-blue-500 to-blue-900 text-white px-16 py-1 rounded-3xl"
            onClick={handleStartClick}
          >
            Start
          </button>
        </div>
      </section>
    </div>
  );
};

export default UploadSection;
