import React from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { name: "Dashboard", icon: "fas fa-home" },
    { name: "Bookings", icon: "fas fa-calendar-check" },
    { name: "Service Providers", icon: "fas fa-users" },
    { name: "Profile", icon: "fas fa-user-circle" },
    { name: "Notifications", icon: "fas fa-bell" },
    { name: "Support", icon: "fas fa-life-ring" },
  ];

  return (
    <div className="w-64 bg-blue-600 text-white h-screen">
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
            <i className={`${item.icon} text-lg`}></i>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
