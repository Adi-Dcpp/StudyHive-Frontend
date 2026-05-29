import { useEffect, useState, useCallback } from 'react'
import {
  getMyGroups,
} from '../services/groupService'

const useGroups = () => {
  const [groups, setGroups] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchGroups = useCallback(async () => {
    setLoading(true)

    try {
      const data = await getMyGroups()
      setGroups(data.groups || [])
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }, [])

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