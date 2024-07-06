import React from "react";

const CaseFlow: React.FC = () => {
  return (
    <div
      style={{
        width: "72%",
        height: "full",
        // backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "15px",
      }}
    >
      <div
        className="flex-grow p-4"
        style={{
          width: "74%",
          borderRadius: "15px",
          background: "white",
          minHeight: "100vh",
        }}
      >
        <div className="mb-4">
          <header className="mb-2">
            <h1 className="text-lg font-semibold text-gray-600">Case Flow</h1>
          </header>
        </div>
        <p className="text-gray-600">
          Content for the first section goes here.
        </p>
      </div>
      <div
        className="p-4"
        style={{
          width: "25%",
          borderRadius: "15px",
          background: "white",
          minHeight: "100vh",
        }}
      >
        <h2 className="text-md font-semibold text-gray-600">Section 2</h2>
        <p className="text-gray-600">
          Content for the second section goes here.
        </p>
      </div>
    </div>
  );
};

export default CaseFlow;
