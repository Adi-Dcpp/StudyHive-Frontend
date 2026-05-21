import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[rgb(var(--bg))]">

      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content */}
      <main
        className={`
          pt-6
          px-6
          pb-6
          transition-all duration-300
          ${isSidebarOpen ? "ml-64" : "ml-0"}
        `}
      >
        <Outlet />
      </main>

    </div>
  );
};

export default AppLayout;