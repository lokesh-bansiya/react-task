import React, { useState } from "react";

type UploadSectionProps = {};

const UploadSection: React.FC<UploadSectionProps> = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      return updatedFiles;
    });
  };

  return (
    <section className="w-full h-full bg-white p-6 rounded-lg shadow-md">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-600 mb-2">
          Get complete info about any case from AI-driven research assistance
        </h1>
      </header>

      <textarea
        placeholder="Ex: Land dispute, Mumbai, judgments"
        className="w-full p-3 border border-gray-300 rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="w-full p-10 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 text-center">
        <div className="flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-12 w-12 text-gray-400 mb-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>

          <input
            type="file"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer text-blue-600">
            Drag and drop here or click here to upload a file
          </label>
          <p className="text-sm font-semibold mt-2">Maximum uploads: 1</p>
          <p className="text-xs text-gray-500">
            Supported file formats: .jpg, .png, .pdf
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Uploaded Files</h3>
        <ul className="space-y-2">
          {uploadedFiles.map((file, index) => (
            <li
              key={index}
              className="flex items-center p-3 bg-white border border-gray-200 rounded justify-between shadow-sm"
            >
              <div className="flex w-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="blue"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-600 cursor-pointer mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => handleRemoveFile(index)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UploadSection;
