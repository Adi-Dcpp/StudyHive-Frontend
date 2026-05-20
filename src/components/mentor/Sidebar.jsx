import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import {
  FiHome,
  FiUsers,
  FiTarget,
  FiClipboard,
  FiUpload,
  FiChevronUp,
  FiLock,
  FiEye,
  FiEyeOff,
  FiLogOut
} from "react-icons/fi";

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const { user, updatePassword } = useContext(AuthContext);

  const [profileOpen, setProfileOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(null);
  const [passwordSuccess, setPasswordSuccess] = useState(null);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  const handleUpdatePassword = async (event) => {
    event.preventDefault();
    setPasswordError(null);
    setPasswordSuccess(null);

    if (!oldPassword.trim() || !newPassword.trim()) {
      setPasswordError("Old and new password are required.");
      return;
    }

    if (newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters.");
      return;
    }

    try {
      setIsUpdatingPassword(true);
      const response = await updatePassword({
        oldPassword,
        newPassword,
      });
      setPasswordSuccess(response?.data?.message || "Password updated.");
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      setPasswordError(
        err?.response?.data?.message || "Failed to update password."
      );
    } finally {
      setIsUpdatingPassword(false);
    }
  };

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
                rounded-xl
                text-sm font-medium
                transition-all duration-200
                ${
                  isActive
                    ? "bg-[rgb(var(--primary-soft))] text-[rgb(var(--primary))]"
                    : "text-[rgb(var(--text))] hover:bg-[rgb(var(--hover))]"
                }
              `
              }
            >
              <span className="text-[20px]">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}

        </nav>

        {/* PROFILE EXPANDED PANEL */}
        <div
          className={`
            overflow-hidden
            transition-all duration-300
            ${
              profileOpen
                ? "max-h-96 opacity-100 px-4 py-4"
                : "max-h-0 opacity-0 px-4"
            }
          `}
        >

          <div className="
            rounded-2xl
            border border-[rgb(var(--border))]
            bg-[rgb(var(--card-bg))]
            p-4
            flex flex-col gap-4
          ">

            {/* USER INFO */}
            <div className="space-y-1">

              <h3 className="text-sm font-semibold text-[rgb(var(--text))]">
                {user?.name}
              </h3>

              <p className="text-xs text-[rgb(var(--text-muted))]">
                {user?.email}
              </p>

              <span className="
                inline-block
                mt-1
                px-2 py-1
                rounded-md
                text-[10px]
                capitalize
                bg-[rgb(var(--primary-soft))]
                text-[rgb(var(--primary))]
              ">
                {user?.role}
              </span>

            </div>

            {/* CHANGE PASSWORD */}
            <form className="flex flex-col gap-3" onSubmit={handleUpdatePassword}>

              <div className="relative">

                <FiLock className="
                  absolute left-3 top-1/2 -translate-y-1/2
                  text-[rgb(var(--text-muted))]
                " />

                <input
                  type={showOldPassword ? "text" : "password"}
                  placeholder="Old Password"
                  value={oldPassword}
                  onChange={(event) => setOldPassword(event.target.value)}
                  className="
                    w-full
                    rounded-xl
                    bg-[rgb(var(--hover))]
                    border border-[rgb(var(--border))]
                    pl-10 pr-10 py-2.5
                    text-sm
                    outline-none
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowOldPassword((prev) => !prev)}
                  className="
                    absolute right-3 top-1/2 -translate-y-1/2
                    text-[rgb(var(--text-muted))]
                    hover:text-[rgb(var(--text))]
                    transition
                  "
                  aria-label={
                    showOldPassword ? "Hide old password" : "Show old password"
                  }
                >
                  {showOldPassword ? <FiEyeOff /> : <FiEye />}
                </button>

              </div>

              <div className="relative">

                <FiLock className="
                  absolute left-3 top-1/2 -translate-y-1/2
                  text-[rgb(var(--text-muted))]
                " />

                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  className="
                    w-full
                    rounded-xl
                    bg-[rgb(var(--hover))]
                    border border-[rgb(var(--border))]
                    pl-10 pr-10 py-2.5
                    text-sm
                    outline-none
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowNewPassword((prev) => !prev)}
                  className="
                    absolute right-3 top-1/2 -translate-y-1/2
                    text-[rgb(var(--text-muted))]
                    hover:text-[rgb(var(--text))]
                    transition
                  "
                  aria-label={
                    showNewPassword ? "Hide new password" : "Show new password"
                  }
                >
                  {showNewPassword ? <FiEyeOff /> : <FiEye />}
                </button>

              </div>

              {passwordError && (
                <p className="text-xs text-red-500">{passwordError}</p>
              )}

              {passwordSuccess && (
                <p className="text-xs text-green-500">{passwordSuccess}</p>
              )}

              <button
                type="submit"
                disabled={isUpdatingPassword}
                className="
                  rounded-xl
                  bg-[rgb(var(--primary))]
                  text-white
                  py-2.5
                  text-sm
                  font-medium
                  transition hover:opacity-90 disabled:opacity-70
                "
              >
                {isUpdatingPassword ? "Updating..." : "Update Password"}
              </button>

            </form>

          </div>

        </div>

        {/* USER PANEL */}
        <button
          onClick={() => setProfileOpen(prev => !prev)}
          className="
            mt-auto
            border-t border-[rgb(var(--border))]
            p-4
            flex items-center justify-between
            hover:bg-[rgb(var(--hover))]
            transition
          "
        >

          <div className="flex items-center gap-3">

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

            <div className="flex flex-col text-left">

              <span className="text-sm font-medium text-[rgb(var(--text))]">
                {user?.name || "User"}
              </span>

              <span className="text-xs text-[rgb(var(--text-muted))]">
                {user?.email || "user@email.com"}
              </span>

            </div>

          </div>

          <FiChevronUp
            className={`
              transition-transform duration-300
              ${profileOpen ? "rotate-180" : ""}
            `}
          />

        </button>

      </aside>
    </>
  );
};

export default Sidebar;