import API from './api'

const unwrapData = (response) => response?.data?.data ?? response?.data ?? response

export const fetchGroups = async ({ page = 1, limit = 12 } = {}) => {
  const params = new URLSearchParams()
  if (page) params.set('page', page)
  if (limit) params.set('limit', limit)

  const query = params.toString()
  const response = await API.get(`/groups${query ? `?${query}` : ''}`)
  console.log('Fetched groups response:', response)
               
  return unwrapData(response)
}

export const createGroup = async (payload) => {
  const response = await API.post('/groups', payload)
  return unwrapData(response)
}

export const joinGroup = async (inviteCode) => {
  const response = await API.post('/groups/join', { inviteCode })
  return unwrapData(response)
}

export const getGroupDetails = async (groupId) => {
  const response = await API.get(`/groups/${groupId}`)
  return unwrapData(response)
}

export const getGroupMembers = async (groupId, { page = 1, limit = 50 } = {}) => {
  const params = new URLSearchParams()
  if (page) params.set('page', page)
  if (limit) params.set('limit', limit)

  const query = params.toString()
  const response = await API.get(
    `/groups/${groupId}/members${query ? `?${query}` : ''}`
  )

  return unwrapData(response)
}

export const inviteToGroup = async (groupId, email) => {
  const response = await API.post(`/groups/${groupId}/invite`, { email })
  return unwrapData(response)
}

export const updateGroup = async (groupId, payload) => {
    const response = await API.put(`/groups/${groupId}`, payload)
    return unwrapData(response)
}

const removeMember = async (groupId, memberId, payload) => {
    const response = await API.delete(`groups/${groupId}/members/${memberId}`, payload)
    return unwrapData(response)
}

export const leaveGroup = async (groupId) => {
    const response = await API.post(`/groups/${groupId}/leave`)
    return unwrapData(response)
}

export const deleteGroup = async (groupId) => {
    const response = await API.delete(`/groups/${groupId}`)
    return unwrapData(response)
}