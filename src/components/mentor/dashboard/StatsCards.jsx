import { FaUsers, FaLayerGroup, FaClipboardList, FaTasks } from "react-icons/fa";

const StatsCards = ({ stats }) => {
  console.log("stats received:", stats);
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
  transition-colors
  hover:bg-[rgb(var(--surface-2))]
"
        >
          <div>
            <p className="text-sm text-[rgb(var(--text-secondary))]">
              {item.title}
            </p>
            <h2 className="text-2xl font-semibold text-[rgb(var(--text))]">
              {item.value}
            </h2>
          </div>

          <div className="text-2xl text-[rgb(var(--primary))]">
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;