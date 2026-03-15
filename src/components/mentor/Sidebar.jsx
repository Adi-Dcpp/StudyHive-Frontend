import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const menu = [
    { name: "Dashboard", path: "/mentor/dashboard" },
    { name: "Groups", path: "/mentor/groups" },
    { name: "Goals", path: "/mentor/goals" },
    { name: "Assignments", path: "/mentor/assignments" },
    { name: "Submissions", path: "/mentor/submissions" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed top-16 left-0 z-40
          w-70 h-[calc(100vh-64px)]
          bg-[rgb(var(--surface))]
          border-r border-[rgb(var(--border))]
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <nav className="flex flex-col p-4 gap-2">
          {menu.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={toggleSidebar}
              className="px-4 py-2 rounded-md hover:bg-[rgb(var(--hover))] text-[rgb(var(--text))]"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;