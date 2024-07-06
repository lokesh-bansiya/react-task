import { DocIcon } from "@/atoms/doc-icon";
import React from "react";

const CaseFlow: React.FC = () => {
  return (
    <div
      style={{
        width: "72%",
        height: "full",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "15px",
      }}
    >
      <div
        className="flex-grow p-4 mr-2"
        style={{
          width: "74%",
          borderRadius: "15px",
          background: "white",
          minHeight: "100vh",
        }}
      >
        <div className="flex flex-col bg-white p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Case flow</h2>
          <p className="text-blue-500 mb-4">Select the document for drafting</p>

          <div className="mb-6">
            <div className="text-blue-600 font-semibold mb-2">
              Pre litigation
            </div>
            <div className="pl-4">
              <div className="mb-2 border border-gray-400 p-2 rounded-md">
                <h3 className="text-sm font-semibold flex">
                  <DocIcon />
                  Legal Notice
                </h3>
                <p className="text-sm text-gray-600">
                  Notifies the opposing party of the dispute and demands
                  resolution.
                </p>
              </div>
              <div className="mb-2 border border-gray-400 p-2 rounded-md">
                <h3 className="text-sm font-semibold flex">
                  <DocIcon />
                  Reply to Legal Notice
                </h3>
                <p className="text-sm text-gray-600">
                  A response to a legal notice received from the opposing party.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="text-blue-600 font-semibold mb-2">Litigation</div>
            <div className="pl-4">
              <div className="mb-2 border border-gray-400 p-2 rounded-md">
                <h3 className="text-sm font-semibold flex">
                  <DocIcon />
                  Plaint/Complaint
                </h3>
                <p className="text-sm text-gray-600">
                  Initiates the lawsuit, detailing the plaintiff's claims.
                </p>
              </div>
              <div className="mb-2 border border-gray-400 p-2 rounded-md">
                <h3 className="text-sm font-semibold flex">
                  <DocIcon />
                  Vakalatnama
                </h3>
                <p className="text-sm text-gray-600">
                  Authorizes a lawyer to represent the client in court.
                </p>
              </div>
              <div className="mb-2 border border-gray-400 p-2 rounded-md">
                <h3 className="text-sm font-semibold flex">
                  <DocIcon />
                  Written Statement/Answer
                </h3>
                <p className="text-sm text-gray-600">
                  The defendant's formal response to the plaint.
                </p>
              </div>
              <div className="mb-2 border border-gray-400 p-2 rounded-md">
                <h3 className="text-sm font-semibold flex">
                  <DocIcon />
                  Reply to Written Statement
                </h3>
                <p className="text-sm text-gray-600">
                  Addresses points raised in the defendant's written statement.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="text-blue-600 font-semibold mb-2">
              Interlocutory Applications
            </div>
            <div className="pl-4">
              <div className="mb-2 border border-gray-400 p-2 rounded-md">
                <h3 className="text-sm font-semibold flex">
                  <DocIcon />
                  Application for Temporary Injunction
                </h3>
                <p className="text-sm text-gray-600">
                  Seeks immediate court intervention to preserve status quo.
                </p>
              </div>
              <div className="mb-2 border border-gray-400 p-2 rounded-md">
                <h3 className="text-sm font-semibold flex">
                  <DocIcon />
                  Counter-Affidavit to Opposition’s Application
                </h3>
                <p className="text-sm text-gray-600">
                  Responds to interlocutory applications from the opposing
                  party.
                </p>
              </div>
            </div>
          </div>
        </div>
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
        <ul className="space-y-2">
          <li className="text-blue-600 font-bold">Start</li>
          <li className="text-blue-600 font-bold">Continue</li>
          <li className="text-blue-600 font-bold">Analysis</li>
          <li className="text-gray-500">Additional Documents</li>
          <li className="text-gray-500">Relief</li>
          <li className="text-gray-500">Suggestions</li>
          <li className="text-gray-500">First Draft</li>
          <li className="text-gray-500">Q&A</li>
          <li className="text-gray-500">Final Draft</li>
        </ul>
        <button className="mt-4 bg-blue-600 text-white py-1 px-4 rounded-lg">
          Continue
        </button>
      </div>
    </div>
  );
};

export default CaseFlow;
