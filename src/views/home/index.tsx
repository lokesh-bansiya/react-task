import React, { useState } from "react";
import Sidebar from "@/components/common";
import UploadSection from "@/components/uploads";
import Navbar from "@/components/navbar";

const HomeView: React.FC = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          display: "flex",
          marginTop: "1%",
          height: "auto",
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
