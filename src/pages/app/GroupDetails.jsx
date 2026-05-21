import { lazy, Suspense, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import GroupSidebar from '../../components/groups/details/GroupSidebar'
import GroupOverview from '../../components/groups/details/GroupOverview'
import useGroupDetails from '../../hooks/useGroupDetails'

const GroupMembers = lazy(() =>
  import('../../components/groups/details/GroupMembers')
)
const GroupGoals = lazy(() =>
  import('../../components/groups/details/GroupGoals')
)
const GroupAssignments = lazy(() =>
  import('../../components/groups/details/GroupAssignments')
)
const GroupResources = lazy(() =>
  import('../../components/groups/details/GroupResources')
)
const GroupAnnouncements = lazy(() =>
  import('../../components/groups/details/GroupAnnouncements')
)

const GroupDetails = () => {
  const { groupId } = useParams()
  const [activeTab, setActiveTab] = useState('overview')
  const { group, members, loading, membersLoading, error } =
    useGroupDetails(groupId)

  const tabs = useMemo(
    () => [
      { key: 'overview', label: 'Overview' },
      {
        key: 'members',
        label: 'Members',
        badge: members.length ? members.length : null,
      },
      { key: 'goals', label: 'Goals' },
      { key: 'assignments', label: 'Assignments' },
      { key: 'resources', label: 'Resources' },
      { key: 'announcements', label: 'Announcements' },
    ],
    [members.length]
  )

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'members':
        return <GroupMembers members={members} loading={membersLoading} />
      case 'goals':
        return <GroupGoals />
      case 'assignments':
        return <GroupAssignments />
      case 'resources':
        return <GroupResources />
      case 'announcements':
        return <GroupAnnouncements />
      case 'overview':
      default:
        return <GroupOverview group={group} />
    }
  }

  if (loading) {
    return (
      <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 text-sm text-[rgb(var(--text-secondary))]">
        Loading group details...
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 text-sm text-[rgb(var(--error))]">
        {error}
      </div>
    )
  }

  return (
    <section className="flex flex-col gap-6">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
          Group details
        </p>
        <h1 className="text-2xl font-semibold text-[rgb(var(--text))]">
          {group?.name || group?.title || 'Group'}
        </h1>
        <p className="mt-2 text-sm text-[rgb(var(--text-secondary))]">
          {group?.description || 'No description yet.'}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <GroupSidebar
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <Suspense
          fallback={
            <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 text-sm text-[rgb(var(--text-secondary))]">
              Loading section...
            </div>
          }
        >
          {renderActiveTab()}
        </Suspense>
      </div>
    </section>
  )
}

export default GroupDetails