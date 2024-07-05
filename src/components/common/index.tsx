import React from "react";

type CardProps = {
  title: string;
  date: string;
  status: "completed" | "in progress" | "failed";
};

const Sidebar: React.FC = () => {
  const cardsData: CardProps[] = [
    { title: "Dog Bite Complaint", date: "2 days ago", status: "completed" },
    {
      title: "The Cyberbulling Conspiracy",
      date: "3 days ago",
      status: "in progress",
    },
    {
      title: "The Data Breach Dilemma",
      date: "1 week ago",
      status: "completed",
    },
    {
      title: "The Data Breach Dilemma",
      date: "5 days ago",
      status: "in progress",
    },
    {
      title: "The Data Breach Dilemma",
      date: "2 weeks ago",
      status: "failed",
    },
  ];

  return (
    <div className="w-1/3 min-h-screen bg-white text-gray-600 p-4 m-1 rounded-md">
      <h2 className="text-xl font-bold mb-4">Recent Studies</h2>
      <div className="space-y-4">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            date={card.date}
            status={card.status}
          />
        ))}
      </div>
    </div>
  );
};

const Card: React.FC<CardProps> = ({ title, date, status }) => {
  return (
    <div className="bg-white text-gray-800 p-4 rounded-md border border-gray-400">
      <h6 className="text-sm font-bold mb-2 text-blue-500">{title}</h6>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{date}</span>
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            status === "completed"
              ? "bg-green-100 text-green-700"
              : status === "in progress"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
