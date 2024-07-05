import React, { useState } from "react";
import Sidebar from "@/components/common";
import UploadSection from "@/components/uploads";

const HomeView: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  return (
    //     <div className="flex min-h-screen">
    //       <Sidebar />
    //       <main className="flex-1 p-8 border-2 border-red-500">
    //         <header className="mb-8">
    //           <h1 className="text-3xl font-bold text-gray-800 mb-2">Home Page</h1>
    //         </header>
    //         <UploadSection />
    //       </main>
    //     </div>
    <div className="flex min-h-screen">
      <Sidebar />
      {/* Main section */}
      <main className="w-full flex-1 p-8 m-1">
        <UploadSection />
      </main>
    </div>
  );
};

export default HomeView;
