import API from './api'

const unwrap = (res) => res?.data?.data ?? res?.data ?? res

const getMyGoals = async (params = {}) => {
    const response = await API.get('/goals/me', { params })
    return unwrap(response)
}

const createGoal = async (groupId, payload) => {
    const response = await API.post(`/goals/${groupId}`, payload)
    return unwrap(response)
}

const getGoalsByGroup = async (groupId, params = {}) => {
    const response = await API.get(`/goals/${groupId}`, { params })
    return unwrap(response)
}

const updateGoal = async (goalId, payload) => {
    const response = await API.put(`/goals/${goalId}`, payload)
    return unwrap(response)
}

const deleteGoal = async (goalId) => {
    const response = await API.delete(`/goals/${goalId}`)
    return unwrap(response)
}

export default {
    getMyGoals,
    createGoal,
    getGoalsByGroup,
    updateGoal,
    deleteGoal,
}