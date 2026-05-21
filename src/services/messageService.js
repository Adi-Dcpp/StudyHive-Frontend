import API from './api'

export const sendMessage = async (groupId, content) => {
  const response = await API.post(`/messages/${groupId}`, {
    content,
  })

  return response.data.data
}

export const getGroupMessages = async (groupId, page = 1, limit = 20) => {
  const response = await API.get(
    `/messages/${groupId}?page=${page}&limit=${limit}`
  )

  return response.data.data
}

export const deleteMessage = async (messageId) => {
  const response = await API.delete(`/messages/${messageId}`)

  return response.data
}
