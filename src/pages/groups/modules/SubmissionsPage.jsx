import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RefreshCw, ShieldCheck } from 'lucide-react'

import useAuth from '../../../hooks/useAuth'
import goalService from '../../../services/goalService'
import assignmentService from '../../../services/assignmentService'
import submissionService from '../../../services/submissionService'

const formatDate = (value) => {
  if (!value) return 'N/A'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'N/A'
  return date.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

const getGoalId = (goal) => goal?.goalId || goal?._id || goal?.id

const SubmissionsPage = () => {
  const { groupId } = useParams()
  const { user } = useAuth()
  const role = user?.role || 'learner'
  const isMentor = role === 'mentor'

  const [goals, setGoals] = useState([])
  const [selectedGoalId, setSelectedGoalId] = useState('')
  const [assignments, setAssignments] = useState([])
  const [selectedAssignmentId, setSelectedAssignmentId] = useState('')
  const [submissions, setSubmissions] = useState([])
  const [submission, setSubmission] = useState(null)
  const [loadingGoals, setLoadingGoals] = useState(true)
  const [loadingAssignments, setLoadingAssignments] = useState(false)
  const [loadingSubmissions, setLoadingSubmissions] = useState(false)
  const [error, setError] = useState(null)
  const [reviewingId, setReviewingId] = useState(null)
  const [reviewForm, setReviewForm] = useState({
    status: 'reviewed',
    feedback: '',
    marksObtained: '',
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

  const loadSubmissions = async (assignmentId) => {
    if (!assignmentId) return

    if (!isMentor) {
      try {
        const response = await submissionService.getMySubmission(assignmentId)
        setSubmission(response)
      } catch (err) {
        setSubmission(null)
        if (err?.response?.status !== 404) {
          setError(err?.response?.data?.message || err?.message || 'Failed to load submission')
        }
      }
      return
    }

    try {
      setLoadingSubmissions(true)
      const response = await submissionService.getSubmissionsByAssignment(assignmentId, {
        page: 1,
        limit: 50,
      })
      setSubmissions(response?.submissions || response || [])
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to load submissions')
    } finally {
      setLoadingSubmissions(false)
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
    loadSubmissions(selectedAssignmentId)
  }, [selectedAssignmentId])

  const handleReview = async (submissionId) => {
    if (!submissionId) return

    try {
      await submissionService.reviewSubmission(submissionId, {
        status: reviewForm.status,
        feedback: reviewForm.feedback || undefined,
        marksObtained: reviewForm.marksObtained || undefined,
      })
      setReviewingId(null)
      setReviewForm({ status: 'reviewed', feedback: '', marksObtained: '' })
      await loadSubmissions(selectedAssignmentId)
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to review submission')
    }
  }

  const selectedGoal = useMemo(
    () => goals.find((goal) => getGoalId(goal) === selectedGoalId),
    [goals, selectedGoalId]
  )

  return (
    <div className="min-h-screen bg-[rgb(var(--bg))] px-4 py-8 text-[rgb(var(--text))] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="rounded-[36px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] px-6 py-7 shadow-sm sm:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-[rgb(var(--text-muted))]">
                Group submissions
              </p>
              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Submissions in this group
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgb(var(--text-secondary))] sm:text-base">
                Review learner submissions or track your own progress.
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
                      className={`rounded-3xl border px-4 py-3 text-left text-sm transition ${selectedGoalId === id
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
                <h2 className="mt-2 text-xl font-bold">Pick an assignment</h2>
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
                      className={`rounded-3xl border px-4 py-3 text-left text-sm transition ${selectedAssignmentId === id
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
          </div>
        </section>

        <section className="mt-6 rounded-[34px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[rgb(var(--text-muted))]">
                {isMentor ? 'Submissions' : 'Your submission'}
              </p>
              <h2 className="mt-2 text-xl font-bold">
                {isMentor ? 'Review learner submissions' : 'Submission status'}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => loadSubmissions(selectedAssignmentId)}
              className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text))]"
            >
              <RefreshCw size={14} />
              Refresh
            </button>
          </div>

          {!isMentor ? (
            <div className="mt-4 rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4 text-sm text-[rgb(var(--text-secondary))]">
              {submission ? (
                <div className="space-y-2">
                  <p>Status: {submission.status || 'pending'}</p>
                  <p>Submitted: {formatDate(submission.submittedAt)}</p>
                  <p>Reviewed: {formatDate(submission.reviewedAt)}</p>
                  <p>Feedback: {submission.feedback || 'None yet'}</p>
                </div>
              ) : (
                'No submission found for the selected assignment.'
              )}
            </div>
          ) : (
            <div className="mt-4 grid gap-4">
              {loadingSubmissions ? (
                <div className="rounded-3xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-5 py-6 text-sm text-[rgb(var(--text-muted))]">
                  Loading submissions...
                </div>
              ) : submissions.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-5 py-6 text-sm text-[rgb(var(--text-muted))]">
                  No submissions yet.
                </div>
              ) : (
                submissions.map((item) => (
                  <div
                    key={item._id}
                    className="rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-base font-semibold text-[rgb(var(--text))]">
                          {item.userId?.name || 'Learner'}
                        </p>
                        <p className="text-sm text-[rgb(var(--text-secondary))]">
                          {item.userId?.email || 'No email'}
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] px-3 py-1 text-xs text-[rgb(var(--text-muted))]">
                        <ShieldCheck size={12} />
                        {item.status}
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-[rgb(var(--text-muted))]">
                      Submitted {formatDate(item.submittedAt)}
                    </div>

                    {reviewingId === item._id ? (
                      <div className="mt-4 space-y-2">
                        <select
                          value={reviewForm.status}
                          onChange={(event) =>
                            setReviewForm((current) => ({ ...current, status: event.target.value }))
                          }
                          className="w-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-2 text-sm"
                        >
                          <option value="reviewed">Reviewed</option>
                          <option value="revision_required">Revision required</option>
                        </select>
                        <input
                          value={reviewForm.marksObtained}
                          onChange={(event) =>
                            setReviewForm((current) => ({
                              ...current,
                              marksObtained: event.target.value,
                            }))
                          }
                          placeholder="Marks"
                          className="w-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-2 text-sm"
                        />
                        <textarea
                          rows={3}
                          value={reviewForm.feedback}
                          onChange={(event) =>
                            setReviewForm((current) => ({ ...current, feedback: event.target.value }))
                          }
                          placeholder="Feedback"
                          className="w-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-2 text-sm"
                        />
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() => handleReview(item._id)}
                            className="rounded-full bg-[rgb(var(--primary))] px-4 py-2 text-xs font-semibold text-white"
                          >
                            Save review
                          </button>
                          <button
                            type="button"
                            onClick={() => setReviewingId(null)}
                            className="rounded-full border border-[rgb(var(--border))] px-4 py-2 text-xs font-semibold text-[rgb(var(--text))]"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setReviewingId(item._id)
                          setReviewForm({
                            status: 'reviewed',
                            feedback: item.feedback || '',
                            marksObtained: item.marksObtained ?? '',
                          })
                        }}
                        className="mt-4 rounded-full border border-[rgb(var(--border))] px-4 py-2 text-xs font-semibold text-[rgb(var(--text))]"
                      >
                        Review submission
                      </button>
                    )}
                  </div>
                ))
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default SubmissionsPage
