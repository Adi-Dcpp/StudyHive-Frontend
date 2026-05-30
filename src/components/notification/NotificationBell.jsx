import { useEffect, useState } from "react";
import { FiBell } from "react-icons/fi";

import NotificationDropdown from "./NotificationDropdown";

import {
  getNotifications
} from "../../services/notificationService";

const NotificationBell = () => {

  const [open, setOpen] = useState(false);

  const [notifications, setNotifications] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchNotifications = async () => {

    try {

      setLoading(true);

      const data = await getNotifications();

      console.log("Notifications:", data);

      // YOUR BACKEND RETURNS:
      // {
      //   notifications,
      //   unreadCount
      // }

      if (Array.isArray(data.notifications)) {

        setNotifications(data.notifications);

      } else {

        setNotifications([]);

      }


    } catch (error) {

      console.error(
        "Failed to fetch notifications:",
        error
      );

      setNotifications([]);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchNotifications();

    // POLLING
    const interval = setInterval(() => {

      fetchNotifications();

    }, 30000);

    return () => clearInterval(interval);

  }, []);

  // NOW COUNT = TOTAL NOTIFICATIONS
  const unreadCount = notifications.length;

  return (
    <div className="relative">

      {/* BELL BUTTON */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="
          relative
          p-2.5
          rounded-xl
          hover:bg-[rgb(var(--hover))]
          transition
        "
      >

        <FiBell className="text-[22px] text-[rgb(var(--text))]" />

        {/* BADGE */}
        {unreadCount > 0 && (
          <span
            className="
              absolute
              -top-1
              -right-1
              min-w-5
              h-5
              px-1
              rounded-full
              bg-red-500
              text-white
              text-[10px]
              font-semibold
              flex items-center justify-center
            "
          >
            {unreadCount}
          </span>
        )}

      </button>

      {/* DROPDOWN */}
      {open && (
        <NotificationDropdown
          notifications={notifications}
          refreshNotifications={fetchNotifications}
          loading={loading}
        />
      )}

    </div>
  );
};

export default NotificationBell;