import { useCallback, useEffect, useState } from 'react'
import { getGroupDetails, getGroupMembers } from '../services/group.service'

const normalizeMembers = (payload) => {
  const members = payload?.members ?? payload?.items ?? payload
  return Array.isArray(members) ? members : []
}

const useGroupDetails = (groupId) => {
  const [group, setGroup] = useState(null)
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [membersLoading, setMembersLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadGroup = useCallback(async () => {
    if (!groupId) return

    setLoading(true)
    setError(null)

    try {
      const data = await getGroupDetails(groupId)
      setGroup(data?.group ?? data)
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to load group details.')
    } finally {
      setLoading(false)
    }
  }, [groupId])

  const loadMembers = useCallback(async () => {
    if (!groupId) return

    setMembersLoading(true)

    try {
      const data = await getGroupMembers(groupId)
      setMembers(normalizeMembers(data))
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to load members.')
    } finally {
      setMembersLoading(false)
    }
  }, [groupId])

  useEffect(() => {
    loadGroup()
    loadMembers()
  }, [loadGroup, loadMembers])

  return {
    group,
    members,
    loading,
    membersLoading,
    error,
    refreshGroup: loadGroup,
    refreshMembers: loadMembers,
  }
}

export default useGroupDetails
