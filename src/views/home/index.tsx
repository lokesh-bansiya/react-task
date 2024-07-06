import React, { useState } from "react";
import Sidebar from "@/components/common/sidebar-a";
import UploadSection from "@/views/uploads";
import Navbar from "@/components/navbar";
import SidebarB from "@/components/common/sidebar-b";
import Questions from "../questions";
import SidebarC from "@/components/common/sidebar-c";
import CaseFlow from "../case-flow";

const HomeView: React.FC = () => {
  const [stage, setStage] = useState<number>(0);
  console.log({ stage });
  return (
    <>
      <Navbar />
      {stage === 0 && (
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
          <UploadSection onStageChange={setStage} />
        </div>
      )}

      {stage === 1 && (
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
          <SidebarB onStageChange={setStage} />
          <Questions onStageChange={setStage} />
        </div>
      )}

      {stage === 2 && (
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
          <SidebarC onStageChange={setStage} />
          <CaseFlow />
        </div>
      )}
    </>
  );
};

export default HomeView;
