import React, { useState } from "react";
import Sidebar from "@/components/common";
import UploadSection from "@/components/uploads";
import Navbar from "@/components/navbar";

const HomeView: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          marginTop: "1%",
          height: "100vh",
          justifyContent: "space-between",
        }}
      >
        <Sidebar />
        <UploadSection />
      </div>
    </>
  );
};

export default HomeView;
