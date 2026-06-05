import { createContext, useEffect, useState } from 'react'
import {
  loginUser,
  logoutUser,
  getCurrentUser,
  registerUser,
  forgotPassword as forgotPasswordService,
  resetPassword as resetPasswordService,
  updatePassword as updatePasswordService,
} from '../services/authService'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadUser = async () => {
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
    await loginUser(credentials)

    const { data } = await getCurrentUser()

    const loggedInUser = data.data.user

    setUser(loggedInUser)

    return loggedInUser
  }

  const logout = async () => {
    setUser(null)

    try {
      await logoutUser()
    } catch (err) {
      console.log('Logout API failed, but user cleared locally')
    }
  }

  const signUp = async (data) => {
    return await registerUser(data)
  }

  const forgotPassword = async (data) => {
    return await forgotPasswordService(data)
  }

  const resetPassword = async (token, data) => {
    return await resetPasswordService(token, data)
  }

  const updatePassword = async (data) => {
    return await updatePasswordService(data)
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
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}