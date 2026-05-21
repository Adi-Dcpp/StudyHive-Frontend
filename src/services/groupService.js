import API from './api'

const unwrap = (res) => res?.data?.data ?? res?.data ?? res

export const getMyGroups = async (params = {}) => {
  const response = await API.get('/groups', { params })
  return unwrap(response)
}

export const fetchGroups = getMyGroups

export const getGroupDetails = async (groupId) => {
  const response = await API.get(`/groups/${groupId}`)
  return unwrap(response)
}

export const createGroup = async (payload) => {
  const response = await API.post('/groups', payload)
  return unwrap(response)
}

export const updateGroup = async (groupId, payload) => {
  const response = await API.put(`/groups/${groupId}`, payload)
  return unwrap(response)
}

export const deleteGroup = async (groupId) => {
  const response = await API.delete(`/groups/${groupId}`)
  return unwrap(response)
}

export const joinGroup = async (inviteCode) => {
  const response = await API.post('/groups/join', { inviteCode })
  return unwrap(response)
}

export const inviteMembers = async (groupId, payload) => {
  // payload can be { emails: [] } or similar depending on API
  const response = await API.post(`/groups/${groupId}/invite`, payload)
  return unwrap(response)
}

export const regenerateInviteCode = async (groupId) => {
  const response = await API.patch(`/groups/${groupId}/invite/regenerate`)
  return unwrap(response)
}

export const getGroupMembers = async (groupId, params = {}) => {
  const response = await API.get(`/groups/${groupId}/members`, { params })
  return unwrap(response)
}

export const removeMember = async (groupId, userId) => {
  const response = await API.delete(`/groups/${groupId}/members/${userId}`)
  return unwrap(response)
}

export const leaveGroup = async (groupId) => {
  const response = await API.post(`/groups/${groupId}/leave`)
  return unwrap(response)
}

export default {
  getMyGroups,
  fetchGroups,
  getGroupDetails,
  createGroup,
  updateGroup,
  deleteGroup,
  joinGroup,
  inviteMembers,
  regenerateInviteCode,
  getGroupMembers,
  removeMember,
  leaveGroup,
}
