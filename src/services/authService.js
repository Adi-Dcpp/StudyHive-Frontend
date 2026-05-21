import API from './api'

export const loginUser = (data) => API.post('/auth/login', data)

export const getCurrentUser = () => API.get('/auth/me')

export const logoutUser = () => API.post('/auth/logout')

export const registerUser = (data) => API.post('/auth/register', data)

export const resendEmailVerification = (data) =>
  API.post('/auth/resend-email-verification', data)

export const forgotPassword = (data) => API.post('/auth/forgot-password', data)

export const resetPassword = (token, data) =>
  API.post(`/auth/reset-password/${token}`, data)

export const updatePassword = (data) => API.post('/auth/update-password', data)
