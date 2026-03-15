import React from "react";

const RecentAssignments = ({ assignments }) => {
  if (!assignments || assignments.length === 0) {
    return (
      <div className="p-6 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))]">
        <h2 className="text-lg font-semibold text-[rgb(var(--text))] mb-4">
          Recent Assignments
        </h2>

        <p className="text-[rgb(var(--text-muted))]">
          No assignments yet
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))]">
      <h2 className="text-lg font-semibold text-[rgb(var(--text))] mb-4">
        Recent Assignments
      </h2>

      <ul className="flex flex-col gap-3">
        {assignments.map((a) => (
          <li
            key={a._id}
            className="flex justify-between items-center"
          >
            <span className="text-[rgb(var(--text))]">
              {a.title}
            </span>

            <span className="text-[rgb(var(--text-muted))] text-sm">
              {new Date(a.deadline).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentAssignments;