import { BellIcon } from "@/atoms/bell-icon";
import { ChatIcon } from "@/atoms/chat-icon";
import { FeedIcon } from "@/atoms/feed-icon";
import { HomeIcon } from "@/atoms/home-icon";
import { LinkIcon } from "@/atoms/link-icon";
import { MultiUserIcon } from "@/atoms/multi-user-icon";
import { SettingIcon } from "@/atoms/setting-icon";
import { UserIcon } from "@/atoms/user-icon";
import { navItems } from "@/constants/nav-items";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<string>("Home");

  const handleItemClick = (text: string) => {
    setSelectedItem(text);
  };

  return (
    <nav className="flex items-center justify-between text-gray-800 p-4">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-2xl font-bold">ADVOCASE</span>
      </div>

      {/* Navigation Items */}
      <div className="flex items-center space-x-4">
        {/* Map through the navigation items */}
        {navItems?.map((item) => (
          <NavItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            selected={selectedItem === item.text}
            onClick={() => handleItemClick(item.text)}
          />
        ))}
      </div>

      {/* User Section: Settings, Notification Bell, User Profile */}
      <div className="flex items-center space-x-4">
        {/* Settings */}
        <button className="flex items-center space-x-1 text-sm font-medium">
          <SettingIcon />
        </button>

        {/* Notification Bell */}
        <button className="relative">
          <BellIcon />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none bg-red-500 text-gray-800 rounded-full">
            3
          </span>
        </button>

        {/* User Profile */}
        <div className="relative">
          <button className="flex items-center">
            <UserIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

interface NavItemProps {
  icon: JSX.Element;
  text: string;
  selected: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, selected, onClick }) => {
  return (
    <button
      className={`flex items-center space-x-2 text-sm font-medium px-3 py-1 rounded-2xl ${
        selected
          ? "bg-gradient-to-b from-blue-500 to-blue-900 text-white"
          : "text-gray-800"
      }`}
      onClick={onClick}
    >
      {React.cloneElement(icon, {
        className: `h-4 w-4 ${selected ? "text-white" : "text-gray-800"}`,
      })}
      <span className={selected ? "text-white" : ""}>{text}</span>
    </button>
  );
};
