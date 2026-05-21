const GroupOverview = ({ group }) => {
  return (
    <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6">
      <h2 className="text-lg font-semibold text-[rgb(var(--text))]">Overview</h2>
      <p className="mt-2 text-sm text-[rgb(var(--text-secondary))]">
        {group?.description || 'This group has no description yet.'}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
            Created
          </p>
          <p className="mt-2 text-sm font-semibold text-[rgb(var(--text))]">
            {group?.createdAt
              ? new Date(group.createdAt).toLocaleDateString()
              : '---'}
          </p>
        </div>
        <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
            Members
          </p>
          <p className="mt-2 text-sm font-semibold text-[rgb(var(--text))]">
            {group?.membersCount || group?.memberCount || '---'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default GroupOverview
