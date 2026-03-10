import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/mentor/Navbar";
import Sidebar from "../components/mentor/Sidebar";

const MentorLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-6 bg-[rgb(var(--bg))]">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default MentorLayout;