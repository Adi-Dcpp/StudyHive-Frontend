
import { useState } from 'react'
import GroupCard from '../../components/group/GroupCard'
import CreateGroupModal from '../../components/group/CreateGroupModal'
import JoinGroupModal from '../../components/group/JoinGroupModal'
import useGroups from '../../hooks/useGroups'
import { createGroup as apiCreateGroup, joinGroup as apiJoinGroup } from '../../services/groupService'
import { FiPlus, FiLogIn } from 'react-icons/fi'

const GroupsPage = () => {
  const { groups, loading, refresh } = useGroups()

  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [isJoinOpen, setIsJoinOpen] = useState(false)
  const [actionLoading, setActionLoading] = useState(false)

  return (
    <div className="space-y-8 p-8">
      <div className="flex items-start justify-between">
        <div>
          <p
            className="text-sm uppercase tracking-[0.3em] text-slate-500"
          >
            Groups
          </p>

          <h1
            className="mt-2 text-5xl font-bold"
            style={{ color: 'rgb(var(--text))' }}
          >
            Your learning circles
          </h1>

          <p
            className="mt-2"
            style={{ color: 'rgb(var(--text-muted))' }}
          >
            {groups.length} groups connected to your workspace.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsJoinOpen(true)}
            className="rounded-xl inline-flex items-center gap-2 border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-2 text-sm text-[rgb(var(--text))] hover:bg-[rgb(var(--hover))]"
          >
            <FiLogIn />
            Join Group
          </button>

          <button
            onClick={() => setIsCreateOpen(true)}
            className="rounded-xl inline-flex items-center gap-2 bg-[rgb(var(--primary))] px-4 py-2 text-sm text-white hover:bg-[rgb(var(--primary-hover))]"
          >
            <FiPlus />
            Create Group
          </button>
        </div>
      </div>

      {loading ? (
        <p className="text-slate-400">
          Loading groups...
        </p>
      ) : (
        <div
          className="
            grid grid-cols-1 gap-6
            xl:grid-cols-3
          "
        >
          {groups.map((group) => (
            <GroupCard
              key={group._id}
              group={group}
            />
          ))}
        </div>
      )}

      <CreateGroupModal
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onCreate={async (payload) => {
          setActionLoading(true)
          try {
            await apiCreateGroup(payload)
            await refresh()
          } finally {
            setActionLoading(false)
          }
        }}
        loading={actionLoading}
      />

      <JoinGroupModal
        open={isJoinOpen}
        onClose={() => setIsJoinOpen(false)}
        onJoin={async (code) => {
          setActionLoading(true)
          try {
            await apiJoinGroup(code)
            await refresh()
          } finally {
            setActionLoading(false)
          }
        }}
        loading={actionLoading}
      />
    </div>
  )
}

export default GroupsPage