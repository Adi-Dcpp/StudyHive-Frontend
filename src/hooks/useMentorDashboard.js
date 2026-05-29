import { useEffect, useState } from "react";
import api from "../services/api";

const defaultStats = {
    groups: 0,
    learners: 0,
    assignments: 0,
    submissions: 0,
  };

const useMentorDashboard = ({ enabled = true } = {}) => {
  const [stats, setStats] = useState(defaultStats);

  const [recentSubmissions, setRecentSubmissions] = useState([]);
  const [recentAssignments, setRecentAssignments] = useState([]);
  const [loading, setLoading] = useState(enabled);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!enabled) {
      setStats(defaultStats);
      setRecentSubmissions([]);
      setRecentAssignments([]);
      setError(null);
      setLoading(false);
      return;
    }

    const fetchDashboard = async () => {
      setLoading(true);

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
  }, [enabled]);

  return { stats, recentSubmissions, recentAssignments, loading, error };
};

export default useMentorDashboard;