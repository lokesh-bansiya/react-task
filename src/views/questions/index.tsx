import React, { useState } from "react";

interface QuestionsProps {
  onStageChange?: (stage: number) => void;
}

const tabs = [
  "Case Desc",
  "Acts & Laws",
  "Judgement",
  "Templates",
  "Questions",
  "Support",
];
const tabs2 = ["By Patitioner", "By Respondent"];

const dummyData: Record<string, { question: string; answer: string }[]> = {
  Questions: [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is a component?",
      answer: "A component is a reusable piece of UI.",
    },
    {
      question: "What is state?",
      answer:
        "State is a built-in object that allows components to create and manage their own data.",
    },
    {
      question: "What is a prop?",
      answer:
        "Props are inputs to components. They are data passed down from a parent component to a child component.",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It is used with React to describe what the UI should look like.",
    },
    {
      question: "What is the virtual DOM?",
      answer:
        "The virtual DOM is a lightweight copy of the actual DOM that React uses to make updates to the UI more efficient.",
    },
  ],
};

const Questions: React.FC<QuestionsProps> = ({ onStageChange }) => {
  const [selectedTab, setSelectedTab] = useState<string>("Questions");
  const [secondSelectedTab, setSecondSelectedTab] =
    useState<string>("By Patitioner");

  const handleContinueClick = () => {
    console.log("stage-2");
    if (onStageChange) onStageChange(2);
  };

  return (
    <div
      style={{
        width: "69%",
        height: "full",
        backgroundColor: "white",
        borderRadius: "15px",
      }}
    >
      <div
        style={{ background: "#e1ebf7" }}
        className="flex justify-between space-x-0 mt-0"
      >
        {tabs.map((tab) => (
          <button
            style={{
              width: "20%",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
            }}
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`w-1/5 flex-grow text-xs px-4 py-2 font-semibold ${
              selectedTab === tab
                ? "bg-gradient-to-b from-blue-500 to-blue-900 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <section className="p-6 pt-0">
        <div className="mb-4">
          <header className="mb-2">
            <h1 className="text-md font-semibold text-gray-600">Questions</h1>
          </header>
          <div className="flex space-x-4 mb-3">
            {tabs2.map((tab) => (
              <button
                key={tab}
                onClick={() => setSecondSelectedTab(tab)}
                className={`px-4 py-1 rounded-xl text-sm ${
                  secondSelectedTab === tab
                    ? "bg-gradient-to-b from-blue-500 to-blue-900 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div>
            {dummyData[selectedTab]?.map((qa, index) => (
              <div key={index} className="mb-2 p-2 border-b border-gray-200">
                <h4 className="text-sm font-semibold text-gray-800">
                  {index + 1}. {qa.question}
                </h4>
                <h4 className="text-sm font-semibold text-gray-800">Reason</h4>
                <p className="text-gray-600 text-sm ">{qa.answer}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-end mt-2">
          <button
            className="bg-gradient-to-b from-blue-500 to-blue-900 text-white px-16 py-1 rounded-3xl"
            onClick={handleContinueClick}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Questions;
