import API from './api'

const unwrap = (response) => response?.data?.data ?? response?.data ?? response

export const submitAssignment = async (assignmentId, payload) => {
  const formData = payload instanceof FormData ? payload : new FormData()

  if (!(payload instanceof FormData)) {
    Object.entries(payload || {}).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value)
      }
    })
  }

  const response = await API.post(
    `/submissions/assignments/${assignmentId}/submit`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  )

  return unwrap(response)
}

export const reviewSubmission = async (submissionId, payload) => {
  const response = await API.put(`/submissions/${submissionId}/review`, payload)

  return unwrap(response)
}

export const getSubmissionsByAssignment = async (assignmentId, params = {}) => {
  const response = await API.get(`/submissions/assignments/${assignmentId}`, {
    params,
  })

  return unwrap(response)
}

export const getMySubmission = async (assignmentId) => {
  const response = await API.get(
    `/submissions/assignments/${assignmentId}/my-submission`
  )

  return unwrap(response)
}

export default {
  submitAssignment,
  reviewSubmission,
  getSubmissionsByAssignment,
  getMySubmission,
}
