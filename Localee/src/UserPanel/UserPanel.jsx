import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome, 
  faCalendarCheck, 
  faUsers, 
  faUserCircle, 
  faBell, 
  faLifeRing 
} from "@fortawesome/free-solid-svg-icons";

// Placeholder Components
const Dashboard = () => <div>Welcome to your Dashboard!</div>;
const Bookings = () => <div>View your Bookings here.</div>;
const ServiceProviders = () => <div>Manage your Favorite Service Providers.</div>;
const Profile = () => <div>Update your Profile and Settings.</div>;
const Notifications = () => <div>Check your Notifications here.</div>;
const Support = () => <div>Need help? Visit the Support Section.</div>;

// Bottom Navigation Bar Component
const BottomNav = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { name: "Dashboard", icon: faHome },
    { name: "Bookings", icon: faCalendarCheck },
    { name: "Service Providers", icon: faUsers },
    { name: "Profile", icon: faUserCircle },
    { name: "Support", icon: faLifeRing },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-blue-600 text-white flex justify-between px-4 py-2 md:hidden">
      {menuItems.map((item) => (
        <button
          key={item.name}
          className={`flex flex-col items-center flex-1 ${
            activeTab === item.name ? "text-emerald-200" : "text-white"
          }`}
          onClick={() => setActiveTab(item.name)}
        >
          <FontAwesomeIcon icon={item.icon} className="text-lg mb-1" />
          <span className="text-xs">{item.name}</span>
        </button>
      ))}
    </div>
  );
};

// Sidebar Component
const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { name: "Dashboard", icon: faHome },
    { name: "Bookings", icon: faCalendarCheck },
    { name: "Service Providers", icon: faUsers },
    { name: "Profile", icon: faUserCircle },
    { name: "Notifications", icon: faBell },
    { name: "Support", icon: faLifeRing },
  ];

  return (
    <div className="hidden md:block w-64 bg-blue-600 text-white h-screen fixed">
      <div className="p-4 font-bold text-xl">Localee</div>
      <ul className="space-y-4 mt-6">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`p-4 flex items-center space-x-2 cursor-pointer ${
              activeTab === item.name ? "bg-blue-800" : "hover:bg-blue-700"
            }`}
            onClick={() => setActiveTab(item.name)}
          >
            <FontAwesomeIcon icon={item.icon} className="text-lg" />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main User Panel Component
const UserPanel = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  // Render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Bookings":
        return <Bookings />;
      case "Service Providers":
        return <ServiceProviders />;
      case "Profile":
        return <Profile />;
      case "Notifications":
        return <Notifications />;
      case "Support":
        return <Support />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar (Desktop) */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 md:ml-64">
        <h1 className="text-2xl font-bold mb-4">{activeTab}</h1>
        {renderContent()}
      </div>

      {/* Bottom Navigation (Mobile) */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default UserPanel;
