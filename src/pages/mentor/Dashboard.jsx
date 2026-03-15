import useMentorDashboard from "../../hooks/useMentorDashboard";
import StatsCards from "../../components/mentor/dashboard/StatsCards";
import RecentSubmissions from "../../components/mentor/dashboard/RecentSubmissions";
import RecentAssignments from "../../components/mentor/dashboard/RecentAssignment";

const Dashboard = () => {
  const { stats, recentSubmissions, recentAssignments, loading, error } =
    useMentorDashboard();

  if (loading)
    return (
      <p className="text-[rgb(var(--text-secondary))]">
        Loading dashboard...
      </p>
    );

  if (error)
    return (
      <p className="text-[rgb(var(--error))]">
        Error: {error}
      </p>
    );

  return (
    <div className="flex flex-col gap-8 text-[rgb(var(--text))]">
      <h1 className="text-2xl font-semibold">
        Mentor Dashboard
      </h1>

      <StatsCards stats={stats} />

      <RecentSubmissions submissions={recentSubmissions} />

      <RecentAssignments assignments={recentAssignments} />
    </div>
  );
};

export default Dashboard;