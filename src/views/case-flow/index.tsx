import { DocumentIcon } from "@/atoms/document-icon";
import { SolidCircleIcon } from "@/atoms/solid-right-check-icon";
import React from "react";

const CaseFlow: React.FC = () => {
  return (
    <div
      style={{
        width: "74%",
        minHeight: "100vh",
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
        <div className="flex flex-col bg-white p-3 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Case flow</h2>
          <p className="text-blue-500 mb-4">Select the document for drafting</p>

          <div className="relative mb-6">
            <div className="text-gray-700 font-semibold mb-2 ml-5">
              Pre litigation
            </div>
            <div className="absolute left-1.5 top-2 h-full w-0.5 bg-gray-300"></div>
            <div className="absolute left-0 top-1 flex items-center justify-center w-auto h-auto bg-blue-600 rounded-full">
              <SolidCircleIcon className="h-4 w-4 text-blue bg-blue-200 rounded-full" />
            </div>
            <div className="pl-4 ml-1">
              <div className="mb-2 border border-gray-400 p-2 rounded-md">
                <h3 className="text-sm font-semibold flex text-gray-700">
                  <DocumentIcon />
                  Legal Notice
                </h3>
                <p className="text-sm text-gray-600">
                  Notifies the opposing party of the dispute and demands
                  resolution.
                </p>
              </div>
              <div className="mb-2 border border-gray-400 p-2 rounded-md">
                <h3 className="text-sm font-semibold flex text-gray-700">
                  <DocumentIcon />
                  Reply to Legal Notice
                </h3>
                <p className="text-sm text-gray-600">
                  A response to a legal notice received from the opposing party.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mb-6">
            <div className="text-gray-700 font-semibold mb-2 ml-5">
              Litigation
            </div>
            <div className="absolute left-1.5 top-2 h-full w-0.5 bg-gray-300"></div>
            <div className="absolute left-0 top-1 flex items-center justify-center w-auto h-auto bg-blue-600 rounded-full">
              <SolidCircleIcon className="h-4 w-4 text-blue bg-blue-200 rounded-full" />
            </div>
            <div className="pl-4 ml-1">
              <div className="mb-2 border border-gray-400 p-2 rounded-md">
                <h3 className="text-sm font-semibold flex text-gray-700">
                  <DocumentIcon />
                  Plaint/Complaint
                </h3>
                <p className="text-sm text-gray-600">
                  Initiates the lawsuit, detailing the plaintiff's claims.
                </p>
              </div>
              <div className="mb-2 border border-gray-400 p-2 rounded-md">
                <h3 className="text-sm font-semibold flex text-gray-700">
                  <DocumentIcon />
                  Vakalatnama
                </h3>
                <p className="text-sm text-gray-600">
                  Authorizes a lawyer to represent the client in court.
                </p>
              </div>
              <div className="mb-2 border border-gray-400 p-2 rounded-md">
                <h3 className="text-sm font-semibold flex text-gray-700">
                  <DocumentIcon />
                  Written Statement/Answer
                </h3>
                <p className="text-sm text-gray-600">
                  The defendant's formal response to the plaint.
                </p>
              </div>
              <div className="mb-2 border border-gray-400 p-2 rounded-md">
                <h3 className="text-sm font-semibold flex text-gray-700">
                  <DocumentIcon />
                  Reply to Written Statement
                </h3>
                <p className="text-sm text-gray-600">
                  Addresses points raised in the defendant's written statement.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="text-gray-700 font-semibold mb-2 ml-5">
              Interlocutory Applications
            </div>
            <div className="absolute left-1.5 top-2 h-full w-0.5 bg-gray-300"></div>
            <div className="absolute left-0 top-1 flex items-center justify-center w-auto h-auto bg-blue-600 rounded-full">
              <SolidCircleIcon className="h-4 w-4 text-blue bg-blue-200 rounded-full" />
            </div>
            <div className="pl-4 ml-1">
              <div className="mb-2 border border-gray-400 p-2 rounded-md">
                <h3 className="text-sm font-semibold flex text-gray-700">
                  <DocumentIcon />
                  Application for Temporary Injunction
                </h3>
                <p className="text-sm text-gray-600">
                  Seeks immediate court intervention to preserve status quo.
                </p>
              </div>
              <div className="mb-2 border border-gray-400 p-2 rounded-md">
                <h3 className="text-sm font-semibold flex text-gray-700">
                  <DocumentIcon />
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
        <ul className="relative p-1 space-y-2">
          <li className="relative flex items-start">
            <div className="absolute left-1.5 top-2 h-full w-0.5 bg-gray-300"></div>
            <div className="absolute left-0 top-1 flex items-center justify-center w-auto h-auto bg-blue-600 rounded-full">
              <SolidCircleIcon className="h-4 w-4 text-white" />
            </div>
            <div className="ml-6 text-sm text-blue-600 font-semibold">
              Start
            </div>
          </li>
          <li className="relative flex items-start">
            <div className="absolute left-1.5 top-2 h-full w-0.5 bg-gray-300"></div>
            <div className="absolute left-0 top-1 flex items-center justify-center w-auto h-auto bg-blue-600 rounded-full">
              <SolidCircleIcon className="h-4 w-4 text-white" />
            </div>
            <div className="ml-6 text-sm text-blue-600 font-semibold">
              Continue
            </div>
          </li>
          <li className="relative flex items-start">
            <div className="absolute left-1.5 top-2 h-full w-0.5 bg-gray-300"></div>
            <div className="absolute left-0 top-1 flex items-center justify-center w-auto h-auto bg-blue-600 rounded-full">
              <SolidCircleIcon className="h-4 w-4 text-white" />
            </div>
            <div className="ml-6 text-sm text-blue-600 font-semibold">
              Analysis
            </div>
          </li>
          <li className="relative flex items-start">
            <div className="absolute left-1.5 top-2 h-full w-0.5 bg-gray-300"></div>
            <div className="absolute left-0 top-1 flex items-center justify-center w-auto h-auto bg-gray-500 rounded-full">
              <SolidCircleIcon className="h-4 w-4 text-white" />
            </div>
            <div className="ml-6 text-sm font-semibold text-gray-500">
              Additional Documents
            </div>
          </li>
          <li className="relative flex items-start">
            <div className="absolute left-1.5 top-2 h-full w-0.5 bg-gray-300"></div>
            <div className="absolute left-0 top-1 flex items-center justify-center w-auto h-auto bg-gray-500 rounded-full">
              <SolidCircleIcon className="h-4 w-4 text-white" />
            </div>
            <div className="ml-6 text-sm font-semibold text-gray-500">
              Relief
            </div>
          </li>
          <li className="relative flex items-start">
            <div className="absolute left-1.5 top-2 h-full w-0.5 bg-gray-300"></div>
            <div className="absolute left-0 top-1 flex items-center justify-center w-auto h-auto bg-gray-500 rounded-full">
              <SolidCircleIcon className="h-4 w-4 text-white" />
            </div>
            <div className="ml-6 text-sm font-semibold text-gray-500">
              Suggestions
            </div>
          </li>
          <li className="relative flex items-start">
            <div className="absolute left-1.5 top-2 h-full w-0.5 bg-gray-300"></div>
            <div className="absolute left-0 top-1 flex items-center justify-center w-auto h-auto bg-gray-500 rounded-full">
              <SolidCircleIcon className="h-4 w-4 text-white" />
            </div>
            <div className="ml-6 text-sm font-semibold text-gray-500">
              First Draft
            </div>
          </li>
          <li className="relative flex items-start">
            <div className="absolute left-1.5 top-2 h-full w-0.5 bg-gray-300"></div>
            <div className="absolute left-0 top-1 flex items-center justify-center w-auto h-auto bg-gray-500 rounded-full">
              <SolidCircleIcon className="h-4 w-4 text-white" />
            </div>
            <div className="ml-6 text-sm font-semibold text-gray-500">Q&A</div>
          </li>
          <li className="relative flex items-start">
            <div className="absolute left-1.5 top-2 h-full w-0.5 bg-gray-300"></div>
            <div className="absolute left-0 top-1 flex items-center justify-center w-auto h-auto bg-gray-500 rounded-full">
              <SolidCircleIcon className="h-4 w-4 text-white" />
            </div>
            <div className="ml-6 text-sm font-semibold text-gray-500">
              Final Draft
            </div>
          </li>
        </ul>

        <button className="mt-4 bg-blue-600 text-white py-1 px-4 rounded-lg">
          Continue
        </button>
      </div>
    </div>
  );
};

export default CaseFlow;
