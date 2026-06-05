import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LogOut, RefreshCw, Search, Shield, Trash2, UserRound, Users } from 'lucide-react'

import useAuth from '../../../hooks/useAuth'
import { getGroupMembers, leaveGroup, removeMember } from '../../../services/groupService'

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

const getInitials = (name, email) => {
  if (name) {
    const parts = name.trim().split(/\s+/)
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
    return `${parts[0][0] || ''}${parts[parts.length - 1][0] || ''}`.toUpperCase()
  }

  if (email) return email.slice(0, 2).toUpperCase()
  return 'ME'
}

const MembersPage = () => {
  const { groupId } = useParams()
  const { user } = useAuth()

  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [query, setQuery] = useState('')
  const [roleFilter, setRoleFilter] = useState('all')
  const [removingId, setRemovingId] = useState(null)
  const [leaving, setLeaving] = useState(false)

  const currentUserId = user?._id || user?.id || ''

  const loadMembers = async (nextPage = 1, replace = false) => {
    try {
      if (nextPage === 1) setLoading(true)
      setError(null)

      const data = await getGroupMembers(groupId, { page: nextPage, limit: 20 })
      const nextMembers = data?.members || []
      const hasNext = Boolean(data?.pagination?.hasNextPage)

      setMembers((current) => (replace ? nextMembers : [...current, ...nextMembers]))
      setPage(nextPage)
      setHasMore(hasNext)
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to load members')
    } finally {
      if (nextPage === 1) setLoading(false)
    }
  }

  useEffect(() => {
    loadMembers(1, true)
  }, [groupId])

  const currentMembership = useMemo(
    () => members.find((member) => member.userId === currentUserId),
    [members, currentUserId]
  )

  const currentRole = currentMembership?.role || user?.role || 'learner'

  const totals = useMemo(() => {
    const totalMembers = members.length
    const mentors = members.filter((member) => member.role === 'mentor').length
    const learners = members.filter((member) => member.role !== 'mentor').length
    return { totalMembers, mentors, learners }
  }, [members])

  const filteredMembers = useMemo(() => {
    const normalized = query.trim().toLowerCase()

    return members.filter((member) => {
      if (roleFilter !== 'all' && member.role !== roleFilter) return false

      if (!normalized) return true

      return [member.name, member.email, member.role]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(normalized))
    })
  }, [members, query, roleFilter])

  const handleRemove = async (targetUserId) => {
    if (!targetUserId) return
    if (!window.confirm('Remove this member from the group?')) return

    try {
      setRemovingId(targetUserId)
      await removeMember(groupId, targetUserId)
      setMembers((current) => current.filter((member) => member.userId !== targetUserId))
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to remove member')
    } finally {
      setRemovingId(null)
    }
  }

  const handleLeave = async () => {
    if (!window.confirm('Leave this group? You will lose access to members and resources.')) {
      return
    }

    try {
      setLeaving(true)
      await leaveGroup(groupId)
      window.location.href = '/app/groups'
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to leave group')
      setLeaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--bg))] px-4 py-8 text-[rgb(var(--text))] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="relative overflow-hidden rounded-[36px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] px-6 py-7 shadow-sm sm:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(var(--primary),0.16),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(var(--success),0.16),transparent_38%)]" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.34em] text-[rgb(var(--text-muted))]">
                Group Module
              </p>
              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Members
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgb(var(--text-secondary))] sm:text-base">
                Keep an eye on the people powering this group. Search, filter, and manage the roster
                in one place.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[rgb(var(--text-muted))]">
                  Total
                </p>
                <p className="mt-1 text-xl font-black">{totals.totalMembers}</p>
              </div>
              <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[rgb(var(--text-muted))]">
                  Mentors
                </p>
                <p className="mt-1 text-xl font-black">{totals.mentors}</p>
              </div>
              <button
                type="button"
                onClick={() => loadMembers(1, true)}
                className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm font-semibold text-[rgb(var(--text))]"
              >
                <RefreshCw size={16} />
                Refresh
              </button>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="rounded-[34px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[rgb(var(--text-muted))]">
                  Directory
                </p>
                <h2 className="mt-2 text-xl font-bold text-[rgb(var(--text))]">
                  {loading ? 'Loading members...' : `${filteredMembers.length} members shown`}
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs text-[rgb(var(--text-muted))]">
                <Shield size={14} />
                {currentRole === 'mentor' ? 'You are a mentor' : 'You are a learner'}
              </div>
            </div>

            {error ? (
              <div className="mt-5 rounded-2xl border border-[rgb(var(--error))] bg-[rgba(var(--error),0.08)] px-4 py-3 text-sm text-[rgb(var(--error))]">
                {error}
              </div>
            ) : null}

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex flex-1 items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3">
                <Search size={16} className="text-[rgb(var(--text-muted))]" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search by name, email, or role"
                  className="w-full bg-transparent text-sm text-[rgb(var(--text))] outline-none"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {['all', 'mentor', 'learner'].map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setRoleFilter(role)}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                      roleFilter === role
                        ? 'border-transparent bg-[rgb(var(--primary))] text-white'
                        : 'border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-[rgb(var(--text-secondary))]'
                    }`}
                  >
                    {role === 'all' ? 'All Roles' : role}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {loading ? (
                <div className="rounded-3xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-5 py-6 text-sm text-[rgb(var(--text-muted))]">
                  Gathering the latest members...
                </div>
              ) : filteredMembers.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-5 py-6 text-sm text-[rgb(var(--text-muted))]">
                  No members match your search yet.
                </div>
              ) : (
                filteredMembers.map((member) => {
                  const isSelf = member.userId === currentUserId
                  const canRemove = currentRole === 'mentor' && !isSelf

                  return (
                    <article
                      key={member.userId}
                      className="group flex flex-col gap-4 rounded-[28px] border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.16)] sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold"
                          style={{
                            background:
                              member.role === 'mentor'
                                ? 'rgba(var(--primary),0.18)'
                                : 'rgba(var(--success),0.14)',
                            color:
                              member.role === 'mentor'
                                ? 'rgb(var(--primary))'
                                : 'rgb(var(--success))',
                          }}
                        >
                          {getInitials(member.name, member.email)}
                        </div>
                        <div>
                          <p className="text-base font-semibold text-[rgb(var(--text))]">
                            {member.name || 'Member'}
                          </p>
                          <p className="text-sm text-[rgb(var(--text-secondary))]">
                            {member.email || 'No email'}
                          </p>
                          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                            <span
                              className="rounded-full px-3 py-1 font-semibold uppercase tracking-[0.2em]"
                              style={{
                                background:
                                  member.role === 'mentor'
                                    ? 'rgba(var(--primary),0.18)'
                                    : 'rgba(var(--success),0.14)',
                                color:
                                  member.role === 'mentor'
                                    ? 'rgb(var(--primary))'
                                    : 'rgb(var(--success))',
                              }}
                            >
                              {member.role}
                            </span>
                            <span className="rounded-full border border-[rgb(var(--border))] px-3 py-1 text-[rgb(var(--text-muted))]">
                              Joined {formatDate(member.joinedAt)}
                            </span>
                            {isSelf ? (
                              <span className="inline-flex items-center gap-1 rounded-full border border-[rgb(var(--border))] px-3 py-1 text-[rgb(var(--text-muted))]">
                                <UserRound size={12} />
                                You
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                        {canRemove ? (
                          <button
                            type="button"
                            onClick={() => handleRemove(member.userId)}
                            disabled={removingId === member.userId}
                            className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--error))] transition disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            <Trash2 size={14} />
                            {removingId === member.userId ? 'Removing' : 'Remove'}
                          </button>
                        ) : (
                          <span className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
                            <Users size={14} />
                            Member
                          </span>
                        )}
                      </div>
                    </article>
                  )
                })
              )}
            </div>

            {hasMore && !loading ? (
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => loadMembers(page + 1)}
                  className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-6 py-3 text-sm font-semibold text-[rgb(var(--text))]"
                >
                  Load more
                </button>
              </div>
            ) : null}
          </div>

          <aside className="rounded-[34px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <p className="text-xs uppercase tracking-[0.28em] text-[rgb(var(--text-muted))]">
              Summary
            </p>
            <h3 className="mt-2 text-lg font-bold text-[rgb(var(--text))]">Your space</h3>

            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
                  Your role
                </p>
                <p className="mt-1 text-base font-semibold text-[rgb(var(--text))]">
                  {currentRole}
                </p>
              </div>
              <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
                  Learners
                </p>
                <p className="mt-1 text-base font-semibold text-[rgb(var(--text))]">
                  {totals.learners}
                </p>
              </div>
              <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
                  Mentors
                </p>
                <p className="mt-1 text-base font-semibold text-[rgb(var(--text))]">
                  {totals.mentors}
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4 text-sm text-[rgb(var(--text-secondary))]">
              {currentRole === 'mentor'
                ? 'You can remove members and keep the roster clean.'
                : 'Only mentors can remove members. You can leave the group anytime.'}
            </div>

            {currentRole !== 'mentor' ? (
              <button
                type="button"
                onClick={handleLeave}
                disabled={leaving}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[rgb(var(--border))] px-4 py-3 text-sm font-semibold text-[rgb(var(--text))] transition disabled:cursor-not-allowed disabled:opacity-60"
              >
                <LogOut size={16} />
                {leaving ? 'Leaving...' : 'Leave group'}
              </button>
            ) : null}
          </aside>
        </section>
      </div>
    </div>
  )
}

export default MembersPage
