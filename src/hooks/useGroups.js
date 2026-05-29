import { useEffect, useState, useCallback } from 'react'
import {
  getMyGroups,
} from '../services/groupService'

const useGroups = ({ enabled = true } = {}) => {
  const [groups, setGroups] = useState([])
  const [loading, setLoading] = useState(enabled)

  const fetchGroups = useCallback(async () => {
    if (!enabled) {
      setGroups([])
      setLoading(false)
      return
    }

    setLoading(true)

    try {
      const data = await getMyGroups()
      setGroups(data.groups || [])
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [enabled])

  useEffect(() => {
    fetchGroups()
  }, [fetchGroups])

  return {
    groups,
    loading,
    refresh: fetchGroups,
  }
}

export default useGroups