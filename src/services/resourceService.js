import API from './api'

const unwrap = (res) => res?.data?.data ?? res?.data ?? res

const uploadResource = async (groupId, payload) => {
    const response = await API.post(`/resources/${groupId}`, payload)
    return unwrap(response)
}

const getResourcesByGroup = async (groupId) => {
    const response = await API.get(`/resources/${groupId}`)
    return unwrap(response)
}

const deleteResource = async (resourceId) => {
    const response = await API.delete(`/resources/${resourceId}`)
    return unwrap(response)
}

export default {
    uploadResource,
    getResourcesByGroup,
    deleteResource,
}