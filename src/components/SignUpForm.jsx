import React, { useState } from 'react'
import useAuth from '../hooks/useAuth.js'
import { Link, useNavigate } from 'react-router-dom'

const SignUpForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState('learner')
  const [errors, setErrors] = useState({})

  const { signUp } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    const newErrors = {}
    if (!name.trim()) newErrors.name = 'Name is required'
    if (!password.trim()) {
      newErrors.password = 'Password is required'
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format'
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    try {
      const response = await signUp({ name, email, password, role })
      navigate(`/verify-email?email=${encodeURIComponent(email)}`)
    } catch (error) {
      const response = error.response?.data

      if (!response) {
        setErrors({ general: 'Something went wrong. Please try again.' })
        return
      }

      if (response.errors && Array.isArray(response.errors)) {
        const formattedErrors = {}

        response.errors.forEach((err) => {
          if (err.field) {
            formattedErrors[err.field] = err.message
          } else {
            formattedErrors.general = err.message
          }
        })

        setErrors(formattedErrors)
        return
      }

      if (response.message) {
        if (response.message.toLowerCase().includes('email')) {
          setErrors({ email: response.message })
        } else if (response.message.toLowerCase().includes('password')) {
          setErrors({ password: response.message })
        } else {
          setErrors({ general: response.message })
        }
        return
      }

      setErrors({ general: 'Registration failed. Please try again.' })
    }
  }

  return (
    <div className="flex items-center justify-center px-4 sm:px-6">
      <div
        className="
    w-full
    max-w-md
    sm:max-w-lg
    md:max-w-xl
    rounded-xl
    border border-black
    p-6 sm:p-8
    shadow-lg
  "
      >
        {/* Title */}
        <div className="mb-5 sm:mb-6 text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
            Create a new account
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-black">
            Enter your details
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
          {errors.general && (
            <p className="text-red-500 text-sm text-center">{errors.general}</p>
          )}
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm text-black">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg px-3 sm:px-4 py-2 sm:py-2.5
              bg-transparent
              border border-black
              placeholder:text-black
              focus:outline-none
              focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm font-medium text-black">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg px-3 sm:px-4 py-2 sm:py-2.5
                         bg-transparent
                         border border-black
                         text-black
                         placeholder:text-black
                         focus:outline-none
                         focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setErrors((prev) => ({ ...prev, email: undefined }))
              }}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm font-medium text-shadow-black">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg px-3 sm:px-4 py-2 sm:py-2.5
                         bg-transparent
                         border border-black
                         text-black
                         placeholder:text-gray-400
                         focus:outline-none
                         focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm font-medium text-shadow-black">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg px-3 sm:px-4 py-2 sm:py-2.5
                         bg-transparent
                         border border-black
                         text-black
                         placeholder:text-gray-400
                         focus:outline-none
                         focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Role */}
          <div className="flex flex-col gap-2">
            <label className="text-xs sm:text-sm font-medium text-black">
              Choose your role
            </label>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="learner"
                  className="accent-indigo-600"
                  checked={role === 'learner'}
                  onChange={(e) => setRole(e.target.value)}
                />
                <span className="text-sm text-black">Learner</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="mentor"
                  className="accent-indigo-600"
                  checked={role === 'mentor'}
                  onChange={(e) => setRole(e.target.value)}
                />
                <span className="text-sm text-black">Mentor</span>
              </label>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="mt-5 sm:mt-6 text-center text-xs sm:text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUpForm
