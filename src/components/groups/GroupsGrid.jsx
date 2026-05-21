import EmptyGroupsState from './EmptyGroupsState'
import GroupCard from './GroupCard'
import GroupCardSkeleton from './GroupCardSkeleton'

const GroupsGrid = ({
  groups,
  loading,
  error,
  onRetry,
  onCreate,
  onJoin,
  canCreate,
}) => {
  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <GroupCardSkeleton key={`group-skeleton-${index}`} />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 text-sm text-[rgb(var(--text-secondary))]">
        <p className="font-semibold text-[rgb(var(--error))]">{error}</p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-3 inline-flex items-center rounded-lg border border-[rgb(var(--border))] px-3 py-1.5 text-xs font-semibold text-[rgb(var(--text))] hover:bg-[rgb(var(--hover))]"
        >
          Retry
        </button>
      </div>
    )
  }

  if (!groups.length) {
    return (
      <EmptyGroupsState onCreate={onCreate} onJoin={onJoin} canCreate={canCreate} />
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {groups.map((group) => (
        <GroupCard key={group._id || group.id || group.groupId} group={group} />
      ))}
    </div>
  )
}

export default GroupsGrid
