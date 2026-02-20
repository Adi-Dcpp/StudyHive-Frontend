import { createContext, useEffect, useState } from 'react'
import {
  loginUser,
  logoutUser,
  getCurrentUser,
  registerUser,
  forgotPassword as forgotPasswordService,
  resetPassword as resetPasswordService,
} from '../services/authService'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Load user on app start
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('accessToken')

      if (!token) {
        setLoading(false)
        return
      }

      try {
        const { data } = await getCurrentUser()
        setUser(data.data.user)
      } catch (err) {
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    loadUser()
  }, [])

  const login = async (credentials) => {
    const response = await loginUser(credentials)

    const accessToken = response.data.data.accessToken
    localStorage.setItem('accessToken', accessToken)

    const { data } = await getCurrentUser()
    setUser(data.data.user)
  }

  const logout = async () => {
  localStorage.removeItem('accessToken')
  setUser(null)

  try {
    await logoutUser()
  } catch (err) {
    console.log('Logout API failed, but user cleared locally')
  }
}

  const signUp = async (data) => {
    const response = await registerUser(data)
    return response
  }

  const forgotPassword = async (data) => {
    const response = await forgotPasswordService(data)
    return response
  }

  const resetPassword = async (token, data) => {
    const response = await resetPasswordService(token, data)
    return response
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        logout,
        signUp,
        forgotPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
