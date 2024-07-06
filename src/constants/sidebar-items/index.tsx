export type CardProps = {
  title: string;
  date: string;
  status: "completed" | "in progress" | "failed";
};

export const cardsData: CardProps[] = [
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
