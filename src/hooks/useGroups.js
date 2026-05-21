import { useCallback, useEffect, useState } from 'react'
import { createGroup, fetchGroups, joinGroup } from '../services/group.service'

const normalizeGroups = (payload) => {
  const groups = payload?.groups ?? payload?.items ?? payload
  return Array.isArray(groups) ? groups : []
}

const useGroups = () => {
  const [groups, setGroups] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isCreating, setIsCreating] = useState(false)
  const [isJoining, setIsJoining] = useState(false)

  const loadGroups = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const data = await fetchGroups()
      setGroups(normalizeGroups(data))
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to load groups.')
    } finally {
      setLoading(false)
    }
  }, [])

  const handleCreateGroup = useCallback(
    async (payload) => {
      setIsCreating(true)
      setError(null)

      try {
        const data = await createGroup(payload)
        await loadGroups()
        return data
      } catch (err) {
        const message = err?.response?.data?.message || 'Failed to create group.'
        setError(message)
        throw new Error(message)
      } finally {
        setIsCreating(false)
      }
    },
    [loadGroups]
  )

  const handleJoinGroup = useCallback(
    async (inviteCode) => {
      setIsJoining(true)
      setError(null)

      try {
        const data = await joinGroup(inviteCode)
        await loadGroups()
        return data
      } catch (err) {
        const message = err?.response?.data?.message || 'Failed to join group.'
        setError(message)
        throw new Error(message)
      } finally {
        setIsJoining(false)
      }
    },
    [loadGroups]
  )

  useEffect(() => {
    loadGroups()
  }, [loadGroups])

  return {
    groups,
    loading,
    error,
    isCreating,
    isJoining,
    createGroup: handleCreateGroup,
    joinGroup: handleJoinGroup,
    refresh: loadGroups,
  }
}

export default useGroups
