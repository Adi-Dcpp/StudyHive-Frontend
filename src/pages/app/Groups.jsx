import { useState } from 'react'
import CreateGroupModal from '../../components/groups/CreateGroupModal'
import GroupsGrid from '../../components/groups/GroupsGrid'
import GroupsHeader from '../../components/groups/GroupsHeader'
import JoinGroupModal from '../../components/groups/JoinGroupModal'
import useAuth from '../../hooks/useAuth'
import useGroups from '../../hooks/useGroups'

const Groups = () => {
  const { user } = useAuth()
  const isMentor = user?.role === 'mentor'
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [isJoinOpen, setIsJoinOpen] = useState(false)

  const {
    groups,
    loading,
    error,
    isCreating,
    isJoining,
    createGroup,
    joinGroup,
    refresh,
    inviteToGroup,
  } = useGroups()

  return (
    <section className="flex flex-col gap-6">
      <GroupsHeader
        onCreate={() => setIsCreateOpen(true)}
        onJoin={() => setIsJoinOpen(true)}
        canCreate={isMentor}
        totalGroups={groups.length}
      />

      <GroupsGrid
        groups={groups}
        loading={loading}
        error={error}
        onRetry={refresh}
        onCreate={() => setIsCreateOpen(true)}
        onJoin={() => setIsJoinOpen(true)}
        canCreate={isMentor}
      />

      <CreateGroupModal
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onCreate={createGroup}
        loading={isCreating}
      />

      <JoinGroupModal
        open={isJoinOpen}
        onClose={() => setIsJoinOpen(false)}
        onJoin={joinGroup}
        loading={isJoining}
      />
    </section>
  )
}

export default Groups