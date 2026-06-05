import { FaUserCircle } from "react-icons/fa";
import useTheme from "../hooks/useTheme";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import NotificationBell from "./notification/NotificationBell";

const Navbar = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const avatarLetter = user?.name?.charAt(0)?.toUpperCase();

  return (
    <nav
      className="
      flex items-center justify-between
      px-3 sm:px-6
      h-16
      border-b border-[rgb(var(--border))]
      bg-[rgb(var(--navbar-bg))/80]
      backdrop-blur-md
      sticky top-0
      z-50
    "
    >
      {/* LEFT */}
      <div className="flex items-center gap-2 sm:gap-4">
        <button
          onClick={toggleSidebar}
          className="
          text-xl
          text-[rgb(var(--text))]
          hover:text-[rgb(var(--primary))]
          transition
        "
        >
          <FiMenu />
        </button>

        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-7 sm:h-9 w-auto"
          />
        </Link>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-2 sm:gap-5">
        {/* Notification Bell */}
        <NotificationBell />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="
          relative flex items-center
          w-12 h-6
          sm:w-14 sm:h-7
          bg-[rgb(var(--surface-2))]
          rounded-full
          transition-colors
        "
        >
          <div
            className={`
            absolute
            w-5 h-5
            sm:w-6 sm:h-6
            rounded-full
            shadow-md
            transform
            transition-transform
            flex items-center justify-center
            text-[10px] sm:text-xs
            ${
              theme === "dark"
                ? "translate-x-6 sm:translate-x-7"
                : "translate-x-0.5 sm:translate-x-1"
            }
            bg-[rgb(var(--card-bg))]
            `}
          >
            {theme === "dark" ? "🌙" : "☀"}
          </div>
        </button>

        {/* USER */}
        <div
          className="
          flex items-center gap-2
          px-2 sm:px-3
          py-1
          rounded-lg
          hover:bg-[rgb(var(--hover))]
          transition
        "
        >
          <div
            className="
            w-8 h-8
            rounded-full
            flex items-center justify-center
            bg-[rgb(var(--primary-soft))]
            text-[rgb(var(--primary))]
            font-semibold
            text-sm
            shrink-0
          "
          >
            {avatarLetter || <FaUserCircle />}
          </div>

          <span
            className="
            hidden md:block
            text-sm font-medium
            text-[rgb(var(--text))]
            max-w-[140px]
            truncate
          "
          >
            {user?.name || "User"}
          </span>
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="
          flex items-center gap-2
          px-2 sm:px-3
          py-1.5
          rounded-md
          text-white
          bg-[rgb(var(--error))]
          hover:opacity-90
          transition
          text-sm
        "
        >
          <FiLogOut size={16} />

          <span className="hidden sm:inline">
            Logout
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;