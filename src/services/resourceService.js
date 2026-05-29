import API from './api'

const unwrap = (res) => res?.data?.data ?? res?.data ?? res

const isRouteNotFound = (error) => {
    const status = error?.response?.status
    const message = `${error?.response?.data?.message || error?.message || ''}`.toLowerCase()

    return status === 404 || message.includes('not found')
}

const uploadResource = async (groupId, payload) => {
    try {
        const response = await API.post(`/resources/${groupId}`, payload)
        return unwrap(response)
    } catch (error) {
        if (!isRouteNotFound(error)) {
            throw error
        }
    }
}

const getResourcesByGroup = async (groupId) => {
    try {
        const response = await API.get(`/resources/${groupId}`)
        return unwrap(response)
    } catch (error) {
        if (!isRouteNotFound(error)) {
            throw error
        }
    }
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