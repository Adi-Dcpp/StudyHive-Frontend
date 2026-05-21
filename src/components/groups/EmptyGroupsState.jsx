const EmptyGroupsState = ({ onCreate, onJoin, canCreate }) => {
  return (
    <div className="rounded-2xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] px-6 py-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
        No groups yet
      </p>
      <h3 className="mt-3 text-xl font-semibold text-[rgb(var(--text))]">
        Start your first group
      </h3>
      <p className="mt-2 text-sm text-[rgb(var(--text-secondary))]">
        Create a learning space for your cohort or join one with an invite code.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
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

export default EmptyGroupsState
