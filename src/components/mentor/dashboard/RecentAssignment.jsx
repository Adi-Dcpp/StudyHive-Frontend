import React from "react";
import { FiFileText } from "react-icons/fi";

const RecentAssignments = ({ assignments }) => {
  if (!assignments || assignments.length === 0) {
    return (
      <div className="p-6 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] shadow-sm min-h-220px">
        <h2 className="text-lg font-semibold text-[rgb(var(--text))] mb-4">
          Recent Assignments
        </h2>

        <div className="flex items-center justify-center h-32 text-[rgb(var(--text-muted))]">
          No assignments yet
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] shadow-sm min-h-260px">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-[rgb(var(--text))]">
          Recent Assignments
        </h2>

        <span className="text-sm text-[rgb(var(--text-muted))]">
          {assignments.length} items
        </span>
      </div>

      {/* List */}
      <ul className="flex flex-col divide-y divide-[rgb(var(--border))]">
        {assignments.map((a) => (
          <li
            key={a._id}
            className="flex items-center justify-between py-3 hover:bg-[rgb(var(--hover))] px-2 rounded-md transition"
          >
            
            {/* Left side */}
            <div className="flex items-center gap-3">
              
              <div className="w-9 h-9 flex items-center justify-center rounded-md bg-[rgb(var(--primary-soft))] text-[rgb(var(--primary))]">
                <FiFileText size={18} />
              </div>

              <span className="text-[rgb(var(--text))] font-medium">
                {a.title}
              </span>

            </div>

            {/* Deadline */}
            <span className="text-xs px-2 py-1 rounded-md bg-[rgb(var(--surface-2))] text-[rgb(var(--text-secondary))]">
              {new Date(a.deadline).toLocaleDateString()}
            </span>

          </li>
        ))}
      </ul>

    </div>
  );
};

export default RecentAssignments;