import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowRight,
  CalendarDays,
  ClipboardList,
  Copy,
  FolderOpen,
  GraduationCap,
  LayoutGrid,
  MessagesSquare,
  RefreshCw,
  ShieldCheck,
  Target,
  Users,
  UserRound,
  Trash2,
  LogOut,
  Sparkles,
} from 'lucide-react'

import useAuth from '../../hooks/useAuth'
import {
  deleteGroup as deleteGroupApi,
  getGroupDetails,
  regenerateInviteCode as regenerateInviteCodeApi,
  leaveGroup as leaveGroupApi,
} from '../../services/groupService'

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

const StatCard = ({ title, value, icon, accent = 'primary' }) => {
  const Icon = icon

  return (
  <div
    className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl"
    style={{
      background:
        'linear-gradient(135deg, rgba(var(--surface),0.92), rgba(var(--card-bg),0.88))',
    }}
  >
    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <p
          className="text-[11px] uppercase tracking-[0.24em]"
          style={{ color: 'rgb(var(--text-muted))' }}
        >
          {title}
        </p>
        <h3
          className="mt-3 wrap-break-word text-2xl font-black tracking-tight sm:text-3xl"
          style={{ color: 'rgb(var(--text))', lineHeight: 1.05 }}
        >
          {value}
        </h3>
      </div>

      <div
        className="rounded-2xl p-3"
        style={{
          background:
            accent === 'primary'
              ? 'rgba(var(--primary),0.16)'
              : accent === 'success'
                ? 'rgba(var(--success),0.16)'
                : 'rgba(var(--warning),0.16)',
        }}
      >
        <Icon
          size={22}
          style={{
            color:
              accent === 'primary'
                ? 'rgb(var(--primary))'
                : accent === 'success'
                  ? 'rgb(var(--success))'
                  : 'rgb(var(--warning))',
          }}
        />
      </div>
    </div>
  </div>
  )
}

const ModuleCard = ({ to, icon, title, description }) => {
  const Icon = icon

  return (
    <Link
      to={to}
      className="group rounded-[28px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
      style={{
        borderColor: 'rgba(var(--border),0.9)',
        background:
          'linear-gradient(135deg, rgba(var(--card-bg),0.96), rgba(var(--surface),0.96))',
      }}
    >
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{ background: 'rgba(var(--primary),0.14)' }}
        >
          <Icon size={24} style={{ color: 'rgb(var(--primary))' }} />
        </div>

        <div>
          <h4 className="text-base font-bold sm:text-lg" style={{ color: 'rgb(var(--text))' }}>
            {title}
          </h4>
          <p
            className="mt-1 max-w-xs text-sm leading-6"
            style={{ color: 'rgb(var(--text-secondary))' }}
          >
            {description}
          </p>
        </div>
      </div>

      <ArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
        style={{ color: 'rgb(var(--text-secondary))' }}
      />
    </div>
  </Link>
  )
}

const GroupDetailPage = () => {
  const { user } = useAuth()
  const { groupId } = useParams()

  const [group, setGroup] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [copied, setCopied] = useState(false)
  const [inviteCode, setInviteCode] = useState('')

  useEffect(() => {
    let isMounted = true

    const fetchGroup = async () => {
      try {
        setLoading(true)
        const data = await getGroupDetails(groupId)

        if (!isMounted) return

        setInviteCode(data.inviteCode || '')

        setGroup(data)
        setError(null)
      } catch (err) {
        if (!isMounted) return

        const message = err?.response?.data?.message || err?.message || 'Failed to load group details'
        setError(message)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchGroup()

    return () => {
      isMounted = false
    }
  }, [groupId])

  const role = group?.role ?? 'learner'
  const memberName = user?.name || user?.fullName || user?.username || 'Member'

  const createdDate = useMemo(() => formatDate(group?.createdAt), [group?.createdAt])
  const learnerAccessMessage = 'Ask mentor for invite code'

  const copyInviteCode = async () => {
    if (!group?.inviteCode) return

    try {
      await navigator.clipboard.writeText(group.inviteCode)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Failed to copy invite code', err)
    }
  }

  const handleRegenerateInviteCode = () => {
    if (role !== 'mentor') return

    regenerateInviteCodeApi(groupId)
      .then((data) => {
        setInviteCode(data.inviteCode)
      })
      .catch((err) => {
        console.error('Failed to regenerate invite code', err)
      })
  }

  const deleteGroup = () => {
    window.confirm('Are you sure you want to delete this group? This action cannot be undone.') &&
    deleteGroupApi(groupId)
      .then(() => {
        window.location.href = '/app/groups'
      })
      .catch((err) => {
        console.error('Failed to delete group', err)
      })
  }

  const leaveGroup = () => {
    window.confirm('Are you sure you want to leave this group? You will lose access to its resources and discussions.') &&
    leaveGroupApi(groupId)
      .then(() => {
        window.location.href = '/app/groups'
      })
      .catch((err) => {
        console.error('Failed to leave group', err)
      })
  }

  const tabs = {
    overview: [
      { title: 'Goals', value: group?.stats?.goals ?? 0, icon: Target, accent: 'primary' },
      { title: 'Assignments', value: group?.stats?.assignments ?? 0, icon: ClipboardList, accent: 'warning' },
      { title: 'Resources', value: group?.stats?.resources ?? 0, icon: FolderOpen, accent: 'success' },
    ],
    community: [
      { title: 'Members', value: group?.membersCount ?? 0, icon: Users, accent: 'primary' },
      { title: 'Role', value: role, icon: ShieldCheck, accent: 'success' },
      { title: 'Created', value: createdDate, icon: CalendarDays, accent: 'warning' },
    ],
    access: [
      {
        title: 'Invite Code',
        value: role === 'mentor' ? inviteCode : learnerAccessMessage,
        icon: Sparkles,
        accent: 'primary',
      },
      { title: 'Signed in as', value: memberName, icon: UserRound, accent: 'success' },
      { title: 'Group ID', value: group?.groupId ?? groupId, icon: LayoutGrid, accent: 'warning' },
    ],
  }

  const moduleCards = [
    {
      title: 'Resources',
      description: 'Open the shared study materials and references.',
      icon: FolderOpen,
      to: `/app/groups/${groupId}/resources`,
    },
    {
      title: 'Goals',
      description: 'View the active learning goals for this group.',
      icon: Target,
      to: `/app/groups/${groupId}/goals`,
    },
    {
      title: 'Assignments',
      description: 'Open assignments and task collections.',
      icon: ClipboardList,
      to: `/app/groups/${groupId}/assignments`,
    },
    {
      title: 'Members',
      description: 'See the people in this group.',
      icon: Users,
      to: `/app/groups/${groupId}/members`,
    },
    {
      title: 'Messages',
      description: 'Open the group chat or discussion space.',
      icon: MessagesSquare,
      to: `/app/groups/${groupId}/messages`,
    },
  ]

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[rgb(var(--bg))] px-4">
        <div
          className="rounded-[28px] border px-6 py-5 text-center shadow-[0_18px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl"
          style={{
            borderColor: 'rgba(var(--border),0.9)',
            background: 'linear-gradient(135deg, rgba(var(--surface),0.96), rgba(var(--card-bg),0.92))',
          }}
        >
          <p
            className="text-[11px] uppercase tracking-[0.28em]"
            style={{ color: 'rgb(var(--text-muted))' }}
          >
            Loading
          </p>
          <p className="mt-2 text-base font-semibold sm:text-lg" style={{ color: 'rgb(var(--text))' }}>
            Group details are loading...
          </p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[rgb(var(--bg))] px-4">
        <div className="max-w-xl rounded-[28px] border border-red-500/20 bg-red-500/10 px-6 py-5 text-center shadow-[0_18px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-red-300">Unable to load group</p>
          <p className="mt-2 text-base font-semibold sm:text-lg" style={{ color: 'rgb(var(--text))' }}>
            {error}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen px-4 py-5 sm:px-6 lg:px-8 lg:py-8"
      style={{ background: 'rgb(var(--bg))' }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <section
          className="relative overflow-hidden rounded-[36px] border p-6 shadow-[0_22px_70px_rgba(0,0,0,0.22)] lg:p-8"
          style={{
            borderColor: 'rgba(var(--border),0.9)',
            background:
              'linear-gradient(135deg, rgba(var(--card-bg),0.96), rgba(var(--surface),0.90))',
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgb(var(--text)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--text)) 1px, transparent 1px)',
              backgroundSize: '42px 42px',
            }}
          />
          <div
            className="absolute right-0 top-0 h-72 w-72 rounded-full blur-3xl"
            style={{ background: 'rgba(var(--primary),0.08)' }}
          />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em]"
                style={{
                  borderColor: 'rgba(var(--border),0.9)',
                  background: 'rgba(var(--surface),0.55)',
                  color: 'rgb(var(--text-secondary))',
                }}
              >
                <GraduationCap size={16} />
                Group Overview
              </div>

              <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl" style={{ color: 'rgb(var(--text))', lineHeight: 1.02 }}>
                {group.name}
              </h1>

              <p className="mt-5 max-w-3xl text-sm leading-7 sm:text-base" style={{ color: 'rgb(var(--text-secondary))' }}>
                {group.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3 text-sm">
                <span
                  className="rounded-full border px-4 py-2"
                  style={{ borderColor: 'rgba(var(--border),0.9)', background: 'rgba(var(--surface),0.6)', color: 'rgb(var(--text-secondary))' }}
                >
                  Created {createdDate}
                </span>
                <span
                  className="rounded-full border px-4 py-2"
                  style={{ borderColor: 'rgba(var(--border),0.9)', background: 'rgba(var(--surface),0.6)', color: 'rgb(var(--text-secondary))' }}
                >
                  Role: {role}
                </span>
                <span
                  className="rounded-full border px-4 py-2"
                  style={{ borderColor: 'rgba(var(--border),0.9)', background: 'rgba(var(--surface),0.6)', color: 'rgb(var(--text-secondary))' }}
                >
                  Signed in as {memberName}
                </span>
              </div>
            </div>

            <div
              className="rounded-[30px] border p-5 backdrop-blur-xl lg:p-6"
              style={{
                borderColor: 'rgba(var(--border),0.9)',
                background: 'rgba(var(--surface),0.72)',
              }}
            >
              <p className="text-[11px] uppercase tracking-[0.28em]" style={{ color: 'rgb(var(--text-muted))' }}>
                {role === 'mentor' ? 'Invite Code' : 'Group Access'}
              </p>
              {role === 'mentor' ? (
                <div
                  className="mt-4 flex items-center justify-between gap-3 rounded-3xl border px-4 py-4 sm:gap-4 sm:px-5"
                  style={{ borderColor: 'rgba(var(--border),0.9)', background: 'rgba(var(--bg),0.35)' }}
                >
                  <div className="min-w-0">
                    <p className="text-[11px] uppercase tracking-[0.24em]" style={{ color: 'rgb(var(--text-muted))' }}>Code</p>
                    <h2 className="mt-2 break-all text-xl font-black tracking-[0.14em] sm:text-2xl" style={{ color: 'rgb(var(--text))', lineHeight: 1.1 }}>
                      {inviteCode}
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={copyInviteCode}
                    className="flex h-10 shrink-0 items-center gap-2 rounded-2xl px-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03] sm:px-4"
                    style={{ background: 'rgb(var(--primary))' }}
                  >
                    <Copy size={16} />
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              ) : (
                <div
                  className="mt-4 rounded-3xl border px-4 py-5 sm:px-5"
                  style={{ borderColor: 'rgba(var(--border),0.9)', background: 'rgba(var(--bg),0.35)' }}
                >
                  <p className="text-[11px] uppercase tracking-[0.24em]" style={{ color: 'rgb(var(--text-muted))' }}>
                    Mentor contact required
                  </p>
                  <h2 className="mt-2 text-2xl font-black sm:text-3xl" style={{ color: 'rgb(var(--text))', lineHeight: 1.05 }}>
                    Ask mentor for invite code
                  </h2>
                  <p className="mt-2 text-sm leading-6" style={{ color: 'rgb(var(--text-secondary))' }}>
                    Your mentor can share the code when you need access.
                  </p>
                </div>
              )}

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {role === 'mentor' ? (
                  <>
                    <button
                      type="button"
                      onClick={handleRegenerateInviteCode}
                      className="flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
                      style={{ background: 'rgb(var(--primary))' }}
                    >
                      <RefreshCw size={16} />
                      Regenerate Code
                    </button>
                    <button
                      type="button"
                      onClick={deleteGroup}
                      className="flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
                      style={{ background: 'rgb(var(--error))' }}
                    >
                      <Trash2 size={16} />
                      Delete Group
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={leaveGroup}
                    className="flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 sm:col-span-2"
                    style={{ background: 'rgb(var(--warning))' }}
                  >
                    <LogOut size={16} />
                    Leave Group
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-4xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl lg:p-6">
          <div className="flex flex-wrap items-center gap-3">
            {[
              { key: 'overview', label: 'Overview' },
              { key: 'community', label: 'Community' },
              { key: 'access', label: 'Access' },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className="rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300"
                style={{
                  background:
                    activeTab === tab.key ? 'rgb(var(--primary))' : 'rgba(var(--surface),0.7)',
                  color: activeTab === tab.key ? '#fff' : 'rgb(var(--text-secondary))',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {tabs[activeTab].map((item) => (
              <StatCard
                key={item.title}
                title={item.title}
                value={item.value}
                icon={item.icon}
                accent={item.accent}
              />
            ))}
          </div>
        </section>

        <section className="rounded-4xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl lg:p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em]" style={{ color: 'rgb(var(--text-muted))' }}>
                Modules
              </p>
              <h2 className="mt-2 text-xl font-black sm:text-2xl" style={{ color: 'rgb(var(--text))' }}>
                Open a module page
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {moduleCards.map((card) => (
              <ModuleCard key={card.title} {...card} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default GroupDetailPage
