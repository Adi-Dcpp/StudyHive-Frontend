import {
  clearAllNotifications,
  deleteNotification
} from "../../services/notificationService";

const NotificationDropdown = ({
  notifications,
  refreshNotifications,
  loading
}) => {

  const handleClearAll = async () => {

    try {

      await clearAllNotifications();

      refreshNotifications();

    } catch (error) {

      console.error(
        "Failed to clear notifications:",
        error
      );

    }

  };

  const handleDelete = async (id) => {

    try {

      await deleteNotification(id);

      refreshNotifications();

    } catch (error) {

      console.error(
        "Failed to delete notification:",
        error
      );

    }

  };

  return (
    <div
      className="
        absolute
        right-0
        mt-3
        w-[360px]
        rounded-2xl
        border border-[rgb(var(--border))]
        bg-[rgb(var(--card-bg))]
        shadow-[0_10px_40px_rgba(0,0,0,0.45)]
        overflow-hidden
        z-50
      "
    >

      {/* HEADER */}
      <div
        className="
          flex items-center justify-between
          px-5 py-4
          border-b border-[rgb(var(--border))]
        "
      >

        <h3 className="font-semibold text-[rgb(var(--text))]">
          Notifications
        </h3>

        {notifications.length > 0 && (
          <button
            onClick={handleClearAll}
            className="
              text-xs
              text-[rgb(var(--primary))]
              hover:underline
            "
          >
            Clear all
          </button>
        )}

      </div>

      {/* LIST */}
      <div className="max-h-[400px] overflow-y-auto">

        {loading ? (

          <div
            className="
              p-6
              text-sm
              text-center
              text-[rgb(var(--text-muted))]
            "
          >
            Loading notifications...
          </div>

        ) : notifications.length === 0 ? (

          <div
            className="
              p-6
              text-sm
              text-center
              text-[rgb(var(--text-muted))]
            "
          >
            No notifications yet
          </div>

        ) : (

          notifications.map((notification) => (

            <button
              key={notification._id}
              onClick={() =>
                handleDelete(notification._id)
              }
              className="
                w-full
                text-left
                px-5 py-4
                border-b border-[rgb(var(--border))]
                transition
                hover:bg-[rgb(var(--hover))]
                bg-[rgb(var(--primary-soft))]/20
              "
            >

              <div className="
                flex items-start justify-between gap-3
              ">

                <div className="space-y-1 flex-1">

                  <h4
                    className="
                      text-sm
                      font-semibold
                      text-[rgb(var(--primary))]
                      line-clamp-2
                    "
                  >
                    {notification.title || "Notification"}
                  </h4>

                  <p
                    className="
                      text-xs
                      text-[rgb(var(--text-muted))]
                    "
                  >
                    {notification.body ||
                      notification.message ||
                      "No message"}
                  </p>

                </div>

                {/* UNREAD DOT */}
                <div
                  className="
                    mt-1
                    w-2.5 h-2.5
                    rounded-full
                    bg-[rgb(var(--primary))]
                  "
                />

              </div>

              <span
                className="
                  mt-2
                  block
                  text-[10px]
                  text-[rgb(var(--text-secondary))]
                "
              >
                {new Date(
                  notification.createdAt
                ).toLocaleString()}
              </span>

            </button>

          ))

        )}

      </div>

    </div>
  );
};

export default NotificationDropdown;