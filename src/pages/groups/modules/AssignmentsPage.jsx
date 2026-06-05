import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ClipboardList, RefreshCw, Send, Upload } from 'lucide-react'

import useAuth from '../../../hooks/useAuth'
import goalService from '../../../services/goalService'
import assignmentService from '../../../services/assignmentService'
import submissionService from '../../../services/submissionService'

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

const AssignmentsPage = () => {
  const { groupId } = useParams()
  const { user } = useAuth()
  const role = user?.role || 'learner'
  const isMentor = role === 'mentor'

  const [goals, setGoals] = useState([])
  const [selectedGoalId, setSelectedGoalId] = useState('')
  const [assignments, setAssignments] = useState([])
  const [selectedAssignmentId, setSelectedAssignmentId] = useState('')
  const [loadingGoals, setLoadingGoals] = useState(true)
  const [loadingAssignments, setLoadingAssignments] = useState(false)
  const [error, setError] = useState(null)
  const [submission, setSubmission] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [assignmentForm, setAssignmentForm] = useState({
    title: '',
    description: '',
    deadline: '',
  })
  const [submissionForm, setSubmissionForm] = useState({
    submittedText: '',
    file: null,
  })

  const loadGoals = async () => {
    try {
      setLoadingGoals(true)
      setError(null)

      if (isMentor) {
        const response = await goalService.getGoalsByGroup(groupId, { page: 1, limit: 50 })
        setGoals(response?.goals || response || [])
        return
      }

      const response = await goalService.getMyGoals({ page: 1, limit: 100 })
      const items = response?.goals || response || []
      const filtered = items.filter(
        (goal) => (goal.group?._id || goal.groupId || '') === groupId
      )
      setGoals(filtered)
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to load goals')
    } finally {
      setLoadingGoals(false)
    }
  }

  const loadAssignments = async (goalId) => {
    if (!goalId) return
    try {
      setLoadingAssignments(true)
      setError(null)
      const response = await assignmentService.getAssignmentsByGoal(goalId, {
        page: 1,
        limit: 50,
      })
      const list = response?.assignments || response || []
      setAssignments(list)
      const nextSelected = list[0]?.assignmentId || list[0]?._id || ''
      setSelectedAssignmentId((current) => current || nextSelected)
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to load assignments')
    } finally {
      setLoadingAssignments(false)
    }
  }

  const loadSubmission = async (assignmentId) => {
    if (!assignmentId || isMentor) return
    try {
      const response = await submissionService.getMySubmission(assignmentId)
      setSubmission(response)
    } catch (err) {
      setSubmission(null)
      if (err?.response?.status !== 404) {
        setError(err?.response?.data?.message || err?.message || 'Failed to load submission')
      }
    }
  }

  useEffect(() => {
    loadGoals()
  }, [groupId, isMentor])

  useEffect(() => {
    const nextGoalId = getGoalId(goals[0])
    setSelectedGoalId((current) => current || nextGoalId || '')
  }, [goals])

  useEffect(() => {
    loadAssignments(selectedGoalId)
  }, [selectedGoalId])

  useEffect(() => {
    loadSubmission(selectedAssignmentId)
  }, [selectedAssignmentId])

  const selectedGoal = useMemo(
    () => goals.find((goal) => getGoalId(goal) === selectedGoalId),
    [goals, selectedGoalId]
  )

  const handleCreateAssignment = async (event) => {
    event.preventDefault()
    if (!selectedGoalId || !assignmentForm.title.trim()) return

    try {
      await assignmentService.createAssignment(selectedGoalId, {
        title: assignmentForm.title.trim(),
        description: assignmentForm.description.trim(),
        deadline: assignmentForm.deadline || undefined,
      })
      setAssignmentForm({ title: '', description: '', deadline: '' })
      await loadAssignments(selectedGoalId)
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to create assignment')
    }
  }

  const handleSubmitAssignment = async (event) => {
    event.preventDefault()
    if (!selectedAssignmentId) return

    if (!submissionForm.submittedText.trim() && !submissionForm.file) {
      setError('Add a text response or upload a file before submitting.')
      return
    }

    try {
      setSubmitting(true)
      setError(null)

      const formData = new FormData()
      if (submissionForm.submittedText.trim()) {
        formData.append('submittedText', submissionForm.submittedText.trim())
      }
      if (submissionForm.file) {
        formData.append('file', submissionForm.file)
      }

      await submissionService.submitAssignment(selectedAssignmentId, formData)
      setSubmissionForm({ submittedText: '', file: null })
      await loadSubmission(selectedAssignmentId)
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to submit assignment')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--bg))] px-4 py-8 text-[rgb(var(--text))] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="rounded-[36px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] px-6 py-7 shadow-sm sm:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-[rgb(var(--text-muted))]">
                Group assignments
              </p>
              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Assignments in this group
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgb(var(--text-secondary))] sm:text-base">
                Select a goal to see assignments and submit your work.
              </p>
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
        </section>

        {error ? (
          <div className="mt-4 rounded-2xl border border-[rgb(var(--error))] bg-[rgba(var(--error),0.08)] px-4 py-3 text-sm text-[rgb(var(--error))]">
            {error}
          </div>
        ) : null}

        <section className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="rounded-[34px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <p className="text-xs uppercase tracking-[0.28em] text-[rgb(var(--text-muted))]">Goals</p>
            <h2 className="mt-2 text-xl font-bold">{selectedGoal?.title || 'Pick a goal'}</h2>

            <div className="mt-4 grid gap-3">
              {loadingGoals ? (
                <div className="rounded-3xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-5 py-6 text-sm text-[rgb(var(--text-muted))]">
                  Loading goals...
                </div>
              ) : goals.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-5 py-6 text-sm text-[rgb(var(--text-muted))]">
                  No goals available.
                </div>
              ) : (
                goals.map((goal) => {
                  const id = getGoalId(goal)

                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => {
                        setSelectedGoalId(id)
                        setSelectedAssignmentId('')
                      }}
                      className={`rounded-3xl border px-4 py-3 text-left text-sm transition ${
                        selectedGoalId === id
                          ? 'border-transparent bg-[rgb(var(--primary))] text-white'
                          : 'border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-[rgb(var(--text))]'
                      }`}
                    >
                      <p className="font-semibold">{goal.title}</p>
                      <p className="text-xs opacity-80">
                        {goal.group?.name || goal.groupName || 'Group'}
                      </p>
                    </button>
                  )
                })
              )}
            </div>
          </div>

          <div className="rounded-[34px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[rgb(var(--text-muted))]">
                  Assignments
                </p>
                <h2 className="mt-2 text-xl font-bold">Assignments list</h2>
              </div>
              <button
                type="button"
                onClick={() => loadAssignments(selectedGoalId)}
                className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text))]"
              >
                <RefreshCw size={14} />
                Refresh
              </button>
            </div>

            <div className="mt-4 grid gap-3">
              {loadingAssignments ? (
                <div className="rounded-3xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-5 py-6 text-sm text-[rgb(var(--text-muted))]">
                  Loading assignments...
                </div>
              ) : assignments.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-5 py-6 text-sm text-[rgb(var(--text-muted))]">
                  No assignments yet.
                </div>
              ) : (
                assignments.map((assignment) => {
                  const id = assignment.assignmentId || assignment._id

                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setSelectedAssignmentId(id)}
                      className={`rounded-3xl border px-4 py-3 text-left text-sm transition ${
                        selectedAssignmentId === id
                          ? 'border-transparent bg-[rgb(var(--primary))] text-white'
                          : 'border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-[rgb(var(--text))]'
                      }`}
                    >
                      <p className="font-semibold">{assignment.title}</p>
                      <p className="text-xs opacity-80">Deadline {formatDate(assignment.deadline)}</p>
                    </button>
                  )
                })
              )}
            </div>

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
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[rgb(var(--primary))] px-4 py-3 text-sm font-semibold text-white"
                >
                  <ClipboardList size={16} />
                  Create assignment
                </button>
              </form>
            ) : (
              <div className="mt-6 rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4 text-sm text-[rgb(var(--text-secondary))]">
                Pick an assignment to submit your work.
              </div>
            )}

            {!isMentor && selectedAssignmentId ? (
              <form onSubmit={handleSubmitAssignment} className="mt-6 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
                  Submit work
                </p>
                {submission ? (
                  <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-xs text-[rgb(var(--text-muted))]">
                    Status: {submission.status || 'pending'}
                  </div>
                ) : null}
                <textarea
                  rows={4}
                  value={submissionForm.submittedText}
                  onChange={(event) =>
                    setSubmissionForm((current) => ({ ...current, submittedText: event.target.value }))
                  }
                  placeholder="Write your response"
                  className="w-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm"
                />
                <label className="flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm">
                  <Upload size={16} />
                  <span>{submissionForm.file?.name || 'Upload file (optional)'}</span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(event) =>
                      setSubmissionForm((current) => ({
                        ...current,
                        file: event.target.files?.[0] || null,
                      }))
                    }
                  />
                </label>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[rgb(var(--primary))] px-4 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Send size={16} />
                  {submitting ? 'Submitting...' : 'Submit assignment'}
                </button>
              </form>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  )
}

export default AssignmentsPage
