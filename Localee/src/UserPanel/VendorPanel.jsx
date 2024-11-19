import React, { useState } from "react";
import { Calendar, User, Logs } from "lucide-react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";


import Bookings from "./Bookings";
import Profile from "./Profile";


const VendorPanel = () => {

    let [selectedMenu, setSelectedMenu] = useState(0);

    const handleMenuClick = (idx) => {
        setSelectedMenu(idx);
    }

    return (
        <div className="flex h-screen">

            {/* Sidebar */}
            <aside id="vendor-sideBar" className="w-64 bg-indigo-600 text-white flex flex-col pt-16 md:relative md:w-48 lg:w-64 mt-4">
                <div className="p-4 text-center text-xl font-bold border-b border-indigo-500">
                    Vendor Panel
                </div>
                <nav className="flex-1 p-4 space-y-4">
                    <Link to="/vendor/123/bookings" className="flex items-center gap-2 hover:bg-indigo-500 px-3 py-2 rounded" onClick={()=>handleMenuClick(0)} style={selectedMenu==0? {backgroundColor : "rgb(99 102 241)"} : {}}>
                        <Calendar className="w-5 h-5" />
                        Bookings
                    </Link>
                    <Link to="/vendor/123/profile" className="flex items-center gap-2 hover:bg-indigo-500 px-3 py-2 rounded" onClick={()=>handleMenuClick(1)} style={selectedMenu==1? {backgroundColor : "rgb(99 102 241)"} : {}}>
                        <User className="w-5 h-5" />
                        Profile
                    </Link>
                    <Link to="/vendor/123/yourServices" className="flex items-center gap-2 hover:bg-indigo-500 px-3 py-2 rounded" onClick={()=>handleMenuClick(2)} style={selectedMenu==2? {backgroundColor : "rgb(99 102 241)"} : {}}>
                        <Logs className="w-5 h-5" />
                        Your Services
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-gray-50 p-4 md:p-2 lg:p-6 overflow-auto">
                <Routes>
                    <Route path="bookings" element={<Bookings />} />
                    <Route path="profile" element={<Profile />} />
                    
                </Routes>
            </main>
        </div>

    );
};

export default VendorPanel;
