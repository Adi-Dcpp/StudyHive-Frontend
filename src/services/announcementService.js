import API from './api'

const unwrap = (res) => res?.data?.data ?? res?.data ?? res

const createAnnouncement = async (groupId, payload) => {
    const response = await API.post(`announcements/${groupId}`, payload)
    return unwrap(response)
}

const getAnnouncements = async (groupId, payload) => {
    const response = await API.get(`announcements/${groupId}`, payload)
    return unwrap(response)
}

const updateAnnouncement = async (announcementId, payload) => {
    const response = await API.put(`announcements/${announcementId}`, payload)
    return unwrap(response)
}

const deleteAnnouncement = async (announcementId) => {
    const response = await API.delete(`announcements/${announcementId}`)
    return unwrap(response)
}

export default{
    createAnnouncement,
    getAnnouncements,
    updateAnnouncement,
    deleteAnnouncement,
}
