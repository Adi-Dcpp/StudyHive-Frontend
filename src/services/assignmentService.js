import API from './api'

const unwrap = (res) => res?.data?.data ?? res?.data ?? res

const createAssignment = async (goalId, payload) => {
    const response = await API.post(`assignments/goals/${goalId}`, payload)
    return unwrap(response)
}

const getAssignmentsByGoal = async (goalId) => {
    const response = await API.get(`assignments/goals/${goalId}`)
    return unwrap(response)
}

const updateAssignment = async (assignmentId) => {
    const response = await API.put(`assignments/${assignmentId}`)
    return unwrap(response)
}

const deleteAssignment = async (assignmentId) => {
    const response = await API.delete(`assignments/${assignmentId}`)
    return unwrap(response)
}

export default{
    createAssignment,
    getAssignmentsByGoal,
    updateAssignment,
    deleteAssignment,
}