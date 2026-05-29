import { FaUsers, FaLayerGroup, FaClipboardList, FaTasks } from "react-icons/fa";

const StatsCards = ({ stats }) => {
  const cards = [
    { title: "Total Groups", value: stats?.groups || 0, icon: <FaLayerGroup /> },
    { title: "Active Learners", value: stats?.learners || 0, icon: <FaUsers /> },
    { title: "Submissions", value: stats?.submissions || 0, icon: <FaClipboardList /> },
    { title: "Assignments", value: stats?.assignments || 0, icon: <FaTasks /> },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((item) => (
        <div
          key={item.title}
          className="
          rounded-3xl
          border border-[rgb(var(--border))]
          bg-[rgb(var(--card-bg))]
          p-5
          flex items-center justify-between
          shadow-sm
          transition-colors
          hover:bg-[rgb(var(--surface))]
        "
        >

          {/* Text Section */}
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[rgb(var(--text-secondary))]">
              {item.title}
            </p>

            <h2 className="text-2xl font-bold text-[rgb(var(--text))] sm:text-[2rem]">
              {item.value}
            </h2>
          </div>

          {/* Icon */}
          <div
            className="
              w-11 h-11
            flex items-center justify-center
            rounded-lg
            bg-[rgb(var(--primary-soft))]
            text-[rgb(var(--primary))]
              text-lg
          "
          >
            {item.icon}
          </div>

        </div>
      ))}
    </div>
  );
};

export default StatsCards;