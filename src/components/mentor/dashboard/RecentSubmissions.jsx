const RecentSubmissions = ({ submissions }) => {
  const safeSubmissions = submissions || [];

  const formatSubmissionLabel = (submission) => {
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

    return `${learnerName} submitted ${assignmentTitle}`;
  };

  return (
    <div className="p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
      <h2 className="text-lg font-semibold text-[rgb(var(--text))] mb-4">
        Recent Submissions
      </h2>

      <ul className="flex flex-col gap-2 text-[rgb(var(--text-secondary))]">
        {safeSubmissions.length === 0 && <li>No submissions yet</li>}

        {safeSubmissions.map((submission, index) => (
          <li key={submission?._id || submission?.id || index}>
            {formatSubmissionLabel(submission)} - Submitted: {" "}
            {submission?.submittedAt
              ? new Date(submission.submittedAt).toLocaleDateString()
              : "Date unavailable"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSubmissions;