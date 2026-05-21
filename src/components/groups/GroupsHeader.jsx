const GroupsHeader = ({ onCreate, onJoin, canCreate, totalGroups = 0 }) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
          Groups
        </p>
        <h1 className="text-2xl font-semibold text-[rgb(var(--text))]">
          Your learning circles
        </h1>
        <p className="mt-1 text-sm text-[rgb(var(--text-secondary))]">
          {totalGroups} {totalGroups === 1 ? 'group' : 'groups'} connected to your workspace.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {canCreate && (
          <button
            type="button"
            onClick={onCreate}
            className="rounded-xl bg-[rgb(var(--primary))] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[rgb(var(--primary-hover))]"
          >
            Create Group
          </button>
        )}
        <button
          type="button"
          onClick={onJoin}
          className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-2.5 text-sm font-semibold text-[rgb(var(--text))] transition hover:bg-[rgb(var(--hover))]"
        >
          Join Group
        </button>
      </div>
    </div>
  )
}

export default GroupsHeader
