import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import {
  FiHome,
  FiUsers,
  FiTarget,
  FiClipboard,
  FiUpload
} from "react-icons/fi";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { user } = useContext(AuthContext);

  const menu = [
    { name: "Dashboard", path: "/mentor/dashboard", icon: <FiHome /> },
    { name: "Groups", path: "/mentor/groups", icon: <FiUsers /> },
    { name: "Goals", path: "/mentor/goals", icon: <FiTarget /> },
    { name: "Assignments", path: "/mentor/assignments", icon: <FiClipboard /> },
    { name: "Submissions", path: "/mentor/submissions", icon: <FiUpload /> }
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed top-16 left-0 z-40
          w-64 h-[calc(100vh-64px)]
          bg-[rgb(var(--sidebar-bg))]
          border-r border-[rgb(var(--border))]
          flex flex-col
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* SECTION LABEL */}
        <div className="px-5 pt-6 pb-3 text-xs uppercase tracking-wider text-[rgb(var(--text-muted))]">
          Navigation
        </div>

        {/* MENU */}
        <nav className="flex flex-col gap-2 px-3">

          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                `
                flex items-center gap-4
                px-4 py-3
                rounded-lg
                text-sm font-medium
                transition
                ${
                  isActive
                    ? "bg-[rgb(var(--primary-soft))] text-[rgb(var(--primary))]"
                    : "text-[rgb(var(--text))] hover:bg-[rgb(var(--hover))]"
                }
              `
              }
            >
              <span className="text-xl">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}

        </nav>

        {/* USER PANEL */}
        <div className="mt-auto border-t border-[rgb(var(--border))] p-4 flex items-center gap-3">

          <div className="
            w-11 h-11
            rounded-full
            bg-[rgb(var(--primary-soft))]
            text-[rgb(var(--primary))]
            flex items-center justify-center
            font-semibold
          ">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-medium text-[rgb(var(--text))]">
              {user?.name || "User"}
            </span>

            <span className="text-xs text-[rgb(var(--text-muted))]">
              {user?.email || "user@email.com"}
            </span>

            <span className="text-xs text-[rgb(var(--text-secondary))] capitalize">
              {user?.role || "mentor"}
            </span>
          </div>

        </div>

      </aside>
    </>
  );
};

export default Sidebar;