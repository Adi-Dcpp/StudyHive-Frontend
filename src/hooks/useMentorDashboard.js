import { useEffect, useState } from "react";
import api from "../services/api";

const useMentorDashboard = () => {
  const [stats, setStats] = useState({
    groups: 0,
    learners: 0,
    assignments: 0,
    submissions: 0,
  });

  const [recentSubmissions, setRecentSubmissions] = useState([]);
  const [recentAssignments, setRecentAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await api.get("/dashboard/mentor", {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        });

        console.log(res.data)

        const payload = res?.data?.data ?? {};

        setStats({
          groups: Number(payload.groups) || 0,
          learners: Number(payload.learners) || 0,
          assignments: Number(payload.assignments) || 0,
          submissions: Number(payload.submissions) || 0,
        });

        setRecentSubmissions(payload.recentSubmissions || []);
        setRecentAssignments(payload.recentAssignments || []);
      } catch (err) {
        console.error(err);
        setError(err?.response?.data?.message || "Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  return { stats, recentSubmissions, recentAssignments, loading, error };
};

export default useMentorDashboard;