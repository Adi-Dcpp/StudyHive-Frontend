import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  CalendarDays,
  ClipboardList,
  FolderOpen,
  RefreshCw,
  Save,
  Trash2,
} from 'lucide-react'

import useAuth from '../../hooks/useAuth'
import goalService from '../../services/goalService'
import assignmentService from '../../services/assignmentService'
import { getMyGroups } from '../../services/groupService'

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

const GoalDetails = () => {
  const { goalId } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const role = user?.role || 'learner'
  const isMentor = role === 'mentor'

  const [goal, setGoal] = useState(null)
  const [assignments, setAssignments] = useState([])
  const [loading, setLoading] = useState(true)
  const [assignmentsLoading, setAssignmentsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    status: 'not_started',
  })
  const [saving, setSaving] = useState(false)
  const [creatingAssignment, setCreatingAssignment] = useState(false)
  const [assignmentForm, setAssignmentForm] = useState({
    title: '',
    description: '',
    deadline: '',
  })

  const loadGoal = async () => {
    try {
      setLoading(true)
      setError(null)

      if (isMentor) {
        const groupResponse = await getMyGroups()
        const groups = groupResponse?.groups || groupResponse || []
        const groupIds = groups
          .map((group) => group?.groupId || group?._id || group?.id)
          .filter(Boolean)

        if (groupIds.length === 0) {
          throw new Error('No groups found for this account')
        }

        const responses = await Promise.all(
          groupIds.map((groupId) => goalService.getGoalsByGroup(groupId, { page: 1, limit: 50 }))
        )

        const merged = responses.flatMap((response) => response?.goals || response || [])
        const match = merged.find((item) => getGoalId(item) === goalId)

        if (!match) {
          throw new Error('Goal not found')
        }

        setGoal(match)
        setFormState({
          title: match.title || '',
          description: match.description || '',
          status: match.status || 'not_started',
        })
        return
      }

      const response = await goalService.getMyGoals({ page: 1, limit: 100 })
      const items = response?.goals || response || []
      const match = items.find((item) => getGoalId(item) === goalId)

      if (!match) {
        throw new Error('Goal not found')
      }

      setGoal(match)
      setFormState({
        title: match.title || '',
        description: match.description || '',
        status: match.status || 'not_started',
      })
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to load goal')
    } finally {
      setLoading(false)
    }
  }

  const loadAssignments = async () => {
    try {
      setAssignmentsLoading(true)
      const response = await assignmentService.getAssignmentsByGoal(goalId, {
        page: 1,
        limit: 50,
      })
      setAssignments(response?.assignments || response || [])
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to load assignments')
    } finally {
      setAssignmentsLoading(false)
    }
  }

  useEffect(() => {
    loadGoal()
  }, [goalId, isMentor])

  useEffect(() => {
    loadAssignments()
  }, [goalId])

  const groupName = goal?.group?.name || goal?.groupName || 'Group'
  const meta = statusMeta[goal?.status] || statusMeta.not_started

  const handleSave = async () => {
    if (!goal) return

    const payload = {}
    if (formState.title.trim() && formState.title !== goal.title) {
      payload.title = formState.title.trim()
    }
    if ((formState.description || '') !== (goal.description || '')) {
      payload.description = formState.description.trim()
    }
    if (formState.status !== goal.status) {
      payload.status = formState.status
    }

    if (Object.keys(payload).length === 0) return

    try {
      setSaving(true)
      await goalService.updateGoal(goalId, payload)
      setGoal((current) => ({ ...current, ...payload }))
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to update goal')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!window.confirm('Delete this goal and its assignments?')) return

    try {
      await goalService.deleteGoal(goalId)
      navigate('/app/goals')
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to delete goal')
    }
  }

  const handleCreateAssignment = async (event) => {
    event.preventDefault()

    if (!assignmentForm.title.trim()) return

    try {
      setCreatingAssignment(true)
      await assignmentService.createAssignment(goalId, {
        title: assignmentForm.title.trim(),
        description: assignmentForm.description.trim(),
        deadline: assignmentForm.deadline || undefined,
      })
      setAssignmentForm({ title: '', description: '', deadline: '' })
      await loadAssignments()
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to create assignment')
    } finally {
      setCreatingAssignment(false)
    }
  }

  const assignedCount = useMemo(
    () => (Array.isArray(goal?.assignedTo) ? goal.assignedTo.length : 0),
    [goal]
  )

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[rgb(var(--bg))] px-4">
        <div className="rounded-[28px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] px-6 py-5 text-sm text-[rgb(var(--text-secondary))]">
          Loading goal...
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[rgb(var(--bg))] px-4">
        <div className="rounded-[28px] border border-[rgb(var(--error))] bg-[rgba(var(--error),0.08)] px-6 py-5 text-sm text-[rgb(var(--error))]">
          {error}
        </div>
      </div>
    )
  }

  if (!goal) return null

  return (
    <div className="min-h-screen bg-[rgb(var(--bg))] px-4 py-8 text-[rgb(var(--text))] sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <section className="rounded-[36px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] px-6 py-7 shadow-sm sm:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.34em] text-[rgb(var(--text-muted))]">
                Goal details
              </p>
              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {goal.title}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgb(var(--text-secondary))] sm:text-base">
                {goal.description || 'No description provided yet.'}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ background: meta.tint, color: meta.color }}
              >
                {meta.label}
              </span>
              <span className="rounded-full border border-[rgb(var(--border))] px-4 py-2 text-xs text-[rgb(var(--text-muted))]">
                {groupName}
              </span>
              <span className="rounded-full border border-[rgb(var(--border))] px-4 py-2 text-xs text-[rgb(var(--text-muted))]">
                Assigned {assignedCount}
              </span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-xs text-[rgb(var(--text-muted))]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] px-4 py-2">
              <CalendarDays size={14} />
              Created {formatDate(goal.createdAt)}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] px-4 py-2">
              <FolderOpen size={14} />
              Group ID {goal.group?._id || goal.groupId || 'N/A'}
            </span>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="rounded-[34px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[rgb(var(--text-muted))]">
                  Assignments
                </p>
                <h2 className="mt-2 text-xl font-bold">Goal assignments</h2>
              </div>
              <button
                type="button"
                onClick={loadAssignments}
                className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text))]"
              >
                <RefreshCw size={14} />
                Refresh
              </button>
            </div>

            <div className="mt-5 grid gap-4">
              {assignmentsLoading ? (
                <div className="rounded-3xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-5 py-6 text-sm text-[rgb(var(--text-muted))]">
                  Loading assignments...
                </div>
              ) : assignments.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-5 py-6 text-sm text-[rgb(var(--text-muted))]">
                  No assignments added yet.
                </div>
              ) : (
                assignments.map((assignment) => (
                  <div
                    key={assignment.assignmentId || assignment._id}
                    className="flex flex-col gap-2 rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4"
                  >
                    <p className="text-base font-semibold text-[rgb(var(--text))]">
                      {assignment.title}
                    </p>
                    <p className="text-sm text-[rgb(var(--text-secondary))]">
                      Deadline {formatDate(assignment.deadline)}
                    </p>
                    <Link
                      to="/app/assignments"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--primary))]"
                    >
                      <ClipboardList size={14} />
                      View submissions
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>

          <aside className="rounded-[34px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <p className="text-xs uppercase tracking-[0.28em] text-[rgb(var(--text-muted))]">
              Goal actions
            </p>
            <h3 className="mt-2 text-lg font-bold">Manage goal</h3>

            {!isMentor ? (
              <div className="mt-4 rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4 text-sm text-[rgb(var(--text-secondary))]">
                Your mentor manages this goal. Track assignments and progress here.
              </div>
            ) : (
              <div className="mt-4 space-y-3">
                <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
                  Title
                </label>
                <input
                  value={formState.title}
                  onChange={(event) =>
                    setFormState((current) => ({ ...current, title: event.target.value }))
                  }
                  className="w-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm"
                />

                <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
                  Description
                </label>
                <textarea
                  rows={4}
                  value={formState.description}
                  onChange={(event) =>
                    setFormState((current) => ({ ...current, description: event.target.value }))
                  }
                  className="w-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm"
                />

                <label className="block text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
                  Status
                </label>
                <select
                  value={formState.status}
                  onChange={(event) =>
                    setFormState((current) => ({ ...current, status: event.target.value }))
                  }
                  className="w-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm"
                >
                  <option value="not_started">Not started</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>

                <div className="flex flex-col gap-2 pt-2">
                  <button
                    type="button"
                    onClick={handleSave}
                    disabled={saving}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[rgb(var(--primary))] px-4 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <Save size={16} />
                    {saving ? 'Saving...' : 'Save changes'}
                  </button>
                  <button
                    type="button"
                    onClick={handleDelete}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[rgb(var(--border))] px-4 py-3 text-sm font-semibold text-[rgb(var(--error))]"
                  >
                    <Trash2 size={16} />
                    Delete goal
                  </button>
                </div>
              </div>
            )}

            {isMentor ? (
              <form onSubmit={handleCreateAssignment} className="mt-6 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
                  New assignment
                </p>
                <input
                  value={assignmentForm.title}
                  onChange={(event) =>
                    setAssignmentForm((current) => ({ ...current, title: event.target.value }))
                  }
                  placeholder="Assignment title"
                  className="w-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm"
                />
                <textarea
                  rows={3}
                  value={assignmentForm.description}
                  onChange={(event) =>
                    setAssignmentForm((current) => ({ ...current, description: event.target.value }))
                  }
                  placeholder="Description"
                  className="w-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm"
                />
                <input
                  type="date"
                  value={assignmentForm.deadline}
                  onChange={(event) =>
                    setAssignmentForm((current) => ({ ...current, deadline: event.target.value }))
                  }
                  className="w-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm"
                />
                <button
                  type="submit"
                  disabled={creatingAssignment}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[rgb(var(--primary))] px-4 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <ClipboardList size={16} />
                  {creatingAssignment ? 'Creating...' : 'Create assignment'}
                </button>
              </form>
            ) : null}
          </aside>
        </section>
      </div>
    </div>
  )
}

export default GoalDetails
