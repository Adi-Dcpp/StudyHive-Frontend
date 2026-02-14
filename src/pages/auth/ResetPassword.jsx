import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const ResetPassword = () => {
    const { resetPassword } = useAuth()
  const { token } = useParams()
  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!password.trim()) {
      setError('New password is required')
      return
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      setLoading(true)

      const response = await resetPassword(token, { newPassword: password })

      setSuccess(response.data.message)

      setTimeout(() => {
        navigate('/login')
      }, 2000)

    } catch (err) {
      setError(
        err.response?.data?.message || 'Reset link is invalid or expired'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md border p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Set New Password</h2>

        <form onSubmit={submitHandler}>
          <div className="flex flex-col gap-3">
            <input
              type="password"
              placeholder="New Password"
              className="border px-4 py-2 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="border px-4 py-2 rounded-lg"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-500 mt-3 text-sm">{error}</p>
          )}

          {success && (
            <p className="text-green-600 mt-3 text-sm">{success}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-4 disabled:opacity-50"
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword