import { FiUpload } from "react-icons/fi";

const RecentSubmissions = ({ submissions }) => {
  const safeSubmissions = submissions || [];

  const formatSubmission = (submission) => {
    const learnerName =
      submission?.userId?.name ||
      submission?.learner?.name ||
      submission?.student?.name ||
      "Unknown learner";

    const assignmentTitle =
      submission?.assignmentId?.title ||
      submission?.assignment?.title ||
      submission?.title ||
      "Untitled assignment";

    return { learnerName, assignmentTitle };
  };

  return (
    <div className="p-6 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] shadow-sm min-h-260px">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-[rgb(var(--text))]">
          Recent Submissions
        </h2>

        <span className="text-sm text-[rgb(var(--text-muted))]">
          {safeSubmissions.length} items
        </span>
      </div>

      {/* Empty state */}
      {safeSubmissions.length === 0 && (
        <div className="flex items-center justify-center h-32 text-[rgb(var(--text-muted))]">
          No submissions yet
        </div>
      )}

      {/* List */}
      <ul className="flex flex-col divide-y divide-[rgb(var(--border))]">
        {safeSubmissions.map((submission, index) => {
          const { learnerName, assignmentTitle } = formatSubmission(submission);

          return (
            <li
              key={submission?._id || submission?.id || index}
              className="flex items-center justify-between py-3 px-2 hover:bg-[rgb(var(--hover))] rounded-md transition"
            >

              {/* Left side */}
              <div className="flex items-center gap-3">

                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-[rgb(var(--primary-soft))] text-[rgb(var(--primary))] flex items-center justify-center font-semibold text-sm">
                  {learnerName.charAt(0).toUpperCase()}
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <span className="text-[rgb(var(--text))] font-medium">
                    {learnerName}
                  </span>

                  <span className="text-xs text-[rgb(var(--text-muted))]">
                    {assignmentTitle}
                  </span>
                </div>

              </div>

              {/* Date */}
              <span className="text-xs px-2 py-1 rounded-md bg-[rgb(var(--surface-2))] text-[rgb(var(--text-secondary))]">
                {submission?.submittedAt
                  ? new Date(submission.submittedAt).toLocaleDateString()
                  : "Date unavailable"}
              </span>

            </li>
          );
        })}
      </ul>

    </div>
  );
};

export default RecentSubmissions;