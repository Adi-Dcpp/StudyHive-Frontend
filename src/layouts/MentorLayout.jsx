import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/mentor/Navbar";
import Sidebar from "../components/mentor/Sidebar";

const MentorLayout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col">

      <Navbar toggleSidebar={toggleSidebar} />

      <div className="flex flex-1">

        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        {/* Dashboard Content */}
        <main
          className={`
            flex-1 p-6 bg-[rgb(var(--bg))]
            transition-all duration-300
            ${isSidebarOpen ? "ml-70" : "ml-0"}
          `}
        >
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default MentorLayout;