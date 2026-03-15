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
    <div className="min-h-screen bg-[rgb(var(--bg))]">

      <Navbar toggleSidebar={toggleSidebar} />

      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

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

export default MentorLayout;