import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

// ✅ Attach access token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// ✅ Auto refresh on 401
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes('/auth/refresh-token')
    ) {
      originalRequest._retry = true

      try {
        const res = await API.post('/auth/refresh-token')
        const newAccessToken = res.data.data.accessToken

        localStorage.setItem('accessToken', newAccessToken)

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
        return API(originalRequest)
      } catch {
        localStorage.removeItem('accessToken')
        window.location.href = '/login'
      }
    }

    return Promise.reject(error)
  }
)

export const loginUser = (data) => API.post('/auth/login', data)

export const getCurrentUser = () => API.get('/auth/me')

export const logoutUser = () => API.post('/auth/logout')

export const registerUser = (data) => API.post('/auth/register', data)

export const resendEmailVerification = (data) =>
  API.post('/auth/resend-email-verification', data)

export const forgotPassword = (data) => API.post('/auth/forgot-password', data)

export const resetPassword = (token, data) =>
  API.post(`/auth/reset-password/${token}`, data)

export default API
