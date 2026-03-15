import { FaUserCircle } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <nav className="flex items-center justify-between px-6 h-16 border-b border-[rgb(var(--border))] bg-[rgb(var(--surface))] relative z-50">

      {/* Left Section */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="text-2xl text-[rgb(var(--text))]"
        >
          <FiMenu />
        </button>

        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="relative flex items-center w-14 h-7 bg-[rgb(var(--hover))] rounded-full transition-colors duration-300"
        >
          <div
            className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
              theme === "dark" ? "translate-x-7" : "translate-x-1"
            }`}
          >
            {theme === "dark" ? "🌙" : "☀"}
          </div>
        </button>

        {/* User */}
        <button className="flex items-center gap-2 text-[rgb(var(--text))]">
          <FaUserCircle size={22} />
          <span>User</span>
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="px-3 py-1 rounded-md bg-red-500 text-white"
        >
          Logout
        </button>

      </div>
    </nav>
  );
};

export default Navbar;