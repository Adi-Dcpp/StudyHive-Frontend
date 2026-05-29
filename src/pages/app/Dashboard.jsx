import { createElement, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  FiArrowRight,
  FiBookOpen,
  FiClipboard,
  FiMessageSquare,
  FiUsers,
} from 'react-icons/fi'

import useAuth from '../../hooks/useAuth'
import useGroups from '../../hooks/useGroups'
import useMentorDashboard from '../../hooks/useMentorDashboard'
import GroupCard from '../../components/group/GroupCard'
import StatsCards from '../../components/mentor/dashboard/StatsCards'
import RecentSubmissions from '../../components/mentor/dashboard/RecentSubmissions'
import RecentAssignments from '../../components/mentor/dashboard/RecentAssignment'

const titleByRole = {
  mentor: 'Mentor Dashboard',
  learner: 'Learner Dashboard',
}

const roleCopyByRole = {
  mentor: 'Track groups, assignments, and recent submissions.',
  learner: 'Keep up with your groups, deadlines, and shared spaces.',
}

const LearnerStatCard = ({ title, value, icon: Icon }) => (
  <div
    className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-5 shadow-sm"
  >
    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <p className="text-sm text-[rgb(var(--text-secondary))]">{title}</p>
        <h2 className="mt-2 text-xl font-bold text-[rgb(var(--text))] sm:text-2xl">
          {value}
        </h2>
      </div>

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgb(var(--primary-soft))] text-[rgb(var(--primary))]">
        {createElement(Icon, { size: 18 })}
      </div>
    </div>
  </div>
)

const ShortcutCard = ({ title, description, to, icon: Icon }) => (
  <Link
    to={to}
    className="group rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-5 shadow-sm transition-colors duration-300 hover:bg-[rgb(var(--surface))]"
  >
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[rgb(var(--primary-soft))] text-[rgb(var(--primary))] transition-transform duration-300 group-hover:scale-105">
        {createElement(Icon, { size: 18 })}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-semibold text-[rgb(var(--text))]">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-[rgb(var(--text-secondary))]">
          {description}
        </p>
      </div>

      <FiArrowRight
        className="mt-1 text-[rgb(var(--text-muted))] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[rgb(var(--primary))]"
        size={18}
      />
    </div>
  </Link>
)

const Dashboard = () => {
  const { user, loading: authLoading } = useAuth()
  const role = user?.role || 'learner'
  const isMentor = role === 'mentor'

  const {
    stats,
    recentSubmissions,
    recentAssignments,
    loading: mentorLoading,
    error: mentorError,
  } = useMentorDashboard({ enabled: isMentor })

  const {
    groups,
    loading: groupsLoading,
  } = useGroups({ enabled: !isMentor })

  const displayName = user?.name || user?.fullName || user?.username || 'there'
  const learnerGroups = useMemo(() => (groups || []).slice(0, 2), [groups])
  const learnerStats = useMemo(() => {
    const groupCount = groups?.length || 0
    const nextGroup = learnerGroups[0]?.name || 'Join a group'
    const nextAction = groupCount > 0 ? 'Open your groups' : 'Join your first group'

    return [
      {
        title: 'Groups joined',
        value: groupCount,
        icon: FiUsers,
      },
      {
        title: 'Next stop',
        value: nextGroup,
        icon: FiBookOpen,
      },
      {
        title: 'Current action',
        value: nextAction,
        icon: FiClipboard,
      },
    ]
  }, [groups, learnerGroups])

  if (authLoading || (isMentor ? mentorLoading : groupsLoading)) {
    return (
      <p className="text-[rgb(var(--text-secondary))]">
        Loading dashboard...
      </p>
    )
  }

  if (isMentor && mentorError) {
    return (
      <p className="text-[rgb(var(--error))]">
        Error: {mentorError}
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-8 text-[rgb(var(--text))]">
      <section
        className="rounded-4xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 shadow-sm"
      >
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-[rgb(var(--text-muted))]">
              Dashboard
            </p>
            <h1 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
              {titleByRole[role] || 'Dashboard'}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgb(var(--text-secondary))]">
              Hi {displayName}. {roleCopyByRole[role] || 'Your learning workspace is ready.'}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
            <span className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-3 py-2 text-[rgb(var(--text-secondary))]">
              Role: {role}
            </span>
            <span className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-3 py-2 text-[rgb(var(--text-secondary))]">
              Signed in as {displayName}
            </span>
          </div>
        </div>
      </section>

      {isMentor ? (
        <>
          <StatsCards stats={stats} />

          <div className="grid gap-8 xl:grid-cols-2">
            <RecentSubmissions submissions={recentSubmissions} />
            <RecentAssignments assignments={recentAssignments} />
          </div>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <ShortcutCard
              title="Open groups"
              description="Review group pages, invite codes, and member activity."
              to="/app/groups"
              icon={FiUsers}
            />
            <ShortcutCard
              title="Review submissions"
              description="Jump into the latest learner uploads and feedback."
              to="/app/submissions"
              icon={FiClipboard}
            />
            <ShortcutCard
              title="Send a message"
              description="Open the team conversation space for quick follow-up."
              to="/app/messages"
              icon={FiMessageSquare}
            />
          </section>
        </>
      ) : (
        <>
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {learnerStats.map((item) => (
              <LearnerStatCard key={item.title} {...item} />
            ))}
          </section>

          <section className="flex flex-col gap-4 rounded-4xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[rgb(var(--text-muted))]">
                  Your groups
                </p>
                <h2 className="mt-2 text-xl font-bold text-[rgb(var(--text))]">
                  Continue where you left off
                </h2>
              </div>

              <Link
                to="/app/groups"
                className="text-sm font-semibold text-[rgb(var(--primary))]"
              >
                View all
              </Link>
            </div>

            {learnerGroups.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-6 py-10 text-center text-[rgb(var(--text-secondary))]">
                No groups yet. Join a study group to start seeing your dashboard updates here.
              </div>
            ) : (
              <div className="grid gap-6 xl:grid-cols-2">
                {learnerGroups.map((group) => (
                  <GroupCard key={group.groupId || group._id} group={group} />
                ))}
              </div>
            )}
          </section>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <ShortcutCard
              title="Join a group"
              description="Use an invite code to connect to a new study circle."
              to="/app/groups"
              icon={FiUsers}
            />
            <ShortcutCard
              title="Open assignments"
              description="Move straight into your assignment workspace."
              to="/app/assignments"
              icon={FiClipboard}
            />
            <ShortcutCard
              title="Open messages"
              description="Check discussions and replies from your groups."
              to="/app/messages"
              icon={FiMessageSquare}
            />
          </section>
        </>
      )}
    </div>
  )
}

export default Dashboard
