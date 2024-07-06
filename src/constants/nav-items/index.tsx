import { ChatIcon } from "@/atoms/chat-icon";
import { FeedIcon } from "@/atoms/feed-icon";
import { HomeIcon } from "@/atoms/home-icon";
import { LinkIcon } from "@/atoms/link-icon";
import { MultiUserIcon } from "@/atoms/multi-user-icon";

// Define the navigation items
export const navItems = [
  { icon: <FeedIcon />, text: "News Feed" },
  { icon: <MultiUserIcon />, text: "Find Lawyers" },
  { icon: <HomeIcon />, text: "Home" },
  { icon: <LinkIcon />, text: "Connections" },
  { icon: <ChatIcon />, text: "Chats" },
];
