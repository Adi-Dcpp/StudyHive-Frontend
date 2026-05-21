const GroupMembers = ({ members, loading }) => {
  if (loading) {
    return (
      <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6">
        <p className="text-sm text-[rgb(var(--text-secondary))]">Loading members...</p>
      </div>
    )
  }

  if (!members.length) {
    return (
      <div className="rounded-2xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 text-sm text-[rgb(var(--text-secondary))]">
        No members found yet.
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6">
      <h2 className="text-lg font-semibold text-[rgb(var(--text))]">Members</h2>
      <div className="mt-4 space-y-3">
        {members.map((member) => (
          <div
            key={member?._id || member?.id}
            className="flex items-center justify-between rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3"
          >
            <div>
              <p className="text-sm font-semibold text-[rgb(var(--text))]">
                {member?.name || 'Unnamed user'}
              </p>
              <p className="text-xs text-[rgb(var(--text-muted))]">
                {member?.email || 'No email'}
              </p>
            </div>
            <span className="rounded-full bg-[rgb(var(--surface-2))] px-3 py-1 text-xs font-semibold capitalize text-[rgb(var(--text-secondary))]">
              {member?.role || 'member'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GroupMembers
