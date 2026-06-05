import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FolderOpen, RefreshCw, Search, Target } from 'lucide-react'

import useAuth from '../../hooks/useAuth'
import useGroups from '../../hooks/useGroups'
import goalService from '../../services/goalService'

const statusMeta = {
  not_started: {
    label: 'Not started',
    color: 'rgb(var(--text-secondary))',
    tint: 'rgba(var(--text-muted),0.2)',
  },
  ongoing: {
    label: 'Ongoing',
    color: 'rgb(var(--warning))',
    tint: 'rgba(var(--warning),0.16)',
  },
  completed: {
    label: 'Completed',
    color: 'rgb(var(--success))',
    tint: 'rgba(var(--success),0.16)',
  },
}

const formatDate = (value) => {
  if (!value) return 'N/A'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'N/A'
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

const getGoalId = (goal) => goal?.goalId || goal?._id || goal?.id

const GoalsList = () => {
  const { user } = useAuth()
  const role = user?.role || 'learner'
  const isMentor = role === 'mentor'

  const { groups, loading: groupsLoading } = useGroups({ enabled: isMentor })

  const [goals, setGoals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const loadGoals = async () => {
    try {
      setLoading(true)
      setError(null)

      if (isMentor) {
        const groupIds = (groups || [])
          .map((group) => group?.groupId || group?._id || group?.id)
          .filter(Boolean)

        if (groupIds.length === 0) {
          setGoals([])
          return
        }

        const responses = await Promise.all(
          groupIds.map((groupId) =>
            goalService.getGoalsByGroup(groupId, { page: 1, limit: 50 })
          )
        )

        const merged = responses.flatMap((response) => response?.goals || response || [])
        setGoals(merged)
        return
      }

      const response = await goalService.getMyGoals({ page: 1, limit: 50 })
      setGoals(response?.goals || response || [])
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to load goals')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isMentor && groupsLoading) return
    loadGoals()
  }, [isMentor, groupsLoading, groups])

  const normalizedGoals = useMemo(
    () =>
      goals.map((goal) => ({
        ...goal,
        goalId: getGoalId(goal),
        groupName: goal?.group?.name || goal?.groupName || goal?.group?.title || 'Group',
        groupId: goal?.group?._id || goal?.groupId,
        assignedCount: Array.isArray(goal?.assignedTo) ? goal.assignedTo.length : 0,
      })),
    [goals]
  )

  const filteredGoals = useMemo(() => {
    const term = query.trim().toLowerCase()

    return normalizedGoals.filter((goal) => {
      if (statusFilter !== 'all' && goal.status !== statusFilter) return false

      if (!term) return true

      return [goal.title, goal.description, goal.groupName]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(term))
    })
  }, [normalizedGoals, query, statusFilter])

  return (
    <div className="min-h-screen bg-[rgb(var(--bg))] px-4 py-8 text-[rgb(var(--text))] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="relative overflow-hidden rounded-[36px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] px-6 py-7 shadow-sm sm:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(var(--primary),0.16),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(var(--warning),0.16),transparent_38%)]" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.34em] text-[rgb(var(--text-muted))]">
                Goals
              </p>
              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                All goals
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgb(var(--text-secondary))] sm:text-base">
                Track every goal assigned to you. Open a goal to review status, assignments, and
                next actions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[rgb(var(--text-muted))]">
                  Total
                </p>
                <p className="mt-1 text-xl font-black">{filteredGoals.length}</p>
              </div>
              <button
                type="button"
                onClick={loadGoals}
                className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm font-semibold text-[rgb(var(--text))]"
              >
                <RefreshCw size={16} />
                Refresh
              </button>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[34px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          {error ? (
            <div className="mb-5 rounded-2xl border border-[rgb(var(--error))] bg-[rgba(var(--error),0.08)] px-4 py-3 text-sm text-[rgb(var(--error))]">
              {error}
            </div>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex flex-1 items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3">
              <Search size={16} className="text-[rgb(var(--text-muted))]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by goal or group"
                className="w-full bg-transparent text-sm text-[rgb(var(--text))] outline-none"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {['all', 'not_started', 'ongoing', 'completed'].map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setStatusFilter(status)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                    statusFilter === status
                      ? 'border-transparent bg-[rgb(var(--primary))] text-white'
                      : 'border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-[rgb(var(--text-secondary))]'
                  }`}
                >
                  {status === 'all' ? 'All status' : statusMeta[status]?.label || status}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            {loading ? (
              <div className="rounded-3xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-5 py-6 text-sm text-[rgb(var(--text-muted))]">
                Loading goals...
              </div>
            ) : filteredGoals.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-5 py-6 text-sm text-[rgb(var(--text-muted))]">
                No goals found yet.
              </div>
            ) : (
              filteredGoals.map((goal) => {
                const meta = statusMeta[goal.status] || statusMeta.not_started

                return (
                  <Link
                    key={goal.goalId}
                    to={`/app/goals/${goal.goalId}`}
                    className="group flex flex-col gap-4 rounded-[28px] border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.16)] sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl"
                        style={{ background: meta.tint, color: meta.color }}
                      >
                        <Target size={20} />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-[rgb(var(--text))]">
                          {goal.title || 'Untitled goal'}
                        </p>
                        <p className="text-sm text-[rgb(var(--text-secondary))]">
                          {goal.groupName}
                        </p>
                        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                          <span
                            className="rounded-full px-3 py-1 font-semibold uppercase tracking-[0.2em]"
                            style={{ background: meta.tint, color: meta.color }}
                          >
                            {meta.label}
                          </span>
                          <span className="rounded-full border border-[rgb(var(--border))] px-3 py-1 text-[rgb(var(--text-muted))]">
                            Assigned {goal.assignedCount}
                          </span>
                          <span className="rounded-full border border-[rgb(var(--border))] px-3 py-1 text-[rgb(var(--text-muted))]">
                            Created {formatDate(goal.createdAt)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
                      <FolderOpen size={14} />
                      Open
                    </div>
                  </Link>
                )
              })
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default GoalsList
