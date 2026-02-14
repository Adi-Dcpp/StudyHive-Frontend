import React, { useState } from 'react'
import {useNavigate , useSearchParams} from 'react-router-dom'
import { resendEmailVerification } from '../../services/authService'

const EmailVerification = () => {
  const [searchParams] = useSearchParams()
  const email = searchParams.get('email')
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  if (!email) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Invalid Email</h2>
          <p className="text-gray-600 mt-2">
            The email address is not valid or was not provided.
          </p>
        </div>
      </div>
    )
  }

  const handleBackToLogin = () => {
    navigate('/login', { replace: true })
  }

  const handleResendEmail = async () => {
    if (loading) return
    try {
      setLoading(true)
      setMessage('')
      setErrorMessage('')

      await resendEmailVerification(email)

      setMessage('Verification email resent! Please check your inbox.')
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || 'Failed to resend verification email.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gray-50">
      <div
        className="
          w-full max-w-md
          rounded-2xl
          border border-gray-200
          bg-white
          px-6 py-8 sm:px-8
          shadow-xl
          flex flex-col items-center
          gap-6
        "
      >
        {/* Icon */}
        <div className="h-14 w-14 flex items-center justify-center rounded-full bg-indigo-50">
          <span className="text-2xl">📬</span>
        </div>

        {/* Text */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Check your inbox
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            We’ve sent a verification link to
          </p>
          <p className="text-sm sm:text-base font-medium text-gray-900">
            {email}
          </p>
        </div>

        {message && (
          <p className="text-green-600 text-sm text-center">{message}</p>
        )}

        {errorMessage && (
          <p className="text-red-500 text-sm text-center">{errorMessage}</p>
        )}

        {/* Resend */}
        <div className="text-center text-sm text-gray-600">
          Didn’t receive the email?{' '}
          <button
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
            onClick={handleResendEmail}
          >
            Resend email
          </button>
        </div>

        {/* Back to login */}
        <button
          type="button"
          className="
            w-full
            rounded-lg
            border border-gray-300
            py-2.5
            text-sm font-medium
            text-gray-700
            hover:bg-gray-50
            transition-colors
          "
          onClick={handleBackToLogin}
        >
          Back to login
        </button>
      </div>
    </div>
  )
}

export default EmailVerification
