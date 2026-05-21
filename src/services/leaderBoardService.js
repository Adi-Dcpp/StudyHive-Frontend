import API from './api'

const unwrap = (res) => res?.data?.data ?? res?.data ?? res

export const getMyProgress = async (groupId) => {
  const response = await API.get(`/leaderboard/${groupId}`)
  return unwrap(response)
}