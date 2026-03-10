import { FaUsers, FaLayerGroup, FaClipboardList, FaTasks } from "react-icons/fa";

const Dashboard = () => {

  const stats = [
    { title: "Total Groups", value: 5, icon: <FaLayerGroup /> },
    { title: "Active Learners", value: 42, icon: <FaUsers /> },
    { title: "Pending Submissions", value: 8, icon: <FaClipboardList /> },
    { title: "Assignments", value: 12, icon: <FaTasks /> },
  ];

  return (
    <div className="flex flex-col gap-8">

      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-[rgb(var(--text))]">
        Mentor Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-[rgb(var(--text-secondary))]">
                {item.title}
              </p>
              <h2 className="text-xl font-bold text-[rgb(var(--text))]">
                {item.value}
              </h2>
            </div>

            <div className="text-2xl text-[rgb(var(--primary))]">
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
        <h2 className="text-lg font-semibold text-[rgb(var(--text))] mb-4">
          Recent Activity
        </h2>

        <ul className="flex flex-col gap-2 text-[rgb(var(--text-secondary))]">
          <li>Group "React Basics" created</li>
          <li>Assignment "Hooks Practice" submitted</li>
          <li>New learner joined "DSA Bootcamp"</li>
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;