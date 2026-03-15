import { FaUsers, FaLayerGroup, FaClipboardList, FaTasks } from "react-icons/fa";

const StatsCards = ({ stats }) => {
  const cards = [
    { title: "Total Groups", value: stats?.groups || 0, icon: <FaLayerGroup /> },
    { title: "Active Learners", value: stats?.learners || 0, icon: <FaUsers /> },
    { title: "Submissions", value: stats?.submissions || 0, icon: <FaClipboardList /> },
    { title: "Assignments", value: stats?.assignments || 0, icon: <FaTasks /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((item) => (
        <div
          key={item.title}
          className="
          p-6
          rounded-xl
          border border-[rgb(var(--border))]
          bg-[rgb(var(--card-bg))]
          flex items-center justify-between
          shadow-sm
          hover:shadow-md
          transition-all
          hover:bg-[rgb(var(--surface-2))]
        "
        >

          {/* Text Section */}
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[rgb(var(--text-secondary))]">
              {item.title}
            </p>

            <h2 className="text-3xl font-bold text-[rgb(var(--text))]">
              {item.value}
            </h2>
          </div>

          {/* Icon */}
          <div
            className="
            w-12 h-12
            flex items-center justify-center
            rounded-lg
            bg-[rgb(var(--primary-soft))]
            text-[rgb(var(--primary))]
            text-xl
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