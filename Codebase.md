======================================================================
  StudyHive Frontend — Codebase Snapshot
  Root : /home/adi-dcpp/Desktop/WebDev/Frontend/StudyHive-Frontend
  Date : 5/21/2026, 10:15:54 PM
======================================================================

StudyHive-Frontend/
├── public/
│   └── vite.svg  (1.5 kB)
├── src/
│   ├── assets/
│   │   └── logo.png  (180.1 kB)
│   ├── components/
│   │   ├── auth/
│   │   │   ├── AuthFooter.jsx  (243 B)
│   │   │   ├── AuthHeader.jsx  (618 B)
│   │   │   ├── EmailVerified.jsx  (2.1 kB)
│   │   │   ├── LoginForm.jsx  (4.5 kB)
│   │   │   └── SignUpForm.jsx  (9.7 kB)
│   │   ├── groups/
│   │   │   ├── details/
│   │   │   │   ├── GroupAnnouncements.jsx  (300 B)
│   │   │   │   ├── GroupAssignments.jsx  (308 B)
│   │   │   │   ├── GroupGoals.jsx  (301 B)
│   │   │   │   ├── GroupMembers.jsx  (1.6 kB)
│   │   │   │   ├── GroupOverview.jsx  (1.3 kB)
│   │   │   │   ├── GroupResources.jsx  (301 B)
│   │   │   │   └── GroupSidebar.jsx  (1.1 kB)
│   │   │   ├── CreateGroupModal.jsx  (4.3 kB)
│   │   │   ├── EmptyGroupsState.jsx  (1.3 kB)
│   │   │   ├── GroupCard.jsx  (7.4 kB)
│   │   │   ├── GroupCardSkeleton.jsx  (1.3 kB)
│   │   │   ├── GroupsGrid.jsx  (1.4 kB)
│   │   │   ├── GroupsHeader.jsx  (1.3 kB)
│   │   │   └── JoinGroupModal.jsx  (3.6 kB)
│   │   ├── landing/
│   │   │   ├── ContactSection.jsx  (1.3 kB)
│   │   │   ├── CTASection.jsx  (757 B)
│   │   │   ├── FadeInSection.jsx  (410 B)
│   │   │   ├── FeaturesSection.jsx  (1.1 kB)
│   │   │   ├── Footer.jsx  (725 B)
│   │   │   ├── HeroSection.jsx  (3.2 kB)
│   │   │   ├── HowItWorks.jsx  (1.0 kB)
│   │   │   ├── Navbar.jsx  (1.4 kB)
│   │   │   ├── RolesSection.jsx  (1.4 kB)
│   │   │   └── SecuritySection.jsx  (716 B)
│   │   ├── mentor/
│   │   │   └── dashboard/
│   │   │       ├── RecentAssignment.jsx  (2.1 kB)
│   │   │       ├── RecentSubmissions.jsx  (2.8 kB)
│   │   │       └── StatsCards.jsx  (1.6 kB)
│   │   ├── notification/
│   │   │   ├── NotificationBell.jsx  (2.4 kB)
│   │   │   └── NotificationDropdown.jsx  (4.2 kB)
│   │   ├── Navbar.jsx  (3.3 kB)
│   │   └── Sidebar.jsx  (9.7 kB)
│   ├── contexts/
│   │   ├── AuthContext.jsx  (2.5 kB)
│   │   └── ThemeContext.jsx  (834 B)
│   ├── hooks/
│   │   ├── useAuth.js  (181 B)
│   │   ├── useGroupDetails.js  (1.5 kB)
│   │   ├── useGroups.js  (2.0 kB)
│   │   ├── useMentorDashboard.js  (1.5 kB)
│   │   └── useTheme.js  (179 B)
│   ├── layouts/
│   │   └── AppLayout.jsx  (869 B)
│   ├── pages/
│   │   ├── app/
│   │   │   ├── Assignments.jsx  (94 B)
│   │   │   ├── Dashboard.jsx  (1.0 kB)
│   │   │   ├── Goals.jsx  (76 B)
│   │   │   ├── GroupDetails.jsx  (3.3 kB)
│   │   │   ├── Groups.jsx  (1.6 kB)
│   │   │   ├── Messages.jsx  (263 B)
│   │   │   ├── Settings.jsx  (263 B)
│   │   │   └── Submissions.jsx  (94 B)
│   │   ├── auth/
│   │   │   ├── EmailVerification.jsx  (4.0 kB)
│   │   │   ├── ForgotPassword.jsx  (3.0 kB)
│   │   │   ├── Login.jsx  (458 B)
│   │   │   ├── ResetPassword.jsx  (3.9 kB)
│   │   │   └── SignUp.jsx  (461 B)
│   │   └── Landing.jsx  (830 B)
│   ├── routes/
│   │   ├── group.routes.jsx  (291 B)
│   │   ├── ProtectedRoutes.jsx  (312 B)
│   │   └── router.jsx  (2.4 kB)
│   ├── services/
│   │   ├── api.js  (384 B)
│   │   ├── authService.js  (638 B)
│   │   ├── group.service.js  (2.0 kB)
│   │   ├── messageService.js  (532 B)
│   │   └── notificationService.js  (491 B)
│   ├── App.jsx  (387 B)
│   ├── colors.css  (1.8 kB)
│   ├── index.css  (47 B)
│   └── main.jsx  (184 B)
├── .env  (41 B)
├── .gitignore  (259 B)
├── .prettierignore  (88 B)
├── .prettierrc  (186 B)
├── Codebase.md  (824.1 kB)
├── eslint.config.js  (758 B)
├── index.html  (367 B)
├── package.json  (1017 B)
├── print-codebase.js  (4.8 kB)
├── README.md  (68 B)
├── vercel.json  (69 B)
└── vite.config.js  (265 B)

======================================================================
  FILE CONTENTS
======================================================================

──────────────────────────────────────────────────────────────────────
FILE: src/components/auth/AuthFooter.jsx  (243 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'

const AuthFooter = () => {
  return (
    <div className="py-4 text-center text-xs text-gray-400">
      By continuing, you agree to our Terms of Service and Privacy Policy
    </div>
  )
}

export default AuthFooter
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/auth/AuthHeader.jsx  (618 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import logo from '../../assets/logo.png'

const AuthHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2 sm:py-5 text-center space-y-2">
      <img
        src={logo}
        alt="StudyHive Logo"
        className="h-16 sm:h-18 md:h-20 w-auto"
      />

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray mt-0.5">
        Welcome To StudyHive
      </h2>

      <h3 className="text-gray-400 text-xs sm:text-sm md:text-base">
        Collaborative learning made simple
      </h3>
    </div>
  )
}

export default AuthHeader
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/auth/EmailVerified.jsx  (2.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const EmailVerified = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        navigate("/login", { replace: true });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status, navigate]);

  const handleGoToLogin = () => {
    navigate("/login", { replace: true });
  };

  const handleGoToSignup = () => {
    navigate("/signup", { replace: true });
  };

  const isSuccess = status === "success";

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8 text-center space-y-6">
        
        <div className={`h-16 w-16 mx-auto flex items-center justify-center rounded-full ${
          isSuccess ? "bg-green-50" : "bg-red-50"
        }`}>
          <span className="text-3xl">
            {isSuccess ? "✅" : "❌"}
          </span>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900">
          {isSuccess ? "Email Verified Successfully!" : "Verification Failed"}
        </h2>

        <p className="text-sm text-gray-600">
          {isSuccess
            ? "Your email has been verified. Redirecting you to login..."
            : "The verification link is invalid or has expired."}
        </p>

        {isSuccess ? (
          <button
            onClick={handleGoToLogin}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Go to Login
          </button>
        ) : (
          <button
            onClick={handleGoToSignup}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Back to Signup
          </button>
        )}
      </div>
    </div>
  );
};

export default EmailVerified;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/auth/LoginForm.jsx  (4.5 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const LoginForm = () => {
  // Controlled state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await login({ email, password })

      navigate('/app/dashboard', {
        replace: true,
      })

    } catch (error) {
      console.log('Login error:', error.response?.data)
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
          <h2 className="text-xl sm:text-2xl font-semibold text-black">
            Sign in to your account
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-black">
            Enter your credentials to continue
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-medium text-shadow-black">
                Password
              </label>
              {/* <a
                href="#"
                className="text-xs sm:text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </a> */}
              <Link to="/forgot-password" className="text-xs sm:text-sm text-blue-500 hover:underline">Forgot password?</Link>
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 pr-10
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
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="mt-5 sm:mt-6 text-center text-xs sm:text-sm">
          Don&apos;t have an account?{' '}
          {/* <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a> */}
          <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/auth/SignUpForm.jsx  (9.7 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth.js'
import { Link, useNavigate } from 'react-router-dom'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const SignUpForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
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
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 pr-10
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
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm font-medium text-shadow-black">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 pr-10
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
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition"
                aria-label={
                  showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'
                }
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/groups/details/GroupAnnouncements.jsx  (300 B)
──────────────────────────────────────────────────────────────────────
```jsx
const GroupAnnouncements = () => {
  return (
    <div className="rounded-2xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 text-sm text-[rgb(var(--text-secondary))]">
      Announcements and updates will live here.
    </div>
  )
}

export default GroupAnnouncements
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/groups/details/GroupAssignments.jsx  (308 B)
──────────────────────────────────────────────────────────────────────
```jsx
const GroupAssignments = () => {
  return (
    <div className="rounded-2xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 text-sm text-[rgb(var(--text-secondary))]">
      Assignments will appear here once they are published.
    </div>
  )
}

export default GroupAssignments
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/groups/details/GroupGoals.jsx  (301 B)
──────────────────────────────────────────────────────────────────────
```jsx
const GroupGoals = () => {
  return (
    <div className="rounded-2xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 text-sm text-[rgb(var(--text-secondary))]">
      Goals will show here once they are created for this group.
    </div>
  )
}

export default GroupGoals
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/groups/details/GroupMembers.jsx  (1.6 kB)
──────────────────────────────────────────────────────────────────────
```jsx
const GroupMembers = ({ members, loading }) => {
  if (loading) {
    return (
      <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6">
        <p className="text-sm text-[rgb(var(--text-secondary))]">Loading members...</p>
      </div>
    )
  }

  if (!members.length) {
    return (
      <div className="rounded-2xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 text-sm text-[rgb(var(--text-secondary))]">
        No members found yet.
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6">
      <h2 className="text-lg font-semibold text-[rgb(var(--text))]">Members</h2>
      <div className="mt-4 space-y-3">
        {members.map((member) => (
          <div
            key={member?._id || member?.id}
            className="flex items-center justify-between rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3"
          >
            <div>
              <p className="text-sm font-semibold text-[rgb(var(--text))]">
                {member?.name || 'Unnamed user'}
              </p>
              <p className="text-xs text-[rgb(var(--text-muted))]">
                {member?.email || 'No email'}
              </p>
            </div>
            <span className="rounded-full bg-[rgb(var(--surface-2))] px-3 py-1 text-xs font-semibold capitalize text-[rgb(var(--text-secondary))]">
              {member?.role || 'member'}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GroupMembers
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/groups/details/GroupOverview.jsx  (1.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
const GroupOverview = ({ group }) => {
  return (
    <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6">
      <h2 className="text-lg font-semibold text-[rgb(var(--text))]">Overview</h2>
      <p className="mt-2 text-sm text-[rgb(var(--text-secondary))]">
        {group?.description || 'This group has no description yet.'}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
            Created
          </p>
          <p className="mt-2 text-sm font-semibold text-[rgb(var(--text))]">
            {group?.createdAt
              ? new Date(group.createdAt).toLocaleDateString()
              : '---'}
          </p>
        </div>
        <div className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
            Members
          </p>
          <p className="mt-2 text-sm font-semibold text-[rgb(var(--text))]">
            {group?.membersCount || group?.memberCount || '---'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default GroupOverview
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/groups/details/GroupResources.jsx  (301 B)
──────────────────────────────────────────────────────────────────────
```jsx
const GroupResources = () => {
  return (
    <div className="rounded-2xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 text-sm text-[rgb(var(--text-secondary))]">
      Resources shared with the group will show up here.
    </div>
  )
}

export default GroupResources
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/groups/details/GroupSidebar.jsx  (1.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
const GroupSidebar = ({ tabs, activeTab, onTabChange }) => {
  return (
    <aside className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
        Group menu
      </p>
      <div className="mt-4 flex flex-col gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => onTabChange(tab.key)}
            className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold transition ${
              activeTab === tab.key
                ? 'bg-[rgb(var(--primary-soft))] text-[rgb(var(--primary))]'
                : 'text-[rgb(var(--text))] hover:bg-[rgb(var(--hover))]'
            }`}
          >
            <span>{tab.label}</span>
            <span className="text-xs text-[rgb(var(--text-muted))]">
              {tab.badge || ''}
            </span>
          </button>
        ))}
      </div>
    </aside>
  )
}

export default GroupSidebar
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/groups/CreateGroupModal.jsx  (4.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { useEffect, useState } from 'react'

const CreateGroupModal = ({ open, onClose, onCreate, loading }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!open) return
    setError(null)
    setName('')
    setDescription('')
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  useEffect(() => {
    if (!open) return undefined
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [open])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError(null)

    if (!name.trim()) {
      setError('Group name is required.')
      return
    }

    try {
      await onCreate({ name: name.trim(), description: description.trim() })
      onClose()
    } catch (err) {
      setError(err?.message || 'Unable to create group.')
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-[rgb(var(--overlay))] opacity-50"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-[rgb(var(--card-bg))] p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
              Create group
            </p>
            <h3 className="text-lg font-semibold text-[rgb(var(--text))]">
              Start a new learning space
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-[rgb(var(--text-muted))] hover:bg-[rgb(var(--hover))]"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
              Group name
            </label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Mentor Cohort Alpha"
              className="mt-2 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-2.5 text-sm text-[rgb(var(--text))] outline-none focus:ring-2 focus:ring-[rgb(var(--focus-ring))]"
            />
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
              Description
            </label>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="What is this group focused on?"
              rows={4}
              className="mt-2 w-full resize-none rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-2.5 text-sm text-[rgb(var(--text))] outline-none focus:ring-2 focus:ring-[rgb(var(--focus-ring))]"
            />
          </div>

          {error && (
            <p className="text-sm text-[rgb(var(--error))]">{error}</p>
          )}

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-[rgb(var(--border))] px-4 py-2.5 text-sm font-semibold text-[rgb(var(--text))] hover:bg-[rgb(var(--hover))]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-[rgb(var(--primary))] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[rgb(var(--primary-hover))] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Creating...' : 'Create Group'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateGroupModal
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/groups/EmptyGroupsState.jsx  (1.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
const EmptyGroupsState = ({ onCreate, onJoin, canCreate }) => {
  return (
    <div className="rounded-2xl border border-dashed border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] px-6 py-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
        No groups yet
      </p>
      <h3 className="mt-3 text-xl font-semibold text-[rgb(var(--text))]">
        Start your first group
      </h3>
      <p className="mt-2 text-sm text-[rgb(var(--text-secondary))]">
        Create a learning space for your cohort or join one with an invite code.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {canCreate && (
          <button
            type="button"
            onClick={onCreate}
            className="rounded-xl bg-[rgb(var(--primary))] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[rgb(var(--primary-hover))]"
          >
            Create Group
          </button>
        )}
        <button
          type="button"
          onClick={onJoin}
          className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-2.5 text-sm font-semibold text-[rgb(var(--text))] transition hover:bg-[rgb(var(--hover))]"
        >
          Join Group
        </button>
      </div>
    </div>
  )
}

export default EmptyGroupsState
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/groups/GroupCard.jsx  (7.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { Link } from 'react-router-dom'
import { useState } from 'react'

import {
  ArrowRight,
  Users,
  KeyRound,
  Copy,
  Check,
} from 'lucide-react'

const roleStyles = {
  mentor: `
    bg-[rgba(var(--primary),0.12)]
    text-[rgb(var(--primary))]
    border border-[rgba(var(--primary),0.25)]
  `,

  learner: `
    bg-[rgb(var(--surface-2))]
    text-[rgb(var(--text-secondary))]
    border border-[rgb(var(--border))]
  `,

  member: `
    bg-[rgb(var(--surface-2))]
    text-[rgb(var(--text-secondary))]
    border border-[rgb(var(--border))]
  `,
}

const formatDate = (value) => {
  if (!value) return '---'

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) return '---'

  return date.toLocaleDateString()
}

const GroupCard = ({ group }) => {
  const [copied, setCopied] = useState(false)

  const groupId =
    group?._id ||
    group?.id ||
    group?.groupId

  const name =
    group?.name ||
    group?.title ||
    'Untitled Group'

  const description =
    group?.description ||
    'No description provided yet.'

  const role =
    group?.role ||
    group?.userRole ||
    group?.memberRole ||
    'member'

  const members =
    group?.membersCount ||
    group?.memberCount ||
    group?.members?.length ||
    0

  const inviteCode =
    group?.inviteCode ||
    group?.invite_code ||
    'N/A'

  const createdAt = formatDate(
    group?.createdAt ||
    group?.created_at
  )

  const handleCopyInviteCode = async (
    event
  ) => {
    event.preventDefault()
    event.stopPropagation()

    if (
      !inviteCode ||
      inviteCode === 'N/A'
    ) {
      return
    }

    try {
      await navigator.clipboard.writeText(
        inviteCode
      )

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      console.error(
        'Failed to copy invite code',
        error
      )
    }
  }

  return (
    <Link
      to={`/app/groups/${groupId}`}
      className="
        group relative overflow-hidden rounded-3xl

        border border-[rgb(var(--border))]
        bg-[rgb(var(--surface))]

        p-6

        shadow-sm
        transition-all duration-300

        hover:-translate-y-1
        hover:border-[rgba(var(--primary),0.35)]
        hover:shadow-2xl
      "
    >
      {/* Premium Gradient Layer */}
      <div
        className="
          absolute inset-0 opacity-0
          transition-opacity duration-300

          group-hover:opacity-100

          bg-gradient-to-br
          from-[rgba(var(--primary),0.05)]
          via-transparent
          to-[rgba(var(--primary),0.02)]
        "
      />

      {/* Decorative Blur Orb */}
      <div
        className="
          absolute -right-10 -top-10
          h-32 w-32 rounded-full

          bg-[rgba(var(--primary),0.10)]
          blur-3xl

          opacity-0
          transition-opacity duration-500

          group-hover:opacity-100
        "
      />

      {/* Top Section */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3
            className="
              text-2xl font-bold tracking-tight
              text-[rgb(var(--text))]

              transition-colors duration-300

              group-hover:text-[rgb(var(--primary))]
            "
          >
            {name}
          </h3>

          <p
            className="
              mt-3 line-clamp-2

              text-sm leading-7
              text-[rgb(var(--text-secondary))]
            "
          >
            {description}
          </p>
        </div>

        {/* Role Badge */}
        <span
          className={`
            rounded-full px-4 py-1.5

            text-xs font-semibold capitalize

            backdrop-blur-md

            ${roleStyles[role] ||
            roleStyles.member}
          `}
        >
          {role}
        </span>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 mt-7 flex flex-wrap items-center gap-3">
        {/* Members */}
        <div
          className="
            flex items-center gap-2

            rounded-2xl

            border border-[rgb(var(--border))]
            bg-[rgb(var(--surface-2))]

            px-4 py-2.5

            text-sm
            text-[rgb(var(--text-secondary))]
          "
        >
          <Users size={16} />

          <span className="font-medium">
            {members} Members
          </span>
        </div>

        {/* Invite Code */}
        <div
          className="
            flex items-center gap-3

            rounded-2xl

            border border-[rgba(var(--primary),0.20)]

            bg-[rgba(var(--primary),0.08)]

            px-4 py-2.5

            text-sm font-medium
            text-[rgb(var(--primary))]
          "
        >
          <KeyRound size={16} />

          <span className="tracking-wide">
            {inviteCode}
          </span>

          <button
            type="button"
            onClick={handleCopyInviteCode}
            className="
              flex h-8 w-8 items-center justify-center

              rounded-xl

              bg-[rgba(var(--primary),0.10)]

              transition-all duration-200

              hover:scale-105
              hover:bg-[rgba(var(--primary),0.18)]

              active:scale-95
            "
          >
            {copied ? (
              <Check size={14} />
            ) : (
              <Copy size={14} />
            )}
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="
          relative z-10 mt-10

          flex items-center justify-between
        "
      >
        <div
  className="
    flex items-center gap-2

    rounded-2xl

    border border-[rgb(var(--border))]

    bg-[rgb(var(--surface-2))]

    px-4 py-2

    text-sm font-medium
    text-[rgb(var(--text-secondary))]
  "
>
  <span className="relative flex h-2.5 w-2.5">
    <span
      className="
        absolute inline-flex h-full w-full
        animate-ping rounded-full
        bg-emerald-400 opacity-75
      "
    />

    <span
      className="
        relative inline-flex h-2.5 w-2.5
        rounded-full bg-emerald-500
      "
    />
  </span>

  <span>Active Group</span>
</div>

        {/* Footer Right */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p
              className="
                text-xs
                text-[rgb(var(--text-muted))]
              "
            >
              Created
            </p>

            <p
              className="
                text-sm font-semibold
                text-[rgb(var(--text-secondary))]
              "
            >
              {createdAt}
            </p>
          </div>

          {/* Arrow */}
          <div
            className="
              flex h-12 w-12
              items-center justify-center

              rounded-2xl

              border border-[rgb(var(--border))]

              bg-[rgb(var(--surface-2))]

              transition-all duration-300

              group-hover:translate-x-1
              group-hover:border-[rgba(var(--primary),0.35)]
              group-hover:bg-[rgba(var(--primary),0.08)]
            "
          >
            <ArrowRight
              size={18}
              className="
                text-[rgb(var(--text-secondary))]
              "
            />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default GroupCard
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/groups/GroupCardSkeleton.jsx  (1.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
const GroupCardSkeleton = () => {
  return (
    <div
      className="
        animate-pulse rounded-3xl
        border border-[rgb(var(--border))]
        bg-[rgb(var(--card-bg))]
        p-6
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-4">
          <div className="h-6 w-1/2 rounded-xl bg-[rgb(var(--hover))]" />

          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-[rgb(var(--hover))]" />
            <div className="h-4 w-2/3 rounded bg-[rgb(var(--hover))]" />
          </div>
        </div>

        <div className="h-8 w-20 rounded-full bg-[rgb(var(--hover))]" />
      </div>

      <div className="mt-6 flex gap-3">
        <div className="h-10 w-32 rounded-xl bg-[rgb(var(--hover))]" />
        <div className="h-10 w-28 rounded-xl bg-[rgb(var(--hover))]" />
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="h-10 w-10 rounded-full bg-[rgb(var(--hover))]" />
          <div className="h-10 w-10 rounded-full bg-[rgb(var(--hover))]" />
          <div className="h-10 w-10 rounded-full bg-[rgb(var(--hover))]" />
        </div>

        <div className="h-10 w-10 rounded-2xl bg-[rgb(var(--hover))]" />
      </div>
    </div>
  )
}

export default GroupCardSkeleton
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/groups/GroupsGrid.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import EmptyGroupsState from './EmptyGroupsState'
import GroupCard from './GroupCard'
import GroupCardSkeleton from './GroupCardSkeleton'

const GroupsGrid = ({
  groups,
  loading,
  error,
  onRetry,
  onCreate,
  onJoin,
  canCreate,
}) => {
  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <GroupCardSkeleton key={`group-skeleton-${index}`} />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 text-sm text-[rgb(var(--text-secondary))]">
        <p className="font-semibold text-[rgb(var(--error))]">{error}</p>
        <button
          type="button"
          onClick={onRetry}
          className="mt-3 inline-flex items-center rounded-lg border border-[rgb(var(--border))] px-3 py-1.5 text-xs font-semibold text-[rgb(var(--text))] hover:bg-[rgb(var(--hover))]"
        >
          Retry
        </button>
      </div>
    )
  }

  if (!groups.length) {
    return (
      <EmptyGroupsState onCreate={onCreate} onJoin={onJoin} canCreate={canCreate} />
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {groups.map((group) => (
        <GroupCard key={group._id || group.id || group.groupId} group={group} />
      ))}
    </div>
  )
}

export default GroupsGrid
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/groups/GroupsHeader.jsx  (1.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
const GroupsHeader = ({ onCreate, onJoin, canCreate, totalGroups = 0 }) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
          Groups
        </p>
        <h1 className="text-2xl font-semibold text-[rgb(var(--text))]">
          Your learning circles
        </h1>
        <p className="mt-1 text-sm text-[rgb(var(--text-secondary))]">
          {totalGroups} {totalGroups === 1 ? 'group' : 'groups'} connected to your workspace.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {canCreate && (
          <button
            type="button"
            onClick={onCreate}
            className="rounded-xl bg-[rgb(var(--primary))] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[rgb(var(--primary-hover))]"
          >
            Create Group
          </button>
        )}
        <button
          type="button"
          onClick={onJoin}
          className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-2.5 text-sm font-semibold text-[rgb(var(--text))] transition hover:bg-[rgb(var(--hover))]"
        >
          Join Group
        </button>
      </div>
    </div>
  )
}

export default GroupsHeader
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/groups/JoinGroupModal.jsx  (3.6 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { useEffect, useState } from 'react'

const JoinGroupModal = ({ open, onClose, onJoin, loading }) => {
  const [inviteCode, setInviteCode] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!open) return
    setError(null)
    setInviteCode('')
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  useEffect(() => {
    if (!open) return undefined
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [open])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError(null)

    if (!inviteCode.trim()) {
      setError('Invite code is required.')
      return
    }

    try {
      await onJoin(inviteCode.trim())
      onClose()
    } catch (err) {
      setError(err?.message || 'Unable to join group.')
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-[rgb(var(--overlay))] opacity-50"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-md rounded-2xl bg-[rgb(var(--card-bg))] p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
              Join group
            </p>
            <h3 className="text-lg font-semibold text-[rgb(var(--text))]">
              Enter an invite code
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-[rgb(var(--text-muted))] hover:bg-[rgb(var(--hover))]"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
              Invite code
            </label>
            <input
              value={inviteCode}
              onChange={(event) => setInviteCode(event.target.value)}
              placeholder="Enter the 6-8 character code"
              className="mt-2 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-2.5 text-sm text-[rgb(var(--text))] outline-none focus:ring-2 focus:ring-[rgb(var(--focus-ring))]"
            />
          </div>

          {error && (
            <p className="text-sm text-[rgb(var(--error))]">{error}</p>
          )}

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-[rgb(var(--border))] px-4 py-2.5 text-sm font-semibold text-[rgb(var(--text))] hover:bg-[rgb(var(--hover))]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-[rgb(var(--primary))] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[rgb(var(--primary-hover))] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Joining...' : 'Join Group'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default JoinGroupModal
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/ContactSection.jsx  (1.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/ContactSection.jsx
import FadeInSection from "./FadeInSection";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Connect With Us
          </h2>

          <p className="mt-6 text-gray-600">
            StudyHive is an open collaborative project. Feel free to explore
            the codebase or connect with the creator.
          </p>

          <div className="mt-8 flex justify-center gap-6">

            <a
              href="https://github.com/Adi-Dcpp"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:scale-105 transition-all duration-300"
            >
              GitHub
            </a>

            <a
              href="mailto:luffy1120adi@gmail.com"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
            >
              Email
            </a>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/CTASection.jsx  (757 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/CTASection.jsx
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const CTASection = () => {
  return (
    <section className="py-20 bg-indigo-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold">
            Ready to level up your study workflow?
          </h2>

          <Link
            to="/signup"
            className="mt-8 inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Create Your StudyHive
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CTASection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/FadeInSection.jsx  (410 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { motion } from "framer-motion";

const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/FeaturesSection.jsx  (1.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/FeaturesSection.jsx
import FadeInSection from "./FadeInSection";

const features = [
  "Secure Authentication",
  "Study Group Management",
  "Learning Goal Tracking",
  "Assignment & Submissions",
  "File & Resource Sharing",
  "Progress Monitoring Dashboard",
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Powerful Features
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="font-semibold text-gray-800">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FeaturesSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/Footer.jsx  (725 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} StudyHive. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/HeroSection.jsx  (3.2 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Organize. Collaborate.
                <span className="text-indigo-600"> Succeed Together.</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                StudyHive helps mentors and learners build structured study groups,
                track learning goals, manage assignments, and collaborate
                efficiently in one powerful platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-indigo-700 hover:scale-105"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - DASHBOARD MOCKUP */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">

                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">
                    Web Development Group
                  </h3>
                  <span className="text-sm bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Goal Progress</p>
                  <div className="mt-2 h-2 bg-gray-300 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full w-2/3"></div>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">
                    Assignment Status
                  </p>
                  <div className="mt-3 flex gap-3 text-xs">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                      Pending
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      Submitted
                    </span>
                    <span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
                      Reviewed
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HeroSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/HowItWorks.jsx  (1.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/HowItWorks.jsx
import FadeInSection from "./FadeInSection";

const steps = [
  "Sign Up & Verify Email",
  "Create or Join Study Group",
  "Assign & Complete Goals",
  "Track Progress & Collaborate",
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            How It Works
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
            {steps.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HowItWorks;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/Navbar.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/Navbar.jsx
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LEFT - Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="StudyHive Logo"
            className="h-10 w-auto"
          />
          {/* <span className="text-xl font-bold text-gray-900">
            StudyHive
          </span> */}
        </Link>

        {/* RIGHT - Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>

          <Link
            to="/login"
            className="px-5 py-2 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/RolesSection.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/RolesSection.jsx
import FadeInSection from "./FadeInSection";

const RolesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12">

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-indigo-600">
                For Mentors
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Create Study Groups</li>
                <li>Assign Learning Goals</li>
                <li>Review Submissions</li>
                <li>Post Announcements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-emerald-600">
                For Learners
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Join Groups</li>
                <li>Track Goals</li>
                <li>Submit Assignments</li>
                <li>Access Resources</li>
              </ul>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default RolesSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/SecuritySection.jsx  (716 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/SecuritySection.jsx
import FadeInSection from "./FadeInSection";

const SecuritySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Secure & Reliable
          </h2>
          <p className="mt-6 text-gray-600">
            Role-based access control, secure file uploads, email verification,
            and production-ready backend architecture ensure your learning
            environment stays protected.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default SecuritySection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/dashboard/RecentAssignment.jsx  (2.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React from "react";
import { FiFileText } from "react-icons/fi";

const RecentAssignments = ({ assignments }) => {
  if (!assignments || assignments.length === 0) {
    return (
      <div className="p-6 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] shadow-sm min-h-220px">
        <h2 className="text-lg font-semibold text-[rgb(var(--text))] mb-4">
          Recent Assignments
        </h2>

        <div className="flex items-center justify-center h-32 text-[rgb(var(--text-muted))]">
          No assignments yet
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] shadow-sm min-h-260px">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-[rgb(var(--text))]">
          Recent Assignments
        </h2>

        <span className="text-sm text-[rgb(var(--text-muted))]">
          {assignments.length} items
        </span>
      </div>

      {/* List */}
      <ul className="flex flex-col divide-y divide-[rgb(var(--border))]">
        {assignments.map((a) => (
          <li
            key={a._id}
            className="flex items-center justify-between py-3 hover:bg-[rgb(var(--hover))] px-2 rounded-md transition"
          >
            
            {/* Left side */}
            <div className="flex items-center gap-3">
              
              <div className="w-9 h-9 flex items-center justify-center rounded-md bg-[rgb(var(--primary-soft))] text-[rgb(var(--primary))]">
                <FiFileText size={18} />
              </div>

              <span className="text-[rgb(var(--text))] font-medium">
                {a.title}
              </span>

            </div>

            {/* Deadline */}
            <span className="text-xs px-2 py-1 rounded-md bg-[rgb(var(--surface-2))] text-[rgb(var(--text-secondary))]">
              {new Date(a.deadline).toLocaleDateString()}
            </span>

          </li>
        ))}
      </ul>

    </div>
  );
};

export default RecentAssignments;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/dashboard/RecentSubmissions.jsx  (2.8 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { FiUpload } from "react-icons/fi";

const RecentSubmissions = ({ submissions }) => {
  const safeSubmissions = submissions || [];

  const formatSubmission = (submission) => {
    const learnerName =
      submission?.userId?.name ||
      submission?.learner?.name ||
      submission?.student?.name ||
      "Unknown learner";

    const assignmentTitle =
      submission?.assignmentId?.title ||
      submission?.assignment?.title ||
      submission?.title ||
      "Untitled assignment";

    return { learnerName, assignmentTitle };
  };

  return (
    <div className="p-6 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] shadow-sm min-h-260px">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-[rgb(var(--text))]">
          Recent Submissions
        </h2>

        <span className="text-sm text-[rgb(var(--text-muted))]">
          {safeSubmissions.length} items
        </span>
      </div>

      {/* Empty state */}
      {safeSubmissions.length === 0 && (
        <div className="flex items-center justify-center h-32 text-[rgb(var(--text-muted))]">
          No submissions yet
        </div>
      )}

      {/* List */}
      <ul className="flex flex-col divide-y divide-[rgb(var(--border))]">
        {safeSubmissions.map((submission, index) => {
          const { learnerName, assignmentTitle } = formatSubmission(submission);

          return (
            <li
              key={submission?._id || submission?.id || index}
              className="flex items-center justify-between py-3 px-2 hover:bg-[rgb(var(--hover))] rounded-md transition"
            >

              {/* Left side */}
              <div className="flex items-center gap-3">

                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-[rgb(var(--primary-soft))] text-[rgb(var(--primary))] flex items-center justify-center font-semibold text-sm">
                  {learnerName.charAt(0).toUpperCase()}
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <span className="text-[rgb(var(--text))] font-medium">
                    {learnerName}
                  </span>

                  <span className="text-xs text-[rgb(var(--text-muted))]">
                    {assignmentTitle}
                  </span>
                </div>

              </div>

              {/* Date */}
              <span className="text-xs px-2 py-1 rounded-md bg-[rgb(var(--surface-2))] text-[rgb(var(--text-secondary))]">
                {submission?.submittedAt
                  ? new Date(submission.submittedAt).toLocaleDateString()
                  : "Date unavailable"}
              </span>

            </li>
          );
        })}
      </ul>

    </div>
  );
};

export default RecentSubmissions;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/dashboard/StatsCards.jsx  (1.6 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { FaUsers, FaLayerGroup, FaClipboardList, FaTasks } from "react-icons/fa";

const StatsCards = ({ stats }) => {
  const cards = [
    { title: "Total Groups", value: stats?.groups || 0, icon: <FaLayerGroup /> },
    { title: "Active Learners", value: stats?.learners || 0, icon: <FaUsers /> },
    { title: "Submissions", value: stats?.submissions || 0, icon: <FaClipboardList /> },
    { title: "Assignments", value: stats?.assignments || 0, icon: <FaTasks /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((item) => (
        <div
          key={item.title}
          className="
          p-6
          rounded-xl
          border border-[rgb(var(--border))]
          bg-[rgb(var(--card-bg))]
          flex items-center justify-between
          shadow-sm
          hover:shadow-md
          transition-all
          hover:bg-[rgb(var(--surface-2))]
        "
        >

          {/* Text Section */}
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[rgb(var(--text-secondary))]">
              {item.title}
            </p>

            <h2 className="text-3xl font-bold text-[rgb(var(--text))]">
              {item.value}
            </h2>
          </div>

          {/* Icon */}
          <div
            className="
            w-12 h-12
            flex items-center justify-center
            rounded-lg
            bg-[rgb(var(--primary-soft))]
            text-[rgb(var(--primary))]
            text-xl
          "
          >
            {item.icon}
          </div>

        </div>
      ))}
    </div>
  );
};

export default StatsCards;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/notification/NotificationBell.jsx  (2.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { useEffect, useState } from "react";
import { FiBell } from "react-icons/fi";

import NotificationDropdown from "./NotificationDropdown";

import {
  getNotifications
} from "../../services/notificationService";

const NotificationBell = () => {

  const [open, setOpen] = useState(false);

  const [notifications, setNotifications] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchNotifications = async () => {

    try {

      setLoading(true);

      const data = await getNotifications();

      console.log("Notifications:", data);

      // YOUR BACKEND RETURNS:
      // {
      //   notifications,
      //   unreadCount
      // }

      if (Array.isArray(data.notifications)) {

        setNotifications(data.notifications);

      } else {

        setNotifications([]);

      }

    } catch (error) {

      console.error(
        "Failed to fetch notifications:",
        error
      );

      setNotifications([]);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchNotifications();

    // POLLING
    const interval = setInterval(() => {

      fetchNotifications();

    }, 30000);

    return () => clearInterval(interval);

  }, []);

  // NOW COUNT = TOTAL NOTIFICATIONS
  const unreadCount = notifications.length;

  return (
    <div className="relative">

      {/* BELL BUTTON */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="
          relative
          p-2.5
          rounded-xl
          hover:bg-[rgb(var(--hover))]
          transition
        "
      >

        <FiBell className="text-[22px] text-[rgb(var(--text))]" />

        {/* BADGE */}
        {unreadCount > 0 && (
          <span
            className="
              absolute
              -top-1
              -right-1
              min-w-5
              h-5
              px-1
              rounded-full
              bg-red-500
              text-white
              text-[10px]
              font-semibold
              flex items-center justify-center
            "
          >
            {unreadCount}
          </span>
        )}

      </button>

      {/* DROPDOWN */}
      {open && (
        <NotificationDropdown
          notifications={notifications}
          refreshNotifications={fetchNotifications}
          loading={loading}
        />
      )}

    </div>
  );
};

export default NotificationBell;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/notification/NotificationDropdown.jsx  (4.2 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import {
  clearAllNotifications,
  deleteNotification
} from "../../services/notificationService";

const NotificationDropdown = ({
  notifications,
  refreshNotifications,
  loading
}) => {

  const handleClearAll = async () => {

    try {

      await clearAllNotifications();

      refreshNotifications();

    } catch (error) {

      console.error(
        "Failed to clear notifications:",
        error
      );

    }

  };

  const handleDelete = async (id) => {

    try {

      await deleteNotification(id);

      refreshNotifications();

    } catch (error) {

      console.error(
        "Failed to delete notification:",
        error
      );

    }

  };

  return (
    <div
      className="
        absolute
        right-0
        mt-3
        w-[360px]
        rounded-2xl
        border border-[rgb(var(--border))]
        bg-[rgb(var(--card-bg))]
        shadow-[0_10px_40px_rgba(0,0,0,0.45)]
        overflow-hidden
        z-50
      "
    >

      {/* HEADER */}
      <div
        className="
          flex items-center justify-between
          px-5 py-4
          border-b border-[rgb(var(--border))]
        "
      >

        <h3 className="font-semibold text-[rgb(var(--text))]">
          Notifications
        </h3>

        {notifications.length > 0 && (
          <button
            onClick={handleClearAll}
            className="
              text-xs
              text-[rgb(var(--primary))]
              hover:underline
            "
          >
            Clear all
          </button>
        )}

      </div>

      {/* LIST */}
      <div className="max-h-[400px] overflow-y-auto">

        {loading ? (

          <div
            className="
              p-6
              text-sm
              text-center
              text-[rgb(var(--text-muted))]
            "
          >
            Loading notifications...
          </div>

        ) : notifications.length === 0 ? (

          <div
            className="
              p-6
              text-sm
              text-center
              text-[rgb(var(--text-muted))]
            "
          >
            No notifications yet
          </div>

        ) : (

          notifications.map((notification) => (

            <button
              key={notification._id}
              onClick={() =>
                handleDelete(notification._id)
              }
              className="
                w-full
                text-left
                px-5 py-4
                border-b border-[rgb(var(--border))]
                transition
                hover:bg-[rgb(var(--hover))]
                bg-[rgb(var(--primary-soft))]/20
              "
            >

              <div className="
                flex items-start justify-between gap-3
              ">

                <div className="space-y-1 flex-1">

                  <h4
                    className="
                      text-sm
                      font-semibold
                      text-[rgb(var(--primary))]
                      line-clamp-2
                    "
                  >
                    {notification.title || "Notification"}
                  </h4>

                  <p
                    className="
                      text-xs
                      text-[rgb(var(--text-muted))]
                    "
                  >
                    {notification.body ||
                      notification.message ||
                      "No message"}
                  </p>

                </div>

                {/* UNREAD DOT */}
                <div
                  className="
                    mt-1
                    w-2.5 h-2.5
                    rounded-full
                    bg-[rgb(var(--primary))]
                  "
                />

              </div>

              <span
                className="
                  mt-2
                  block
                  text-[10px]
                  text-[rgb(var(--text-secondary))]
                "
              >
                {new Date(
                  notification.createdAt
                ).toLocaleString()}
              </span>

            </button>

          ))

        )}

      </div>

    </div>
  );
};

export default NotificationDropdown;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/Navbar.jsx  (3.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { FaUserCircle } from "react-icons/fa";
import useTheme from "../hooks/useTheme";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import NotificationBell from "./notification/NotificationBell";

const Navbar = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const avatarLetter = user?.name?.charAt(0)?.toUpperCase();

  return (
    <nav
      className="
      flex items-center justify-between
      px-6
      h-16
      border-b border-[rgb(var(--border))]
      bg-[rgb(var(--navbar-bg))/80]
      backdrop-blur-md
      sticky top-0
      z-50
    "
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">

        <button
          onClick={toggleSidebar}
          className="
          text-xl
          text-[rgb(var(--text))]
          hover:text-[rgb(var(--primary))]
          transition
        "
        >
          <FiMenu />
        </button>

        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-9 w-auto" />
        </Link>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">

        {/* Notification Bell */}
        <NotificationBell />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="
          relative flex items-center
          w-14 h-7
          bg-[rgb(var(--surface-2))]
          rounded-full
          transition-colors
        "
        >
          <div
            className={`
            absolute w-6 h-6
            rounded-full
            shadow-md
            transform
            transition-transform
            flex items-center justify-center
            text-xs
            ${theme === "dark" ? "translate-x-7" : "translate-x-1"}
            bg-[rgb(var(--card-bg))]
            `}
          >
            {theme === "dark" ? "🌙" : "☀"}
          </div>
        </button>

        {/* USER */}
        <div
          className="
          flex items-center gap-2
          px-3 py-1
          rounded-lg
          hover:bg-[rgb(var(--hover))]
          transition
        "
        >
          <div
            className="
            w-8 h-8
            rounded-full
            flex items-center justify-center
            bg-[rgb(var(--primary-soft))]
            text-[rgb(var(--primary))]
            font-semibold
            text-sm
          "
          >
            {avatarLetter || <FaUserCircle />}
          </div>

          <span className="text-sm font-medium text-[rgb(var(--text))]">
            {user?.name || "User"}
          </span>
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="
          flex items-center gap-2
          px-3 py-1.5
          rounded-md
          text-white
          bg-[rgb(var(--error))]
          hover:opacity-90
          transition
          text-sm
        "
        >
          <FiLogOut size={16} />
          Logout
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/Sidebar.jsx  (9.7 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

import {
  FiHome,
  FiUsers,
  FiTarget,
  FiClipboard,
  FiUpload,
  FiChevronUp,
  FiLock,
  FiEye,
  FiEyeOff,
  FiLogOut
} from "react-icons/fi";

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const { user, updatePassword } = useContext(AuthContext);

  const [profileOpen, setProfileOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(null);
  const [passwordSuccess, setPasswordSuccess] = useState(null);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  const handleUpdatePassword = async (event) => {
    event.preventDefault();
    setPasswordError(null);
    setPasswordSuccess(null);

    if (!oldPassword.trim() || !newPassword.trim()) {
      setPasswordError("Old and new password are required.");
      return;
    }

    if (newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters.");
      return;
    }

    try {
      setIsUpdatingPassword(true);
      const response = await updatePassword({
        oldPassword,
        newPassword,
      });
      setPasswordSuccess(response?.data?.message || "Password updated.");
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      setPasswordError(
        err?.response?.data?.message || "Failed to update password."
      );
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  const menu = [
    { name: "Dashboard", path: "/app/dashboard", icon: <FiHome /> },
    { name: "Groups", path: "/app/groups", icon: <FiUsers /> },
    { name: "Goals", path: "/app/goals", icon: <FiTarget /> },
    { name: "Assignments", path: "/app/assignments", icon: <FiClipboard /> },
    { name: "Submissions", path: "/app/submissions", icon: <FiUpload /> }
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed top-16 left-0 z-40
          w-64 h-[calc(100vh-64px)]
          bg-[rgb(var(--sidebar-bg))]
          border-r border-[rgb(var(--border))]
          flex flex-col
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* SECTION LABEL */}
        <div className="px-5 pt-6 pb-3 text-xs uppercase tracking-wider text-[rgb(var(--text-muted))]">
          Navigation
        </div>

        {/* MENU */}
        <nav className="flex flex-col gap-2 px-3">

          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                `
                flex items-center gap-4
                px-4 py-3
                rounded-xl
                text-sm font-medium
                transition-all duration-200
                ${
                  isActive
                    ? "bg-[rgb(var(--primary-soft))] text-[rgb(var(--primary))]"
                    : "text-[rgb(var(--text))] hover:bg-[rgb(var(--hover))]"
                }
              `
              }
            >
              <span className="text-[20px]">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}

        </nav>

        {/* PROFILE EXPANDED PANEL */}
        <div
          className={`
            overflow-hidden
            transition-all duration-300
            ${
              profileOpen
                ? "max-h-96 opacity-100 px-4 py-4"
                : "max-h-0 opacity-0 px-4"
            }
          `}
        >

          <div className="
            rounded-2xl
            border border-[rgb(var(--border))]
            bg-[rgb(var(--card-bg))]
            p-4
            flex flex-col gap-4
          ">

            {/* USER INFO */}
            <div className="space-y-1">

              <h3 className="text-sm font-semibold text-[rgb(var(--text))]">
                {user?.name}
              </h3>

              <p className="text-xs text-[rgb(var(--text-muted))]">
                {user?.email}
              </p>

              <span className="
                inline-block
                mt-1
                px-2 py-1
                rounded-md
                text-[10px]
                capitalize
                bg-[rgb(var(--primary-soft))]
                text-[rgb(var(--primary))]
              ">
                {user?.role}
              </span>

            </div>

            {/* CHANGE PASSWORD */}
            <form className="flex flex-col gap-3" onSubmit={handleUpdatePassword}>

              <div className="relative">

                <FiLock className="
                  absolute left-3 top-1/2 -translate-y-1/2
                  text-[rgb(var(--text-muted))]
                " />

                <input
                  type={showOldPassword ? "text" : "password"}
                  placeholder="Old Password"
                  value={oldPassword}
                  onChange={(event) => setOldPassword(event.target.value)}
                  className="
                    w-full
                    rounded-xl
                    bg-[rgb(var(--hover))]
                    border border-[rgb(var(--border))]
                    pl-10 pr-10 py-2.5
                    text-sm
                    outline-none
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowOldPassword((prev) => !prev)}
                  className="
                    absolute right-3 top-1/2 -translate-y-1/2
                    text-[rgb(var(--text-muted))]
                    hover:text-[rgb(var(--text))]
                    transition
                  "
                  aria-label={
                    showOldPassword ? "Hide old password" : "Show old password"
                  }
                >
                  {showOldPassword ? <FiEyeOff /> : <FiEye />}
                </button>

              </div>

              <div className="relative">

                <FiLock className="
                  absolute left-3 top-1/2 -translate-y-1/2
                  text-[rgb(var(--text-muted))]
                " />

                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  className="
                    w-full
                    rounded-xl
                    bg-[rgb(var(--hover))]
                    border border-[rgb(var(--border))]
                    pl-10 pr-10 py-2.5
                    text-sm
                    outline-none
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowNewPassword((prev) => !prev)}
                  className="
                    absolute right-3 top-1/2 -translate-y-1/2
                    text-[rgb(var(--text-muted))]
                    hover:text-[rgb(var(--text))]
                    transition
                  "
                  aria-label={
                    showNewPassword ? "Hide new password" : "Show new password"
                  }
                >
                  {showNewPassword ? <FiEyeOff /> : <FiEye />}
                </button>

              </div>

              {passwordError && (
                <p className="text-xs text-red-500">{passwordError}</p>
              )}

              {passwordSuccess && (
                <p className="text-xs text-green-500">{passwordSuccess}</p>
              )}

              <button
                type="submit"
                disabled={isUpdatingPassword}
                className="
                  rounded-xl
                  bg-[rgb(var(--primary))]
                  text-white
                  py-2.5
                  text-sm
                  font-medium
                  transition hover:opacity-90 disabled:opacity-70
                "
              >
                {isUpdatingPassword ? "Updating..." : "Update Password"}
              </button>

            </form>

          </div>

        </div>

        {/* USER PANEL */}
        <button
          onClick={() => setProfileOpen(prev => !prev)}
          className="
            mt-auto
            border-t border-[rgb(var(--border))]
            p-4
            flex items-center justify-between
            hover:bg-[rgb(var(--hover))]
            transition
          "
        >

          <div className="flex items-center gap-3">

            <div className="
              w-11 h-11
              rounded-full
              bg-[rgb(var(--primary-soft))]
              text-[rgb(var(--primary))]
              flex items-center justify-center
              font-semibold
            ">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>

            <div className="flex flex-col text-left">

              <span className="text-sm font-medium text-[rgb(var(--text))]">
                {user?.name || "User"}
              </span>

              <span className="text-xs text-[rgb(var(--text-muted))]">
                {user?.email || "user@email.com"}
              </span>

            </div>

          </div>

          <FiChevronUp
            className={`
              transition-transform duration-300
              ${profileOpen ? "rotate-180" : ""}
            `}
          />

        </button>

      </aside>
    </>
  );
};

export default Sidebar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/contexts/AuthContext.jsx  (2.5 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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

  // Load user on app start
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('accessToken')
      const hasToken = token && token !== 'undefined' && token !== 'null'

      if (!hasToken && token) {
        localStorage.removeItem('accessToken')
      }

      try {
        const { data } = await getCurrentUser()
        setUser(data.data.user)
      } catch (err) {
        localStorage.removeItem('accessToken')
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
    if (accessToken && accessToken !== 'undefined' && accessToken !== 'null') {
      localStorage.setItem('accessToken', accessToken)
    } else {
      localStorage.removeItem('accessToken')
    }

    const { data } = await getCurrentUser()
    const loggedInUser = data.data.user
    setUser(loggedInUser)
    return loggedInUser
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

  const updatePassword = async (data) => {
    const response = await updatePasswordService(data)
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
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/contexts/ThemeContext.jsx  (834 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    }else{
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useAuth.js  (181 B)
──────────────────────────────────────────────────────────────────────
```js
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useGroupDetails.js  (1.5 kB)
──────────────────────────────────────────────────────────────────────
```js
import { useCallback, useEffect, useState } from 'react'
import { getGroupDetails, getGroupMembers } from '../services/group.service'

const normalizeMembers = (payload) => {
  const members = payload?.members ?? payload?.items ?? payload
  return Array.isArray(members) ? members : []
}

const useGroupDetails = (groupId) => {
  const [group, setGroup] = useState(null)
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [membersLoading, setMembersLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadGroup = useCallback(async () => {
    if (!groupId) return

    setLoading(true)
    setError(null)

    try {
      const data = await getGroupDetails(groupId)
      setGroup(data?.group ?? data)
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to load group details.')
    } finally {
      setLoading(false)
    }
  }, [groupId])

  const loadMembers = useCallback(async () => {
    if (!groupId) return

    setMembersLoading(true)

    try {
      const data = await getGroupMembers(groupId)
      setMembers(normalizeMembers(data))
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to load members.')
    } finally {
      setMembersLoading(false)
    }
  }, [groupId])

  useEffect(() => {
    loadGroup()
    loadMembers()
  }, [loadGroup, loadMembers])

  return {
    group,
    members,
    loading,
    membersLoading,
    error,
    refreshGroup: loadGroup,
    refreshMembers: loadMembers,
  }
}

export default useGroupDetails
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useGroups.js  (2.0 kB)
──────────────────────────────────────────────────────────────────────
```js
import { useCallback, useEffect, useState } from 'react'
import { createGroup, fetchGroups, joinGroup } from '../services/group.service'

const normalizeGroups = (payload) => {
  const groups = payload?.groups ?? payload?.items ?? payload
  return Array.isArray(groups) ? groups : []
}

const useGroups = () => {
  const [groups, setGroups] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isCreating, setIsCreating] = useState(false)
  const [isJoining, setIsJoining] = useState(false)

  const loadGroups = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      const data = await fetchGroups()
      setGroups(normalizeGroups(data))
    } catch (err) {
      setError(err?.response?.data?.message || 'Failed to load groups.')
    } finally {
      setLoading(false)
    }
  }, [])

  const handleCreateGroup = useCallback(
    async (payload) => {
      setIsCreating(true)
      setError(null)

      try {
        const data = await createGroup(payload)
        await loadGroups()
        return data
      } catch (err) {
        const message = err?.response?.data?.message || 'Failed to create group.'
        setError(message)
        throw new Error(message)
      } finally {
        setIsCreating(false)
      }
    },
    [loadGroups]
  )

  const handleJoinGroup = useCallback(
    async (inviteCode) => {
      setIsJoining(true)
      setError(null)

      try {
        const data = await joinGroup(inviteCode)
        await loadGroups()
        return data
      } catch (err) {
        const message = err?.response?.data?.message || 'Failed to join group.'
        setError(message)
        throw new Error(message)
      } finally {
        setIsJoining(false)
      }
    },
    [loadGroups]
  )

  useEffect(() => {
    loadGroups()
  }, [loadGroups])

  return {
    groups,
    loading,
    error,
    isCreating,
    isJoining,
    createGroup: handleCreateGroup,
    joinGroup: handleJoinGroup,
    refresh: loadGroups,
  }
}

export default useGroups
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useMentorDashboard.js  (1.5 kB)
──────────────────────────────────────────────────────────────────────
```js
import { useEffect, useState } from "react";
import api from "../services/api";

const useMentorDashboard = () => {
  const [stats, setStats] = useState({
    groups: 0,
    learners: 0,
    assignments: 0,
    submissions: 0,
  });

  const [recentSubmissions, setRecentSubmissions] = useState([]);
  const [recentAssignments, setRecentAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await api.get("/dashboard/mentor", {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        });

        console.log(res.data)

        const payload = res?.data?.data ?? {};

        setStats({
          groups: Number(payload.groups) || 0,
          learners: Number(payload.learners) || 0,
          assignments: Number(payload.assignments) || 0,
          submissions: Number(payload.submissions) || 0,
        });

        setRecentSubmissions(payload.recentSubmissions || []);
        setRecentAssignments(payload.recentAssignments || []);
      } catch (err) {
        console.error(err);
        setError(err?.response?.data?.message || "Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  return { stats, recentSubmissions, recentAssignments, loading, error };
};

export default useMentorDashboard;
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useTheme.js  (179 B)
──────────────────────────────────────────────────────────────────────
```js
import {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext.jsx'

const useTheme = () => {
    return useContext(ThemeContext)
}

export default useTheme
```

──────────────────────────────────────────────────────────────────────
FILE: src/layouts/AppLayout.jsx  (869 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[rgb(var(--bg))]">

      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content */}
      <main
        className={`
          pt-6
          px-6
          pb-6
          transition-all duration-300
          ${isSidebarOpen ? "ml-64" : "ml-0"}
        `}
      >
        <Outlet />
      </main>

    </div>
  );
};

export default AppLayout;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Assignments.jsx  (94 B)
──────────────────────────────────────────────────────────────────────
```jsx
const Assignments = () => {
  return <div>Assignments Page</div>
}

export default Assignments
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Dashboard.jsx  (1.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import useMentorDashboard from "../../hooks/useMentorDashboard";
import StatsCards from "../../components/mentor/dashboard/StatsCards";
import RecentSubmissions from "../../components/mentor/dashboard/RecentSubmissions";
import RecentAssignments from "../../components/mentor/dashboard/RecentAssignment";

const Dashboard = () => {
  const { stats, recentSubmissions, recentAssignments, loading, error } =
    useMentorDashboard();

  if (loading)
    return (
      <p className="text-[rgb(var(--text-secondary))]">
        Loading dashboard...
      </p>
    );

  if (error)
    return (
      <p className="text-[rgb(var(--error))]">
        Error: {error}
      </p>
    );

  return (
    <div className="flex flex-col gap-8 text-[rgb(var(--text))]">
      <h1 className="text-2xl font-semibold">
        Mentor Dashboard
      </h1>

      <StatsCards stats={stats} />

      <RecentSubmissions submissions={recentSubmissions} />

      <RecentAssignments assignments={recentAssignments} />
    </div>
  );
};

export default Dashboard;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Goals.jsx  (76 B)
──────────────────────────────────────────────────────────────────────
```jsx
const Goals = () => {
  return <div>Goals Page</div>
}

export default Goals
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/GroupDetails.jsx  (3.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { lazy, Suspense, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import GroupSidebar from '../../components/groups/details/GroupSidebar'
import GroupOverview from '../../components/groups/details/GroupOverview'
import useGroupDetails from '../../hooks/useGroupDetails'

const GroupMembers = lazy(() =>
  import('../../components/groups/details/GroupMembers')
)
const GroupGoals = lazy(() =>
  import('../../components/groups/details/GroupGoals')
)
const GroupAssignments = lazy(() =>
  import('../../components/groups/details/GroupAssignments')
)
const GroupResources = lazy(() =>
  import('../../components/groups/details/GroupResources')
)
const GroupAnnouncements = lazy(() =>
  import('../../components/groups/details/GroupAnnouncements')
)

const GroupDetails = () => {
  const { groupId } = useParams()
  const [activeTab, setActiveTab] = useState('overview')
  const { group, members, loading, membersLoading, error } =
    useGroupDetails(groupId)

  const tabs = useMemo(
    () => [
      { key: 'overview', label: 'Overview' },
      {
        key: 'members',
        label: 'Members',
        badge: members.length ? members.length : null,
      },
      { key: 'goals', label: 'Goals' },
      { key: 'assignments', label: 'Assignments' },
      { key: 'resources', label: 'Resources' },
      { key: 'announcements', label: 'Announcements' },
    ],
    [members.length]
  )

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'members':
        return <GroupMembers members={members} loading={membersLoading} />
      case 'goals':
        return <GroupGoals />
      case 'assignments':
        return <GroupAssignments />
      case 'resources':
        return <GroupResources />
      case 'announcements':
        return <GroupAnnouncements />
      case 'overview':
      default:
        return <GroupOverview group={group} />
    }
  }

  if (loading) {
    return (
      <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 text-sm text-[rgb(var(--text-secondary))]">
        Loading group details...
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 text-sm text-[rgb(var(--error))]">
        {error}
      </div>
    )
  }

  return (
    <section className="flex flex-col gap-6">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
          Group details
        </p>
        <h1 className="text-2xl font-semibold text-[rgb(var(--text))]">
          {group?.name || group?.title || 'Group'}
        </h1>
        <p className="mt-2 text-sm text-[rgb(var(--text-secondary))]">
          {group?.description || 'No description yet.'}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <GroupSidebar
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <Suspense
          fallback={
            <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 text-sm text-[rgb(var(--text-secondary))]">
              Loading section...
            </div>
          }
        >
          {renderActiveTab()}
        </Suspense>
      </div>
    </section>
  )
}

export default GroupDetails
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Groups.jsx  (1.6 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { useState } from 'react'
import CreateGroupModal from '../../components/groups/CreateGroupModal'
import GroupsGrid from '../../components/groups/GroupsGrid'
import GroupsHeader from '../../components/groups/GroupsHeader'
import JoinGroupModal from '../../components/groups/JoinGroupModal'
import useAuth from '../../hooks/useAuth'
import useGroups from '../../hooks/useGroups'

const Groups = () => {
  const { user } = useAuth()
  const isMentor = user?.role === 'mentor'
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [isJoinOpen, setIsJoinOpen] = useState(false)

  const {
    groups,
    loading,
    error,
    isCreating,
    isJoining,
    createGroup,
    joinGroup,
    refresh,
    inviteToGroup,
  } = useGroups()

  return (
    <section className="flex flex-col gap-6">
      <GroupsHeader
        onCreate={() => setIsCreateOpen(true)}
        onJoin={() => setIsJoinOpen(true)}
        canCreate={isMentor}
        totalGroups={groups.length}
      />

      <GroupsGrid
        groups={groups}
        loading={loading}
        error={error}
        onRetry={refresh}
        onCreate={() => setIsCreateOpen(true)}
        onJoin={() => setIsJoinOpen(true)}
        canCreate={isMentor}
      />

      <CreateGroupModal
        open={isCreateOpen}
        onClose={() => setIsCreateOpen(false)}
        onCreate={createGroup}
        loading={isCreating}
      />

      <JoinGroupModal
        open={isJoinOpen}
        onClose={() => setIsJoinOpen(false)}
        onJoin={joinGroup}
        loading={isJoining}
      />
    </section>
  )
}

export default Groups
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Messages.jsx  (263 B)
──────────────────────────────────────────────────────────────────────
```jsx
const Messages = () => {
  return (
    <div className="text-[rgb(var(--text))]">
      <h1 className="text-2xl font-semibold">Messages</h1>
      <p className="mt-2 text-[rgb(var(--text-secondary))]">Coming soon.</p>
    </div>
  );
};

export default Messages;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Settings.jsx  (263 B)
──────────────────────────────────────────────────────────────────────
```jsx
const Settings = () => {
  return (
    <div className="text-[rgb(var(--text))]">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <p className="mt-2 text-[rgb(var(--text-secondary))]">Coming soon.</p>
    </div>
  );
};

export default Settings;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Submissions.jsx  (94 B)
──────────────────────────────────────────────────────────────────────
```jsx
const Submissions = () => {
  return <div>Submissions Page</div>
}

export default Submissions
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/EmailVerification.jsx  (4.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { resendEmailVerification } from '../../services/authService'

const EmailVerification = () => {
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    if (cooldown === 0) return

    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [cooldown])

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
    if (loading || cooldown > 0) return

    try {
      setLoading(true)
      setMessage('')
      setErrorMessage('')

      await resendEmailVerification({ email })

      setMessage('Verification email resent! Please check your inbox.')
      setCooldown(60)
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
            disabled={loading || cooldown > 0}
            className={`font-medium transition-colors ${
              cooldown > 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-indigo-600 hover:text-indigo-700'
            }`}
            onClick={handleResendEmail}
          >
            {cooldown > 0 ? `Resend in ${cooldown}s` : 'Resend email'}
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/ForgotPassword.jsx  (3.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(false)

  const { forgotPassword } = useAuth()

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!email.trim()) {
      setError('Email is required')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format')
      return
    }

    try {
      setLoading(true)

      const response = await forgotPassword({ email })

      setSuccess(response.data.message)

      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="w-full flex flex-col items-center justify-center mb-6 gap-0.5">
        <h2 className="text-3xl font-semibold">Reset Password</h2>
        <h3>We'll send you a reset link</h3>
      </div>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl border border-black p-6 sm:p-8 shadow-lg">
        <div>
          <h3 className="text-xl font-semibold text-black ">
            Forgot your password?
          </h3>
          <p className="text-gray-600">
            Enter your email address and we'll send you a link to reset your
            password
          </p>
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-xl">Email</label>
              <input
                type="email"
                placeholder="xyz@example.com"
                className="w-full rounded-lg border border-black px-3 sm:px-4 py-2 sm:py-2.5 bg-transparent text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}

            {success && (
              <p className="text-green-600 mt-3 text-sm">{success}</p>
            )}
            <div className="mt-2.5">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
              >
                 {loading ? 'Sending...' : 'Send reset link'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/Login.jsx  (458 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import AuthHeader from '../../components/auth/AuthHeader'
import LoginForm from '../../components/auth/LoginForm'
import AuthFooter from '../../components/auth/AuthFooter'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <LoginForm />
      </div>

      <AuthFooter />
    </div>
  )
}

export default Login
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/ResetPassword.jsx  (3.9 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const ResetPassword = () => {
    const { resetPassword } = useAuth()
  const { token } = useParams()
  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
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
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="New Password"
                className="w-full border px-4 py-2 rounded-lg pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                className="w-full border px-4 py-2 rounded-lg pr-10"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition"
                aria-label={
                  showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'
                }
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/SignUp.jsx  (461 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import AuthHeader from '../../components/auth/AuthHeader'
import AuthFooter from '../../components/auth/AuthFooter'
import SignUpForm from '../../components/auth/SignUpForm'

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <SignUpForm />
      </div>
      <AuthFooter />
    </div>
  )
}

export default SignUp
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/Landing.jsx  (830 B)
──────────────────────────────────────────────────────────────────────
```jsx
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import RolesSection from "../components/landing/RolesSection";
import HowItWorks from "../components/landing/HowItWorks";
import SecuritySection from "../components/landing/SecuritySection";
import CTASection from "../components/landing/CTASection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RolesSection />
      <HowItWorks />
      <SecuritySection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Landing;
```

──────────────────────────────────────────────────────────────────────
FILE: src/routes/group.routes.jsx  (291 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { Route } from 'react-router-dom'
import Groups from '../pages/app/Groups'
import GroupDetails from '../pages/app/GroupDetails'

export const groupRoutes = (
  <>
    <Route path="groups" element={<Groups />} />
    <Route path="groups/:groupId" element={<GroupDetails />} />
  </>
)
```

──────────────────────────────────────────────────────────────────────
FILE: src/routes/ProtectedRoutes.jsx  (312 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoute = () => {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div>
  if (!user) return <Navigate to="/login" replace />

  return <Outlet />
}

export default ProtectedRoute
```

──────────────────────────────────────────────────────────────────────
FILE: src/routes/router.jsx  (2.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'

import Landing from '../pages/Landing'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'
import ForgotPassword from '../pages/auth/ForgotPassword'
import ProtectedRoute from './ProtectedRoutes'
import EmailVerification from '../pages/auth/EmailVerification'
import EmailVerified from '../components/auth/EmailVerified'
import ResetPassword from '../pages/auth/ResetPassword'
import { groupRoutes } from './group.routes'

import AppLayout from '../layouts/AppLayout'
import AppDashboard from '../pages/app/Dashboard'
import AppGoals from '../pages/app/Goals'
import AppAssignments from '../pages/app/Assignments'
import AppSubmissions from '../pages/app/Submissions'
import AppMessages from '../pages/app/Messages'
import AppSettings from '../pages/app/Settings'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-email" element={<EmailVerification />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/email-verified" element={<EmailVerified />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/app" element={<AppLayout />}>

          <Route
            index
            element={<Navigate to="dashboard" replace />}
          />

          <Route
            path="dashboard"
            element={<AppDashboard />}
          />

          {groupRoutes}

          <Route
            path="goals"
            element={<AppGoals />}
          />

          <Route
            path="assignments"
            element={<AppAssignments />}
          />

          <Route
            path="submissions"
            element={<AppSubmissions />}
          />

          <Route
            path="messages"
            element={<AppMessages />}
          />

          <Route
            path="settings"
            element={<AppSettings />}
          />

        </Route>

        <Route
          path="/mentor/*"
          element={<Navigate to="/app/dashboard" replace />}
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  )
)
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/api.js  (384 B)
──────────────────────────────────────────────────────────────────────
```js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  withCredentials: true
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token && token !== "undefined" && token !== "null") {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/authService.js  (638 B)
──────────────────────────────────────────────────────────────────────
```js
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/group.service.js  (2.0 kB)
──────────────────────────────────────────────────────────────────────
```js
import API from './api'

const unwrapData = (response) => response?.data?.data ?? response?.data ?? response

export const fetchGroups = async ({ page = 1, limit = 12 } = {}) => {
  const params = new URLSearchParams()
  if (page) params.set('page', page)
  if (limit) params.set('limit', limit)

  const query = params.toString()
  const response = await API.get(`/groups${query ? `?${query}` : ''}`)
  console.log('Fetched groups response:', response)
               
  return unwrapData(response)
}

export const createGroup = async (payload) => {
  const response = await API.post('/groups', payload)
  return unwrapData(response)
}

export const joinGroup = async (inviteCode) => {
  const response = await API.post('/groups/join', { inviteCode })
  return unwrapData(response)
}

export const getGroupDetails = async (groupId) => {
  const response = await API.get(`/groups/${groupId}`)
  return unwrapData(response)
}

export const getGroupMembers = async (groupId, { page = 1, limit = 50 } = {}) => {
  const params = new URLSearchParams()
  if (page) params.set('page', page)
  if (limit) params.set('limit', limit)

  const query = params.toString()
  const response = await API.get(
    `/groups/${groupId}/members${query ? `?${query}` : ''}`
  )

  return unwrapData(response)
}

export const inviteToGroup = async (groupId, email) => {
  const response = await API.post(`/groups/${groupId}/invite`, { email })
  return unwrapData(response)
}

export const updateGroup = async (groupId, payload) => {
    const response = await API.put(`/groups/${groupId}`, payload)
    return unwrapData(response)
}

const removeMember = async (groupId, memberId, payload) => {
    const response = await API.delete(`groups/${groupId}/members/${memberId}`, payload)
    return unwrapData(response)
}

export const leaveGroup = async (groupId) => {
    const response = await API.post(`/groups/${groupId}/leave`)
    return unwrapData(response)
}

export const deleteGroup = async (groupId) => {
    const response = await API.delete(`/groups/${groupId}`)
    return unwrapData(response)
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/messageService.js  (532 B)
──────────────────────────────────────────────────────────────────────
```js
import API from './api'

export const sendMessage = async (groupId, content) => {
  const response = await API.post(`/messages/${groupId}`, {
    content,
  })

  return response.data.data
}

export const getGroupMessages = async (groupId, page = 1, limit = 20) => {
  const response = await API.get(
    `/messages/${groupId}?page=${page}&limit=${limit}`
  )

  return response.data.data
}

export const deleteMessage = async (messageId) => {
  const response = await API.delete(`/messages/${messageId}`)

  return response.data
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/notificationService.js  (491 B)
──────────────────────────────────────────────────────────────────────
```js
import API from "./api";

export const getNotifications = async () => {

  const response = await API.get(
    "/notifications"
  );

  return response.data.data;

};

export const deleteNotification =
  async (id) => {

    const response = await API.delete(
      `/notifications/${id}`
    );

    return response.data;

};

export const clearAllNotifications =
  async () => {

    const response = await API.delete(
      "/notifications/clear-all"
    );

    return response.data;

};
```

──────────────────────────────────────────────────────────────────────
FILE: src/App.jsx  (387 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
```

──────────────────────────────────────────────────────────────────────
FILE: src/colors.css  (1.8 kB)
──────────────────────────────────────────────────────────────────────
```css
/* =========================================
   STUDYHIVE COLOR SYSTEM
   Premium SaaS Palette
========================================= */

/* ---------- LIGHT THEME ---------- */

:root {

  /* Brand */
  --primary: 79 70 229;
  --primary-hover: 67 56 202;
  --primary-soft: 235 233 255;

  /* Backgrounds */
  --bg: 246 247 250;
  --surface: 255 255 255;
  --surface-2: 240 242 246;

  /* Text */
  --text: 17 24 39;
  --text-secondary: 75 85 99;
  --text-muted: 156 163 175;

  /* Borders */
  --border: 229 231 235;
  --border-strong: 209 213 219;

  /* Status */
  --success: 34 197 94;
  --warning: 245 158 11;
  --error: 239 68 68;
  --info: 59 130 246;

  /* Layout */
  --navbar-bg: 255 255 255;
  --sidebar-bg: 255 255 255;
  --card-bg: 255 255 255;

  /* Interaction */
  --hover: 243 244 246;
  --active: 229 231 235;
  --focus-ring: 99 102 241;

  /* Tables */
  --table-header: 248 250 252;
  --table-row-hover: 243 244 246;

  /* Overlay */
  --overlay: 17 24 39;
}


/* ---------- DARK THEME ---------- */

[data-theme="dark"] {

  /* Brand */
  --primary: 129 140 248;
  --primary-hover: 99 102 241;
  --primary-soft: 49 46 129;

  /* Backgrounds */
  --bg: 10 14 26;
  --surface: 20 25 40;
  --surface-2: 36 44 66;

  /* Text */
  --text: 248 250 252;
  --text-secondary: 203 213 225;
  --text-muted: 148 163 184;

  /* Borders */
  --border: 58 68 92;
  --border-strong: 71 85 105;

  /* Status */
  --success: 34 197 94;
  --warning: 245 158 11;
  --error: 239 68 68;
  --info: 59 130 246;

  /* Layout */
  --navbar-bg: 10 14 26;
  --sidebar-bg: 15 20 35;
  --card-bg: 24 30 48;

  /* Interaction */
  --hover: 42 50 72;
  --active: 58 68 92;
  --focus-ring: 129 140 248;

  /* Tables */
  --table-header: 24 30 48;
  --table-row-hover: 42 50 72;

  /* Overlay */
  --overlay: 0 0 0;
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/index.css  (47 B)
──────────────────────────────────────────────────────────────────────
```css
@import "tailwindcss";
@import "./colors.css";
```

──────────────────────────────────────────────────────────────────────
FILE: src/main.jsx  (184 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
```

──────────────────────────────────────────────────────────────────────
FILE: Codebase.md  (824.1 kB)
──────────────────────────────────────────────────────────────────────
```md
======================================================================
  StudyHive Frontend — Codebase Snapshot
  Root : /home/adi-dcpp/Desktop/WebDev/Frontend/StudyHive-Frontend
  Date : 5/20/2026, 10:42:56 PM
======================================================================

StudyHive-Frontend/
├── public/
│   └── vite.svg  (1.5 kB)
├── src/
│   ├── assets/
│   │   └── logo.png  (180.1 kB)
│   ├── components/
│   │   ├── auth/
│   │   │   ├── AuthFooter.jsx  (243 B)
│   │   │   ├── AuthHeader.jsx  (618 B)
│   │   │   ├── EmailVerified.jsx  (2.1 kB)
│   │   │   ├── LoginForm.jsx  (4.5 kB)
│   │   │   └── SignUpForm.jsx  (9.7 kB)
│   │   ├── landing/
│   │   │   ├── ContactSection.jsx  (1.3 kB)
│   │   │   ├── CTASection.jsx  (757 B)
│   │   │   ├── FadeInSection.jsx  (410 B)
│   │   │   ├── FeaturesSection.jsx  (1.1 kB)
│   │   │   ├── Footer.jsx  (725 B)
│   │   │   ├── HeroSection.jsx  (3.2 kB)
│   │   │   ├── HowItWorks.jsx  (1.0 kB)
│   │   │   ├── Navbar.jsx  (1.4 kB)
│   │   │   ├── RolesSection.jsx  (1.4 kB)
│   │   │   └── SecuritySection.jsx  (716 B)
│   │   ├── mentor/
│   │   │   └── dashboard/
│   │   │       ├── RecentAssignment.jsx  (2.1 kB)
│   │   │       ├── RecentSubmissions.jsx  (2.8 kB)
│   │   │       └── StatsCards.jsx  (1.6 kB)
│   │   ├── notification/
│   │   │   ├── NotificationBell.jsx  (2.4 kB)
│   │   │   └── NotificationDropdown.jsx  (4.2 kB)
│   │   ├── Navbar.jsx  (3.3 kB)
│   │   └── Sidebar.jsx  (9.7 kB)
│   ├── contexts/
│   │   ├── AuthContext.jsx  (2.2 kB)
│   │   └── ThemeContext.jsx  (834 B)
│   ├── hooks/
│   │   ├── useAuth.js  (181 B)
│   │   ├── useMentorDashboard.js  (1.5 kB)
│   │   └── useTheme.js  (179 B)
│   ├── layouts/
│   │   └── AppLayout.jsx  (869 B)
│   ├── pages/
│   │   ├── app/
│   │   │   ├── Assignments.jsx  (94 B)
│   │   │   ├── Dashboard.jsx  (1.0 kB)
│   │   │   ├── Goals.jsx  (76 B)
│   │   │   ├── GroupDetails.jsx  (98 B)
│   │   │   ├── Groups.jsx  (79 B)
│   │   │   ├── Messages.jsx  (263 B)
│   │   │   ├── Settings.jsx  (263 B)
│   │   │   └── Submissions.jsx  (94 B)
│   │   ├── auth/
│   │   │   ├── EmailVerification.jsx  (4.0 kB)
│   │   │   ├── ForgotPassword.jsx  (3.0 kB)
│   │   │   ├── Login.jsx  (458 B)
│   │   │   ├── ResetPassword.jsx  (3.9 kB)
│   │   │   └── SignUp.jsx  (461 B)
│   │   └── Landing.jsx  (830 B)
│   ├── routes/
│   │   ├── ProtectedRoutes.jsx  (312 B)
│   │   └── router.jsx  (2.6 kB)
│   ├── services/
│   │   ├── api.js  (339 B)
│   │   ├── authService.js  (638 B)
│   │   ├── groupService.js  (1.7 kB)
│   │   ├── messageService.js  (532 B)
│   │   └── notificationService.js  (491 B)
│   ├── App.jsx  (387 B)
│   ├── colors.css  (1.8 kB)
│   ├── index.css  (47 B)
│   └── main.jsx  (184 B)
├── .env  (41 B)
├── .gitignore  (259 B)
├── .prettierignore  (88 B)
├── .prettierrc  (186 B)
├── Codebase.md  (699.9 kB)
├── eslint.config.js  (758 B)
├── index.html  (367 B)
├── package.json  (986 B)
├── print-codebase.js  (4.8 kB)
├── react  (27.82 MB)
├── react-router-dom  (27.82 MB)
├── README.md  (68 B)
├── vercel.json  (69 B)
└── vite.config.js  (265 B)

======================================================================
  FILE CONTENTS
======================================================================

──────────────────────────────────────────────────────────────────────
FILE: src/components/auth/AuthFooter.jsx  (243 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'

const AuthFooter = () => {
  return (
    <div className="py-4 text-center text-xs text-gray-400">
      By continuing, you agree to our Terms of Service and Privacy Policy
    </div>
  )
}

export default AuthFooter
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/auth/AuthHeader.jsx  (618 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import logo from '../../assets/logo.png'

const AuthHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2 sm:py-5 text-center space-y-2">
      <img
        src={logo}
        alt="StudyHive Logo"
        className="h-16 sm:h-18 md:h-20 w-auto"
      />

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray mt-0.5">
        Welcome To StudyHive
      </h2>

      <h3 className="text-gray-400 text-xs sm:text-sm md:text-base">
        Collaborative learning made simple
      </h3>
    </div>
  )
}

export default AuthHeader
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/auth/EmailVerified.jsx  (2.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const EmailVerified = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        navigate("/login", { replace: true });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status, navigate]);

  const handleGoToLogin = () => {
    navigate("/login", { replace: true });
  };

  const handleGoToSignup = () => {
    navigate("/signup", { replace: true });
  };

  const isSuccess = status === "success";

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8 text-center space-y-6">
        
        <div className={`h-16 w-16 mx-auto flex items-center justify-center rounded-full ${
          isSuccess ? "bg-green-50" : "bg-red-50"
        }`}>
          <span className="text-3xl">
            {isSuccess ? "✅" : "❌"}
          </span>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900">
          {isSuccess ? "Email Verified Successfully!" : "Verification Failed"}
        </h2>

        <p className="text-sm text-gray-600">
          {isSuccess
            ? "Your email has been verified. Redirecting you to login..."
            : "The verification link is invalid or has expired."}
        </p>

        {isSuccess ? (
          <button
            onClick={handleGoToLogin}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Go to Login
          </button>
        ) : (
          <button
            onClick={handleGoToSignup}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Back to Signup
          </button>
        )}
      </div>
    </div>
  );
};

export default EmailVerified;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/auth/LoginForm.jsx  (4.5 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const LoginForm = () => {
  // Controlled state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await login({ email, password })

      navigate('/app/dashboard', {
        replace: true,
      })

    } catch (error) {
      console.log('Login error:', error.response?.data)
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
          <h2 className="text-xl sm:text-2xl font-semibold text-black">
            Sign in to your account
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-black">
            Enter your credentials to continue
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-medium text-shadow-black">
                Password
              </label>
              {/* <a
                href="#"
                className="text-xs sm:text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </a> */}
              <Link to="/forgot-password" className="text-xs sm:text-sm text-blue-500 hover:underline">Forgot password?</Link>
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 pr-10
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
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="mt-5 sm:mt-6 text-center text-xs sm:text-sm">
          Don&apos;t have an account?{' '}
          {/* <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a> */}
          <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/auth/SignUpForm.jsx  (9.7 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth.js'
import { Link, useNavigate } from 'react-router-dom'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const SignUpForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
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
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 pr-10
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
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm font-medium text-shadow-black">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 pr-10
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
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition"
                aria-label={
                  showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'
                }
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/ContactSection.jsx  (1.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/ContactSection.jsx
import FadeInSection from "./FadeInSection";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Connect With Us
          </h2>

          <p className="mt-6 text-gray-600">
            StudyHive is an open collaborative project. Feel free to explore
            the codebase or connect with the creator.
          </p>

          <div className="mt-8 flex justify-center gap-6">

            <a
              href="https://github.com/Adi-Dcpp"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:scale-105 transition-all duration-300"
            >
              GitHub
            </a>

            <a
              href="mailto:luffy1120adi@gmail.com"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
            >
              Email
            </a>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/CTASection.jsx  (757 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/CTASection.jsx
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const CTASection = () => {
  return (
    <section className="py-20 bg-indigo-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold">
            Ready to level up your study workflow?
          </h2>

          <Link
            to="/signup"
            className="mt-8 inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Create Your StudyHive
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CTASection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/FadeInSection.jsx  (410 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { motion } from "framer-motion";

const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/FeaturesSection.jsx  (1.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/FeaturesSection.jsx
import FadeInSection from "./FadeInSection";

const features = [
  "Secure Authentication",
  "Study Group Management",
  "Learning Goal Tracking",
  "Assignment & Submissions",
  "File & Resource Sharing",
  "Progress Monitoring Dashboard",
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Powerful Features
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="font-semibold text-gray-800">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FeaturesSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/Footer.jsx  (725 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} StudyHive. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/HeroSection.jsx  (3.2 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Organize. Collaborate.
                <span className="text-indigo-600"> Succeed Together.</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                StudyHive helps mentors and learners build structured study groups,
                track learning goals, manage assignments, and collaborate
                efficiently in one powerful platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-indigo-700 hover:scale-105"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - DASHBOARD MOCKUP */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">

                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">
                    Web Development Group
                  </h3>
                  <span className="text-sm bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Goal Progress</p>
                  <div className="mt-2 h-2 bg-gray-300 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full w-2/3"></div>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">
                    Assignment Status
                  </p>
                  <div className="mt-3 flex gap-3 text-xs">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                      Pending
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      Submitted
                    </span>
                    <span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
                      Reviewed
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HeroSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/HowItWorks.jsx  (1.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/HowItWorks.jsx
import FadeInSection from "./FadeInSection";

const steps = [
  "Sign Up & Verify Email",
  "Create or Join Study Group",
  "Assign & Complete Goals",
  "Track Progress & Collaborate",
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            How It Works
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
            {steps.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HowItWorks;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/Navbar.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/Navbar.jsx
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LEFT - Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="StudyHive Logo"
            className="h-10 w-auto"
          />
          {/* <span className="text-xl font-bold text-gray-900">
            StudyHive
          </span> */}
        </Link>

        {/* RIGHT - Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>

          <Link
            to="/login"
            className="px-5 py-2 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/RolesSection.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/RolesSection.jsx
import FadeInSection from "./FadeInSection";

const RolesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12">

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-indigo-600">
                For Mentors
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Create Study Groups</li>
                <li>Assign Learning Goals</li>
                <li>Review Submissions</li>
                <li>Post Announcements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-emerald-600">
                For Learners
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Join Groups</li>
                <li>Track Goals</li>
                <li>Submit Assignments</li>
                <li>Access Resources</li>
              </ul>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default RolesSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/SecuritySection.jsx  (716 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/SecuritySection.jsx
import FadeInSection from "./FadeInSection";

const SecuritySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Secure & Reliable
          </h2>
          <p className="mt-6 text-gray-600">
            Role-based access control, secure file uploads, email verification,
            and production-ready backend architecture ensure your learning
            environment stays protected.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default SecuritySection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/dashboard/RecentAssignment.jsx  (2.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React from "react";
import { FiFileText } from "react-icons/fi";

const RecentAssignments = ({ assignments }) => {
  if (!assignments || assignments.length === 0) {
    return (
      <div className="p-6 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] shadow-sm min-h-220px">
        <h2 className="text-lg font-semibold text-[rgb(var(--text))] mb-4">
          Recent Assignments
        </h2>

        <div className="flex items-center justify-center h-32 text-[rgb(var(--text-muted))]">
          No assignments yet
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] shadow-sm min-h-260px">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-[rgb(var(--text))]">
          Recent Assignments
        </h2>

        <span className="text-sm text-[rgb(var(--text-muted))]">
          {assignments.length} items
        </span>
      </div>

      {/* List */}
      <ul className="flex flex-col divide-y divide-[rgb(var(--border))]">
        {assignments.map((a) => (
          <li
            key={a._id}
            className="flex items-center justify-between py-3 hover:bg-[rgb(var(--hover))] px-2 rounded-md transition"
          >
            
            {/* Left side */}
            <div className="flex items-center gap-3">
              
              <div className="w-9 h-9 flex items-center justify-center rounded-md bg-[rgb(var(--primary-soft))] text-[rgb(var(--primary))]">
                <FiFileText size={18} />
              </div>

              <span className="text-[rgb(var(--text))] font-medium">
                {a.title}
              </span>

            </div>

            {/* Deadline */}
            <span className="text-xs px-2 py-1 rounded-md bg-[rgb(var(--surface-2))] text-[rgb(var(--text-secondary))]">
              {new Date(a.deadline).toLocaleDateString()}
            </span>

          </li>
        ))}
      </ul>

    </div>
  );
};

export default RecentAssignments;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/dashboard/RecentSubmissions.jsx  (2.8 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { FiUpload } from "react-icons/fi";

const RecentSubmissions = ({ submissions }) => {
  const safeSubmissions = submissions || [];

  const formatSubmission = (submission) => {
    const learnerName =
      submission?.userId?.name ||
      submission?.learner?.name ||
      submission?.student?.name ||
      "Unknown learner";

    const assignmentTitle =
      submission?.assignmentId?.title ||
      submission?.assignment?.title ||
      submission?.title ||
      "Untitled assignment";

    return { learnerName, assignmentTitle };
  };

  return (
    <div className="p-6 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] shadow-sm min-h-260px">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-[rgb(var(--text))]">
          Recent Submissions
        </h2>

        <span className="text-sm text-[rgb(var(--text-muted))]">
          {safeSubmissions.length} items
        </span>
      </div>

      {/* Empty state */}
      {safeSubmissions.length === 0 && (
        <div className="flex items-center justify-center h-32 text-[rgb(var(--text-muted))]">
          No submissions yet
        </div>
      )}

      {/* List */}
      <ul className="flex flex-col divide-y divide-[rgb(var(--border))]">
        {safeSubmissions.map((submission, index) => {
          const { learnerName, assignmentTitle } = formatSubmission(submission);

          return (
            <li
              key={submission?._id || submission?.id || index}
              className="flex items-center justify-between py-3 px-2 hover:bg-[rgb(var(--hover))] rounded-md transition"
            >

              {/* Left side */}
              <div className="flex items-center gap-3">

                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-[rgb(var(--primary-soft))] text-[rgb(var(--primary))] flex items-center justify-center font-semibold text-sm">
                  {learnerName.charAt(0).toUpperCase()}
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <span className="text-[rgb(var(--text))] font-medium">
                    {learnerName}
                  </span>

                  <span className="text-xs text-[rgb(var(--text-muted))]">
                    {assignmentTitle}
                  </span>
                </div>

              </div>

              {/* Date */}
              <span className="text-xs px-2 py-1 rounded-md bg-[rgb(var(--surface-2))] text-[rgb(var(--text-secondary))]">
                {submission?.submittedAt
                  ? new Date(submission.submittedAt).toLocaleDateString()
                  : "Date unavailable"}
              </span>

            </li>
          );
        })}
      </ul>

    </div>
  );
};

export default RecentSubmissions;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/dashboard/StatsCards.jsx  (1.6 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { FaUsers, FaLayerGroup, FaClipboardList, FaTasks } from "react-icons/fa";

const StatsCards = ({ stats }) => {
  const cards = [
    { title: "Total Groups", value: stats?.groups || 0, icon: <FaLayerGroup /> },
    { title: "Active Learners", value: stats?.learners || 0, icon: <FaUsers /> },
    { title: "Submissions", value: stats?.submissions || 0, icon: <FaClipboardList /> },
    { title: "Assignments", value: stats?.assignments || 0, icon: <FaTasks /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((item) => (
        <div
          key={item.title}
          className="
          p-6
          rounded-xl
          border border-[rgb(var(--border))]
          bg-[rgb(var(--card-bg))]
          flex items-center justify-between
          shadow-sm
          hover:shadow-md
          transition-all
          hover:bg-[rgb(var(--surface-2))]
        "
        >

          {/* Text Section */}
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[rgb(var(--text-secondary))]">
              {item.title}
            </p>

            <h2 className="text-3xl font-bold text-[rgb(var(--text))]">
              {item.value}
            </h2>
          </div>

          {/* Icon */}
          <div
            className="
            w-12 h-12
            flex items-center justify-center
            rounded-lg
            bg-[rgb(var(--primary-soft))]
            text-[rgb(var(--primary))]
            text-xl
          "
          >
            {item.icon}
          </div>

        </div>
      ))}
    </div>
  );
};

export default StatsCards;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/notification/NotificationBell.jsx  (2.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { useEffect, useState } from "react";
import { FiBell } from "react-icons/fi";

import NotificationDropdown from "./NotificationDropdown";

import {
  getNotifications
} from "../../services/notificationService";

const NotificationBell = () => {

  const [open, setOpen] = useState(false);

  const [notifications, setNotifications] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchNotifications = async () => {

    try {

      setLoading(true);

      const data = await getNotifications();

      console.log("Notifications:", data);

      // YOUR BACKEND RETURNS:
      // {
      //   notifications,
      //   unreadCount
      // }

      if (Array.isArray(data.notifications)) {

        setNotifications(data.notifications);

      } else {

        setNotifications([]);

      }

    } catch (error) {

      console.error(
        "Failed to fetch notifications:",
        error
      );

      setNotifications([]);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchNotifications();

    // POLLING
    const interval = setInterval(() => {

      fetchNotifications();

    }, 30000);

    return () => clearInterval(interval);

  }, []);

  // NOW COUNT = TOTAL NOTIFICATIONS
  const unreadCount = notifications.length;

  return (
    <div className="relative">

      {/* BELL BUTTON */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="
          relative
          p-2.5
          rounded-xl
          hover:bg-[rgb(var(--hover))]
          transition
        "
      >

        <FiBell className="text-[22px] text-[rgb(var(--text))]" />

        {/* BADGE */}
        {unreadCount > 0 && (
          <span
            className="
              absolute
              -top-1
              -right-1
              min-w-5
              h-5
              px-1
              rounded-full
              bg-red-500
              text-white
              text-[10px]
              font-semibold
              flex items-center justify-center
            "
          >
            {unreadCount}
          </span>
        )}

      </button>

      {/* DROPDOWN */}
      {open && (
        <NotificationDropdown
          notifications={notifications}
          refreshNotifications={fetchNotifications}
          loading={loading}
        />
      )}

    </div>
  );
};

export default NotificationBell;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/notification/NotificationDropdown.jsx  (4.2 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import {
  clearAllNotifications,
  deleteNotification
} from "../../services/notificationService";

const NotificationDropdown = ({
  notifications,
  refreshNotifications,
  loading
}) => {

  const handleClearAll = async () => {

    try {

      await clearAllNotifications();

      refreshNotifications();

    } catch (error) {

      console.error(
        "Failed to clear notifications:",
        error
      );

    }

  };

  const handleDelete = async (id) => {

    try {

      await deleteNotification(id);

      refreshNotifications();

    } catch (error) {

      console.error(
        "Failed to delete notification:",
        error
      );

    }

  };

  return (
    <div
      className="
        absolute
        right-0
        mt-3
        w-[360px]
        rounded-2xl
        border border-[rgb(var(--border))]
        bg-[rgb(var(--card-bg))]
        shadow-[0_10px_40px_rgba(0,0,0,0.45)]
        overflow-hidden
        z-50
      "
    >

      {/* HEADER */}
      <div
        className="
          flex items-center justify-between
          px-5 py-4
          border-b border-[rgb(var(--border))]
        "
      >

        <h3 className="font-semibold text-[rgb(var(--text))]">
          Notifications
        </h3>

        {notifications.length > 0 && (
          <button
            onClick={handleClearAll}
            className="
              text-xs
              text-[rgb(var(--primary))]
              hover:underline
            "
          >
            Clear all
          </button>
        )}

      </div>

      {/* LIST */}
      <div className="max-h-[400px] overflow-y-auto">

        {loading ? (

          <div
            className="
              p-6
              text-sm
              text-center
              text-[rgb(var(--text-muted))]
            "
          >
            Loading notifications...
          </div>

        ) : notifications.length === 0 ? (

          <div
            className="
              p-6
              text-sm
              text-center
              text-[rgb(var(--text-muted))]
            "
          >
            No notifications yet
          </div>

        ) : (

          notifications.map((notification) => (

            <button
              key={notification._id}
              onClick={() =>
                handleDelete(notification._id)
              }
              className="
                w-full
                text-left
                px-5 py-4
                border-b border-[rgb(var(--border))]
                transition
                hover:bg-[rgb(var(--hover))]
                bg-[rgb(var(--primary-soft))]/20
              "
            >

              <div className="
                flex items-start justify-between gap-3
              ">

                <div className="space-y-1 flex-1">

                  <h4
                    className="
                      text-sm
                      font-semibold
                      text-[rgb(var(--primary))]
                      line-clamp-2
                    "
                  >
                    {notification.title || "Notification"}
                  </h4>

                  <p
                    className="
                      text-xs
                      text-[rgb(var(--text-muted))]
                    "
                  >
                    {notification.body ||
                      notification.message ||
                      "No message"}
                  </p>

                </div>

                {/* UNREAD DOT */}
                <div
                  className="
                    mt-1
                    w-2.5 h-2.5
                    rounded-full
                    bg-[rgb(var(--primary))]
                  "
                />

              </div>

              <span
                className="
                  mt-2
                  block
                  text-[10px]
                  text-[rgb(var(--text-secondary))]
                "
              >
                {new Date(
                  notification.createdAt
                ).toLocaleString()}
              </span>

            </button>

          ))

        )}

      </div>

    </div>
  );
};

export default NotificationDropdown;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/Navbar.jsx  (3.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { FaUserCircle } from "react-icons/fa";
import useTheme from "../hooks/useTheme";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import NotificationBell from "./notification/NotificationBell";

const Navbar = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const avatarLetter = user?.name?.charAt(0)?.toUpperCase();

  return (
    <nav
      className="
      flex items-center justify-between
      px-6
      h-16
      border-b border-[rgb(var(--border))]
      bg-[rgb(var(--navbar-bg))/80]
      backdrop-blur-md
      sticky top-0
      z-50
    "
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">

        <button
          onClick={toggleSidebar}
          className="
          text-xl
          text-[rgb(var(--text))]
          hover:text-[rgb(var(--primary))]
          transition
        "
        >
          <FiMenu />
        </button>

        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-9 w-auto" />
        </Link>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">

        {/* Notification Bell */}
        <NotificationBell />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="
          relative flex items-center
          w-14 h-7
          bg-[rgb(var(--surface-2))]
          rounded-full
          transition-colors
        "
        >
          <div
            className={`
            absolute w-6 h-6
            rounded-full
            shadow-md
            transform
            transition-transform
            flex items-center justify-center
            text-xs
            ${theme === "dark" ? "translate-x-7" : "translate-x-1"}
            bg-[rgb(var(--card-bg))]
            `}
          >
            {theme === "dark" ? "🌙" : "☀"}
          </div>
        </button>

        {/* USER */}
        <div
          className="
          flex items-center gap-2
          px-3 py-1
          rounded-lg
          hover:bg-[rgb(var(--hover))]
          transition
        "
        >
          <div
            className="
            w-8 h-8
            rounded-full
            flex items-center justify-center
            bg-[rgb(var(--primary-soft))]
            text-[rgb(var(--primary))]
            font-semibold
            text-sm
          "
          >
            {avatarLetter || <FaUserCircle />}
          </div>

          <span className="text-sm font-medium text-[rgb(var(--text))]">
            {user?.name || "User"}
          </span>
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="
          flex items-center gap-2
          px-3 py-1.5
          rounded-md
          text-white
          bg-[rgb(var(--error))]
          hover:opacity-90
          transition
          text-sm
        "
        >
          <FiLogOut size={16} />
          Logout
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/Sidebar.jsx  (9.7 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

import {
  FiHome,
  FiUsers,
  FiTarget,
  FiClipboard,
  FiUpload,
  FiChevronUp,
  FiLock,
  FiEye,
  FiEyeOff,
  FiLogOut
} from "react-icons/fi";

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const { user, updatePassword } = useContext(AuthContext);

  const [profileOpen, setProfileOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(null);
  const [passwordSuccess, setPasswordSuccess] = useState(null);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  const handleUpdatePassword = async (event) => {
    event.preventDefault();
    setPasswordError(null);
    setPasswordSuccess(null);

    if (!oldPassword.trim() || !newPassword.trim()) {
      setPasswordError("Old and new password are required.");
      return;
    }

    if (newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters.");
      return;
    }

    try {
      setIsUpdatingPassword(true);
      const response = await updatePassword({
        oldPassword,
        newPassword,
      });
      setPasswordSuccess(response?.data?.message || "Password updated.");
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      setPasswordError(
        err?.response?.data?.message || "Failed to update password."
      );
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  const menu = [
    { name: "Dashboard", path: "/app/dashboard", icon: <FiHome /> },
    { name: "Groups", path: "/app/groups", icon: <FiUsers /> },
    { name: "Goals", path: "/app/goals", icon: <FiTarget /> },
    { name: "Assignments", path: "/app/assignments", icon: <FiClipboard /> },
    { name: "Submissions", path: "/app/submissions", icon: <FiUpload /> }
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed top-16 left-0 z-40
          w-64 h-[calc(100vh-64px)]
          bg-[rgb(var(--sidebar-bg))]
          border-r border-[rgb(var(--border))]
          flex flex-col
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* SECTION LABEL */}
        <div className="px-5 pt-6 pb-3 text-xs uppercase tracking-wider text-[rgb(var(--text-muted))]">
          Navigation
        </div>

        {/* MENU */}
        <nav className="flex flex-col gap-2 px-3">

          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                `
                flex items-center gap-4
                px-4 py-3
                rounded-xl
                text-sm font-medium
                transition-all duration-200
                ${
                  isActive
                    ? "bg-[rgb(var(--primary-soft))] text-[rgb(var(--primary))]"
                    : "text-[rgb(var(--text))] hover:bg-[rgb(var(--hover))]"
                }
              `
              }
            >
              <span className="text-[20px]">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}

        </nav>

        {/* PROFILE EXPANDED PANEL */}
        <div
          className={`
            overflow-hidden
            transition-all duration-300
            ${
              profileOpen
                ? "max-h-96 opacity-100 px-4 py-4"
                : "max-h-0 opacity-0 px-4"
            }
          `}
        >

          <div className="
            rounded-2xl
            border border-[rgb(var(--border))]
            bg-[rgb(var(--card-bg))]
            p-4
            flex flex-col gap-4
          ">

            {/* USER INFO */}
            <div className="space-y-1">

              <h3 className="text-sm font-semibold text-[rgb(var(--text))]">
                {user?.name}
              </h3>

              <p className="text-xs text-[rgb(var(--text-muted))]">
                {user?.email}
              </p>

              <span className="
                inline-block
                mt-1
                px-2 py-1
                rounded-md
                text-[10px]
                capitalize
                bg-[rgb(var(--primary-soft))]
                text-[rgb(var(--primary))]
              ">
                {user?.role}
              </span>

            </div>

            {/* CHANGE PASSWORD */}
            <form className="flex flex-col gap-3" onSubmit={handleUpdatePassword}>

              <div className="relative">

                <FiLock className="
                  absolute left-3 top-1/2 -translate-y-1/2
                  text-[rgb(var(--text-muted))]
                " />

                <input
                  type={showOldPassword ? "text" : "password"}
                  placeholder="Old Password"
                  value={oldPassword}
                  onChange={(event) => setOldPassword(event.target.value)}
                  className="
                    w-full
                    rounded-xl
                    bg-[rgb(var(--hover))]
                    border border-[rgb(var(--border))]
                    pl-10 pr-10 py-2.5
                    text-sm
                    outline-none
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowOldPassword((prev) => !prev)}
                  className="
                    absolute right-3 top-1/2 -translate-y-1/2
                    text-[rgb(var(--text-muted))]
                    hover:text-[rgb(var(--text))]
                    transition
                  "
                  aria-label={
                    showOldPassword ? "Hide old password" : "Show old password"
                  }
                >
                  {showOldPassword ? <FiEyeOff /> : <FiEye />}
                </button>

              </div>

              <div className="relative">

                <FiLock className="
                  absolute left-3 top-1/2 -translate-y-1/2
                  text-[rgb(var(--text-muted))]
                " />

                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  className="
                    w-full
                    rounded-xl
                    bg-[rgb(var(--hover))]
                    border border-[rgb(var(--border))]
                    pl-10 pr-10 py-2.5
                    text-sm
                    outline-none
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowNewPassword((prev) => !prev)}
                  className="
                    absolute right-3 top-1/2 -translate-y-1/2
                    text-[rgb(var(--text-muted))]
                    hover:text-[rgb(var(--text))]
                    transition
                  "
                  aria-label={
                    showNewPassword ? "Hide new password" : "Show new password"
                  }
                >
                  {showNewPassword ? <FiEyeOff /> : <FiEye />}
                </button>

              </div>

              {passwordError && (
                <p className="text-xs text-red-500">{passwordError}</p>
              )}

              {passwordSuccess && (
                <p className="text-xs text-green-500">{passwordSuccess}</p>
              )}

              <button
                type="submit"
                disabled={isUpdatingPassword}
                className="
                  rounded-xl
                  bg-[rgb(var(--primary))]
                  text-white
                  py-2.5
                  text-sm
                  font-medium
                  transition hover:opacity-90 disabled:opacity-70
                "
              >
                {isUpdatingPassword ? "Updating..." : "Update Password"}
              </button>

            </form>

          </div>

        </div>

        {/* USER PANEL */}
        <button
          onClick={() => setProfileOpen(prev => !prev)}
          className="
            mt-auto
            border-t border-[rgb(var(--border))]
            p-4
            flex items-center justify-between
            hover:bg-[rgb(var(--hover))]
            transition
          "
        >

          <div className="flex items-center gap-3">

            <div className="
              w-11 h-11
              rounded-full
              bg-[rgb(var(--primary-soft))]
              text-[rgb(var(--primary))]
              flex items-center justify-center
              font-semibold
            ">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>

            <div className="flex flex-col text-left">

              <span className="text-sm font-medium text-[rgb(var(--text))]">
                {user?.name || "User"}
              </span>

              <span className="text-xs text-[rgb(var(--text-muted))]">
                {user?.email || "user@email.com"}
              </span>

            </div>

          </div>

          <FiChevronUp
            className={`
              transition-transform duration-300
              ${profileOpen ? "rotate-180" : ""}
            `}
          />

        </button>

      </aside>
    </>
  );
};

export default Sidebar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/contexts/AuthContext.jsx  (2.2 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
    const loggedInUser = data.data.user
    setUser(loggedInUser)
    return loggedInUser
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

  const updatePassword = async (data) => {
    const response = await updatePasswordService(data)
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
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/contexts/ThemeContext.jsx  (834 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    }else{
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useAuth.js  (181 B)
──────────────────────────────────────────────────────────────────────
```js
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useMentorDashboard.js  (1.5 kB)
──────────────────────────────────────────────────────────────────────
```js
import { useEffect, useState } from "react";
import api from "../services/api";

const useMentorDashboard = () => {
  const [stats, setStats] = useState({
    groups: 0,
    learners: 0,
    assignments: 0,
    submissions: 0,
  });

  const [recentSubmissions, setRecentSubmissions] = useState([]);
  const [recentAssignments, setRecentAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await api.get("/dashboard/mentor", {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        });

        console.log(res.data)

        const payload = res?.data?.data ?? {};

        setStats({
          groups: Number(payload.groups) || 0,
          learners: Number(payload.learners) || 0,
          assignments: Number(payload.assignments) || 0,
          submissions: Number(payload.submissions) || 0,
        });

        setRecentSubmissions(payload.recentSubmissions || []);
        setRecentAssignments(payload.recentAssignments || []);
      } catch (err) {
        console.error(err);
        setError(err?.response?.data?.message || "Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  return { stats, recentSubmissions, recentAssignments, loading, error };
};

export default useMentorDashboard;
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useTheme.js  (179 B)
──────────────────────────────────────────────────────────────────────
```js
import {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext.jsx'

const useTheme = () => {
    return useContext(ThemeContext)
}

export default useTheme
```

──────────────────────────────────────────────────────────────────────
FILE: src/layouts/AppLayout.jsx  (869 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[rgb(var(--bg))]">

      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content */}
      <main
        className={`
          pt-6
          px-6
          pb-6
          transition-all duration-300
          ${isSidebarOpen ? "ml-64" : "ml-0"}
        `}
      >
        <Outlet />
      </main>

    </div>
  );
};

export default AppLayout;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Assignments.jsx  (94 B)
──────────────────────────────────────────────────────────────────────
```jsx
const Assignments = () => {
  return <div>Assignments Page</div>
}

export default Assignments
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Dashboard.jsx  (1.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import useMentorDashboard from "../../hooks/useMentorDashboard";
import StatsCards from "../../components/mentor/dashboard/StatsCards";
import RecentSubmissions from "../../components/mentor/dashboard/RecentSubmissions";
import RecentAssignments from "../../components/mentor/dashboard/RecentAssignment";

const Dashboard = () => {
  const { stats, recentSubmissions, recentAssignments, loading, error } =
    useMentorDashboard();

  if (loading)
    return (
      <p className="text-[rgb(var(--text-secondary))]">
        Loading dashboard...
      </p>
    );

  if (error)
    return (
      <p className="text-[rgb(var(--error))]">
        Error: {error}
      </p>
    );

  return (
    <div className="flex flex-col gap-8 text-[rgb(var(--text))]">
      <h1 className="text-2xl font-semibold">
        Mentor Dashboard
      </h1>

      <StatsCards stats={stats} />

      <RecentSubmissions submissions={recentSubmissions} />

      <RecentAssignments assignments={recentAssignments} />
    </div>
  );
};

export default Dashboard;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Goals.jsx  (76 B)
──────────────────────────────────────────────────────────────────────
```jsx
const Goals = () => {
  return <div>Goals Page</div>
}

export default Goals
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/GroupDetails.jsx  (98 B)
──────────────────────────────────────────────────────────────────────
```jsx
const GroupDetails = () => {
  return <div>Group Details Page</div>
}

export default GroupDetails
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Groups.jsx  (79 B)
──────────────────────────────────────────────────────────────────────
```jsx
const Groups = () => {
  return <div>Groups Page</div>
}

export default Groups
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Messages.jsx  (263 B)
──────────────────────────────────────────────────────────────────────
```jsx
const Messages = () => {
  return (
    <div className="text-[rgb(var(--text))]">
      <h1 className="text-2xl font-semibold">Messages</h1>
      <p className="mt-2 text-[rgb(var(--text-secondary))]">Coming soon.</p>
    </div>
  );
};

export default Messages;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Settings.jsx  (263 B)
──────────────────────────────────────────────────────────────────────
```jsx
const Settings = () => {
  return (
    <div className="text-[rgb(var(--text))]">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <p className="mt-2 text-[rgb(var(--text-secondary))]">Coming soon.</p>
    </div>
  );
};

export default Settings;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Submissions.jsx  (94 B)
──────────────────────────────────────────────────────────────────────
```jsx
const Submissions = () => {
  return <div>Submissions Page</div>
}

export default Submissions
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/EmailVerification.jsx  (4.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { resendEmailVerification } from '../../services/authService'

const EmailVerification = () => {
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    if (cooldown === 0) return

    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [cooldown])

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
    if (loading || cooldown > 0) return

    try {
      setLoading(true)
      setMessage('')
      setErrorMessage('')

      await resendEmailVerification({ email })

      setMessage('Verification email resent! Please check your inbox.')
      setCooldown(60)
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
            disabled={loading || cooldown > 0}
            className={`font-medium transition-colors ${
              cooldown > 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-indigo-600 hover:text-indigo-700'
            }`}
            onClick={handleResendEmail}
          >
            {cooldown > 0 ? `Resend in ${cooldown}s` : 'Resend email'}
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/ForgotPassword.jsx  (3.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(false)

  const { forgotPassword } = useAuth()

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!email.trim()) {
      setError('Email is required')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format')
      return
    }

    try {
      setLoading(true)

      const response = await forgotPassword({ email })

      setSuccess(response.data.message)

      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="w-full flex flex-col items-center justify-center mb-6 gap-0.5">
        <h2 className="text-3xl font-semibold">Reset Password</h2>
        <h3>We'll send you a reset link</h3>
      </div>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl border border-black p-6 sm:p-8 shadow-lg">
        <div>
          <h3 className="text-xl font-semibold text-black ">
            Forgot your password?
          </h3>
          <p className="text-gray-600">
            Enter your email address and we'll send you a link to reset your
            password
          </p>
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-xl">Email</label>
              <input
                type="email"
                placeholder="xyz@example.com"
                className="w-full rounded-lg border border-black px-3 sm:px-4 py-2 sm:py-2.5 bg-transparent text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}

            {success && (
              <p className="text-green-600 mt-3 text-sm">{success}</p>
            )}
            <div className="mt-2.5">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
              >
                 {loading ? 'Sending...' : 'Send reset link'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/Login.jsx  (458 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import AuthHeader from '../../components/auth/AuthHeader'
import LoginForm from '../../components/auth/LoginForm'
import AuthFooter from '../../components/auth/AuthFooter'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <LoginForm />
      </div>

      <AuthFooter />
    </div>
  )
}

export default Login
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/ResetPassword.jsx  (3.9 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const ResetPassword = () => {
    const { resetPassword } = useAuth()
  const { token } = useParams()
  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
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
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="New Password"
                className="w-full border px-4 py-2 rounded-lg pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                className="w-full border px-4 py-2 rounded-lg pr-10"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition"
                aria-label={
                  showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'
                }
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/SignUp.jsx  (461 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import AuthHeader from '../../components/auth/AuthHeader'
import AuthFooter from '../../components/auth/AuthFooter'
import SignUpForm from '../../components/auth/SignUpForm'

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <SignUpForm />
      </div>
      <AuthFooter />
    </div>
  )
}

export default SignUp
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/Landing.jsx  (830 B)
──────────────────────────────────────────────────────────────────────
```jsx
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import RolesSection from "../components/landing/RolesSection";
import HowItWorks from "../components/landing/HowItWorks";
import SecuritySection from "../components/landing/SecuritySection";
import CTASection from "../components/landing/CTASection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RolesSection />
      <HowItWorks />
      <SecuritySection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Landing;
```

──────────────────────────────────────────────────────────────────────
FILE: src/routes/ProtectedRoutes.jsx  (312 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoute = () => {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div>
  if (!user) return <Navigate to="/login" replace />

  return <Outlet />
}

export default ProtectedRoute
```

──────────────────────────────────────────────────────────────────────
FILE: src/routes/router.jsx  (2.6 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'

import Landing from '../pages/Landing'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'
import ForgotPassword from '../pages/auth/ForgotPassword'
import ProtectedRoute from './ProtectedRoutes'
import EmailVerification from '../pages/auth/EmailVerification'
import EmailVerified from '../components/auth/EmailVerified'
import ResetPassword from '../pages/auth/ResetPassword'

import AppLayout from '../layouts/AppLayout'
import AppDashboard from '../pages/app/Dashboard'
import AppGroups from '../pages/app/Groups'
import AppGroupDetails from '../pages/app/GroupDetails'
import AppGoals from '../pages/app/Goals'
import AppAssignments from '../pages/app/Assignments'
import AppSubmissions from '../pages/app/Submissions'
import AppMessages from '../pages/app/Messages'
import AppSettings from '../pages/app/Settings'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-email" element={<EmailVerification />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/email-verified" element={<EmailVerified />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/app" element={<AppLayout />}>

          <Route
            index
            element={<Navigate to="dashboard" replace />}
          />

          <Route
            path="dashboard"
            element={<AppDashboard />}
          />

          <Route
            path="groups"
            element={<AppGroups />}
          />

          <Route
            path="groups/:groupId"
            element={<AppGroupDetails />}
          />

          <Route
            path="goals"
            element={<AppGoals />}
          />

          <Route
            path="assignments"
            element={<AppAssignments />}
          />

          <Route
            path="submissions"
            element={<AppSubmissions />}
          />

          <Route
            path="messages"
            element={<AppMessages />}
          />

          <Route
            path="settings"
            element={<AppSettings />}
          />

        </Route>

        <Route
          path="/mentor/*"
          element={<Navigate to="/app/dashboard" replace />}
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  )
)
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/api.js  (339 B)
──────────────────────────────────────────────────────────────────────
```js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  withCredentials: true
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/authService.js  (638 B)
──────────────────────────────────────────────────────────────────────
```js
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/groupService.js  (1.7 kB)
──────────────────────────────────────────────────────────────────────
```js
import API from './api'

export const createGroup = async (groupData) => {
  const response = await API.post('/groups', groupData)

  return response.data.data
}

export const joinGroup = async (inviteCode) => {
  const response = await API.post('/groups/join', {
    inviteCode,
  })

  return response.data.data
}

export const viewAllJoinedGroups = async (page = 1, limit = 10) => {
  const response = await API.get(`/groups?page=${page}&limit=${limit}`)

  return response.data.data
}

export const getGroupDetails = async (groupId) => {
  const response = await API.get(`/groups/${groupId}`)

  return response.data.data
}

export const updateGroup = async (groupId, updatedData) => {
  const response = await API.put(`/groups/${groupId}`, updatedData)

  return response.data.data
}

export const deleteGroup = async (groupId) => {
  const response = await API.delete(`/groups/${groupId}`)

  return response.data
}

export const inviteMembers = async (groupId) => {
  const response = await API.post(`/groups/${groupId}/invite`)

  return response.data.data
}

export const regenerateInviteCode = async (groupId) => {
  const response = await API.patch(`/groups/${groupId}/invite/regenerate`)

  return response.data.data
}

export const viewGroupMembers = async (groupId, page = 1, limit = 20) => {
  const response = await API.get(
    `/groups/${groupId}/members?page=${page}&limit=${limit}`
  )

  return response.data.data
}

export const removeGroupMember = async (groupId, userId) => {
  const response = await API.delete(`/groups/${groupId}/members/${userId}`)

  return response.data
}

export const leaveGroup = async (groupId) => {
  const response = await API.post(`/groups/${groupId}/leave`)

  return response.data
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/messageService.js  (532 B)
──────────────────────────────────────────────────────────────────────
```js
import API from './api'

export const sendMessage = async (groupId, content) => {
  const response = await API.post(`/messages/${groupId}`, {
    content,
  })

  return response.data.data
}

export const getGroupMessages = async (groupId, page = 1, limit = 20) => {
  const response = await API.get(
    `/messages/${groupId}?page=${page}&limit=${limit}`
  )

  return response.data.data
}

export const deleteMessage = async (messageId) => {
  const response = await API.delete(`/messages/${messageId}`)

  return response.data
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/notificationService.js  (491 B)
──────────────────────────────────────────────────────────────────────
```js
import API from "./api";

export const getNotifications = async () => {

  const response = await API.get(
    "/notifications"
  );

  return response.data.data;

};

export const deleteNotification =
  async (id) => {

    const response = await API.delete(
      `/notifications/${id}`
    );

    return response.data;

};

export const clearAllNotifications =
  async () => {

    const response = await API.delete(
      "/notifications/clear-all"
    );

    return response.data;

};
```

──────────────────────────────────────────────────────────────────────
FILE: src/App.jsx  (387 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
```

──────────────────────────────────────────────────────────────────────
FILE: src/colors.css  (1.8 kB)
──────────────────────────────────────────────────────────────────────
```css
/* =========================================
   STUDYHIVE COLOR SYSTEM
   Premium SaaS Palette
========================================= */

/* ---------- LIGHT THEME ---------- */

:root {

  /* Brand */
  --primary: 79 70 229;
  --primary-hover: 67 56 202;
  --primary-soft: 235 233 255;

  /* Backgrounds */
  --bg: 246 247 250;
  --surface: 255 255 255;
  --surface-2: 240 242 246;

  /* Text */
  --text: 17 24 39;
  --text-secondary: 75 85 99;
  --text-muted: 156 163 175;

  /* Borders */
  --border: 229 231 235;
  --border-strong: 209 213 219;

  /* Status */
  --success: 34 197 94;
  --warning: 245 158 11;
  --error: 239 68 68;
  --info: 59 130 246;

  /* Layout */
  --navbar-bg: 255 255 255;
  --sidebar-bg: 255 255 255;
  --card-bg: 255 255 255;

  /* Interaction */
  --hover: 243 244 246;
  --active: 229 231 235;
  --focus-ring: 99 102 241;

  /* Tables */
  --table-header: 248 250 252;
  --table-row-hover: 243 244 246;

  /* Overlay */
  --overlay: 17 24 39;
}


/* ---------- DARK THEME ---------- */

[data-theme="dark"] {

  /* Brand */
  --primary: 129 140 248;
  --primary-hover: 99 102 241;
  --primary-soft: 49 46 129;

  /* Backgrounds */
  --bg: 10 14 26;
  --surface: 20 25 40;
  --surface-2: 36 44 66;

  /* Text */
  --text: 248 250 252;
  --text-secondary: 203 213 225;
  --text-muted: 148 163 184;

  /* Borders */
  --border: 58 68 92;
  --border-strong: 71 85 105;

  /* Status */
  --success: 34 197 94;
  --warning: 245 158 11;
  --error: 239 68 68;
  --info: 59 130 246;

  /* Layout */
  --navbar-bg: 10 14 26;
  --sidebar-bg: 15 20 35;
  --card-bg: 24 30 48;

  /* Interaction */
  --hover: 42 50 72;
  --active: 58 68 92;
  --focus-ring: 129 140 248;

  /* Tables */
  --table-header: 24 30 48;
  --table-row-hover: 42 50 72;

  /* Overlay */
  --overlay: 0 0 0;
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/index.css  (47 B)
──────────────────────────────────────────────────────────────────────
```css
@import "tailwindcss";
@import "./colors.css";
```

──────────────────────────────────────────────────────────────────────
FILE: src/main.jsx  (184 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
```

──────────────────────────────────────────────────────────────────────
FILE: Codebase.md  (699.9 kB)
──────────────────────────────────────────────────────────────────────
```md
======================================================================
  StudyHive Frontend — Codebase Snapshot
  Root : /home/adi-dcpp/Desktop/WebDev/Frontend/StudyHive-Frontend
  Date : 5/20/2026, 10:32:49 PM
======================================================================

StudyHive-Frontend/
├── public/
│   └── vite.svg  (1.5 kB)
├── src/
│   ├── assets/
│   │   └── logo.png  (180.1 kB)
│   ├── components/
│   │   ├── auth/
│   │   │   ├── AuthFooter.jsx  (243 B)
│   │   │   ├── AuthHeader.jsx  (618 B)
│   │   │   ├── EmailVerified.jsx  (2.1 kB)
│   │   │   ├── LoginForm.jsx  (4.5 kB)
│   │   │   └── SignUpForm.jsx  (9.7 kB)
│   │   ├── landing/
│   │   │   ├── ContactSection.jsx  (1.3 kB)
│   │   │   ├── CTASection.jsx  (757 B)
│   │   │   ├── FadeInSection.jsx  (410 B)
│   │   │   ├── FeaturesSection.jsx  (1.1 kB)
│   │   │   ├── Footer.jsx  (725 B)
│   │   │   ├── HeroSection.jsx  (3.2 kB)
│   │   │   ├── HowItWorks.jsx  (1.0 kB)
│   │   │   ├── Navbar.jsx  (1.4 kB)
│   │   │   ├── RolesSection.jsx  (1.4 kB)
│   │   │   └── SecuritySection.jsx  (716 B)
│   │   ├── mentor/
│   │   │   └── dashboard/
│   │   │       ├── RecentAssignment.jsx  (2.1 kB)
│   │   │       ├── RecentSubmissions.jsx  (2.8 kB)
│   │   │       └── StatsCards.jsx  (1.6 kB)
│   │   ├── notification/
│   │   │   ├── NotificationBell.jsx  (2.4 kB)
│   │   │   └── NotificationDropdown.jsx  (4.2 kB)
│   │   ├── Navbar.jsx  (3.3 kB)
│   │   └── Sidebar.jsx  (9.7 kB)
│   ├── contexts/
│   │   ├── AuthContext.jsx  (2.2 kB)
│   │   └── ThemeContext.jsx  (834 B)
│   ├── hooks/
│   │   ├── useAuth.js  (181 B)
│   │   ├── useMentorDashboard.js  (1.5 kB)
│   │   └── useTheme.js  (179 B)
│   ├── layouts/
│   │   ├── AppLayout.jsx  (869 B)
│   │   └── MentorLayout.jsx  (803 B)
│   ├── pages/
│   │   ├── app/
│   │   │   ├── Assignments.jsx  (0 B)
│   │   │   ├── Dashboard.jsx  (1.0 kB)
│   │   │   ├── Goals.jsx  (0 B)
│   │   │   ├── GroupDetails.jsx  (0 B)
│   │   │   ├── Groups.jsx  (0 B)
│   │   │   ├── Messages.jsx  (263 B)
│   │   │   ├── Settings.jsx  (263 B)
│   │   │   └── Submissions.jsx  (0 B)
│   │   ├── auth/
│   │   │   ├── EmailVerification.jsx  (4.0 kB)
│   │   │   ├── ForgotPassword.jsx  (3.0 kB)
│   │   │   ├── Login.jsx  (458 B)
│   │   │   ├── ResetPassword.jsx  (3.9 kB)
│   │   │   └── SignUp.jsx  (461 B)
│   │   └── Landing.jsx  (830 B)
│   ├── routes/
│   │   ├── ProtectedRoutes.jsx  (312 B)
│   │   └── router.jsx  (2.6 kB)
│   ├── services/
│   │   ├── api.js  (339 B)
│   │   ├── authService.js  (1.7 kB)
│   │   ├── groupService.js  (1.7 kB)
│   │   ├── messageService.js  (532 B)
│   │   └── notificationService.js  (491 B)
│   ├── App.jsx  (387 B)
│   ├── colors.css  (1.8 kB)
│   ├── index.css  (47 B)
│   └── main.jsx  (184 B)
├── .env  (41 B)
├── .gitignore  (259 B)
├── .prettierignore  (88 B)
├── .prettierrc  (186 B)
├── Codebase.md  (573.7 kB)
├── eslint.config.js  (758 B)
├── index.html  (367 B)
├── package.json  (986 B)
├── print-codebase.js  (4.8 kB)
├── react  (27.82 MB)
├── react-router-dom  (27.82 MB)
├── README.md  (68 B)
├── vercel.json  (69 B)
└── vite.config.js  (265 B)

======================================================================
  FILE CONTENTS
======================================================================

──────────────────────────────────────────────────────────────────────
FILE: src/components/auth/AuthFooter.jsx  (243 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'

const AuthFooter = () => {
  return (
    <div className="py-4 text-center text-xs text-gray-400">
      By continuing, you agree to our Terms of Service and Privacy Policy
    </div>
  )
}

export default AuthFooter
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/auth/AuthHeader.jsx  (618 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import logo from '../../assets/logo.png'

const AuthHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2 sm:py-5 text-center space-y-2">
      <img
        src={logo}
        alt="StudyHive Logo"
        className="h-16 sm:h-18 md:h-20 w-auto"
      />

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray mt-0.5">
        Welcome To StudyHive
      </h2>

      <h3 className="text-gray-400 text-xs sm:text-sm md:text-base">
        Collaborative learning made simple
      </h3>
    </div>
  )
}

export default AuthHeader
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/auth/EmailVerified.jsx  (2.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const EmailVerified = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        navigate("/login", { replace: true });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status, navigate]);

  const handleGoToLogin = () => {
    navigate("/login", { replace: true });
  };

  const handleGoToSignup = () => {
    navigate("/signup", { replace: true });
  };

  const isSuccess = status === "success";

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8 text-center space-y-6">
        
        <div className={`h-16 w-16 mx-auto flex items-center justify-center rounded-full ${
          isSuccess ? "bg-green-50" : "bg-red-50"
        }`}>
          <span className="text-3xl">
            {isSuccess ? "✅" : "❌"}
          </span>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900">
          {isSuccess ? "Email Verified Successfully!" : "Verification Failed"}
        </h2>

        <p className="text-sm text-gray-600">
          {isSuccess
            ? "Your email has been verified. Redirecting you to login..."
            : "The verification link is invalid or has expired."}
        </p>

        {isSuccess ? (
          <button
            onClick={handleGoToLogin}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Go to Login
          </button>
        ) : (
          <button
            onClick={handleGoToSignup}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Back to Signup
          </button>
        )}
      </div>
    </div>
  );
};

export default EmailVerified;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/auth/LoginForm.jsx  (4.5 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const LoginForm = () => {
  // Controlled state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await login({ email, password })

      navigate('/app/dashboard', {
        replace: true,
      })

    } catch (error) {
      console.log('Login error:', error.response?.data)
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
          <h2 className="text-xl sm:text-2xl font-semibold text-black">
            Sign in to your account
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-black">
            Enter your credentials to continue
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-medium text-shadow-black">
                Password
              </label>
              {/* <a
                href="#"
                className="text-xs sm:text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </a> */}
              <Link to="/forgot-password" className="text-xs sm:text-sm text-blue-500 hover:underline">Forgot password?</Link>
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 pr-10
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
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="mt-5 sm:mt-6 text-center text-xs sm:text-sm">
          Don&apos;t have an account?{' '}
          {/* <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a> */}
          <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/auth/SignUpForm.jsx  (9.7 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth.js'
import { Link, useNavigate } from 'react-router-dom'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const SignUpForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
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
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 pr-10
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
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm font-medium text-shadow-black">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 pr-10
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
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition"
                aria-label={
                  showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'
                }
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/ContactSection.jsx  (1.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/ContactSection.jsx
import FadeInSection from "./FadeInSection";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Connect With Us
          </h2>

          <p className="mt-6 text-gray-600">
            StudyHive is an open collaborative project. Feel free to explore
            the codebase or connect with the creator.
          </p>

          <div className="mt-8 flex justify-center gap-6">

            <a
              href="https://github.com/Adi-Dcpp"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:scale-105 transition-all duration-300"
            >
              GitHub
            </a>

            <a
              href="mailto:luffy1120adi@gmail.com"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
            >
              Email
            </a>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/CTASection.jsx  (757 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/CTASection.jsx
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const CTASection = () => {
  return (
    <section className="py-20 bg-indigo-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold">
            Ready to level up your study workflow?
          </h2>

          <Link
            to="/signup"
            className="mt-8 inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Create Your StudyHive
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CTASection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/FadeInSection.jsx  (410 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { motion } from "framer-motion";

const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/FeaturesSection.jsx  (1.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/FeaturesSection.jsx
import FadeInSection from "./FadeInSection";

const features = [
  "Secure Authentication",
  "Study Group Management",
  "Learning Goal Tracking",
  "Assignment & Submissions",
  "File & Resource Sharing",
  "Progress Monitoring Dashboard",
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Powerful Features
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="font-semibold text-gray-800">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FeaturesSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/Footer.jsx  (725 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} StudyHive. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/HeroSection.jsx  (3.2 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Organize. Collaborate.
                <span className="text-indigo-600"> Succeed Together.</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                StudyHive helps mentors and learners build structured study groups,
                track learning goals, manage assignments, and collaborate
                efficiently in one powerful platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-indigo-700 hover:scale-105"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - DASHBOARD MOCKUP */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">

                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">
                    Web Development Group
                  </h3>
                  <span className="text-sm bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Goal Progress</p>
                  <div className="mt-2 h-2 bg-gray-300 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full w-2/3"></div>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">
                    Assignment Status
                  </p>
                  <div className="mt-3 flex gap-3 text-xs">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                      Pending
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      Submitted
                    </span>
                    <span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
                      Reviewed
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HeroSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/HowItWorks.jsx  (1.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/HowItWorks.jsx
import FadeInSection from "./FadeInSection";

const steps = [
  "Sign Up & Verify Email",
  "Create or Join Study Group",
  "Assign & Complete Goals",
  "Track Progress & Collaborate",
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            How It Works
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
            {steps.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HowItWorks;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/Navbar.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/Navbar.jsx
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LEFT - Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="StudyHive Logo"
            className="h-10 w-auto"
          />
          {/* <span className="text-xl font-bold text-gray-900">
            StudyHive
          </span> */}
        </Link>

        {/* RIGHT - Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>

          <Link
            to="/login"
            className="px-5 py-2 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/RolesSection.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/RolesSection.jsx
import FadeInSection from "./FadeInSection";

const RolesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12">

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-indigo-600">
                For Mentors
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Create Study Groups</li>
                <li>Assign Learning Goals</li>
                <li>Review Submissions</li>
                <li>Post Announcements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-emerald-600">
                For Learners
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Join Groups</li>
                <li>Track Goals</li>
                <li>Submit Assignments</li>
                <li>Access Resources</li>
              </ul>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default RolesSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/SecuritySection.jsx  (716 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/SecuritySection.jsx
import FadeInSection from "./FadeInSection";

const SecuritySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Secure & Reliable
          </h2>
          <p className="mt-6 text-gray-600">
            Role-based access control, secure file uploads, email verification,
            and production-ready backend architecture ensure your learning
            environment stays protected.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default SecuritySection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/dashboard/RecentAssignment.jsx  (2.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React from "react";
import { FiFileText } from "react-icons/fi";

const RecentAssignments = ({ assignments }) => {
  if (!assignments || assignments.length === 0) {
    return (
      <div className="p-6 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] shadow-sm min-h-220px">
        <h2 className="text-lg font-semibold text-[rgb(var(--text))] mb-4">
          Recent Assignments
        </h2>

        <div className="flex items-center justify-center h-32 text-[rgb(var(--text-muted))]">
          No assignments yet
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] shadow-sm min-h-260px">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-[rgb(var(--text))]">
          Recent Assignments
        </h2>

        <span className="text-sm text-[rgb(var(--text-muted))]">
          {assignments.length} items
        </span>
      </div>

      {/* List */}
      <ul className="flex flex-col divide-y divide-[rgb(var(--border))]">
        {assignments.map((a) => (
          <li
            key={a._id}
            className="flex items-center justify-between py-3 hover:bg-[rgb(var(--hover))] px-2 rounded-md transition"
          >
            
            {/* Left side */}
            <div className="flex items-center gap-3">
              
              <div className="w-9 h-9 flex items-center justify-center rounded-md bg-[rgb(var(--primary-soft))] text-[rgb(var(--primary))]">
                <FiFileText size={18} />
              </div>

              <span className="text-[rgb(var(--text))] font-medium">
                {a.title}
              </span>

            </div>

            {/* Deadline */}
            <span className="text-xs px-2 py-1 rounded-md bg-[rgb(var(--surface-2))] text-[rgb(var(--text-secondary))]">
              {new Date(a.deadline).toLocaleDateString()}
            </span>

          </li>
        ))}
      </ul>

    </div>
  );
};

export default RecentAssignments;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/dashboard/RecentSubmissions.jsx  (2.8 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { FiUpload } from "react-icons/fi";

const RecentSubmissions = ({ submissions }) => {
  const safeSubmissions = submissions || [];

  const formatSubmission = (submission) => {
    const learnerName =
      submission?.userId?.name ||
      submission?.learner?.name ||
      submission?.student?.name ||
      "Unknown learner";

    const assignmentTitle =
      submission?.assignmentId?.title ||
      submission?.assignment?.title ||
      submission?.title ||
      "Untitled assignment";

    return { learnerName, assignmentTitle };
  };

  return (
    <div className="p-6 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] shadow-sm min-h-260px">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-[rgb(var(--text))]">
          Recent Submissions
        </h2>

        <span className="text-sm text-[rgb(var(--text-muted))]">
          {safeSubmissions.length} items
        </span>
      </div>

      {/* Empty state */}
      {safeSubmissions.length === 0 && (
        <div className="flex items-center justify-center h-32 text-[rgb(var(--text-muted))]">
          No submissions yet
        </div>
      )}

      {/* List */}
      <ul className="flex flex-col divide-y divide-[rgb(var(--border))]">
        {safeSubmissions.map((submission, index) => {
          const { learnerName, assignmentTitle } = formatSubmission(submission);

          return (
            <li
              key={submission?._id || submission?.id || index}
              className="flex items-center justify-between py-3 px-2 hover:bg-[rgb(var(--hover))] rounded-md transition"
            >

              {/* Left side */}
              <div className="flex items-center gap-3">

                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-[rgb(var(--primary-soft))] text-[rgb(var(--primary))] flex items-center justify-center font-semibold text-sm">
                  {learnerName.charAt(0).toUpperCase()}
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <span className="text-[rgb(var(--text))] font-medium">
                    {learnerName}
                  </span>

                  <span className="text-xs text-[rgb(var(--text-muted))]">
                    {assignmentTitle}
                  </span>
                </div>

              </div>

              {/* Date */}
              <span className="text-xs px-2 py-1 rounded-md bg-[rgb(var(--surface-2))] text-[rgb(var(--text-secondary))]">
                {submission?.submittedAt
                  ? new Date(submission.submittedAt).toLocaleDateString()
                  : "Date unavailable"}
              </span>

            </li>
          );
        })}
      </ul>

    </div>
  );
};

export default RecentSubmissions;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/dashboard/StatsCards.jsx  (1.6 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { FaUsers, FaLayerGroup, FaClipboardList, FaTasks } from "react-icons/fa";

const StatsCards = ({ stats }) => {
  const cards = [
    { title: "Total Groups", value: stats?.groups || 0, icon: <FaLayerGroup /> },
    { title: "Active Learners", value: stats?.learners || 0, icon: <FaUsers /> },
    { title: "Submissions", value: stats?.submissions || 0, icon: <FaClipboardList /> },
    { title: "Assignments", value: stats?.assignments || 0, icon: <FaTasks /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((item) => (
        <div
          key={item.title}
          className="
          p-6
          rounded-xl
          border border-[rgb(var(--border))]
          bg-[rgb(var(--card-bg))]
          flex items-center justify-between
          shadow-sm
          hover:shadow-md
          transition-all
          hover:bg-[rgb(var(--surface-2))]
        "
        >

          {/* Text Section */}
          <div className="flex flex-col gap-1">
            <p className="text-sm text-[rgb(var(--text-secondary))]">
              {item.title}
            </p>

            <h2 className="text-3xl font-bold text-[rgb(var(--text))]">
              {item.value}
            </h2>
          </div>

          {/* Icon */}
          <div
            className="
            w-12 h-12
            flex items-center justify-center
            rounded-lg
            bg-[rgb(var(--primary-soft))]
            text-[rgb(var(--primary))]
            text-xl
          "
          >
            {item.icon}
          </div>

        </div>
      ))}
    </div>
  );
};

export default StatsCards;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/notification/NotificationBell.jsx  (2.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { useEffect, useState } from "react";
import { FiBell } from "react-icons/fi";

import NotificationDropdown from "./NotificationDropdown";

import {
  getNotifications
} from "../../services/notificationService";

const NotificationBell = () => {

  const [open, setOpen] = useState(false);

  const [notifications, setNotifications] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchNotifications = async () => {

    try {

      setLoading(true);

      const data = await getNotifications();

      console.log("Notifications:", data);

      // YOUR BACKEND RETURNS:
      // {
      //   notifications,
      //   unreadCount
      // }

      if (Array.isArray(data.notifications)) {

        setNotifications(data.notifications);

      } else {

        setNotifications([]);

      }

    } catch (error) {

      console.error(
        "Failed to fetch notifications:",
        error
      );

      setNotifications([]);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchNotifications();

    // POLLING
    const interval = setInterval(() => {

      fetchNotifications();

    }, 30000);

    return () => clearInterval(interval);

  }, []);

  // NOW COUNT = TOTAL NOTIFICATIONS
  const unreadCount = notifications.length;

  return (
    <div className="relative">

      {/* BELL BUTTON */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="
          relative
          p-2.5
          rounded-xl
          hover:bg-[rgb(var(--hover))]
          transition
        "
      >

        <FiBell className="text-[22px] text-[rgb(var(--text))]" />

        {/* BADGE */}
        {unreadCount > 0 && (
          <span
            className="
              absolute
              -top-1
              -right-1
              min-w-5
              h-5
              px-1
              rounded-full
              bg-red-500
              text-white
              text-[10px]
              font-semibold
              flex items-center justify-center
            "
          >
            {unreadCount}
          </span>
        )}

      </button>

      {/* DROPDOWN */}
      {open && (
        <NotificationDropdown
          notifications={notifications}
          refreshNotifications={fetchNotifications}
          loading={loading}
        />
      )}

    </div>
  );
};

export default NotificationBell;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/notification/NotificationDropdown.jsx  (4.2 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import {
  clearAllNotifications,
  deleteNotification
} from "../../services/notificationService";

const NotificationDropdown = ({
  notifications,
  refreshNotifications,
  loading
}) => {

  const handleClearAll = async () => {

    try {

      await clearAllNotifications();

      refreshNotifications();

    } catch (error) {

      console.error(
        "Failed to clear notifications:",
        error
      );

    }

  };

  const handleDelete = async (id) => {

    try {

      await deleteNotification(id);

      refreshNotifications();

    } catch (error) {

      console.error(
        "Failed to delete notification:",
        error
      );

    }

  };

  return (
    <div
      className="
        absolute
        right-0
        mt-3
        w-[360px]
        rounded-2xl
        border border-[rgb(var(--border))]
        bg-[rgb(var(--card-bg))]
        shadow-[0_10px_40px_rgba(0,0,0,0.45)]
        overflow-hidden
        z-50
      "
    >

      {/* HEADER */}
      <div
        className="
          flex items-center justify-between
          px-5 py-4
          border-b border-[rgb(var(--border))]
        "
      >

        <h3 className="font-semibold text-[rgb(var(--text))]">
          Notifications
        </h3>

        {notifications.length > 0 && (
          <button
            onClick={handleClearAll}
            className="
              text-xs
              text-[rgb(var(--primary))]
              hover:underline
            "
          >
            Clear all
          </button>
        )}

      </div>

      {/* LIST */}
      <div className="max-h-[400px] overflow-y-auto">

        {loading ? (

          <div
            className="
              p-6
              text-sm
              text-center
              text-[rgb(var(--text-muted))]
            "
          >
            Loading notifications...
          </div>

        ) : notifications.length === 0 ? (

          <div
            className="
              p-6
              text-sm
              text-center
              text-[rgb(var(--text-muted))]
            "
          >
            No notifications yet
          </div>

        ) : (

          notifications.map((notification) => (

            <button
              key={notification._id}
              onClick={() =>
                handleDelete(notification._id)
              }
              className="
                w-full
                text-left
                px-5 py-4
                border-b border-[rgb(var(--border))]
                transition
                hover:bg-[rgb(var(--hover))]
                bg-[rgb(var(--primary-soft))]/20
              "
            >

              <div className="
                flex items-start justify-between gap-3
              ">

                <div className="space-y-1 flex-1">

                  <h4
                    className="
                      text-sm
                      font-semibold
                      text-[rgb(var(--primary))]
                      line-clamp-2
                    "
                  >
                    {notification.title || "Notification"}
                  </h4>

                  <p
                    className="
                      text-xs
                      text-[rgb(var(--text-muted))]
                    "
                  >
                    {notification.body ||
                      notification.message ||
                      "No message"}
                  </p>

                </div>

                {/* UNREAD DOT */}
                <div
                  className="
                    mt-1
                    w-2.5 h-2.5
                    rounded-full
                    bg-[rgb(var(--primary))]
                  "
                />

              </div>

              <span
                className="
                  mt-2
                  block
                  text-[10px]
                  text-[rgb(var(--text-secondary))]
                "
              >
                {new Date(
                  notification.createdAt
                ).toLocaleString()}
              </span>

            </button>

          ))

        )}

      </div>

    </div>
  );
};

export default NotificationDropdown;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/Navbar.jsx  (3.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { FaUserCircle } from "react-icons/fa";
import useTheme from "../hooks/useTheme";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import NotificationBell from "./notification/NotificationBell";

const Navbar = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const avatarLetter = user?.name?.charAt(0)?.toUpperCase();

  return (
    <nav
      className="
      flex items-center justify-between
      px-6
      h-16
      border-b border-[rgb(var(--border))]
      bg-[rgb(var(--navbar-bg))/80]
      backdrop-blur-md
      sticky top-0
      z-50
    "
    >
      {/* LEFT */}
      <div className="flex items-center gap-4">

        <button
          onClick={toggleSidebar}
          className="
          text-xl
          text-[rgb(var(--text))]
          hover:text-[rgb(var(--primary))]
          transition
        "
        >
          <FiMenu />
        </button>

        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-9 w-auto" />
        </Link>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">

        {/* Notification Bell */}
        <NotificationBell />

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="
          relative flex items-center
          w-14 h-7
          bg-[rgb(var(--surface-2))]
          rounded-full
          transition-colors
        "
        >
          <div
            className={`
            absolute w-6 h-6
            rounded-full
            shadow-md
            transform
            transition-transform
            flex items-center justify-center
            text-xs
            ${theme === "dark" ? "translate-x-7" : "translate-x-1"}
            bg-[rgb(var(--card-bg))]
            `}
          >
            {theme === "dark" ? "🌙" : "☀"}
          </div>
        </button>

        {/* USER */}
        <div
          className="
          flex items-center gap-2
          px-3 py-1
          rounded-lg
          hover:bg-[rgb(var(--hover))]
          transition
        "
        >
          <div
            className="
            w-8 h-8
            rounded-full
            flex items-center justify-center
            bg-[rgb(var(--primary-soft))]
            text-[rgb(var(--primary))]
            font-semibold
            text-sm
          "
          >
            {avatarLetter || <FaUserCircle />}
          </div>

          <span className="text-sm font-medium text-[rgb(var(--text))]">
            {user?.name || "User"}
          </span>
        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="
          flex items-center gap-2
          px-3 py-1.5
          rounded-md
          text-white
          bg-[rgb(var(--error))]
          hover:opacity-90
          transition
          text-sm
        "
        >
          <FiLogOut size={16} />
          Logout
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/Sidebar.jsx  (9.7 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

import {
  FiHome,
  FiUsers,
  FiTarget,
  FiClipboard,
  FiUpload,
  FiChevronUp,
  FiLock,
  FiEye,
  FiEyeOff,
  FiLogOut
} from "react-icons/fi";

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const { user, updatePassword } = useContext(AuthContext);

  const [profileOpen, setProfileOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(null);
  const [passwordSuccess, setPasswordSuccess] = useState(null);
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);

  const handleUpdatePassword = async (event) => {
    event.preventDefault();
    setPasswordError(null);
    setPasswordSuccess(null);

    if (!oldPassword.trim() || !newPassword.trim()) {
      setPasswordError("Old and new password are required.");
      return;
    }

    if (newPassword.length < 8) {
      setPasswordError("New password must be at least 8 characters.");
      return;
    }

    try {
      setIsUpdatingPassword(true);
      const response = await updatePassword({
        oldPassword,
        newPassword,
      });
      setPasswordSuccess(response?.data?.message || "Password updated.");
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      setPasswordError(
        err?.response?.data?.message || "Failed to update password."
      );
    } finally {
      setIsUpdatingPassword(false);
    }
  };

  const menu = [
    { name: "Dashboard", path: "/app/dashboard", icon: <FiHome /> },
    { name: "Groups", path: "/app/groups", icon: <FiUsers /> },
    { name: "Goals", path: "/app/goals", icon: <FiTarget /> },
    { name: "Assignments", path: "/app/assignments", icon: <FiClipboard /> },
    { name: "Submissions", path: "/app/submissions", icon: <FiUpload /> }
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed top-16 left-0 z-40
          w-64 h-[calc(100vh-64px)]
          bg-[rgb(var(--sidebar-bg))]
          border-r border-[rgb(var(--border))]
          flex flex-col
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* SECTION LABEL */}
        <div className="px-5 pt-6 pb-3 text-xs uppercase tracking-wider text-[rgb(var(--text-muted))]">
          Navigation
        </div>

        {/* MENU */}
        <nav className="flex flex-col gap-2 px-3">

          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                `
                flex items-center gap-4
                px-4 py-3
                rounded-xl
                text-sm font-medium
                transition-all duration-200
                ${
                  isActive
                    ? "bg-[rgb(var(--primary-soft))] text-[rgb(var(--primary))]"
                    : "text-[rgb(var(--text))] hover:bg-[rgb(var(--hover))]"
                }
              `
              }
            >
              <span className="text-[20px]">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}

        </nav>

        {/* PROFILE EXPANDED PANEL */}
        <div
          className={`
            overflow-hidden
            transition-all duration-300
            ${
              profileOpen
                ? "max-h-96 opacity-100 px-4 py-4"
                : "max-h-0 opacity-0 px-4"
            }
          `}
        >

          <div className="
            rounded-2xl
            border border-[rgb(var(--border))]
            bg-[rgb(var(--card-bg))]
            p-4
            flex flex-col gap-4
          ">

            {/* USER INFO */}
            <div className="space-y-1">

              <h3 className="text-sm font-semibold text-[rgb(var(--text))]">
                {user?.name}
              </h3>

              <p className="text-xs text-[rgb(var(--text-muted))]">
                {user?.email}
              </p>

              <span className="
                inline-block
                mt-1
                px-2 py-1
                rounded-md
                text-[10px]
                capitalize
                bg-[rgb(var(--primary-soft))]
                text-[rgb(var(--primary))]
              ">
                {user?.role}
              </span>

            </div>

            {/* CHANGE PASSWORD */}
            <form className="flex flex-col gap-3" onSubmit={handleUpdatePassword}>

              <div className="relative">

                <FiLock className="
                  absolute left-3 top-1/2 -translate-y-1/2
                  text-[rgb(var(--text-muted))]
                " />

                <input
                  type={showOldPassword ? "text" : "password"}
                  placeholder="Old Password"
                  value={oldPassword}
                  onChange={(event) => setOldPassword(event.target.value)}
                  className="
                    w-full
                    rounded-xl
                    bg-[rgb(var(--hover))]
                    border border-[rgb(var(--border))]
                    pl-10 pr-10 py-2.5
                    text-sm
                    outline-none
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowOldPassword((prev) => !prev)}
                  className="
                    absolute right-3 top-1/2 -translate-y-1/2
                    text-[rgb(var(--text-muted))]
                    hover:text-[rgb(var(--text))]
                    transition
                  "
                  aria-label={
                    showOldPassword ? "Hide old password" : "Show old password"
                  }
                >
                  {showOldPassword ? <FiEyeOff /> : <FiEye />}
                </button>

              </div>

              <div className="relative">

                <FiLock className="
                  absolute left-3 top-1/2 -translate-y-1/2
                  text-[rgb(var(--text-muted))]
                " />

                <input
                  type={showNewPassword ? "text" : "password"}
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                  className="
                    w-full
                    rounded-xl
                    bg-[rgb(var(--hover))]
                    border border-[rgb(var(--border))]
                    pl-10 pr-10 py-2.5
                    text-sm
                    outline-none
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowNewPassword((prev) => !prev)}
                  className="
                    absolute right-3 top-1/2 -translate-y-1/2
                    text-[rgb(var(--text-muted))]
                    hover:text-[rgb(var(--text))]
                    transition
                  "
                  aria-label={
                    showNewPassword ? "Hide new password" : "Show new password"
                  }
                >
                  {showNewPassword ? <FiEyeOff /> : <FiEye />}
                </button>

              </div>

              {passwordError && (
                <p className="text-xs text-red-500">{passwordError}</p>
              )}

              {passwordSuccess && (
                <p className="text-xs text-green-500">{passwordSuccess}</p>
              )}

              <button
                type="submit"
                disabled={isUpdatingPassword}
                className="
                  rounded-xl
                  bg-[rgb(var(--primary))]
                  text-white
                  py-2.5
                  text-sm
                  font-medium
                  transition hover:opacity-90 disabled:opacity-70
                "
              >
                {isUpdatingPassword ? "Updating..." : "Update Password"}
              </button>

            </form>

          </div>

        </div>

        {/* USER PANEL */}
        <button
          onClick={() => setProfileOpen(prev => !prev)}
          className="
            mt-auto
            border-t border-[rgb(var(--border))]
            p-4
            flex items-center justify-between
            hover:bg-[rgb(var(--hover))]
            transition
          "
        >

          <div className="flex items-center gap-3">

            <div className="
              w-11 h-11
              rounded-full
              bg-[rgb(var(--primary-soft))]
              text-[rgb(var(--primary))]
              flex items-center justify-center
              font-semibold
            ">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>

            <div className="flex flex-col text-left">

              <span className="text-sm font-medium text-[rgb(var(--text))]">
                {user?.name || "User"}
              </span>

              <span className="text-xs text-[rgb(var(--text-muted))]">
                {user?.email || "user@email.com"}
              </span>

            </div>

          </div>

          <FiChevronUp
            className={`
              transition-transform duration-300
              ${profileOpen ? "rotate-180" : ""}
            `}
          />

        </button>

      </aside>
    </>
  );
};

export default Sidebar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/contexts/AuthContext.jsx  (2.2 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
    const loggedInUser = data.data.user
    setUser(loggedInUser)
    return loggedInUser
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

  const updatePassword = async (data) => {
    const response = await updatePasswordService(data)
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
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/contexts/ThemeContext.jsx  (834 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    }else{
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useAuth.js  (181 B)
──────────────────────────────────────────────────────────────────────
```js
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useMentorDashboard.js  (1.5 kB)
──────────────────────────────────────────────────────────────────────
```js
import { useEffect, useState } from "react";
import api from "../services/api";

const useMentorDashboard = () => {
  const [stats, setStats] = useState({
    groups: 0,
    learners: 0,
    assignments: 0,
    submissions: 0,
  });

  const [recentSubmissions, setRecentSubmissions] = useState([]);
  const [recentAssignments, setRecentAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await api.get("/dashboard/mentor", {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        });

        console.log(res.data)

        const payload = res?.data?.data ?? {};

        setStats({
          groups: Number(payload.groups) || 0,
          learners: Number(payload.learners) || 0,
          assignments: Number(payload.assignments) || 0,
          submissions: Number(payload.submissions) || 0,
        });

        setRecentSubmissions(payload.recentSubmissions || []);
        setRecentAssignments(payload.recentAssignments || []);
      } catch (err) {
        console.error(err);
        setError(err?.response?.data?.message || "Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  return { stats, recentSubmissions, recentAssignments, loading, error };
};

export default useMentorDashboard;
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useTheme.js  (179 B)
──────────────────────────────────────────────────────────────────────
```js
import {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext.jsx'

const useTheme = () => {
    return useContext(ThemeContext)
}

export default useTheme
```

──────────────────────────────────────────────────────────────────────
FILE: src/layouts/AppLayout.jsx  (869 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[rgb(var(--bg))]">

      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content */}
      <main
        className={`
          pt-6
          px-6
          pb-6
          transition-all duration-300
          ${isSidebarOpen ? "ml-64" : "ml-0"}
        `}
      >
        <Outlet />
      </main>

    </div>
  );
};

export default AppLayout;
```

──────────────────────────────────────────────────────────────────────
FILE: src/layouts/MentorLayout.jsx  (803 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MentorLayout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[rgb(var(--bg))]">

      <Navbar toggleSidebar={toggleSidebar} />

      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <main
        className={`
          pt-6
          px-6
          pb-6
          transition-all duration-300
          ${isSidebarOpen ? "ml-64" : "ml-0"}
      `}
      >
        <Outlet />
      </main>

    </div>
  );
};

export default MentorLayout;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Assignments.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Dashboard.jsx  (1.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import useMentorDashboard from "../../hooks/useMentorDashboard";
import StatsCards from "../../components/mentor/dashboard/StatsCards";
import RecentSubmissions from "../../components/mentor/dashboard/RecentSubmissions";
import RecentAssignments from "../../components/mentor/dashboard/RecentAssignment";

const Dashboard = () => {
  const { stats, recentSubmissions, recentAssignments, loading, error } =
    useMentorDashboard();

  if (loading)
    return (
      <p className="text-[rgb(var(--text-secondary))]">
        Loading dashboard...
      </p>
    );

  if (error)
    return (
      <p className="text-[rgb(var(--error))]">
        Error: {error}
      </p>
    );

  return (
    <div className="flex flex-col gap-8 text-[rgb(var(--text))]">
      <h1 className="text-2xl font-semibold">
        Mentor Dashboard
      </h1>

      <StatsCards stats={stats} />

      <RecentSubmissions submissions={recentSubmissions} />

      <RecentAssignments assignments={recentAssignments} />
    </div>
  );
};

export default Dashboard;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Goals.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/GroupDetails.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Groups.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Messages.jsx  (263 B)
──────────────────────────────────────────────────────────────────────
```jsx
const Messages = () => {
  return (
    <div className="text-[rgb(var(--text))]">
      <h1 className="text-2xl font-semibold">Messages</h1>
      <p className="mt-2 text-[rgb(var(--text-secondary))]">Coming soon.</p>
    </div>
  );
};

export default Messages;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Settings.jsx  (263 B)
──────────────────────────────────────────────────────────────────────
```jsx
const Settings = () => {
  return (
    <div className="text-[rgb(var(--text))]">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <p className="mt-2 text-[rgb(var(--text-secondary))]">Coming soon.</p>
    </div>
  );
};

export default Settings;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/app/Submissions.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/EmailVerification.jsx  (4.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { resendEmailVerification } from '../../services/authService'

const EmailVerification = () => {
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    if (cooldown === 0) return

    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [cooldown])

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
    if (loading || cooldown > 0) return

    try {
      setLoading(true)
      setMessage('')
      setErrorMessage('')

      await resendEmailVerification({ email })

      setMessage('Verification email resent! Please check your inbox.')
      setCooldown(60)
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
            disabled={loading || cooldown > 0}
            className={`font-medium transition-colors ${
              cooldown > 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-indigo-600 hover:text-indigo-700'
            }`}
            onClick={handleResendEmail}
          >
            {cooldown > 0 ? `Resend in ${cooldown}s` : 'Resend email'}
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/ForgotPassword.jsx  (3.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(false)

  const { forgotPassword } = useAuth()

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!email.trim()) {
      setError('Email is required')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format')
      return
    }

    try {
      setLoading(true)

      const response = await forgotPassword({ email })

      setSuccess(response.data.message)

      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="w-full flex flex-col items-center justify-center mb-6 gap-0.5">
        <h2 className="text-3xl font-semibold">Reset Password</h2>
        <h3>We'll send you a reset link</h3>
      </div>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl border border-black p-6 sm:p-8 shadow-lg">
        <div>
          <h3 className="text-xl font-semibold text-black ">
            Forgot your password?
          </h3>
          <p className="text-gray-600">
            Enter your email address and we'll send you a link to reset your
            password
          </p>
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-xl">Email</label>
              <input
                type="email"
                placeholder="xyz@example.com"
                className="w-full rounded-lg border border-black px-3 sm:px-4 py-2 sm:py-2.5 bg-transparent text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}

            {success && (
              <p className="text-green-600 mt-3 text-sm">{success}</p>
            )}
            <div className="mt-2.5">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
              >
                 {loading ? 'Sending...' : 'Send reset link'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/Login.jsx  (458 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import AuthHeader from '../../components/auth/AuthHeader'
import LoginForm from '../../components/auth/LoginForm'
import AuthFooter from '../../components/auth/AuthFooter'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <LoginForm />
      </div>

      <AuthFooter />
    </div>
  )
}

export default Login
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/ResetPassword.jsx  (3.9 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { FiEye, FiEyeOff } from 'react-icons/fi'

const ResetPassword = () => {
    const { resetPassword } = useAuth()
  const { token } = useParams()
  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
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
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="New Password"
                className="w-full border px-4 py-2 rounded-lg pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                className="w-full border px-4 py-2 rounded-lg pr-10"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black transition"
                aria-label={
                  showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'
                }
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/SignUp.jsx  (461 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import AuthHeader from '../../components/auth/AuthHeader'
import AuthFooter from '../../components/auth/AuthFooter'
import SignUpForm from '../../components/auth/SignUpForm'

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <SignUpForm />
      </div>
      <AuthFooter />
    </div>
  )
}

export default SignUp
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/Landing.jsx  (830 B)
──────────────────────────────────────────────────────────────────────
```jsx
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import RolesSection from "../components/landing/RolesSection";
import HowItWorks from "../components/landing/HowItWorks";
import SecuritySection from "../components/landing/SecuritySection";
import CTASection from "../components/landing/CTASection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RolesSection />
      <HowItWorks />
      <SecuritySection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Landing;
```

──────────────────────────────────────────────────────────────────────
FILE: src/routes/ProtectedRoutes.jsx  (312 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoute = () => {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div>
  if (!user) return <Navigate to="/login" replace />

  return <Outlet />
}

export default ProtectedRoute
```

──────────────────────────────────────────────────────────────────────
FILE: src/routes/router.jsx  (2.6 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'

import Landing from '../pages/Landing'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'
import ForgotPassword from '../pages/auth/ForgotPassword'
import ProtectedRoute from './ProtectedRoutes'
import EmailVerification from '../pages/auth/EmailVerification'
import EmailVerified from '../components/auth/EmailVerified'
import ResetPassword from '../pages/auth/ResetPassword'

import AppLayout from '../layouts/AppLayout'
import AppDashboard from '../pages/app/Dashboard'
import AppGroups from '../pages/app/Groups'
import AppGroupDetails from '../pages/app/GroupDetails'
import AppGoals from '../pages/app/Goals'
import AppAssignments from '../pages/app/Assignments'
import AppSubmissions from '../pages/app/Submissions'
import AppMessages from '../pages/app/Messages'
import AppSettings from '../pages/app/Settings'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-email" element={<EmailVerification />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/email-verified" element={<EmailVerified />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/app" element={<AppLayout />}>

          <Route
            index
            element={<Navigate to="dashboard" replace />}
          />

          <Route
            path="dashboard"
            element={<AppDashboard />}
          />

          <Route
            path="groups"
            element={<AppGroups />}
          />

          <Route
            path="groups/:groupId"
            element={<AppGroupDetails />}
          />

          <Route
            path="goals"
            element={<AppGoals />}
          />

          <Route
            path="assignments"
            element={<AppAssignments />}
          />

          <Route
            path="submissions"
            element={<AppSubmissions />}
          />

          <Route
            path="messages"
            element={<AppMessages />}
          />

          <Route
            path="settings"
            element={<AppSettings />}
          />

        </Route>

        <Route
          path="/mentor/*"
          element={<Navigate to="/app/dashboard" replace />}
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  )
)
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/api.js  (339 B)
──────────────────────────────────────────────────────────────────────
```js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  withCredentials: true
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/authService.js  (1.7 kB)
──────────────────────────────────────────────────────────────────────
```js
import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
})

// Attach access token automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Auto refresh on 401
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

export const updatePassword = (data) => API.post('/auth/update-password', data)

export default API
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/groupService.js  (1.7 kB)
──────────────────────────────────────────────────────────────────────
```js
import API from './api'

export const createGroup = async (groupData) => {
  const response = await API.post('/groups', groupData)

  return response.data.data
}

export const joinGroup = async (inviteCode) => {
  const response = await API.post('/groups/join', {
    inviteCode,
  })

  return response.data.data
}

export const viewAllJoinedGroups = async (page = 1, limit = 10) => {
  const response = await API.get(`/groups?page=${page}&limit=${limit}`)

  return response.data.data
}

export const getGroupDetails = async (groupId) => {
  const response = await API.get(`/groups/${groupId}`)

  return response.data.data
}

export const updateGroup = async (groupId, updatedData) => {
  const response = await API.put(`/groups/${groupId}`, updatedData)

  return response.data.data
}

export const deleteGroup = async (groupId) => {
  const response = await API.delete(`/groups/${groupId}`)

  return response.data
}

export const inviteMembers = async (groupId) => {
  const response = await API.post(`/groups/${groupId}/invite`)

  return response.data.data
}

export const regenerateInviteCode = async (groupId) => {
  const response = await API.patch(`/groups/${groupId}/invite/regenerate`)

  return response.data.data
}

export const viewGroupMembers = async (groupId, page = 1, limit = 20) => {
  const response = await API.get(
    `/groups/${groupId}/members?page=${page}&limit=${limit}`
  )

  return response.data.data
}

export const removeGroupMember = async (groupId, userId) => {
  const response = await API.delete(`/groups/${groupId}/members/${userId}`)

  return response.data
}

export const leaveGroup = async (groupId) => {
  const response = await API.post(`/groups/${groupId}/leave`)

  return response.data
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/messageService.js  (532 B)
──────────────────────────────────────────────────────────────────────
```js
import API from './api'

export const sendMessage = async (groupId, content) => {
  const response = await API.post(`/messages/${groupId}`, {
    content,
  })

  return response.data.data
}

export const getGroupMessages = async (groupId, page = 1, limit = 20) => {
  const response = await API.get(
    `/messages/${groupId}?page=${page}&limit=${limit}`
  )

  return response.data.data
}

export const deleteMessage = async (messageId) => {
  const response = await API.delete(`/messages/${messageId}`)

  return response.data
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/notificationService.js  (491 B)
──────────────────────────────────────────────────────────────────────
```js
import API from "./api";

export const getNotifications = async () => {

  const response = await API.get(
    "/notifications"
  );

  return response.data.data;

};

export const deleteNotification =
  async (id) => {

    const response = await API.delete(
      `/notifications/${id}`
    );

    return response.data;

};

export const clearAllNotifications =
  async () => {

    const response = await API.delete(
      "/notifications/clear-all"
    );

    return response.data;

};
```

──────────────────────────────────────────────────────────────────────
FILE: src/App.jsx  (387 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
```

──────────────────────────────────────────────────────────────────────
FILE: src/colors.css  (1.8 kB)
──────────────────────────────────────────────────────────────────────
```css
/* =========================================
   STUDYHIVE COLOR SYSTEM
   Premium SaaS Palette
========================================= */

/* ---------- LIGHT THEME ---------- */

:root {

  /* Brand */
  --primary: 79 70 229;
  --primary-hover: 67 56 202;
  --primary-soft: 235 233 255;

  /* Backgrounds */
  --bg: 246 247 250;
  --surface: 255 255 255;
  --surface-2: 240 242 246;

  /* Text */
  --text: 17 24 39;
  --text-secondary: 75 85 99;
  --text-muted: 156 163 175;

  /* Borders */
  --border: 229 231 235;
  --border-strong: 209 213 219;

  /* Status */
  --success: 34 197 94;
  --warning: 245 158 11;
  --error: 239 68 68;
  --info: 59 130 246;

  /* Layout */
  --navbar-bg: 255 255 255;
  --sidebar-bg: 255 255 255;
  --card-bg: 255 255 255;

  /* Interaction */
  --hover: 243 244 246;
  --active: 229 231 235;
  --focus-ring: 99 102 241;

  /* Tables */
  --table-header: 248 250 252;
  --table-row-hover: 243 244 246;

  /* Overlay */
  --overlay: 17 24 39;
}


/* ---------- DARK THEME ---------- */

[data-theme="dark"] {

  /* Brand */
  --primary: 129 140 248;
  --primary-hover: 99 102 241;
  --primary-soft: 49 46 129;

  /* Backgrounds */
  --bg: 10 14 26;
  --surface: 20 25 40;
  --surface-2: 36 44 66;

  /* Text */
  --text: 248 250 252;
  --text-secondary: 203 213 225;
  --text-muted: 148 163 184;

  /* Borders */
  --border: 58 68 92;
  --border-strong: 71 85 105;

  /* Status */
  --success: 34 197 94;
  --warning: 245 158 11;
  --error: 239 68 68;
  --info: 59 130 246;

  /* Layout */
  --navbar-bg: 10 14 26;
  --sidebar-bg: 15 20 35;
  --card-bg: 24 30 48;

  /* Interaction */
  --hover: 42 50 72;
  --active: 58 68 92;
  --focus-ring: 129 140 248;

  /* Tables */
  --table-header: 24 30 48;
  --table-row-hover: 42 50 72;

  /* Overlay */
  --overlay: 0 0 0;
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/index.css  (47 B)
──────────────────────────────────────────────────────────────────────
```css
@import "tailwindcss";
@import "./colors.css";
```

──────────────────────────────────────────────────────────────────────
FILE: src/main.jsx  (184 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
```

──────────────────────────────────────────────────────────────────────
FILE: Codebase.md  (573.7 kB)
──────────────────────────────────────────────────────────────────────
```md
======================================================================
  StudyHive Frontend — Codebase Snapshot
  Root : /home/adi-dcpp/Desktop/WebDev/Frontend/StudyHive-Frontend
  Date : 3/14/2026, 3:53:37 AM
======================================================================

StudyHive-Frontend/
├── public/
│   └── vite.svg  (1.5 kB)
├── src/
│   ├── assets/
│   │   └── logo.png  (180.1 kB)
│   ├── components/
│   │   ├── landing/
│   │   │   ├── ContactSection.jsx  (1.3 kB)
│   │   │   ├── CTASection.jsx  (757 B)
│   │   │   ├── FadeInSection.jsx  (410 B)
│   │   │   ├── FeaturesSection.jsx  (1.1 kB)
│   │   │   ├── Footer.jsx  (725 B)
│   │   │   ├── HeroSection.jsx  (3.2 kB)
│   │   │   ├── HowItWorks.jsx  (1.0 kB)
│   │   │   ├── Navbar.jsx  (1.4 kB)
│   │   │   ├── RolesSection.jsx  (1.4 kB)
│   │   │   └── SecuritySection.jsx  (716 B)
│   │   ├── mentor/
│   │   │   ├── dashboard/
│   │   │   │   ├── RecentAssignment.jsx  (889 B)
│   │   │   │   ├── RecentSubmissions.jsx  (1.2 kB)
│   │   │   │   └── StatsCards.jsx  (1.2 kB)
│   │   │   ├── Navbar.jsx  (1.9 kB)
│   │   │   └── Sidebar.jsx  (1.3 kB)
│   │   ├── AuthFooter.jsx  (243 B)
│   │   ├── AuthHeader.jsx  (615 B)
│   │   ├── EmailVerified.jsx  (2.1 kB)
│   │   ├── LoginForm.jsx  (4.1 kB)
│   │   └── SignUpForm.jsx  (8.4 kB)
│   ├── contexts/
│   │   ├── AuthContext.jsx  (2.0 kB)
│   │   └── ThemeContext.jsx  (834 B)
│   ├── hooks/
│   │   ├── useAuth.js  (181 B)
│   │   ├── useMentorDashboard.js  (1.6 kB)
│   │   └── useTheme.js  (179 B)
│   ├── layouts/
│   │   ├── AppLayout.jsx  (799 B)
│   │   └── MentorLayout.jsx  (916 B)
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── EmailVerification.jsx  (4.0 kB)
│   │   │   ├── ForgotPassword.jsx  (3.0 kB)
│   │   │   ├── Login.jsx  (443 B)
│   │   │   ├── ResetPassword.jsx  (2.7 kB)
│   │   │   └── SignUp.jsx  (446 B)
│   │   ├── mentor/
│   │   │   ├── Assignments.jsx  (0 B)
│   │   │   ├── Dashboard.jsx  (852 B)
│   │   │   ├── Goals.jsx  (0 B)
│   │   │   ├── GroupDetails.jsx  (0 B)
│   │   │   ├── Groups.jsx  (0 B)
│   │   │   └── Submissions.jsx  (0 B)
│   │   ├── DashboardHome.jsx  (1.5 kB)
│   │   └── Landing.jsx  (830 B)
│   ├── routes/
│   │   ├── ProtectedRoutes.jsx  (312 B)
│   │   └── router.jsx  (1.4 kB)
│   ├── services/
│   │   ├── api.js  (339 B)
│   │   └── authService.js  (1.7 kB)
│   ├── App.jsx  (387 B)
│   ├── colors.css  (1.8 kB)
│   ├── index.css  (47 B)
│   └── main.jsx  (184 B)
├── .env  (41 B)
├── .gitignore  (259 B)
├── .prettierignore  (88 B)
├── .prettierrc  (186 B)
├── Codebase.md  (476.6 kB)
├── eslint.config.js  (758 B)
├── index.html  (367 B)
├── package.json  (986 B)
├── print-codebase.js  (4.8 kB)
├── react  (27.82 MB)
├── react-router-dom  (27.82 MB)
├── README.md  (68 B)
├── vercel.json  (69 B)
└── vite.config.js  (265 B)

======================================================================
  FILE CONTENTS
======================================================================

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/ContactSection.jsx  (1.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/ContactSection.jsx
import FadeInSection from "./FadeInSection";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Connect With Us
          </h2>

          <p className="mt-6 text-gray-600">
            StudyHive is an open collaborative project. Feel free to explore
            the codebase or connect with the creator.
          </p>

          <div className="mt-8 flex justify-center gap-6">

            <a
              href="https://github.com/Adi-Dcpp"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:scale-105 transition-all duration-300"
            >
              GitHub
            </a>

            <a
              href="mailto:luffy1120adi@gmail.com"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
            >
              Email
            </a>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/CTASection.jsx  (757 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/CTASection.jsx
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const CTASection = () => {
  return (
    <section className="py-20 bg-indigo-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold">
            Ready to level up your study workflow?
          </h2>

          <Link
            to="/signup"
            className="mt-8 inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Create Your StudyHive
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CTASection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/FadeInSection.jsx  (410 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { motion } from "framer-motion";

const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/FeaturesSection.jsx  (1.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/FeaturesSection.jsx
import FadeInSection from "./FadeInSection";

const features = [
  "Secure Authentication",
  "Study Group Management",
  "Learning Goal Tracking",
  "Assignment & Submissions",
  "File & Resource Sharing",
  "Progress Monitoring Dashboard",
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Powerful Features
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="font-semibold text-gray-800">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FeaturesSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/Footer.jsx  (725 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} StudyHive. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/HeroSection.jsx  (3.2 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Organize. Collaborate.
                <span className="text-indigo-600"> Succeed Together.</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                StudyHive helps mentors and learners build structured study groups,
                track learning goals, manage assignments, and collaborate
                efficiently in one powerful platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-indigo-700 hover:scale-105"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - DASHBOARD MOCKUP */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">

                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">
                    Web Development Group
                  </h3>
                  <span className="text-sm bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Goal Progress</p>
                  <div className="mt-2 h-2 bg-gray-300 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full w-2/3"></div>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">
                    Assignment Status
                  </p>
                  <div className="mt-3 flex gap-3 text-xs">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                      Pending
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      Submitted
                    </span>
                    <span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
                      Reviewed
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HeroSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/HowItWorks.jsx  (1.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/HowItWorks.jsx
import FadeInSection from "./FadeInSection";

const steps = [
  "Sign Up & Verify Email",
  "Create or Join Study Group",
  "Assign & Complete Goals",
  "Track Progress & Collaborate",
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            How It Works
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
            {steps.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HowItWorks;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/Navbar.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/Navbar.jsx
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LEFT - Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="StudyHive Logo"
            className="h-10 w-auto"
          />
          {/* <span className="text-xl font-bold text-gray-900">
            StudyHive
          </span> */}
        </Link>

        {/* RIGHT - Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>

          <Link
            to="/login"
            className="px-5 py-2 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/RolesSection.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/RolesSection.jsx
import FadeInSection from "./FadeInSection";

const RolesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12">

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-indigo-600">
                For Mentors
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Create Study Groups</li>
                <li>Assign Learning Goals</li>
                <li>Review Submissions</li>
                <li>Post Announcements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-emerald-600">
                For Learners
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Join Groups</li>
                <li>Track Goals</li>
                <li>Submit Assignments</li>
                <li>Access Resources</li>
              </ul>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default RolesSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/SecuritySection.jsx  (716 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/SecuritySection.jsx
import FadeInSection from "./FadeInSection";

const SecuritySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Secure & Reliable
          </h2>
          <p className="mt-6 text-gray-600">
            Role-based access control, secure file uploads, email verification,
            and production-ready backend architecture ensure your learning
            environment stays protected.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default SecuritySection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/dashboard/RecentAssignment.jsx  (889 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from "react";

const RecentAssignments = ({ assignments }) => {
  if (!assignments || assignments.length === 0) {
    return (
      <div className="p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
        <h2 className="text-lg font-semibold mb-4">Recent Assignments</h2>
        <p>No assignments yet</p>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
      <h2 className="text-lg font-semibold mb-4">Recent Assignments</h2>

      <ul className="flex flex-col gap-3">
        {assignments.map((a) => (
          <li key={a._id} className="flex justify-between">
            <span>{a.title}</span>
            <span>{new Date(a.deadline).toLocaleDateString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentAssignments;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/dashboard/RecentSubmissions.jsx  (1.2 kB)
──────────────────────────────────────────────────────────────────────
```jsx
const RecentSubmissions = ({ submissions }) => {
  const safeSubmissions = submissions || [];

  const formatSubmissionLabel = (submission) => {
    const learnerName =
      submission?.learner?.name || submission?.student?.name || "Unknown learner";
    const assignmentTitle =
      submission?.assignment?.title || submission?.title || "Untitled assignment";

    return `${learnerName} submitted ${assignmentTitle}`;
  };

  return (
    <div className="p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
      <h2 className="text-lg font-semibold text-[rgb(var(--text))] mb-4">
        Recent Submissions
      </h2>

      <ul className="flex flex-col gap-2 text-[rgb(var(--text-secondary))]">
        {safeSubmissions.length === 0 && <li>No submissions yet</li>}

        {safeSubmissions.map((submission, index) => (
          <li key={submission?._id || submission?.id || index}>
            {formatSubmissionLabel(submission)} - Submitted: {" "}
            {submission?.submittedAt
              ? new Date(submission.submittedAt).toLocaleDateString()
              : "Date unavailable"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSubmissions;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/dashboard/StatsCards.jsx  (1.2 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { FaUsers, FaLayerGroup, FaClipboardList, FaTasks } from "react-icons/fa";

const StatsCards = ({ stats }) => {
  const cards = [
    { title: "Total Groups", value: stats?.groups || 0, icon: <FaLayerGroup /> },
    { title: "Active Learners", value: stats?.learners || 0, icon: <FaUsers /> },
    { title: "Submissions", value: stats?.submissions || 0, icon: <FaClipboardList /> },
    { title: "Assignments", value: stats?.assignments || 0, icon: <FaTasks /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((item) => (
        <div
          key={item.title}
          className="p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] flex items-center justify-between"
        >
          <div>
            <p className="text-sm text-[rgb(var(--text-secondary))]">
              {item.title}
            </p>
            <h2 className="text-xl font-bold text-[rgb(var(--text))]">
              {item.value}
            </h2>
          </div>

          <div className="text-2xl text-[rgb(var(--primary))]">
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/Navbar.jsx  (1.9 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { FaUserCircle } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <nav className="flex items-center justify-between px-6 h-16 border-b border-[rgb(var(--border))] bg-[rgb(var(--surface))] relative z-50">

      {/* Left Section */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="text-2xl text-[rgb(var(--text))]"
        >
          <FiMenu />
        </button>

        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="relative flex items-center w-14 h-7 bg-[rgb(var(--hover))] rounded-full transition-colors duration-300"
        >
          <div
            className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
              theme === "dark" ? "translate-x-7" : "translate-x-1"
            }`}
          >
            {theme === "dark" ? "🌙" : "☀"}
          </div>
        </button>

        {/* User */}
        <button className="flex items-center gap-2 text-[rgb(var(--text))]">
          <FaUserCircle size={22} />
          <span>User</span>
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="px-3 py-1 rounded-md bg-red-500 text-white"
        >
          Logout
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/Sidebar.jsx  (1.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const menu = [
    { name: "Dashboard", path: "/mentor/dashboard" },
    { name: "Groups", path: "/mentor/groups" },
    { name: "Goals", path: "/mentor/goals" },
    { name: "Assignments", path: "/mentor/assignments" },
    { name: "Submissions", path: "/mentor/submissions" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed top-16 left-0 z-40
          w-70 h-[calc(100vh-64px)]
          bg-[rgb(var(--surface))]
          border-r border-[rgb(var(--border))]
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <nav className="flex flex-col p-4 gap-2">
          {menu.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={toggleSidebar}
              className="px-4 py-2 rounded-md hover:bg-[rgb(var(--hover))] text-[rgb(var(--text))]"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/AuthFooter.jsx  (243 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'

const AuthFooter = () => {
  return (
    <div className="py-4 text-center text-xs text-gray-400">
      By continuing, you agree to our Terms of Service and Privacy Policy
    </div>
  )
}

export default AuthFooter
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/AuthHeader.jsx  (615 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import logo from '../assets/logo.png'

const AuthHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2 sm:py-5 text-center space-y-2">
      <img
        src={logo}
        alt="StudyHive Logo"
        className="h-16 sm:h-18 md:h-20 w-auto"
      />

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray mt-0.5">
        Welcome To StudyHive
      </h2>

      <h3 className="text-gray-400 text-xs sm:text-sm md:text-base">
        Collaborative learning made simple
      </h3>
    </div>
  )
}

export default AuthHeader
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/EmailVerified.jsx  (2.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const EmailVerified = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        navigate("/login", { replace: true });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status, navigate]);

  const handleGoToLogin = () => {
    navigate("/login", { replace: true });
  };

  const handleGoToSignup = () => {
    navigate("/signup", { replace: true });
  };

  const isSuccess = status === "success";

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8 text-center space-y-6">
        
        <div className={`h-16 w-16 mx-auto flex items-center justify-center rounded-full ${
          isSuccess ? "bg-green-50" : "bg-red-50"
        }`}>
          <span className="text-3xl">
            {isSuccess ? "✅" : "❌"}
          </span>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900">
          {isSuccess ? "Email Verified Successfully!" : "Verification Failed"}
        </h2>

        <p className="text-sm text-gray-600">
          {isSuccess
            ? "Your email has been verified. Redirecting you to login..."
            : "The verification link is invalid or has expired."}
        </p>

        {isSuccess ? (
          <button
            onClick={handleGoToLogin}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Go to Login
          </button>
        ) : (
          <button
            onClick={handleGoToSignup}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Back to Signup
          </button>
        )}
      </div>
    </div>
  );
};

export default EmailVerified;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/LoginForm.jsx  (4.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { useNavigate , Link} from 'react-router-dom'
import useAuth from '../hooks/useAuth.js'

const LoginForm = () => {
  // Controlled state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const loggedInUser = await login({ email, password })
      const role = loggedInUser?.role

      if (role === 'mentor') {
        navigate('/mentor/dashboard', { replace: true })
      } else if (role === 'learner') {
        navigate('/learner/dashboard', { replace: true })
      } else {
        navigate('/mentor/dashboard', { replace: true })
      }
    } catch (error) {
      console.log('Login error:', error.response?.data)
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
          <h2 className="text-xl sm:text-2xl font-semibold text-black">
            Sign in to your account
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-black">
            Enter your credentials to continue
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-medium text-shadow-black">
                Password
              </label>
              {/* <a
                href="#"
                className="text-xs sm:text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </a> */}
              <Link to="/forgot-password" className="text-xs sm:text-sm text-blue-500 hover:underline">Forgot password?</Link>
            </div>

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
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="mt-5 sm:mt-6 text-center text-xs sm:text-sm">
          Don&apos;t have an account?{' '}
          {/* <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a> */}
          <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/SignUpForm.jsx  (8.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/contexts/AuthContext.jsx  (2.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
    const loggedInUser = data.data.user
    setUser(loggedInUser)
    return loggedInUser
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/contexts/ThemeContext.jsx  (834 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    }else{
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useAuth.js  (181 B)
──────────────────────────────────────────────────────────────────────
```js
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useMentorDashboard.js  (1.6 kB)
──────────────────────────────────────────────────────────────────────
```js
import { useEffect, useState } from "react";
import api from "../services/api";

const useMentorDashboard = () => {
  const [stats, setStats] = useState({
    groups: 0,
    learners: 0,
    assignments: 0,
    submissions: 0,
  });

  const [recentSubmissions, setRecentSubmissions] = useState([]);
  const [recentAssignments, setRecentAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        console.log("Fetching mentor dashboard...");

        const res = await api.get("/dashboard/mentor", {
          params: { t: Date.now() } // prevents browser caching
        });

        const data = res?.data?.data || {};
        console.log("[useMentorDashboard] raw response:", data);

        const statsData = data.stats || data;

        setStats({
          groups: statsData?.groups ?? 0,
          learners: statsData?.learners ?? 0,
          assignments: statsData?.assignments ?? 0,
          submissions: statsData?.submissions ?? 0,
        });

        setRecentSubmissions(data?.recentSubmissions ?? []);
        setRecentAssignments(data?.recentAssignments ?? []);
      } catch (err) {
        console.error("Dashboard fetch error:", err);

        setError(
          err?.response?.data?.message ||
          err?.message ||
          "Failed to load dashboard"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  return { stats, recentSubmissions, recentAssignments, loading, error };
};

export default useMentorDashboard;
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useTheme.js  (179 B)
──────────────────────────────────────────────────────────────────────
```js
import {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext.jsx'

const useTheme = () => {
    return useContext(ThemeContext)
}

export default useTheme
```

──────────────────────────────────────────────────────────────────────
FILE: src/layouts/AppLayout.jsx  (799 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx"

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Right Section */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
```

──────────────────────────────────────────────────────────────────────
FILE: src/layouts/MentorLayout.jsx  (916 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/mentor/Navbar";
import Sidebar from "../components/mentor/Sidebar";

const MentorLayout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col">

      <Navbar toggleSidebar={toggleSidebar} />

      <div className="flex flex-1">

        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        {/* Dashboard Content */}
        <main
          className={`
            flex-1 p-6 bg-[rgb(var(--bg))]
            transition-all duration-300
            ${isSidebarOpen ? "ml-70" : "ml-0"}
          `}
        >
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default MentorLayout;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/EmailVerification.jsx  (4.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { resendEmailVerification } from '../../services/authService'

const EmailVerification = () => {
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    if (cooldown === 0) return

    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [cooldown])

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
    if (loading || cooldown > 0) return

    try {
      setLoading(true)
      setMessage('')
      setErrorMessage('')

      await resendEmailVerification({ email })

      setMessage('Verification email resent! Please check your inbox.')
      setCooldown(60)
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
            disabled={loading || cooldown > 0}
            className={`font-medium transition-colors ${
              cooldown > 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-indigo-600 hover:text-indigo-700'
            }`}
            onClick={handleResendEmail}
          >
            {cooldown > 0 ? `Resend in ${cooldown}s` : 'Resend email'}
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/ForgotPassword.jsx  (3.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(false)

  const { forgotPassword } = useAuth()

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!email.trim()) {
      setError('Email is required')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format')
      return
    }

    try {
      setLoading(true)

      const response = await forgotPassword({ email })

      setSuccess(response.data.message)

      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="w-full flex flex-col items-center justify-center mb-6 gap-0.5">
        <h2 className="text-3xl font-semibold">Reset Password</h2>
        <h3>We'll send you a reset link</h3>
      </div>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl border border-black p-6 sm:p-8 shadow-lg">
        <div>
          <h3 className="text-xl font-semibold text-black ">
            Forgot your password?
          </h3>
          <p className="text-gray-600">
            Enter your email address and we'll send you a link to reset your
            password
          </p>
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-xl">Email</label>
              <input
                type="email"
                placeholder="xyz@example.com"
                className="w-full rounded-lg border border-black px-3 sm:px-4 py-2 sm:py-2.5 bg-transparent text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}

            {success && (
              <p className="text-green-600 mt-3 text-sm">{success}</p>
            )}
            <div className="mt-2.5">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
              >
                 {loading ? 'Sending...' : 'Send reset link'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/Login.jsx  (443 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import LoginForm from '../../components/LoginForm'
import AuthFooter from '../../components/AuthFooter'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <LoginForm />
      </div>

      <AuthFooter />
    </div>
  )
}

export default Login
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/ResetPassword.jsx  (2.7 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/SignUp.jsx  (446 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import AuthFooter from '../../components/AuthFooter'
import SignUpForm from '../../components/SignUpForm'

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <SignUpForm />
      </div>
      <AuthFooter />
    </div>
  )
}

export default SignUp
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Assignments.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Dashboard.jsx  (852 B)
──────────────────────────────────────────────────────────────────────
```jsx
import useMentorDashboard from "../../hooks/useMentorDashboard";
import StatsCards from "../../components/mentor/dashboard/StatsCards";
import RecentSubmissions from "../../components/mentor/dashboard/RecentSubmissions";
import RecentAssignments from "../../components/mentor/dashboard/RecentAssignment";

const Dashboard = () => {
  const { stats, recentSubmissions, recentAssignments, loading, error } =
    useMentorDashboard();

  if (loading) return <p>Loading dashboard...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">Mentor Dashboard</h1>

      <StatsCards stats={stats} />

      <RecentSubmissions submissions={recentSubmissions} />

      <RecentAssignments assignments={recentAssignments} />
    </div>
  );
};

export default Dashboard;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Goals.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/GroupDetails.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Groups.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Submissions.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/DashboardHome.jsx  (1.5 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import useAuth from '../hooks/useAuth'

const DashboardHome = () => {
  const { user, logout } = useAuth()
  const accessToken = localStorage.getItem('accessToken')

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        🎉 Login Successful
      </h1>

      <div className="bg-white p-4 rounded-lg shadow-md border">
        <h2 className="font-semibold mb-2">User Info:</h2>

        {user ? (
          <div className="space-y-1 text-sm">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p>
              <strong>Email Verified:</strong>{' '}
              {user.isEmailVerified ? 'Yes' : 'No'}
            </p>
          </div>
        ) : (
          <p className="text-red-500">User not loaded</p>
        )}
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md border">
        <h2 className="font-semibold mb-2">Access Token:</h2>

        {accessToken ? (
          <p className="text-xs break-all text-green-600">
            {accessToken}
          </p>
        ) : (
          <p className="text-red-500">No access token found</p>
        )}
      </div>

      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  )
}

export default DashboardHome
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/Landing.jsx  (830 B)
──────────────────────────────────────────────────────────────────────
```jsx
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import RolesSection from "../components/landing/RolesSection";
import HowItWorks from "../components/landing/HowItWorks";
import SecuritySection from "../components/landing/SecuritySection";
import CTASection from "../components/landing/CTASection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RolesSection />
      <HowItWorks />
      <SecuritySection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Landing;
```

──────────────────────────────────────────────────────────────────────
FILE: src/routes/ProtectedRoutes.jsx  (312 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoute = () => {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div>
  if (!user) return <Navigate to="/login" replace />

  return <Outlet />
}

export default ProtectedRoute
```

──────────────────────────────────────────────────────────────────────
FILE: src/routes/router.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'

import Landing from '../pages/Landing'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'
import ForgotPassword from '../pages/auth/ForgotPassword'
import ProtectedRoute from './ProtectedRoutes'
import EmailVerification from '../pages/auth/EmailVerification'
import EmailVerified from '../components/EmailVerified'
import ResetPassword from '../pages/auth/ResetPassword'

import MentorLayout from '../layouts/MentorLayout'
import MentorDashboard from '../pages/mentor/Dashboard'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-email" element={<EmailVerification />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/email-verified" element={<EmailVerified />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      <Route element={<ProtectedRoute />}>
        {/* Mentor routes */}
        <Route path="/mentor" element={<MentorLayout />}>
          <Route path="dashboard" element={<MentorDashboard />} />
        </Route>

      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  )
)
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/api.js  (339 B)
──────────────────────────────────────────────────────────────────────
```js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  withCredentials: true
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/authService.js  (1.7 kB)
──────────────────────────────────────────────────────────────────────
```js
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/App.jsx  (387 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
```

──────────────────────────────────────────────────────────────────────
FILE: src/colors.css  (1.8 kB)
──────────────────────────────────────────────────────────────────────
```css
/* =========================================
   STUDYHIVE COLOR SYSTEM
   Clean Semantic Token Setup
========================================= */

/* ---------- LIGHT THEME ---------- */

:root {

  /* Brand */
  --primary: 79 70 229;
  --primary-hover: 67 56 202;
  --primary-soft: 224 231 255;

  /* Backgrounds */
  --bg: 248 250 252;
  --surface: 255 255 255;
  --surface-2: 241 245 249;

  /* Text */
  --text: 15 23 42;
  --text-secondary: 71 85 105;
  --text-muted: 148 163 184;

  /* Borders */
  --border: 226 232 240;
  --border-strong: 203 213 225;

  /* Status */
  --success: 34 197 94;
  --warning: 234 179 8;
  --error: 239 68 68;
  --info: 59 130 246;

  /* Layout */
  --navbar-bg: 255 255 255;
  --sidebar-bg: 255 255 255;
  --card-bg: 255 255 255;

  /* Interaction */
  --hover: 241 245 249;
  --active: 226 232 240;
  --focus-ring: 99 102 241;

  /* Tables */
  --table-header: 248 250 252;
  --table-row-hover: 241 245 249;

  /* Overlay */
  --overlay: 15 23 42;
}


/* ---------- DARK THEME ---------- */

[data-theme="dark"] {

  /* Brand */
  --primary: 99 102 241;
  --primary-hover: 79 70 229;
  --primary-soft: 55 48 163;

  /* Backgrounds */
  --bg: 15 23 42;
  --surface: 30 41 59;
  --surface-2: 51 65 85;

  /* Text */
  --text: 248 250 252;
  --text-secondary: 203 213 225;
  --text-muted: 148 163 184;

  /* Borders */
  --border: 71 85 105;
  --border-strong: 100 116 139;

  /* Status */
  --success: 34 197 94;
  --warning: 234 179 8;
  --error: 239 68 68;
  --info: 59 130 246;

  /* Layout */
  --navbar-bg: 15 23 42;
  --sidebar-bg: 30 41 59;
  --card-bg: 30 41 59;

  /* Interaction */
  --hover: 51 65 85;
  --active: 71 85 105;
  --focus-ring: 129 140 248;

  /* Tables */
  --table-header: 30 41 59;
  --table-row-hover: 51 65 85;

  /* Overlay */
  --overlay: 0 0 0;
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/index.css  (47 B)
──────────────────────────────────────────────────────────────────────
```css
@import "tailwindcss";
@import "./colors.css";
```

──────────────────────────────────────────────────────────────────────
FILE: src/main.jsx  (184 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
```

──────────────────────────────────────────────────────────────────────
FILE: Codebase.md  (476.6 kB)
──────────────────────────────────────────────────────────────────────
```md
======================================================================
  StudyHive Frontend — Codebase Snapshot
  Root : /home/adi-dcpp/Desktop/WebDev/Frontend/StudyHive-Frontend
  Date : 3/14/2026, 2:44:19 AM
======================================================================

StudyHive-Frontend/
├── public/
│   └── vite.svg  (1.5 kB)
├── src/
│   ├── assets/
│   │   └── logo.png  (180.1 kB)
│   ├── components/
│   │   ├── landing/
│   │   │   ├── ContactSection.jsx  (1.3 kB)
│   │   │   ├── CTASection.jsx  (757 B)
│   │   │   ├── FadeInSection.jsx  (410 B)
│   │   │   ├── FeaturesSection.jsx  (1.1 kB)
│   │   │   ├── Footer.jsx  (725 B)
│   │   │   ├── HeroSection.jsx  (3.2 kB)
│   │   │   ├── HowItWorks.jsx  (1.0 kB)
│   │   │   ├── Navbar.jsx  (1.4 kB)
│   │   │   ├── RolesSection.jsx  (1.4 kB)
│   │   │   └── SecuritySection.jsx  (716 B)
│   │   ├── mentor/
│   │   │   ├── Navbar.jsx  (1.9 kB)
│   │   │   └── Sidebar.jsx  (1.3 kB)
│   │   ├── AuthFooter.jsx  (243 B)
│   │   ├── AuthHeader.jsx  (615 B)
│   │   ├── EmailVerified.jsx  (2.1 kB)
│   │   ├── LoginForm.jsx  (4.1 kB)
│   │   └── SignUpForm.jsx  (8.4 kB)
│   ├── contexts/
│   │   ├── AuthContext.jsx  (2.0 kB)
│   │   └── ThemeContext.jsx  (834 B)
│   ├── hooks/
│   │   ├── useAuth.js  (181 B)
│   │   └── useTheme.js  (179 B)
│   ├── layouts/
│   │   ├── AppLayout.jsx  (799 B)
│   │   └── MentorLayout.jsx  (921 B)
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── EmailVerification.jsx  (4.0 kB)
│   │   │   ├── ForgotPassword.jsx  (3.0 kB)
│   │   │   ├── Login.jsx  (443 B)
│   │   │   ├── ResetPassword.jsx  (2.7 kB)
│   │   │   └── SignUp.jsx  (446 B)
│   │   ├── mentor/
│   │   │   ├── Assignments.jsx  (0 B)
│   │   │   ├── Dashboard.jsx  (1.9 kB)
│   │   │   ├── Goals.jsx  (0 B)
│   │   │   ├── GroupDetails.jsx  (0 B)
│   │   │   ├── Groups.jsx  (0 B)
│   │   │   └── Submissions.jsx  (0 B)
│   │   ├── DashboardHome.jsx  (1.5 kB)
│   │   └── Landing.jsx  (830 B)
│   ├── routes/
│   │   ├── ProtectedRoutes.jsx  (312 B)
│   │   └── router.jsx  (1.4 kB)
│   ├── services/
│   │   └── authService.js  (1.7 kB)
│   ├── App.jsx  (387 B)
│   ├── colors.css  (1.8 kB)
│   ├── index.css  (47 B)
│   └── main.jsx  (184 B)
├── .env  (41 B)
├── .gitignore  (259 B)
├── .prettierignore  (88 B)
├── .prettierrc  (186 B)
├── Codebase.md  (386.3 kB)
├── eslint.config.js  (758 B)
├── index.html  (367 B)
├── package.json  (986 B)
├── print-codebase.js  (4.8 kB)
├── react  (27.82 MB)
├── react-router-dom  (27.82 MB)
├── README.md  (68 B)
├── vercel.json  (69 B)
└── vite.config.js  (265 B)

======================================================================
  FILE CONTENTS
======================================================================

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/ContactSection.jsx  (1.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/ContactSection.jsx
import FadeInSection from "./FadeInSection";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Connect With Us
          </h2>

          <p className="mt-6 text-gray-600">
            StudyHive is an open collaborative project. Feel free to explore
            the codebase or connect with the creator.
          </p>

          <div className="mt-8 flex justify-center gap-6">

            <a
              href="https://github.com/Adi-Dcpp"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:scale-105 transition-all duration-300"
            >
              GitHub
            </a>

            <a
              href="mailto:luffy1120adi@gmail.com"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
            >
              Email
            </a>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/CTASection.jsx  (757 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/CTASection.jsx
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const CTASection = () => {
  return (
    <section className="py-20 bg-indigo-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold">
            Ready to level up your study workflow?
          </h2>

          <Link
            to="/signup"
            className="mt-8 inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Create Your StudyHive
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CTASection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/FadeInSection.jsx  (410 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { motion } from "framer-motion";

const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/FeaturesSection.jsx  (1.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/FeaturesSection.jsx
import FadeInSection from "./FadeInSection";

const features = [
  "Secure Authentication",
  "Study Group Management",
  "Learning Goal Tracking",
  "Assignment & Submissions",
  "File & Resource Sharing",
  "Progress Monitoring Dashboard",
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Powerful Features
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="font-semibold text-gray-800">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FeaturesSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/Footer.jsx  (725 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} StudyHive. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/HeroSection.jsx  (3.2 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Organize. Collaborate.
                <span className="text-indigo-600"> Succeed Together.</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                StudyHive helps mentors and learners build structured study groups,
                track learning goals, manage assignments, and collaborate
                efficiently in one powerful platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-indigo-700 hover:scale-105"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - DASHBOARD MOCKUP */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">

                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">
                    Web Development Group
                  </h3>
                  <span className="text-sm bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Goal Progress</p>
                  <div className="mt-2 h-2 bg-gray-300 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full w-2/3"></div>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">
                    Assignment Status
                  </p>
                  <div className="mt-3 flex gap-3 text-xs">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                      Pending
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      Submitted
                    </span>
                    <span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
                      Reviewed
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HeroSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/HowItWorks.jsx  (1.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/HowItWorks.jsx
import FadeInSection from "./FadeInSection";

const steps = [
  "Sign Up & Verify Email",
  "Create or Join Study Group",
  "Assign & Complete Goals",
  "Track Progress & Collaborate",
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            How It Works
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
            {steps.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HowItWorks;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/Navbar.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/Navbar.jsx
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LEFT - Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="StudyHive Logo"
            className="h-10 w-auto"
          />
          {/* <span className="text-xl font-bold text-gray-900">
            StudyHive
          </span> */}
        </Link>

        {/* RIGHT - Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>

          <Link
            to="/login"
            className="px-5 py-2 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/RolesSection.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/RolesSection.jsx
import FadeInSection from "./FadeInSection";

const RolesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12">

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-indigo-600">
                For Mentors
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Create Study Groups</li>
                <li>Assign Learning Goals</li>
                <li>Review Submissions</li>
                <li>Post Announcements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-emerald-600">
                For Learners
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Join Groups</li>
                <li>Track Goals</li>
                <li>Submit Assignments</li>
                <li>Access Resources</li>
              </ul>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default RolesSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/SecuritySection.jsx  (716 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/SecuritySection.jsx
import FadeInSection from "./FadeInSection";

const SecuritySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Secure & Reliable
          </h2>
          <p className="mt-6 text-gray-600">
            Role-based access control, secure file uploads, email verification,
            and production-ready backend architecture ensure your learning
            environment stays protected.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default SecuritySection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/Navbar.jsx  (1.9 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { FaUserCircle } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <nav className="flex items-center justify-between px-6 h-16 border-b border-[rgb(var(--border))] bg-[rgb(var(--surface))] relative z-50">

      {/* Left Section */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="text-2xl text-[rgb(var(--text))]"
        >
          <FiMenu />
        </button>

        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="relative flex items-center w-14 h-7 bg-[rgb(var(--hover))] rounded-full transition-colors duration-300"
        >
          <div
            className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
              theme === "dark" ? "translate-x-7" : "translate-x-1"
            }`}
          >
            {theme === "dark" ? "🌙" : "☀"}
          </div>
        </button>

        {/* User */}
        <button className="flex items-center gap-2 text-[rgb(var(--text))]">
          <FaUserCircle size={22} />
          <span>User</span>
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="px-3 py-1 rounded-md bg-red-500 text-white"
        >
          Logout
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/Sidebar.jsx  (1.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const menu = [
    { name: "Dashboard", path: "/mentor/dashboard" },
    { name: "Groups", path: "/mentor/groups" },
    { name: "Goals", path: "/mentor/goals" },
    { name: "Assignments", path: "/mentor/assignments" },
    { name: "Submissions", path: "/mentor/submissions" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
          fixed top-16 left-0 z-40
          w-[280px] h-[calc(100vh-64px)]
          bg-[rgb(var(--surface))]
          border-r border-[rgb(var(--border))]
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <nav className="flex flex-col p-4 gap-2">
          {menu.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={toggleSidebar}
              className="px-4 py-2 rounded-md hover:bg-[rgb(var(--hover))] text-[rgb(var(--text))]"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/AuthFooter.jsx  (243 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'

const AuthFooter = () => {
  return (
    <div className="py-4 text-center text-xs text-gray-400">
      By continuing, you agree to our Terms of Service and Privacy Policy
    </div>
  )
}

export default AuthFooter
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/AuthHeader.jsx  (615 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import logo from '../assets/logo.png'

const AuthHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2 sm:py-5 text-center space-y-2">
      <img
        src={logo}
        alt="StudyHive Logo"
        className="h-16 sm:h-18 md:h-20 w-auto"
      />

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray mt-0.5">
        Welcome To StudyHive
      </h2>

      <h3 className="text-gray-400 text-xs sm:text-sm md:text-base">
        Collaborative learning made simple
      </h3>
    </div>
  )
}

export default AuthHeader
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/EmailVerified.jsx  (2.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const EmailVerified = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        navigate("/login", { replace: true });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status, navigate]);

  const handleGoToLogin = () => {
    navigate("/login", { replace: true });
  };

  const handleGoToSignup = () => {
    navigate("/signup", { replace: true });
  };

  const isSuccess = status === "success";

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8 text-center space-y-6">
        
        <div className={`h-16 w-16 mx-auto flex items-center justify-center rounded-full ${
          isSuccess ? "bg-green-50" : "bg-red-50"
        }`}>
          <span className="text-3xl">
            {isSuccess ? "✅" : "❌"}
          </span>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900">
          {isSuccess ? "Email Verified Successfully!" : "Verification Failed"}
        </h2>

        <p className="text-sm text-gray-600">
          {isSuccess
            ? "Your email has been verified. Redirecting you to login..."
            : "The verification link is invalid or has expired."}
        </p>

        {isSuccess ? (
          <button
            onClick={handleGoToLogin}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Go to Login
          </button>
        ) : (
          <button
            onClick={handleGoToSignup}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Back to Signup
          </button>
        )}
      </div>
    </div>
  );
};

export default EmailVerified;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/LoginForm.jsx  (4.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { useNavigate , Link} from 'react-router-dom'
import useAuth from '../hooks/useAuth.js'

const LoginForm = () => {
  // Controlled state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const loggedInUser = await login({ email, password })
      const role = loggedInUser?.role

      if (role === 'mentor') {
        navigate('/mentor/dashboard', { replace: true })
      } else if (role === 'learner') {
        navigate('/learner/dashboard', { replace: true })
      } else {
        navigate('/mentor/dashboard', { replace: true })
      }
    } catch (error) {
      console.log('Login error:', error.response?.data)
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
          <h2 className="text-xl sm:text-2xl font-semibold text-black">
            Sign in to your account
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-black">
            Enter your credentials to continue
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-medium text-shadow-black">
                Password
              </label>
              {/* <a
                href="#"
                className="text-xs sm:text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </a> */}
              <Link to="/forgot-password" className="text-xs sm:text-sm text-blue-500 hover:underline">Forgot password?</Link>
            </div>

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
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="mt-5 sm:mt-6 text-center text-xs sm:text-sm">
          Don&apos;t have an account?{' '}
          {/* <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a> */}
          <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/SignUpForm.jsx  (8.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/contexts/AuthContext.jsx  (2.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
    const loggedInUser = data.data.user
    setUser(loggedInUser)
    return loggedInUser
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/contexts/ThemeContext.jsx  (834 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    }else{
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useAuth.js  (181 B)
──────────────────────────────────────────────────────────────────────
```js
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useTheme.js  (179 B)
──────────────────────────────────────────────────────────────────────
```js
import {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext.jsx'

const useTheme = () => {
    return useContext(ThemeContext)
}

export default useTheme
```

──────────────────────────────────────────────────────────────────────
FILE: src/layouts/AppLayout.jsx  (799 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx"

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Right Section */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
```

──────────────────────────────────────────────────────────────────────
FILE: src/layouts/MentorLayout.jsx  (921 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/mentor/Navbar";
import Sidebar from "../components/mentor/Sidebar";

const MentorLayout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col">

      <Navbar toggleSidebar={toggleSidebar} />

      <div className="flex flex-1">

        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        {/* Dashboard Content */}
        <main
          className={`
            flex-1 p-6 bg-[rgb(var(--bg))]
            transition-all duration-300
            ${isSidebarOpen ? "ml-[280px]" : "ml-0"}
          `}
        >
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default MentorLayout;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/EmailVerification.jsx  (4.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { resendEmailVerification } from '../../services/authService'

const EmailVerification = () => {
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    if (cooldown === 0) return

    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [cooldown])

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
    if (loading || cooldown > 0) return

    try {
      setLoading(true)
      setMessage('')
      setErrorMessage('')

      await resendEmailVerification({ email })

      setMessage('Verification email resent! Please check your inbox.')
      setCooldown(60)
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
            disabled={loading || cooldown > 0}
            className={`font-medium transition-colors ${
              cooldown > 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-indigo-600 hover:text-indigo-700'
            }`}
            onClick={handleResendEmail}
          >
            {cooldown > 0 ? `Resend in ${cooldown}s` : 'Resend email'}
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/ForgotPassword.jsx  (3.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(false)

  const { forgotPassword } = useAuth()

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!email.trim()) {
      setError('Email is required')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format')
      return
    }

    try {
      setLoading(true)

      const response = await forgotPassword({ email })

      setSuccess(response.data.message)

      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="w-full flex flex-col items-center justify-center mb-6 gap-0.5">
        <h2 className="text-3xl font-semibold">Reset Password</h2>
        <h3>We'll send you a reset link</h3>
      </div>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl border border-black p-6 sm:p-8 shadow-lg">
        <div>
          <h3 className="text-xl font-semibold text-black ">
            Forgot your password?
          </h3>
          <p className="text-gray-600">
            Enter your email address and we'll send you a link to reset your
            password
          </p>
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-xl">Email</label>
              <input
                type="email"
                placeholder="xyz@example.com"
                className="w-full rounded-lg border border-black px-3 sm:px-4 py-2 sm:py-2.5 bg-transparent text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}

            {success && (
              <p className="text-green-600 mt-3 text-sm">{success}</p>
            )}
            <div className="mt-2.5">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
              >
                 {loading ? 'Sending...' : 'Send reset link'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/Login.jsx  (443 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import LoginForm from '../../components/LoginForm'
import AuthFooter from '../../components/AuthFooter'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <LoginForm />
      </div>

      <AuthFooter />
    </div>
  )
}

export default Login
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/ResetPassword.jsx  (2.7 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/SignUp.jsx  (446 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import AuthFooter from '../../components/AuthFooter'
import SignUpForm from '../../components/SignUpForm'

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <SignUpForm />
      </div>
      <AuthFooter />
    </div>
  )
}

export default SignUp
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Assignments.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Dashboard.jsx  (1.9 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { FaUsers, FaLayerGroup, FaClipboardList, FaTasks } from "react-icons/fa";

const Dashboard = () => {

  const stats = [
    { title: "Total Groups", value: 5, icon: <FaLayerGroup /> },
    { title: "Active Learners", value: 42, icon: <FaUsers /> },
    { title: "Pending Submissions", value: 8, icon: <FaClipboardList /> },
    { title: "Assignments", value: 12, icon: <FaTasks /> },
  ];

  return (
    <div className="flex flex-col gap-8">

      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-[rgb(var(--text))]">
        Mentor Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-[rgb(var(--text-secondary))]">
                {item.title}
              </p>
              <h2 className="text-xl font-bold text-[rgb(var(--text))]">
                {item.value}
              </h2>
            </div>

            <div className="text-2xl text-[rgb(var(--primary))]">
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
        <h2 className="text-lg font-semibold text-[rgb(var(--text))] mb-4">
          Recent Activity
        </h2>

        <ul className="flex flex-col gap-2 text-[rgb(var(--text-secondary))]">
          <li>Group "React Basics" created</li>
          <li>Assignment "Hooks Practice" submitted</li>
          <li>New learner joined "DSA Bootcamp"</li>
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Goals.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/GroupDetails.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Groups.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Submissions.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/DashboardHome.jsx  (1.5 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import useAuth from '../hooks/useAuth'

const DashboardHome = () => {
  const { user, logout } = useAuth()
  const accessToken = localStorage.getItem('accessToken')

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        🎉 Login Successful
      </h1>

      <div className="bg-white p-4 rounded-lg shadow-md border">
        <h2 className="font-semibold mb-2">User Info:</h2>

        {user ? (
          <div className="space-y-1 text-sm">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p>
              <strong>Email Verified:</strong>{' '}
              {user.isEmailVerified ? 'Yes' : 'No'}
            </p>
          </div>
        ) : (
          <p className="text-red-500">User not loaded</p>
        )}
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md border">
        <h2 className="font-semibold mb-2">Access Token:</h2>

        {accessToken ? (
          <p className="text-xs break-all text-green-600">
            {accessToken}
          </p>
        ) : (
          <p className="text-red-500">No access token found</p>
        )}
      </div>

      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  )
}

export default DashboardHome
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/Landing.jsx  (830 B)
──────────────────────────────────────────────────────────────────────
```jsx
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import RolesSection from "../components/landing/RolesSection";
import HowItWorks from "../components/landing/HowItWorks";
import SecuritySection from "../components/landing/SecuritySection";
import CTASection from "../components/landing/CTASection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RolesSection />
      <HowItWorks />
      <SecuritySection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Landing;
```

──────────────────────────────────────────────────────────────────────
FILE: src/routes/ProtectedRoutes.jsx  (312 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoute = () => {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div>
  if (!user) return <Navigate to="/login" replace />

  return <Outlet />
}

export default ProtectedRoute
```

──────────────────────────────────────────────────────────────────────
FILE: src/routes/router.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'

import Landing from '../pages/Landing'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'
import ForgotPassword from '../pages/auth/ForgotPassword'
import ProtectedRoute from './ProtectedRoutes'
import EmailVerification from '../pages/auth/EmailVerification'
import EmailVerified from '../components/EmailVerified'
import ResetPassword from '../pages/auth/ResetPassword'

import MentorLayout from '../layouts/MentorLayout'
import MentorDashboard from '../pages/mentor/Dashboard'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-email" element={<EmailVerification />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/email-verified" element={<EmailVerified />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      <Route element={<ProtectedRoute />}>
        {/* Mentor routes */}
        <Route path="/mentor" element={<MentorLayout />}>
          <Route path="dashboard" element={<MentorDashboard />} />
        </Route>

      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  )
)
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/authService.js  (1.7 kB)
──────────────────────────────────────────────────────────────────────
```js
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
      } catch (refreshError) {
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/App.jsx  (387 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
```

──────────────────────────────────────────────────────────────────────
FILE: src/colors.css  (1.8 kB)
──────────────────────────────────────────────────────────────────────
```css
/* =========================================
   STUDYHIVE COLOR SYSTEM
   Clean Semantic Token Setup
========================================= */

/* ---------- LIGHT THEME ---------- */

:root {

  /* Brand */
  --primary: 79 70 229;
  --primary-hover: 67 56 202;
  --primary-soft: 224 231 255;

  /* Backgrounds */
  --bg: 248 250 252;
  --surface: 255 255 255;
  --surface-2: 241 245 249;

  /* Text */
  --text: 15 23 42;
  --text-secondary: 71 85 105;
  --text-muted: 148 163 184;

  /* Borders */
  --border: 226 232 240;
  --border-strong: 203 213 225;

  /* Status */
  --success: 34 197 94;
  --warning: 234 179 8;
  --error: 239 68 68;
  --info: 59 130 246;

  /* Layout */
  --navbar-bg: 255 255 255;
  --sidebar-bg: 255 255 255;
  --card-bg: 255 255 255;

  /* Interaction */
  --hover: 241 245 249;
  --active: 226 232 240;
  --focus-ring: 99 102 241;

  /* Tables */
  --table-header: 248 250 252;
  --table-row-hover: 241 245 249;

  /* Overlay */
  --overlay: 15 23 42;
}


/* ---------- DARK THEME ---------- */

[data-theme="dark"] {

  /* Brand */
  --primary: 99 102 241;
  --primary-hover: 79 70 229;
  --primary-soft: 55 48 163;

  /* Backgrounds */
  --bg: 15 23 42;
  --surface: 30 41 59;
  --surface-2: 51 65 85;

  /* Text */
  --text: 248 250 252;
  --text-secondary: 203 213 225;
  --text-muted: 148 163 184;

  /* Borders */
  --border: 71 85 105;
  --border-strong: 100 116 139;

  /* Status */
  --success: 34 197 94;
  --warning: 234 179 8;
  --error: 239 68 68;
  --info: 59 130 246;

  /* Layout */
  --navbar-bg: 15 23 42;
  --sidebar-bg: 30 41 59;
  --card-bg: 30 41 59;

  /* Interaction */
  --hover: 51 65 85;
  --active: 71 85 105;
  --focus-ring: 129 140 248;

  /* Tables */
  --table-header: 30 41 59;
  --table-row-hover: 51 65 85;

  /* Overlay */
  --overlay: 0 0 0;
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/index.css  (47 B)
──────────────────────────────────────────────────────────────────────
```css
@import "tailwindcss";
@import "./colors.css";
```

──────────────────────────────────────────────────────────────────────
FILE: src/main.jsx  (184 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
```

──────────────────────────────────────────────────────────────────────
FILE: Codebase.md  (386.3 kB)
──────────────────────────────────────────────────────────────────────
```md
======================================================================
  StudyHive Frontend — Codebase Snapshot
  Root : /home/adi-dcpp/Desktop/WebDev/Frontend/StudyHive-Frontend
  Date : 3/11/2026, 1:27:36 AM
======================================================================

StudyHive-Frontend/
├── public/
│   └── vite.svg  (1.5 kB)
├── src/
│   ├── assets/
│   │   └── logo.png  (143.1 kB)
│   ├── components/
│   │   ├── landing/
│   │   │   ├── ContactSection.jsx  (1.3 kB)
│   │   │   ├── CTASection.jsx  (757 B)
│   │   │   ├── FadeInSection.jsx  (410 B)
│   │   │   ├── FeaturesSection.jsx  (1.1 kB)
│   │   │   ├── Footer.jsx  (725 B)
│   │   │   ├── HeroSection.jsx  (3.2 kB)
│   │   │   ├── HowItWorks.jsx  (1.0 kB)
│   │   │   ├── Navbar.jsx  (1.4 kB)
│   │   │   ├── RolesSection.jsx  (1.4 kB)
│   │   │   └── SecuritySection.jsx  (716 B)
│   │   ├── mentor/
│   │   │   ├── Navbar.jsx  (2.2 kB)
│   │   │   └── Sidebar.jsx  (1.3 kB)
│   │   ├── AuthFooter.jsx  (243 B)
│   │   ├── AuthHeader.jsx  (615 B)
│   │   ├── EmailVerified.jsx  (2.1 kB)
│   │   ├── LoginForm.jsx  (3.9 kB)
│   │   └── SignUpForm.jsx  (8.4 kB)
│   ├── contexts/
│   │   ├── AuthContext.jsx  (1.9 kB)
│   │   └── ThemeContext.jsx  (834 B)
│   ├── hooks/
│   │   ├── useAuth.js  (181 B)
│   │   └── useTheme.js  (179 B)
│   ├── layouts/
│   │   ├── AppLayout.jsx  (799 B)
│   │   └── MentorLayout.jsx  (718 B)
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── EmailVerification.jsx  (4.0 kB)
│   │   │   ├── ForgotPassword.jsx  (3.0 kB)
│   │   │   ├── Login.jsx  (443 B)
│   │   │   ├── ResetPassword.jsx  (2.7 kB)
│   │   │   └── SignUp.jsx  (446 B)
│   │   ├── mentor/
│   │   │   ├── Assignments.jsx  (0 B)
│   │   │   ├── Dashboard.jsx  (1.9 kB)
│   │   │   ├── Goals.jsx  (0 B)
│   │   │   ├── GroupDetails.jsx  (0 B)
│   │   │   ├── Groups.jsx  (0 B)
│   │   │   └── Submissions.jsx  (0 B)
│   │   ├── DashboardHome.jsx  (1.5 kB)
│   │   └── Landing.jsx  (830 B)
│   ├── routes/
│   │   ├── ProtectedRoutes.jsx  (312 B)
│   │   └── router.jsx  (1.4 kB)
│   ├── services/
│   │   └── authService.js  (1.7 kB)
│   ├── App.jsx  (387 B)
│   ├── colors.css  (1.8 kB)
│   ├── index.css  (47 B)
│   └── main.jsx  (184 B)
├── .env  (41 B)
├── .gitignore  (259 B)
├── .prettierignore  (88 B)
├── .prettierrc  (186 B)
├── Codebase.md  (296.4 kB)
├── eslint.config.js  (758 B)
├── index.html  (367 B)
├── package.json  (986 B)
├── print-codebase.js  (4.8 kB)
├── README.md  (68 B)
├── vercel.json  (69 B)
└── vite.config.js  (265 B)

======================================================================
  FILE CONTENTS
======================================================================

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/ContactSection.jsx  (1.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/ContactSection.jsx
import FadeInSection from "./FadeInSection";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Connect With Us
          </h2>

          <p className="mt-6 text-gray-600">
            StudyHive is an open collaborative project. Feel free to explore
            the codebase or connect with the creator.
          </p>

          <div className="mt-8 flex justify-center gap-6">

            <a
              href="https://github.com/Adi-Dcpp"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:scale-105 transition-all duration-300"
            >
              GitHub
            </a>

            <a
              href="mailto:luffy1120adi@gmail.com"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
            >
              Email
            </a>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/CTASection.jsx  (757 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/CTASection.jsx
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const CTASection = () => {
  return (
    <section className="py-20 bg-indigo-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold">
            Ready to level up your study workflow?
          </h2>

          <Link
            to="/signup"
            className="mt-8 inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Create Your StudyHive
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CTASection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/FadeInSection.jsx  (410 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { motion } from "framer-motion";

const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/FeaturesSection.jsx  (1.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/FeaturesSection.jsx
import FadeInSection from "./FadeInSection";

const features = [
  "Secure Authentication",
  "Study Group Management",
  "Learning Goal Tracking",
  "Assignment & Submissions",
  "File & Resource Sharing",
  "Progress Monitoring Dashboard",
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Powerful Features
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="font-semibold text-gray-800">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FeaturesSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/Footer.jsx  (725 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} StudyHive. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/HeroSection.jsx  (3.2 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Organize. Collaborate.
                <span className="text-indigo-600"> Succeed Together.</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                StudyHive helps mentors and learners build structured study groups,
                track learning goals, manage assignments, and collaborate
                efficiently in one powerful platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-indigo-700 hover:scale-105"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - DASHBOARD MOCKUP */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">

                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">
                    Web Development Group
                  </h3>
                  <span className="text-sm bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Goal Progress</p>
                  <div className="mt-2 h-2 bg-gray-300 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full w-2/3"></div>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">
                    Assignment Status
                  </p>
                  <div className="mt-3 flex gap-3 text-xs">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                      Pending
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      Submitted
                    </span>
                    <span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
                      Reviewed
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HeroSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/HowItWorks.jsx  (1.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/HowItWorks.jsx
import FadeInSection from "./FadeInSection";

const steps = [
  "Sign Up & Verify Email",
  "Create or Join Study Group",
  "Assign & Complete Goals",
  "Track Progress & Collaborate",
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            How It Works
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
            {steps.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HowItWorks;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/Navbar.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/Navbar.jsx
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LEFT - Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="StudyHive Logo"
            className="h-10 w-auto"
          />
          {/* <span className="text-xl font-bold text-gray-900">
            StudyHive
          </span> */}
        </Link>

        {/* RIGHT - Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>

          <Link
            to="/login"
            className="px-5 py-2 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/RolesSection.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/RolesSection.jsx
import FadeInSection from "./FadeInSection";

const RolesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12">

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-indigo-600">
                For Mentors
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Create Study Groups</li>
                <li>Assign Learning Goals</li>
                <li>Review Submissions</li>
                <li>Post Announcements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-emerald-600">
                For Learners
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Join Groups</li>
                <li>Track Goals</li>
                <li>Submit Assignments</li>
                <li>Access Resources</li>
              </ul>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default RolesSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/SecuritySection.jsx  (716 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/SecuritySection.jsx
import FadeInSection from "./FadeInSection";

const SecuritySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Secure & Reliable
          </h2>
          <p className="mt-6 text-gray-600">
            Role-based access control, secure file uploads, email verification,
            and production-ready backend architecture ensure your learning
            environment stays protected.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default SecuritySection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/Navbar.jsx  (2.2 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { FaUserCircle } from "react-icons/fa";
import useTheme from "../../hooks/useTheme";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
    const { theme, toggleTheme } = useTheme();

    const handleLogout = () => {
        console.log("User logged out");
    };

    return (
        <nav className="flex items-center justify-between px-6 h-16 border-b border-[rgb(var(--border))] bg-[rgb(var(--surface))]">

            {/* Logo */}
            <div className="flex items-center gap-2">
                <Link to="/">
                    <img src={logo} alt="Logo" className="h-10 w-auto" />
                </Link>
            </div>

            <button
                onClick={toggleSidebar}
                className="lg:hidden text-2xl text-[rgb(var(--text))]"
            >
                <FiMenu />
            </button>
            {/* Right Section */}
            <div className="flex items-center gap-6">

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="relative flex items-center w-14 h-7 bg-[rgb(var(--hover))] rounded-full transition-colors duration-300"
                >
                    <div
                        className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${theme === "dark" ? "translate-x-7" : "translate-x-1"
                            }`}
                    >
                        {theme === "dark" ? "🌙" : "☀"}
                    </div>
                </button>

                {/* User Details Button */}
                <button className="flex items-center gap-2 text-[rgb(var(--text))]">
                    <FaUserCircle size={22} />
                    <span>User</span>
                </button>

                {/* Logout */}
                <button
                    onClick={handleLogout}
                    className="px-3 py-1 rounded-md bg-red-500 text-white"
                >
                    Logout
                </button>

            </div>
        </nav>
    );
};

export default Navbar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/Sidebar.jsx  (1.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const menu = [
    { name: "Dashboard", path: "/mentor/dashboard" },
    { name: "Groups", path: "/mentor/groups" },
    { name: "Goals", path: "/mentor/goals" },
    { name: "Assignments", path: "/mentor/assignments" },
    { name: "Submissions", path: "/mentor/submissions" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
        fixed lg:static
        w-[280px] h-full
        bg-[rgb(var(--surface))]
        border-r border-[rgb(var(--border))]
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
        `}
      >
        <nav className="flex flex-col p-4 gap-2">
          {menu.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={toggleSidebar}
              className="px-4 py-2 rounded-md hover:bg-[rgb(var(--hover))]"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/AuthFooter.jsx  (243 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'

const AuthFooter = () => {
  return (
    <div className="py-4 text-center text-xs text-gray-400">
      By continuing, you agree to our Terms of Service and Privacy Policy
    </div>
  )
}

export default AuthFooter
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/AuthHeader.jsx  (615 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import logo from '../assets/logo.png'

const AuthHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2 sm:py-5 text-center space-y-2">
      <img
        src={logo}
        alt="StudyHive Logo"
        className="h-16 sm:h-18 md:h-20 w-auto"
      />

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray mt-0.5">
        Welcome To StudyHive
      </h2>

      <h3 className="text-gray-400 text-xs sm:text-sm md:text-base">
        Collaborative learning made simple
      </h3>
    </div>
  )
}

export default AuthHeader
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/EmailVerified.jsx  (2.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const EmailVerified = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        navigate("/login", { replace: true });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status, navigate]);

  const handleGoToLogin = () => {
    navigate("/login", { replace: true });
  };

  const handleGoToSignup = () => {
    navigate("/signup", { replace: true });
  };

  const isSuccess = status === "success";

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8 text-center space-y-6">
        
        <div className={`h-16 w-16 mx-auto flex items-center justify-center rounded-full ${
          isSuccess ? "bg-green-50" : "bg-red-50"
        }`}>
          <span className="text-3xl">
            {isSuccess ? "✅" : "❌"}
          </span>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900">
          {isSuccess ? "Email Verified Successfully!" : "Verification Failed"}
        </h2>

        <p className="text-sm text-gray-600">
          {isSuccess
            ? "Your email has been verified. Redirecting you to login..."
            : "The verification link is invalid or has expired."}
        </p>

        {isSuccess ? (
          <button
            onClick={handleGoToLogin}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Go to Login
          </button>
        ) : (
          <button
            onClick={handleGoToSignup}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Back to Signup
          </button>
        )}
      </div>
    </div>
  );
};

export default EmailVerified;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/LoginForm.jsx  (3.9 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { useNavigate , Link} from 'react-router-dom'
import useAuth from '../hooks/useAuth.js'

const LoginForm = () => {
  // Controlled state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await login({ email, password })
      navigate('/dashboard', { replace: true })
    } catch (error) {
      console.log('Login error:', error.response?.data)
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
          <h2 className="text-xl sm:text-2xl font-semibold text-black">
            Sign in to your account
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-black">
            Enter your credentials to continue
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-medium text-shadow-black">
                Password
              </label>
              {/* <a
                href="#"
                className="text-xs sm:text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </a> */}
              <Link to="/forgot-password" className="text-xs sm:text-sm text-blue-500 hover:underline">Forgot password?</Link>
            </div>

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
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="mt-5 sm:mt-6 text-center text-xs sm:text-sm">
          Don&apos;t have an account?{' '}
          {/* <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a> */}
          <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/SignUpForm.jsx  (8.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/contexts/AuthContext.jsx  (1.9 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/contexts/ThemeContext.jsx  (834 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    }else{
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useAuth.js  (181 B)
──────────────────────────────────────────────────────────────────────
```js
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useTheme.js  (179 B)
──────────────────────────────────────────────────────────────────────
```js
import {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext.jsx'

const useTheme = () => {
    return useContext(ThemeContext)
}

export default useTheme
```

──────────────────────────────────────────────────────────────────────
FILE: src/layouts/AppLayout.jsx  (799 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx"

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Right Section */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
```

──────────────────────────────────────────────────────────────────────
FILE: src/layouts/MentorLayout.jsx  (718 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/mentor/Navbar";
import Sidebar from "../components/mentor/Sidebar";

const MentorLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-6 bg-[rgb(var(--bg))]">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default MentorLayout;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/EmailVerification.jsx  (4.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { resendEmailVerification } from '../../services/authService'

const EmailVerification = () => {
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    if (cooldown === 0) return

    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [cooldown])

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
    if (loading || cooldown > 0) return

    try {
      setLoading(true)
      setMessage('')
      setErrorMessage('')

      await resendEmailVerification({ email })

      setMessage('Verification email resent! Please check your inbox.')
      setCooldown(60)
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
            disabled={loading || cooldown > 0}
            className={`font-medium transition-colors ${
              cooldown > 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-indigo-600 hover:text-indigo-700'
            }`}
            onClick={handleResendEmail}
          >
            {cooldown > 0 ? `Resend in ${cooldown}s` : 'Resend email'}
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/ForgotPassword.jsx  (3.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(false)

  const { forgotPassword } = useAuth()

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!email.trim()) {
      setError('Email is required')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format')
      return
    }

    try {
      setLoading(true)

      const response = await forgotPassword({ email })

      setSuccess(response.data.message)

      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="w-full flex flex-col items-center justify-center mb-6 gap-0.5">
        <h2 className="text-3xl font-semibold">Reset Password</h2>
        <h3>We'll send you a reset link</h3>
      </div>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl border border-black p-6 sm:p-8 shadow-lg">
        <div>
          <h3 className="text-xl font-semibold text-black ">
            Forgot your password?
          </h3>
          <p className="text-gray-600">
            Enter your email address and we'll send you a link to reset your
            password
          </p>
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-xl">Email</label>
              <input
                type="email"
                placeholder="xyz@example.com"
                className="w-full rounded-lg border border-black px-3 sm:px-4 py-2 sm:py-2.5 bg-transparent text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}

            {success && (
              <p className="text-green-600 mt-3 text-sm">{success}</p>
            )}
            <div className="mt-2.5">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
              >
                 {loading ? 'Sending...' : 'Send reset link'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/Login.jsx  (443 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import LoginForm from '../../components/LoginForm'
import AuthFooter from '../../components/AuthFooter'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <LoginForm />
      </div>

      <AuthFooter />
    </div>
  )
}

export default Login
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/ResetPassword.jsx  (2.7 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/SignUp.jsx  (446 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import AuthFooter from '../../components/AuthFooter'
import SignUpForm from '../../components/SignUpForm'

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <SignUpForm />
      </div>
      <AuthFooter />
    </div>
  )
}

export default SignUp
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Assignments.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Dashboard.jsx  (1.9 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { FaUsers, FaLayerGroup, FaClipboardList, FaTasks } from "react-icons/fa";

const Dashboard = () => {

  const stats = [
    { title: "Total Groups", value: 5, icon: <FaLayerGroup /> },
    { title: "Active Learners", value: 42, icon: <FaUsers /> },
    { title: "Pending Submissions", value: 8, icon: <FaClipboardList /> },
    { title: "Assignments", value: 12, icon: <FaTasks /> },
  ];

  return (
    <div className="flex flex-col gap-8">

      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-[rgb(var(--text))]">
        Mentor Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-[rgb(var(--text-secondary))]">
                {item.title}
              </p>
              <h2 className="text-xl font-bold text-[rgb(var(--text))]">
                {item.value}
              </h2>
            </div>

            <div className="text-2xl text-[rgb(var(--primary))]">
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
        <h2 className="text-lg font-semibold text-[rgb(var(--text))] mb-4">
          Recent Activity
        </h2>

        <ul className="flex flex-col gap-2 text-[rgb(var(--text-secondary))]">
          <li>Group "React Basics" created</li>
          <li>Assignment "Hooks Practice" submitted</li>
          <li>New learner joined "DSA Bootcamp"</li>
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Goals.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/GroupDetails.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Groups.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Submissions.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/DashboardHome.jsx  (1.5 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import useAuth from '../hooks/useAuth'

const DashboardHome = () => {
  const { user, logout } = useAuth()
  const accessToken = localStorage.getItem('accessToken')

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        🎉 Login Successful
      </h1>

      <div className="bg-white p-4 rounded-lg shadow-md border">
        <h2 className="font-semibold mb-2">User Info:</h2>

        {user ? (
          <div className="space-y-1 text-sm">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p>
              <strong>Email Verified:</strong>{' '}
              {user.isEmailVerified ? 'Yes' : 'No'}
            </p>
          </div>
        ) : (
          <p className="text-red-500">User not loaded</p>
        )}
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md border">
        <h2 className="font-semibold mb-2">Access Token:</h2>

        {accessToken ? (
          <p className="text-xs break-all text-green-600">
            {accessToken}
          </p>
        ) : (
          <p className="text-red-500">No access token found</p>
        )}
      </div>

      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  )
}

export default DashboardHome
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/Landing.jsx  (830 B)
──────────────────────────────────────────────────────────────────────
```jsx
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import RolesSection from "../components/landing/RolesSection";
import HowItWorks from "../components/landing/HowItWorks";
import SecuritySection from "../components/landing/SecuritySection";
import CTASection from "../components/landing/CTASection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RolesSection />
      <HowItWorks />
      <SecuritySection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Landing;
```

──────────────────────────────────────────────────────────────────────
FILE: src/routes/ProtectedRoutes.jsx  (312 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoute = () => {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div>
  if (!user) return <Navigate to="/login" replace />

  return <Outlet />
}

export default ProtectedRoute
```

──────────────────────────────────────────────────────────────────────
FILE: src/routes/router.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'

import Landing from '../pages/Landing'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'
import ForgotPassword from '../pages/auth/ForgotPassword'
import ProtectedRoute from './ProtectedRoutes'
import EmailVerification from '../pages/auth/EmailVerification'
import EmailVerified from '../components/EmailVerified'
import ResetPassword from '../pages/auth/ResetPassword'

import MentorLayout from '../layouts/MentorLayout'
import MentorDashboard from '../pages/mentor/Dashboard'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-email" element={<EmailVerification />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/email-verified" element={<EmailVerified />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      <Route element={<ProtectedRoute />}>
        {/* Mentor routes */}
        <Route path="/mentor" element={<MentorLayout />}>
          <Route path="dashboard" element={<MentorDashboard />} />
        </Route>

      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  )
)
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/authService.js  (1.7 kB)
──────────────────────────────────────────────────────────────────────
```js
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
      } catch (refreshError) {
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/App.jsx  (387 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
```

──────────────────────────────────────────────────────────────────────
FILE: src/colors.css  (1.8 kB)
──────────────────────────────────────────────────────────────────────
```css
/* =========================================
   STUDYHIVE COLOR SYSTEM
   Clean Semantic Token Setup
========================================= */

/* ---------- LIGHT THEME ---------- */

:root {

  /* Brand */
  --primary: 79 70 229;
  --primary-hover: 67 56 202;
  --primary-soft: 224 231 255;

  /* Backgrounds */
  --bg: 248 250 252;
  --surface: 255 255 255;
  --surface-2: 241 245 249;

  /* Text */
  --text: 15 23 42;
  --text-secondary: 71 85 105;
  --text-muted: 148 163 184;

  /* Borders */
  --border: 226 232 240;
  --border-strong: 203 213 225;

  /* Status */
  --success: 34 197 94;
  --warning: 234 179 8;
  --error: 239 68 68;
  --info: 59 130 246;

  /* Layout */
  --navbar-bg: 255 255 255;
  --sidebar-bg: 255 255 255;
  --card-bg: 255 255 255;

  /* Interaction */
  --hover: 241 245 249;
  --active: 226 232 240;
  --focus-ring: 99 102 241;

  /* Tables */
  --table-header: 248 250 252;
  --table-row-hover: 241 245 249;

  /* Overlay */
  --overlay: 15 23 42;
}


/* ---------- DARK THEME ---------- */

[data-theme="dark"] {

  /* Brand */
  --primary: 99 102 241;
  --primary-hover: 79 70 229;
  --primary-soft: 55 48 163;

  /* Backgrounds */
  --bg: 15 23 42;
  --surface: 30 41 59;
  --surface-2: 51 65 85;

  /* Text */
  --text: 248 250 252;
  --text-secondary: 203 213 225;
  --text-muted: 148 163 184;

  /* Borders */
  --border: 71 85 105;
  --border-strong: 100 116 139;

  /* Status */
  --success: 34 197 94;
  --warning: 234 179 8;
  --error: 239 68 68;
  --info: 59 130 246;

  /* Layout */
  --navbar-bg: 15 23 42;
  --sidebar-bg: 30 41 59;
  --card-bg: 30 41 59;

  /* Interaction */
  --hover: 51 65 85;
  --active: 71 85 105;
  --focus-ring: 129 140 248;

  /* Tables */
  --table-header: 30 41 59;
  --table-row-hover: 51 65 85;

  /* Overlay */
  --overlay: 0 0 0;
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/index.css  (47 B)
──────────────────────────────────────────────────────────────────────
```css
@import "tailwindcss";
@import "./colors.css";
```

──────────────────────────────────────────────────────────────────────
FILE: src/main.jsx  (184 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
```

──────────────────────────────────────────────────────────────────────
FILE: Codebase.md  (296.4 kB)
──────────────────────────────────────────────────────────────────────
```md
======================================================================
  StudyHive Frontend — Codebase Snapshot
  Root : /home/adi-dcpp/Desktop/WebDev/Frontend/StudyHive-Frontend
  Date : 3/11/2026, 12:52:46 AM
======================================================================

StudyHive-Frontend/
├── public/
│   └── vite.svg  (1.5 kB)
├── src/
│   ├── assets/
│   │   └── logo.png  (143.1 kB)
│   ├── components/
│   │   ├── landing/
│   │   │   ├── ContactSection.jsx  (1.3 kB)
│   │   │   ├── CTASection.jsx  (757 B)
│   │   │   ├── FadeInSection.jsx  (410 B)
│   │   │   ├── FeaturesSection.jsx  (1.1 kB)
│   │   │   ├── Footer.jsx  (725 B)
│   │   │   ├── HeroSection.jsx  (3.2 kB)
│   │   │   ├── HowItWorks.jsx  (1.0 kB)
│   │   │   ├── Navbar.jsx  (1.4 kB)
│   │   │   ├── RolesSection.jsx  (1.4 kB)
│   │   │   └── SecuritySection.jsx  (716 B)
│   │   ├── mentor/
│   │   │   ├── Navbar.jsx  (2.2 kB)
│   │   │   └── Sidebar.jsx  (1.3 kB)
│   │   ├── AuthFooter.jsx  (243 B)
│   │   ├── AuthHeader.jsx  (615 B)
│   │   ├── EmailVerified.jsx  (2.1 kB)
│   │   ├── LoginForm.jsx  (3.9 kB)
│   │   └── SignUpForm.jsx  (8.4 kB)
│   ├── contexts/
│   │   ├── AuthContext.jsx  (1.9 kB)
│   │   └── ThemeContext.jsx  (834 B)
│   ├── hooks/
│   │   ├── useAuth.js  (181 B)
│   │   └── useTheme.js  (179 B)
│   ├── layouts/
│   │   ├── AppLayout.jsx  (799 B)
│   │   └── MentorLayout.jsx  (718 B)
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── EmailVerification.jsx  (4.0 kB)
│   │   │   ├── ForgotPassword.jsx  (3.0 kB)
│   │   │   ├── Login.jsx  (443 B)
│   │   │   ├── ResetPassword.jsx  (2.7 kB)
│   │   │   └── SignUp.jsx  (446 B)
│   │   ├── mentor/
│   │   │   ├── Assignments.jsx  (0 B)
│   │   │   ├── Dashboard.jsx  (1.9 kB)
│   │   │   ├── Goals.jsx  (0 B)
│   │   │   ├── GroupDetails.jsx  (0 B)
│   │   │   ├── Groups.jsx  (0 B)
│   │   │   └── Submissions.jsx  (0 B)
│   │   ├── DashboardHome.jsx  (1.5 kB)
│   │   └── Landing.jsx  (830 B)
│   ├── routes/
│   │   ├── ProtectedRoutes.jsx  (312 B)
│   │   └── router.jsx  (1.6 kB)
│   ├── services/
│   │   └── authService.js  (1.7 kB)
│   ├── App.jsx  (387 B)
│   ├── colors.css  (1.8 kB)
│   ├── index.css  (47 B)
│   └── main.jsx  (184 B)
├── .env  (41 B)
├── .gitignore  (259 B)
├── .prettierignore  (88 B)
├── .prettierrc  (186 B)
├── Codebase.md  (206.2 kB)
├── eslint.config.js  (758 B)
├── index.html  (367 B)
├── package.json  (957 B)
├── print-codebase.js  (4.8 kB)
├── README.md  (68 B)
├── vercel.json  (69 B)
└── vite.config.js  (265 B)

======================================================================
  FILE CONTENTS
======================================================================

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/ContactSection.jsx  (1.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/ContactSection.jsx
import FadeInSection from "./FadeInSection";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Connect With Us
          </h2>

          <p className="mt-6 text-gray-600">
            StudyHive is an open collaborative project. Feel free to explore
            the codebase or connect with the creator.
          </p>

          <div className="mt-8 flex justify-center gap-6">

            <a
              href="https://github.com/Adi-Dcpp"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:scale-105 transition-all duration-300"
            >
              GitHub
            </a>

            <a
              href="mailto:luffy1120adi@gmail.com"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
            >
              Email
            </a>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/CTASection.jsx  (757 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/CTASection.jsx
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const CTASection = () => {
  return (
    <section className="py-20 bg-indigo-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold">
            Ready to level up your study workflow?
          </h2>

          <Link
            to="/signup"
            className="mt-8 inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Create Your StudyHive
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CTASection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/FadeInSection.jsx  (410 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { motion } from "framer-motion";

const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/FeaturesSection.jsx  (1.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/FeaturesSection.jsx
import FadeInSection from "./FadeInSection";

const features = [
  "Secure Authentication",
  "Study Group Management",
  "Learning Goal Tracking",
  "Assignment & Submissions",
  "File & Resource Sharing",
  "Progress Monitoring Dashboard",
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Powerful Features
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="font-semibold text-gray-800">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FeaturesSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/Footer.jsx  (725 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} StudyHive. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/HeroSection.jsx  (3.2 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Organize. Collaborate.
                <span className="text-indigo-600"> Succeed Together.</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                StudyHive helps mentors and learners build structured study groups,
                track learning goals, manage assignments, and collaborate
                efficiently in one powerful platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-indigo-700 hover:scale-105"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - DASHBOARD MOCKUP */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">

                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">
                    Web Development Group
                  </h3>
                  <span className="text-sm bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Goal Progress</p>
                  <div className="mt-2 h-2 bg-gray-300 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full w-2/3"></div>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">
                    Assignment Status
                  </p>
                  <div className="mt-3 flex gap-3 text-xs">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                      Pending
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      Submitted
                    </span>
                    <span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
                      Reviewed
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HeroSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/HowItWorks.jsx  (1.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/HowItWorks.jsx
import FadeInSection from "./FadeInSection";

const steps = [
  "Sign Up & Verify Email",
  "Create or Join Study Group",
  "Assign & Complete Goals",
  "Track Progress & Collaborate",
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            How It Works
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
            {steps.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HowItWorks;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/Navbar.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/Navbar.jsx
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LEFT - Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="StudyHive Logo"
            className="h-10 w-auto"
          />
          {/* <span className="text-xl font-bold text-gray-900">
            StudyHive
          </span> */}
        </Link>

        {/* RIGHT - Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>

          <Link
            to="/login"
            className="px-5 py-2 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/RolesSection.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/RolesSection.jsx
import FadeInSection from "./FadeInSection";

const RolesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12">

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-indigo-600">
                For Mentors
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Create Study Groups</li>
                <li>Assign Learning Goals</li>
                <li>Review Submissions</li>
                <li>Post Announcements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-emerald-600">
                For Learners
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Join Groups</li>
                <li>Track Goals</li>
                <li>Submit Assignments</li>
                <li>Access Resources</li>
              </ul>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default RolesSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/SecuritySection.jsx  (716 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/SecuritySection.jsx
import FadeInSection from "./FadeInSection";

const SecuritySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Secure & Reliable
          </h2>
          <p className="mt-6 text-gray-600">
            Role-based access control, secure file uploads, email verification,
            and production-ready backend architecture ensure your learning
            environment stays protected.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default SecuritySection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/Navbar.jsx  (2.2 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { FaUserCircle } from "react-icons/fa";
import useTheme from "../hooks/useTheme";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ toggleSidebar }) => {
    const { theme, toggleTheme } = useTheme();

    const handleLogout = () => {
        console.log("User logged out");
    };

    return (
        <nav className="flex items-center justify-between px-6 h-16 border-b border-[rgb(var(--border))] bg-[rgb(var(--surface))]">

            {/* Logo */}
            <div className="flex items-center gap-2">
                <Link to="/">
                    <img src={logo} alt="Logo" className="h-10 w-auto" />
                </Link>
            </div>

            <button
                onClick={toggleSidebar}
                className="lg:hidden text-2xl text-[rgb(var(--text))]"
            >
                <FiMenu />
            </button>
            {/* Right Section */}
            <div className="flex items-center gap-6">

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="relative flex items-center w-14 h-7 bg-[rgb(var(--hover))] rounded-full transition-colors duration-300"
                >
                    <div
                        className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${theme === "dark" ? "translate-x-7" : "translate-x-1"
                            }`}
                    >
                        {theme === "dark" ? "🌙" : "☀"}
                    </div>
                </button>

                {/* User Details Button */}
                <button className="flex items-center gap-2 text-[rgb(var(--text))]">
                    <FaUserCircle size={22} />
                    <span>User</span>
                </button>

                {/* Logout */}
                <button
                    onClick={handleLogout}
                    className="px-3 py-1 rounded-md bg-red-500 text-white"
                >
                    Logout
                </button>

            </div>
        </nav>
    );
};

export default Navbar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/mentor/Sidebar.jsx  (1.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const menu = [
    { name: "Dashboard", path: "/mentor/dashboard" },
    { name: "Groups", path: "/mentor/groups" },
    { name: "Goals", path: "/mentor/goals" },
    { name: "Assignments", path: "/mentor/assignments" },
    { name: "Submissions", path: "/mentor/submissions" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`
        fixed lg:static
        w-[280px] h-full
        bg-[rgb(var(--surface))]
        border-r border-[rgb(var(--border))]
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
        `}
      >
        <nav className="flex flex-col p-4 gap-2">
          {menu.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={toggleSidebar}
              className="px-4 py-2 rounded-md hover:bg-[rgb(var(--hover))]"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/AuthFooter.jsx  (243 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'

const AuthFooter = () => {
  return (
    <div className="py-4 text-center text-xs text-gray-400">
      By continuing, you agree to our Terms of Service and Privacy Policy
    </div>
  )
}

export default AuthFooter
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/AuthHeader.jsx  (615 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import logo from '../assets/logo.png'

const AuthHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2 sm:py-5 text-center space-y-2">
      <img
        src={logo}
        alt="StudyHive Logo"
        className="h-16 sm:h-18 md:h-20 w-auto"
      />

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray mt-0.5">
        Welcome To StudyHive
      </h2>

      <h3 className="text-gray-400 text-xs sm:text-sm md:text-base">
        Collaborative learning made simple
      </h3>
    </div>
  )
}

export default AuthHeader
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/EmailVerified.jsx  (2.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const EmailVerified = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        navigate("/login", { replace: true });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status, navigate]);

  const handleGoToLogin = () => {
    navigate("/login", { replace: true });
  };

  const handleGoToSignup = () => {
    navigate("/signup", { replace: true });
  };

  const isSuccess = status === "success";

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8 text-center space-y-6">
        
        <div className={`h-16 w-16 mx-auto flex items-center justify-center rounded-full ${
          isSuccess ? "bg-green-50" : "bg-red-50"
        }`}>
          <span className="text-3xl">
            {isSuccess ? "✅" : "❌"}
          </span>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900">
          {isSuccess ? "Email Verified Successfully!" : "Verification Failed"}
        </h2>

        <p className="text-sm text-gray-600">
          {isSuccess
            ? "Your email has been verified. Redirecting you to login..."
            : "The verification link is invalid or has expired."}
        </p>

        {isSuccess ? (
          <button
            onClick={handleGoToLogin}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Go to Login
          </button>
        ) : (
          <button
            onClick={handleGoToSignup}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Back to Signup
          </button>
        )}
      </div>
    </div>
  );
};

export default EmailVerified;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/LoginForm.jsx  (3.9 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { useNavigate , Link} from 'react-router-dom'
import useAuth from '../hooks/useAuth.js'

const LoginForm = () => {
  // Controlled state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await login({ email, password })
      navigate('/dashboard', { replace: true })
    } catch (error) {
      console.log('Login error:', error.response?.data)
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
          <h2 className="text-xl sm:text-2xl font-semibold text-black">
            Sign in to your account
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-black">
            Enter your credentials to continue
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-medium text-shadow-black">
                Password
              </label>
              {/* <a
                href="#"
                className="text-xs sm:text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </a> */}
              <Link to="/forgot-password" className="text-xs sm:text-sm text-blue-500 hover:underline">Forgot password?</Link>
            </div>

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
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="mt-5 sm:mt-6 text-center text-xs sm:text-sm">
          Don&apos;t have an account?{' '}
          {/* <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a> */}
          <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/SignUpForm.jsx  (8.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/contexts/AuthContext.jsx  (1.9 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/contexts/ThemeContext.jsx  (834 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    }else{
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useAuth.js  (181 B)
──────────────────────────────────────────────────────────────────────
```js
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useTheme.js  (179 B)
──────────────────────────────────────────────────────────────────────
```js
import {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext.jsx'

const useTheme = () => {
    return useContext(ThemeContext)
}

export default useTheme
```

──────────────────────────────────────────────────────────────────────
FILE: src/layouts/AppLayout.jsx  (799 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx"

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Right Section */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
```

──────────────────────────────────────────────────────────────────────
FILE: src/layouts/MentorLayout.jsx  (718 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/mentor/Navbar";
import Sidebar from "../components/mentor/Sidebar";

const MentorLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-6 bg-[rgb(var(--bg))]">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default MentorLayout;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/EmailVerification.jsx  (4.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { resendEmailVerification } from '../../services/authService'

const EmailVerification = () => {
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    if (cooldown === 0) return

    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [cooldown])

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
    if (loading || cooldown > 0) return

    try {
      setLoading(true)
      setMessage('')
      setErrorMessage('')

      await resendEmailVerification({ email })

      setMessage('Verification email resent! Please check your inbox.')
      setCooldown(60)
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
            disabled={loading || cooldown > 0}
            className={`font-medium transition-colors ${
              cooldown > 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-indigo-600 hover:text-indigo-700'
            }`}
            onClick={handleResendEmail}
          >
            {cooldown > 0 ? `Resend in ${cooldown}s` : 'Resend email'}
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/ForgotPassword.jsx  (3.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(false)

  const { forgotPassword } = useAuth()

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!email.trim()) {
      setError('Email is required')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format')
      return
    }

    try {
      setLoading(true)

      const response = await forgotPassword({ email })

      setSuccess(response.data.message)

      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="w-full flex flex-col items-center justify-center mb-6 gap-0.5">
        <h2 className="text-3xl font-semibold">Reset Password</h2>
        <h3>We'll send you a reset link</h3>
      </div>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl border border-black p-6 sm:p-8 shadow-lg">
        <div>
          <h3 className="text-xl font-semibold text-black ">
            Forgot your password?
          </h3>
          <p className="text-gray-600">
            Enter your email address and we'll send you a link to reset your
            password
          </p>
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-xl">Email</label>
              <input
                type="email"
                placeholder="xyz@example.com"
                className="w-full rounded-lg border border-black px-3 sm:px-4 py-2 sm:py-2.5 bg-transparent text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}

            {success && (
              <p className="text-green-600 mt-3 text-sm">{success}</p>
            )}
            <div className="mt-2.5">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
              >
                 {loading ? 'Sending...' : 'Send reset link'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/Login.jsx  (443 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import LoginForm from '../../components/LoginForm'
import AuthFooter from '../../components/AuthFooter'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <LoginForm />
      </div>

      <AuthFooter />
    </div>
  )
}

export default Login
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/ResetPassword.jsx  (2.7 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/SignUp.jsx  (446 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import AuthFooter from '../../components/AuthFooter'
import SignUpForm from '../../components/SignUpForm'

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <SignUpForm />
      </div>
      <AuthFooter />
    </div>
  )
}

export default SignUp
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Assignments.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Dashboard.jsx  (1.9 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { FaUsers, FaLayerGroup, FaClipboardList, FaTasks } from "react-icons/fa";

const Dashboard = () => {

  const stats = [
    { title: "Total Groups", value: 5, icon: <FaLayerGroup /> },
    { title: "Active Learners", value: 42, icon: <FaUsers /> },
    { title: "Pending Submissions", value: 8, icon: <FaClipboardList /> },
    { title: "Assignments", value: 12, icon: <FaTasks /> },
  ];

  return (
    <div className="flex flex-col gap-8">

      {/* Page Title */}
      <h1 className="text-2xl font-semibold text-[rgb(var(--text))]">
        Mentor Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-[rgb(var(--text-secondary))]">
                {item.title}
              </p>
              <h2 className="text-xl font-bold text-[rgb(var(--text))]">
                {item.value}
              </h2>
            </div>

            <div className="text-2xl text-[rgb(var(--primary))]">
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="p-6 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
        <h2 className="text-lg font-semibold text-[rgb(var(--text))] mb-4">
          Recent Activity
        </h2>

        <ul className="flex flex-col gap-2 text-[rgb(var(--text-secondary))]">
          <li>Group "React Basics" created</li>
          <li>Assignment "Hooks Practice" submitted</li>
          <li>New learner joined "DSA Bootcamp"</li>
        </ul>
      </div>

    </div>
  );
};

export default Dashboard;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Goals.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/GroupDetails.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Groups.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/mentor/Submissions.jsx  (0 B)
──────────────────────────────────────────────────────────────────────
```jsx

```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/DashboardHome.jsx  (1.5 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import useAuth from '../hooks/useAuth'

const DashboardHome = () => {
  const { user, logout } = useAuth()
  const accessToken = localStorage.getItem('accessToken')

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        🎉 Login Successful
      </h1>

      <div className="bg-white p-4 rounded-lg shadow-md border">
        <h2 className="font-semibold mb-2">User Info:</h2>

        {user ? (
          <div className="space-y-1 text-sm">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p>
              <strong>Email Verified:</strong>{' '}
              {user.isEmailVerified ? 'Yes' : 'No'}
            </p>
          </div>
        ) : (
          <p className="text-red-500">User not loaded</p>
        )}
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md border">
        <h2 className="font-semibold mb-2">Access Token:</h2>

        {accessToken ? (
          <p className="text-xs break-all text-green-600">
            {accessToken}
          </p>
        ) : (
          <p className="text-red-500">No access token found</p>
        )}
      </div>

      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  )
}

export default DashboardHome
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/Landing.jsx  (830 B)
──────────────────────────────────────────────────────────────────────
```jsx
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import RolesSection from "../components/landing/RolesSection";
import HowItWorks from "../components/landing/HowItWorks";
import SecuritySection from "../components/landing/SecuritySection";
import CTASection from "../components/landing/CTASection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RolesSection />
      <HowItWorks />
      <SecuritySection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Landing;
```

──────────────────────────────────────────────────────────────────────
FILE: src/routes/ProtectedRoutes.jsx  (312 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoute = () => {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div>
  if (!user) return <Navigate to="/login" replace />

  return <Outlet />
}

export default ProtectedRoute
```

──────────────────────────────────────────────────────────────────────
FILE: src/routes/router.jsx  (1.6 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'

import Landing from '../pages/Landing'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'
import ForgotPassword from '../pages/auth/ForgotPassword'
import AppLayout from '../layouts/AppLayout'
import DashboardHome from '../pages/DashboardHome'
import ProtectedRoute from './ProtectedRoutes'
import EmailVerification from '../pages/auth/EmailVerification'
import EmailVerified from '../components/EmailVerified'
import ResetPassword from '../pages/auth/ResetPassword'

import MentorLayout from '../layouts/MentorLayout'
import MentorDashboard from '../pages/mentor/Dashboard'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-email" element={<EmailVerification />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/email-verified" element={<EmailVerified />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      <Route element={<ProtectedRoute />}>

        <Route path="/dashboard" element={<AppLayout />}>
          <Route index element={<DashboardHome />} />
        </Route>

        {/* Mentor routes */}
        <Route path="/mentor" element={<MentorLayout />}>
          <Route path="dashboard" element={<MentorDashboard />} />
        </Route>

      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  )
)
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/authService.js  (1.7 kB)
──────────────────────────────────────────────────────────────────────
```js
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
      } catch (refreshError) {
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/App.jsx  (387 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
```

──────────────────────────────────────────────────────────────────────
FILE: src/colors.css  (1.8 kB)
──────────────────────────────────────────────────────────────────────
```css
/* =========================================
   STUDYHIVE COLOR SYSTEM
   Clean Semantic Token Setup
========================================= */

/* ---------- LIGHT THEME ---------- */

:root {

  /* Brand */
  --primary: 79 70 229;
  --primary-hover: 67 56 202;
  --primary-soft: 224 231 255;

  /* Backgrounds */
  --bg: 248 250 252;
  --surface: 255 255 255;
  --surface-2: 241 245 249;

  /* Text */
  --text: 15 23 42;
  --text-secondary: 71 85 105;
  --text-muted: 148 163 184;

  /* Borders */
  --border: 226 232 240;
  --border-strong: 203 213 225;

  /* Status */
  --success: 34 197 94;
  --warning: 234 179 8;
  --error: 239 68 68;
  --info: 59 130 246;

  /* Layout */
  --navbar-bg: 255 255 255;
  --sidebar-bg: 255 255 255;
  --card-bg: 255 255 255;

  /* Interaction */
  --hover: 241 245 249;
  --active: 226 232 240;
  --focus-ring: 99 102 241;

  /* Tables */
  --table-header: 248 250 252;
  --table-row-hover: 241 245 249;

  /* Overlay */
  --overlay: 15 23 42;
}


/* ---------- DARK THEME ---------- */

[data-theme="dark"] {

  /* Brand */
  --primary: 99 102 241;
  --primary-hover: 79 70 229;
  --primary-soft: 55 48 163;

  /* Backgrounds */
  --bg: 15 23 42;
  --surface: 30 41 59;
  --surface-2: 51 65 85;

  /* Text */
  --text: 248 250 252;
  --text-secondary: 203 213 225;
  --text-muted: 148 163 184;

  /* Borders */
  --border: 71 85 105;
  --border-strong: 100 116 139;

  /* Status */
  --success: 34 197 94;
  --warning: 234 179 8;
  --error: 239 68 68;
  --info: 59 130 246;

  /* Layout */
  --navbar-bg: 15 23 42;
  --sidebar-bg: 30 41 59;
  --card-bg: 30 41 59;

  /* Interaction */
  --hover: 51 65 85;
  --active: 71 85 105;
  --focus-ring: 129 140 248;

  /* Tables */
  --table-header: 30 41 59;
  --table-row-hover: 51 65 85;

  /* Overlay */
  --overlay: 0 0 0;
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/index.css  (47 B)
──────────────────────────────────────────────────────────────────────
```css
@import "tailwindcss";
@import "./colors.css";
```

──────────────────────────────────────────────────────────────────────
FILE: src/main.jsx  (184 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
```

──────────────────────────────────────────────────────────────────────
FILE: Codebase.md  (206.2 kB)
──────────────────────────────────────────────────────────────────────
```md
======================================================================
  StudyHive Frontend — Codebase Snapshot
  Root : /home/adi-dcpp/Desktop/WebDev/Frontend/StudyHive-Frontend
  Date : 3/10/2026, 11:25:08 PM
======================================================================

StudyHive-Frontend/
├── public/
│   └── vite.svg  (1.5 kB)
├── src/
│   ├── assets/
│   │   └── logo.png  (143.1 kB)
│   ├── components/
│   │   ├── landing/
│   │   │   ├── ContactSection.jsx  (1.3 kB)
│   │   │   ├── CTASection.jsx  (757 B)
│   │   │   ├── FadeInSection.jsx  (410 B)
│   │   │   ├── FeaturesSection.jsx  (1.1 kB)
│   │   │   ├── Footer.jsx  (725 B)
│   │   │   ├── HeroSection.jsx  (3.2 kB)
│   │   │   ├── HowItWorks.jsx  (1.0 kB)
│   │   │   ├── Navbar.jsx  (1.4 kB)
│   │   │   ├── RolesSection.jsx  (1.4 kB)
│   │   │   └── SecuritySection.jsx  (716 B)
│   │   ├── AuthFooter.jsx  (243 B)
│   │   ├── AuthHeader.jsx  (615 B)
│   │   ├── EmailVerified.jsx  (2.1 kB)
│   │   ├── LoginForm.jsx  (3.9 kB)
│   │   ├── Sidebar.jsx  (216 B)
│   │   ├── SignUpForm.jsx  (8.4 kB)
│   │   └── Topbar.jsx  (111 B)
│   ├── contexts/
│   │   ├── AuthContext.jsx  (1.9 kB)
│   │   └── ThemeContext.jsx  (834 B)
│   ├── hooks/
│   │   ├── useAuth.js  (181 B)
│   │   └── useTheme.js  (179 B)
│   ├── layouts/
│   │   └── AppLayout.jsx  (799 B)
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── EmailVerification.jsx  (4.0 kB)
│   │   │   ├── ForgotPassword.jsx  (3.0 kB)
│   │   │   ├── Login.jsx  (443 B)
│   │   │   ├── ResetPassword.jsx  (2.7 kB)
│   │   │   └── SignUp.jsx  (446 B)
│   │   ├── DashboardHome.jsx  (1.5 kB)
│   │   └── Landing.jsx  (830 B)
│   ├── routes/
│   │   ├── ProtectedRoutes.jsx  (312 B)
│   │   └── router.jsx  (1.3 kB)
│   ├── services/
│   │   └── authService.js  (1.7 kB)
│   ├── App.jsx  (387 B)
│   ├── colors.css  (1.8 kB)
│   ├── index.css  (47 B)
│   └── main.jsx  (184 B)
├── .env  (41 B)
├── .gitignore  (259 B)
├── .prettierignore  (88 B)
├── .prettierrc  (186 B)
├── Codebase.md  (125.8 kB)
├── eslint.config.js  (758 B)
├── index.html  (367 B)
├── package.json  (957 B)
├── print-codebase.js  (4.8 kB)
├── README.md  (68 B)
├── vercel.json  (69 B)
└── vite.config.js  (265 B)

======================================================================
  FILE CONTENTS
======================================================================

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/ContactSection.jsx  (1.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/ContactSection.jsx
import FadeInSection from "./FadeInSection";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Connect With Us
          </h2>

          <p className="mt-6 text-gray-600">
            StudyHive is an open collaborative project. Feel free to explore
            the codebase or connect with the creator.
          </p>

          <div className="mt-8 flex justify-center gap-6">

            <a
              href="https://github.com/Adi-Dcpp"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:scale-105 transition-all duration-300"
            >
              GitHub
            </a>

            <a
              href="mailto:luffy1120adi@gmail.com"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
            >
              Email
            </a>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/CTASection.jsx  (757 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/CTASection.jsx
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const CTASection = () => {
  return (
    <section className="py-20 bg-indigo-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold">
            Ready to level up your study workflow?
          </h2>

          <Link
            to="/signup"
            className="mt-8 inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Create Your StudyHive
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CTASection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/FadeInSection.jsx  (410 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { motion } from "framer-motion";

const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/FeaturesSection.jsx  (1.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/FeaturesSection.jsx
import FadeInSection from "./FadeInSection";

const features = [
  "Secure Authentication",
  "Study Group Management",
  "Learning Goal Tracking",
  "Assignment & Submissions",
  "File & Resource Sharing",
  "Progress Monitoring Dashboard",
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Powerful Features
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="font-semibold text-gray-800">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FeaturesSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/Footer.jsx  (725 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} StudyHive. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/HeroSection.jsx  (3.2 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Organize. Collaborate.
                <span className="text-indigo-600"> Succeed Together.</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                StudyHive helps mentors and learners build structured study groups,
                track learning goals, manage assignments, and collaborate
                efficiently in one powerful platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-indigo-700 hover:scale-105"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - DASHBOARD MOCKUP */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">

                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">
                    Web Development Group
                  </h3>
                  <span className="text-sm bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Goal Progress</p>
                  <div className="mt-2 h-2 bg-gray-300 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full w-2/3"></div>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">
                    Assignment Status
                  </p>
                  <div className="mt-3 flex gap-3 text-xs">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                      Pending
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      Submitted
                    </span>
                    <span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
                      Reviewed
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HeroSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/HowItWorks.jsx  (1.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/HowItWorks.jsx
import FadeInSection from "./FadeInSection";

const steps = [
  "Sign Up & Verify Email",
  "Create or Join Study Group",
  "Assign & Complete Goals",
  "Track Progress & Collaborate",
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            How It Works
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
            {steps.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HowItWorks;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/Navbar.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/Navbar.jsx
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LEFT - Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="StudyHive Logo"
            className="h-10 w-auto"
          />
          {/* <span className="text-xl font-bold text-gray-900">
            StudyHive
          </span> */}
        </Link>

        {/* RIGHT - Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>

          <Link
            to="/login"
            className="px-5 py-2 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/RolesSection.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/RolesSection.jsx
import FadeInSection from "./FadeInSection";

const RolesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12">

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-indigo-600">
                For Mentors
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Create Study Groups</li>
                <li>Assign Learning Goals</li>
                <li>Review Submissions</li>
                <li>Post Announcements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-emerald-600">
                For Learners
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Join Groups</li>
                <li>Track Goals</li>
                <li>Submit Assignments</li>
                <li>Access Resources</li>
              </ul>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default RolesSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/SecuritySection.jsx  (716 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/SecuritySection.jsx
import FadeInSection from "./FadeInSection";

const SecuritySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Secure & Reliable
          </h2>
          <p className="mt-6 text-gray-600">
            Role-based access control, secure file uploads, email verification,
            and production-ready backend architecture ensure your learning
            environment stays protected.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default SecuritySection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/AuthFooter.jsx  (243 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'

const AuthFooter = () => {
  return (
    <div className="py-4 text-center text-xs text-gray-400">
      By continuing, you agree to our Terms of Service and Privacy Policy
    </div>
  )
}

export default AuthFooter
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/AuthHeader.jsx  (615 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import logo from '../assets/logo.png'

const AuthHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2 sm:py-5 text-center space-y-2">
      <img
        src={logo}
        alt="StudyHive Logo"
        className="h-16 sm:h-18 md:h-20 w-auto"
      />

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray mt-0.5">
        Welcome To StudyHive
      </h2>

      <h3 className="text-gray-400 text-xs sm:text-sm md:text-base">
        Collaborative learning made simple
      </h3>
    </div>
  )
}

export default AuthHeader
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/EmailVerified.jsx  (2.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const EmailVerified = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        navigate("/login", { replace: true });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status, navigate]);

  const handleGoToLogin = () => {
    navigate("/login", { replace: true });
  };

  const handleGoToSignup = () => {
    navigate("/signup", { replace: true });
  };

  const isSuccess = status === "success";

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8 text-center space-y-6">
        
        <div className={`h-16 w-16 mx-auto flex items-center justify-center rounded-full ${
          isSuccess ? "bg-green-50" : "bg-red-50"
        }`}>
          <span className="text-3xl">
            {isSuccess ? "✅" : "❌"}
          </span>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900">
          {isSuccess ? "Email Verified Successfully!" : "Verification Failed"}
        </h2>

        <p className="text-sm text-gray-600">
          {isSuccess
            ? "Your email has been verified. Redirecting you to login..."
            : "The verification link is invalid or has expired."}
        </p>

        {isSuccess ? (
          <button
            onClick={handleGoToLogin}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Go to Login
          </button>
        ) : (
          <button
            onClick={handleGoToSignup}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Back to Signup
          </button>
        )}
      </div>
    </div>
  );
};

export default EmailVerified;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/LoginForm.jsx  (3.9 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { useNavigate , Link} from 'react-router-dom'
import useAuth from '../hooks/useAuth.js'

const LoginForm = () => {
  // Controlled state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await login({ email, password })
      navigate('/dashboard', { replace: true })
    } catch (error) {
      console.log('Login error:', error.response?.data)
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
          <h2 className="text-xl sm:text-2xl font-semibold text-black">
            Sign in to your account
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-black">
            Enter your credentials to continue
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-medium text-shadow-black">
                Password
              </label>
              {/* <a
                href="#"
                className="text-xs sm:text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </a> */}
              <Link to="/forgot-password" className="text-xs sm:text-sm text-blue-500 hover:underline">Forgot password?</Link>
            </div>

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
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="mt-5 sm:mt-6 text-center text-xs sm:text-sm">
          Don&apos;t have an account?{' '}
          {/* <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a> */}
          <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/Sidebar.jsx  (216 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import logo from '../assets/logo.png'

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={isOpen ? 'block' : 'hidden'}>
      
    </div>
  )
}

export default Sidebar
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/SignUpForm.jsx  (8.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/Topbar.jsx  (111 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'

const Topbar = () => {
  return (
    <div>Topbar</div>
  )
}

export default Topbar
```

──────────────────────────────────────────────────────────────────────
FILE: src/contexts/AuthContext.jsx  (1.9 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/contexts/ThemeContext.jsx  (834 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    }else{
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useAuth.js  (181 B)
──────────────────────────────────────────────────────────────────────
```js
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useTheme.js  (179 B)
──────────────────────────────────────────────────────────────────────
```js
import {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext.jsx'

const useTheme = () => {
    return useContext(ThemeContext)
}

export default useTheme
```

──────────────────────────────────────────────────────────────────────
FILE: src/layouts/AppLayout.jsx  (799 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx"

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Right Section */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/EmailVerification.jsx  (4.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { resendEmailVerification } from '../../services/authService'

const EmailVerification = () => {
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    if (cooldown === 0) return

    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [cooldown])

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
    if (loading || cooldown > 0) return

    try {
      setLoading(true)
      setMessage('')
      setErrorMessage('')

      await resendEmailVerification({ email })

      setMessage('Verification email resent! Please check your inbox.')
      setCooldown(60)
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
            disabled={loading || cooldown > 0}
            className={`font-medium transition-colors ${
              cooldown > 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-indigo-600 hover:text-indigo-700'
            }`}
            onClick={handleResendEmail}
          >
            {cooldown > 0 ? `Resend in ${cooldown}s` : 'Resend email'}
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/ForgotPassword.jsx  (3.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(false)

  const { forgotPassword } = useAuth()

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!email.trim()) {
      setError('Email is required')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format')
      return
    }

    try {
      setLoading(true)

      const response = await forgotPassword({ email })

      setSuccess(response.data.message)

      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="w-full flex flex-col items-center justify-center mb-6 gap-0.5">
        <h2 className="text-3xl font-semibold">Reset Password</h2>
        <h3>We'll send you a reset link</h3>
      </div>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl border border-black p-6 sm:p-8 shadow-lg">
        <div>
          <h3 className="text-xl font-semibold text-black ">
            Forgot your password?
          </h3>
          <p className="text-gray-600">
            Enter your email address and we'll send you a link to reset your
            password
          </p>
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-xl">Email</label>
              <input
                type="email"
                placeholder="xyz@example.com"
                className="w-full rounded-lg border border-black px-3 sm:px-4 py-2 sm:py-2.5 bg-transparent text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}

            {success && (
              <p className="text-green-600 mt-3 text-sm">{success}</p>
            )}
            <div className="mt-2.5">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
              >
                 {loading ? 'Sending...' : 'Send reset link'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/Login.jsx  (443 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import LoginForm from '../../components/LoginForm'
import AuthFooter from '../../components/AuthFooter'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <LoginForm />
      </div>

      <AuthFooter />
    </div>
  )
}

export default Login
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/ResetPassword.jsx  (2.7 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/SignUp.jsx  (446 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import AuthFooter from '../../components/AuthFooter'
import SignUpForm from '../../components/SignUpForm'

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <SignUpForm />
      </div>
      <AuthFooter />
    </div>
  )
}

export default SignUp
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/DashboardHome.jsx  (1.5 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import useAuth from '../hooks/useAuth'

const DashboardHome = () => {
  const { user, logout } = useAuth()
  const accessToken = localStorage.getItem('accessToken')

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        🎉 Login Successful
      </h1>

      <div className="bg-white p-4 rounded-lg shadow-md border">
        <h2 className="font-semibold mb-2">User Info:</h2>

        {user ? (
          <div className="space-y-1 text-sm">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p>
              <strong>Email Verified:</strong>{' '}
              {user.isEmailVerified ? 'Yes' : 'No'}
            </p>
          </div>
        ) : (
          <p className="text-red-500">User not loaded</p>
        )}
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md border">
        <h2 className="font-semibold mb-2">Access Token:</h2>

        {accessToken ? (
          <p className="text-xs break-all text-green-600">
            {accessToken}
          </p>
        ) : (
          <p className="text-red-500">No access token found</p>
        )}
      </div>

      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  )
}

export default DashboardHome
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/Landing.jsx  (830 B)
──────────────────────────────────────────────────────────────────────
```jsx
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import RolesSection from "../components/landing/RolesSection";
import HowItWorks from "../components/landing/HowItWorks";
import SecuritySection from "../components/landing/SecuritySection";
import CTASection from "../components/landing/CTASection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RolesSection />
      <HowItWorks />
      <SecuritySection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Landing;
```

──────────────────────────────────────────────────────────────────────
FILE: src/routes/ProtectedRoutes.jsx  (312 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoute = () => {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div>
  if (!user) return <Navigate to="/login" replace />

  return <Outlet />
}

export default ProtectedRoute
```

──────────────────────────────────────────────────────────────────────
FILE: src/routes/router.jsx  (1.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'

import Landing from '../pages/Landing'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'
import ForgotPassword from '../pages/auth/ForgotPassword'
import AppLayout from '../layouts/AppLayout'
import DashboardHome from '../pages/DashboardHome'
import ProtectedRoute from './ProtectedRoutes'
import EmailVerification from '../pages/auth/EmailVerification'
import EmailVerified from '../components/EmailVerified'
import ResetPassword from '../pages/auth/ResetPassword'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-email" element={<EmailVerification />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/email-verified" element={<EmailVerified />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<AppLayout />}>
          <Route index element={<DashboardHome />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  )
)
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/authService.js  (1.7 kB)
──────────────────────────────────────────────────────────────────────
```js
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
      } catch (refreshError) {
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/App.jsx  (387 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
```

──────────────────────────────────────────────────────────────────────
FILE: src/colors.css  (1.8 kB)
──────────────────────────────────────────────────────────────────────
```css
/* =========================================
   STUDYHIVE COLOR SYSTEM
   Clean Semantic Token Setup
========================================= */

/* ---------- LIGHT THEME ---------- */

:root {

  /* Brand */
  --primary: 79 70 229;
  --primary-hover: 67 56 202;
  --primary-soft: 224 231 255;

  /* Backgrounds */
  --bg: 248 250 252;
  --surface: 255 255 255;
  --surface-2: 241 245 249;

  /* Text */
  --text: 15 23 42;
  --text-secondary: 71 85 105;
  --text-muted: 148 163 184;

  /* Borders */
  --border: 226 232 240;
  --border-strong: 203 213 225;

  /* Status */
  --success: 34 197 94;
  --warning: 234 179 8;
  --error: 239 68 68;
  --info: 59 130 246;

  /* Layout */
  --navbar-bg: 255 255 255;
  --sidebar-bg: 255 255 255;
  --card-bg: 255 255 255;

  /* Interaction */
  --hover: 241 245 249;
  --active: 226 232 240;
  --focus-ring: 99 102 241;

  /* Tables */
  --table-header: 248 250 252;
  --table-row-hover: 241 245 249;

  /* Overlay */
  --overlay: 15 23 42;
}


/* ---------- DARK THEME ---------- */

[data-theme="dark"] {

  /* Brand */
  --primary: 99 102 241;
  --primary-hover: 79 70 229;
  --primary-soft: 55 48 163;

  /* Backgrounds */
  --bg: 15 23 42;
  --surface: 30 41 59;
  --surface-2: 51 65 85;

  /* Text */
  --text: 248 250 252;
  --text-secondary: 203 213 225;
  --text-muted: 148 163 184;

  /* Borders */
  --border: 71 85 105;
  --border-strong: 100 116 139;

  /* Status */
  --success: 34 197 94;
  --warning: 234 179 8;
  --error: 239 68 68;
  --info: 59 130 246;

  /* Layout */
  --navbar-bg: 15 23 42;
  --sidebar-bg: 30 41 59;
  --card-bg: 30 41 59;

  /* Interaction */
  --hover: 51 65 85;
  --active: 71 85 105;
  --focus-ring: 129 140 248;

  /* Tables */
  --table-header: 30 41 59;
  --table-row-hover: 51 65 85;

  /* Overlay */
  --overlay: 0 0 0;
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/index.css  (47 B)
──────────────────────────────────────────────────────────────────────
```css
@import "tailwindcss";
@import "./colors.css";
```

──────────────────────────────────────────────────────────────────────
FILE: src/main.jsx  (184 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
```

──────────────────────────────────────────────────────────────────────
FILE: Codebase.md  (125.8 kB)
──────────────────────────────────────────────────────────────────────
```md
======================================================================
  StudyHive Frontend — Codebase Snapshot
  Root : /home/adi-dcpp/Desktop/WebDev/Frontend/StudyHive-Frontend
  Date : 3/10/2026, 10:21:22 PM
======================================================================

StudyHive-Frontend/
├── public/
│   └── vite.svg  (1.5 kB)
├── src/
│   ├── assets/
│   │   └── logo.png  (143.1 kB)
│   ├── components/
│   │   ├── landing/
│   │   │   ├── ContactSection.jsx  (1.3 kB)
│   │   │   ├── CTASection.jsx  (757 B)
│   │   │   ├── FadeInSection.jsx  (410 B)
│   │   │   ├── FeaturesSection.jsx  (1.1 kB)
│   │   │   ├── Footer.jsx  (725 B)
│   │   │   ├── HeroSection.jsx  (3.2 kB)
│   │   │   ├── HowItWorks.jsx  (1.0 kB)
│   │   │   ├── Navbar.jsx  (1.4 kB)
│   │   │   ├── RolesSection.jsx  (1.4 kB)
│   │   │   └── SecuritySection.jsx  (716 B)
│   │   ├── AuthFooter.jsx  (243 B)
│   │   ├── AuthHeader.jsx  (615 B)
│   │   ├── EmailVerified.jsx  (2.1 kB)
│   │   ├── LoginForm.jsx  (3.9 kB)
│   │   ├── Sidebar.jsx  (216 B)
│   │   ├── SignUpForm.jsx  (8.4 kB)
│   │   └── Topbar.jsx  (111 B)
│   ├── contexts/
│   │   └── AuthContext.jsx  (1.9 kB)
│   ├── hooks/
│   │   └── useAuth.js  (181 B)
│   ├── layouts/
│   │   └── AppLayout.jsx  (799 B)
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── EmailVerification.jsx  (4.0 kB)
│   │   │   ├── ForgotPassword.jsx  (3.0 kB)
│   │   │   ├── Login.jsx  (443 B)
│   │   │   ├── ResetPassword.jsx  (2.7 kB)
│   │   │   └── SignUp.jsx  (446 B)
│   │   ├── DashboardHome.jsx  (1.5 kB)
│   │   └── Landing.jsx  (830 B)
│   ├── routes/
│   │   ├── ProtectedRoutes.jsx  (312 B)
│   │   └── router.jsx  (1.3 kB)
│   ├── services/
│   │   └── authService.js  (1.7 kB)
│   ├── App.jsx  (280 B)
│   ├── colors.css  (1.8 kB)
│   ├── index.css  (47 B)
│   └── main.jsx  (184 B)
├── .env  (41 B)
├── .gitignore  (259 B)
├── .prettierignore  (88 B)
├── .prettierrc  (186 B)
├── Codebase.md  (47.5 kB)
├── eslint.config.js  (758 B)
├── index.html  (367 B)
├── package.json  (957 B)
├── print-codebase.js  (4.8 kB)
├── README.md  (68 B)
├── vercel.json  (69 B)
└── vite.config.js  (265 B)

======================================================================
  FILE CONTENTS
======================================================================

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/ContactSection.jsx  (1.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/ContactSection.jsx
import FadeInSection from "./FadeInSection";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Connect With Us
          </h2>

          <p className="mt-6 text-gray-600">
            StudyHive is an open collaborative project. Feel free to explore
            the codebase or connect with the creator.
          </p>

          <div className="mt-8 flex justify-center gap-6">

            <a
              href="https://github.com/Adi-Dcpp"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:scale-105 transition-all duration-300"
            >
              GitHub
            </a>

            <a
              href="mailto:luffy1120adi@gmail.com"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
            >
              Email
            </a>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ContactSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/CTASection.jsx  (757 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/CTASection.jsx
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const CTASection = () => {
  return (
    <section className="py-20 bg-indigo-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold">
            Ready to level up your study workflow?
          </h2>

          <Link
            to="/signup"
            className="mt-8 inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Create Your StudyHive
          </Link>
        </FadeInSection>
      </div>
    </section>
  );
};

export default CTASection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/FadeInSection.jsx  (410 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { motion } from "framer-motion";

const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/FeaturesSection.jsx  (1.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/FeaturesSection.jsx
import FadeInSection from "./FadeInSection";

const features = [
  "Secure Authentication",
  "Study Group Management",
  "Learning Goal Tracking",
  "Assignment & Submissions",
  "File & Resource Sharing",
  "Progress Monitoring Dashboard",
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Powerful Features
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="font-semibold text-gray-800">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FeaturesSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/Footer.jsx  (725 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} StudyHive. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/HeroSection.jsx  (3.2 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import { Link } from "react-router-dom";
import FadeInSection from "./FadeInSection";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Organize. Collaborate.
                <span className="text-indigo-600"> Succeed Together.</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                StudyHive helps mentors and learners build structured study groups,
                track learning goals, manage assignments, and collaborate
                efficiently in one powerful platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-indigo-700 hover:scale-105"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - DASHBOARD MOCKUP */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">

                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">
                    Web Development Group
                  </h3>
                  <span className="text-sm bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Goal Progress</p>
                  <div className="mt-2 h-2 bg-gray-300 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full w-2/3"></div>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">
                    Assignment Status
                  </p>
                  <div className="mt-3 flex gap-3 text-xs">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                      Pending
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      Submitted
                    </span>
                    <span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
                      Reviewed
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HeroSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/HowItWorks.jsx  (1.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/HowItWorks.jsx
import FadeInSection from "./FadeInSection";

const steps = [
  "Sign Up & Verify Email",
  "Create or Join Study Group",
  "Assign & Complete Goals",
  "Track Progress & Collaborate",
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            How It Works
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
            {steps.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default HowItWorks;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/Navbar.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/Navbar.jsx
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LEFT - Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="StudyHive Logo"
            className="h-10 w-auto"
          />
          {/* <span className="text-xl font-bold text-gray-900">
            StudyHive
          </span> */}
        </Link>

        {/* RIGHT - Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>

          <Link
            to="/login"
            className="px-5 py-2 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/RolesSection.jsx  (1.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/RolesSection.jsx
import FadeInSection from "./FadeInSection";

const RolesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12">

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-indigo-600">
                For Mentors
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Create Study Groups</li>
                <li>Assign Learning Goals</li>
                <li>Review Submissions</li>
                <li>Post Announcements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-emerald-600">
                For Learners
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Join Groups</li>
                <li>Track Goals</li>
                <li>Submit Assignments</li>
                <li>Access Resources</li>
              </ul>
            </div>

          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default RolesSection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/landing/SecuritySection.jsx  (716 B)
──────────────────────────────────────────────────────────────────────
```jsx
// src/components/landing/SecuritySection.jsx
import FadeInSection from "./FadeInSection";

const SecuritySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Secure & Reliable
          </h2>
          <p className="mt-6 text-gray-600">
            Role-based access control, secure file uploads, email verification,
            and production-ready backend architecture ensure your learning
            environment stays protected.
          </p>
        </FadeInSection>
      </div>
    </section>
  );
};

export default SecuritySection;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/AuthFooter.jsx  (243 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'

const AuthFooter = () => {
  return (
    <div className="py-4 text-center text-xs text-gray-400">
      By continuing, you agree to our Terms of Service and Privacy Policy
    </div>
  )
}

export default AuthFooter
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/AuthHeader.jsx  (615 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import logo from '../assets/logo.png'

const AuthHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2 sm:py-5 text-center space-y-2">
      <img
        src={logo}
        alt="StudyHive Logo"
        className="h-16 sm:h-18 md:h-20 w-auto"
      />

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray mt-0.5">
        Welcome To StudyHive
      </h2>

      <h3 className="text-gray-400 text-xs sm:text-sm md:text-base">
        Collaborative learning made simple
      </h3>
    </div>
  )
}

export default AuthHeader
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/EmailVerified.jsx  (2.1 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const EmailVerified = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        navigate("/login", { replace: true });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status, navigate]);

  const handleGoToLogin = () => {
    navigate("/login", { replace: true });
  };

  const handleGoToSignup = () => {
    navigate("/signup", { replace: true });
  };

  const isSuccess = status === "success";

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8 text-center space-y-6">
        
        <div className={`h-16 w-16 mx-auto flex items-center justify-center rounded-full ${
          isSuccess ? "bg-green-50" : "bg-red-50"
        }`}>
          <span className="text-3xl">
            {isSuccess ? "✅" : "❌"}
          </span>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900">
          {isSuccess ? "Email Verified Successfully!" : "Verification Failed"}
        </h2>

        <p className="text-sm text-gray-600">
          {isSuccess
            ? "Your email has been verified. Redirecting you to login..."
            : "The verification link is invalid or has expired."}
        </p>

        {isSuccess ? (
          <button
            onClick={handleGoToLogin}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Go to Login
          </button>
        ) : (
          <button
            onClick={handleGoToSignup}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Back to Signup
          </button>
        )}
      </div>
    </div>
  );
};

export default EmailVerified;
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/LoginForm.jsx  (3.9 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { useNavigate , Link} from 'react-router-dom'
import useAuth from '../hooks/useAuth.js'

const LoginForm = () => {
  // Controlled state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await login({ email, password })
      navigate('/dashboard', { replace: true })
    } catch (error) {
      console.log('Login error:', error.response?.data)
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
          <h2 className="text-xl sm:text-2xl font-semibold text-black">
            Sign in to your account
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-black">
            Enter your credentials to continue
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-medium text-shadow-black">
                Password
              </label>
              {/* <a
                href="#"
                className="text-xs sm:text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </a> */}
              <Link to="/forgot-password" className="text-xs sm:text-sm text-blue-500 hover:underline">Forgot password?</Link>
            </div>

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
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="mt-5 sm:mt-6 text-center text-xs sm:text-sm">
          Don&apos;t have an account?{' '}
          {/* <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a> */}
          <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/Sidebar.jsx  (216 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import logo from '../assets/logo.png'

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={isOpen ? 'block' : 'hidden'}>
      
    </div>
  )
}

export default Sidebar
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/SignUpForm.jsx  (8.4 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/components/Topbar.jsx  (111 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'

const Topbar = () => {
  return (
    <div>Topbar</div>
  )
}

export default Topbar
```

──────────────────────────────────────────────────────────────────────
FILE: src/contexts/AuthContext.jsx  (1.9 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/hooks/useAuth.js  (181 B)
──────────────────────────────────────────────────────────────────────
```js
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
```

──────────────────────────────────────────────────────────────────────
FILE: src/layouts/AppLayout.jsx  (799 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx"

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Right Section */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/EmailVerification.jsx  (4.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { resendEmailVerification } from '../../services/authService'

const EmailVerification = () => {
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    if (cooldown === 0) return

    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [cooldown])

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
    if (loading || cooldown > 0) return

    try {
      setLoading(true)
      setMessage('')
      setErrorMessage('')

      await resendEmailVerification({ email })

      setMessage('Verification email resent! Please check your inbox.')
      setCooldown(60)
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
            disabled={loading || cooldown > 0}
            className={`font-medium transition-colors ${
              cooldown > 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-indigo-600 hover:text-indigo-700'
            }`}
            onClick={handleResendEmail}
          >
            {cooldown > 0 ? `Resend in ${cooldown}s` : 'Resend email'}
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/ForgotPassword.jsx  (3.0 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(false)

  const { forgotPassword } = useAuth()

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!email.trim()) {
      setError('Email is required')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format')
      return
    }

    try {
      setLoading(true)

      const response = await forgotPassword({ email })

      setSuccess(response.data.message)

      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="w-full flex flex-col items-center justify-center mb-6 gap-0.5">
        <h2 className="text-3xl font-semibold">Reset Password</h2>
        <h3>We'll send you a reset link</h3>
      </div>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl border border-black p-6 sm:p-8 shadow-lg">
        <div>
          <h3 className="text-xl font-semibold text-black ">
            Forgot your password?
          </h3>
          <p className="text-gray-600">
            Enter your email address and we'll send you a link to reset your
            password
          </p>
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-xl">Email</label>
              <input
                type="email"
                placeholder="xyz@example.com"
                className="w-full rounded-lg border border-black px-3 sm:px-4 py-2 sm:py-2.5 bg-transparent text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}

            {success && (
              <p className="text-green-600 mt-3 text-sm">{success}</p>
            )}
            <div className="mt-2.5">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
              >
                 {loading ? 'Sending...' : 'Send reset link'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/Login.jsx  (443 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import LoginForm from '../../components/LoginForm'
import AuthFooter from '../../components/AuthFooter'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <LoginForm />
      </div>

      <AuthFooter />
    </div>
  )
}

export default Login
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/ResetPassword.jsx  (2.7 kB)
──────────────────────────────────────────────────────────────────────
```jsx
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/auth/SignUp.jsx  (446 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import AuthFooter from '../../components/AuthFooter'
import SignUpForm from '../../components/SignUpForm'

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <SignUpForm />
      </div>
      <AuthFooter />
    </div>
  )
}

export default SignUp
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/DashboardHome.jsx  (1.5 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import useAuth from '../hooks/useAuth'

const DashboardHome = () => {
  const { user, logout } = useAuth()
  const accessToken = localStorage.getItem('accessToken')

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        🎉 Login Successful
      </h1>

      <div className="bg-white p-4 rounded-lg shadow-md border">
        <h2 className="font-semibold mb-2">User Info:</h2>

        {user ? (
          <div className="space-y-1 text-sm">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p>
              <strong>Email Verified:</strong>{' '}
              {user.isEmailVerified ? 'Yes' : 'No'}
            </p>
          </div>
        ) : (
          <p className="text-red-500">User not loaded</p>
        )}
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md border">
        <h2 className="font-semibold mb-2">Access Token:</h2>

        {accessToken ? (
          <p className="text-xs break-all text-green-600">
            {accessToken}
          </p>
        ) : (
          <p className="text-red-500">No access token found</p>
        )}
      </div>

      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  )
}

export default DashboardHome
```

──────────────────────────────────────────────────────────────────────
FILE: src/pages/Landing.jsx  (830 B)
──────────────────────────────────────────────────────────────────────
```jsx
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import RolesSection from "../components/landing/RolesSection";
import HowItWorks from "../components/landing/HowItWorks";
import SecuritySection from "../components/landing/SecuritySection";
import CTASection from "../components/landing/CTASection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RolesSection />
      <HowItWorks />
      <SecuritySection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Landing;
```

──────────────────────────────────────────────────────────────────────
FILE: src/routes/ProtectedRoutes.jsx  (312 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoute = () => {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div>
  if (!user) return <Navigate to="/login" replace />

  return <Outlet />
}

export default ProtectedRoute
```

──────────────────────────────────────────────────────────────────────
FILE: src/routes/router.jsx  (1.3 kB)
──────────────────────────────────────────────────────────────────────
```jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'

import Landing from '../pages/Landing'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'
import ForgotPassword from '../pages/auth/ForgotPassword'
import AppLayout from '../layouts/AppLayout'
import DashboardHome from '../pages/DashboardHome'
import ProtectedRoute from './ProtectedRoutes'
import EmailVerification from '../pages/auth/EmailVerification'
import EmailVerified from '../components/EmailVerified'
import ResetPassword from '../pages/auth/ResetPassword'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-email" element={<EmailVerification />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/email-verified" element={<EmailVerified />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<AppLayout />}>
          <Route index element={<DashboardHome />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  )
)
```

──────────────────────────────────────────────────────────────────────
FILE: src/services/authService.js  (1.7 kB)
──────────────────────────────────────────────────────────────────────
```js
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
      } catch (refreshError) {
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
```

──────────────────────────────────────────────────────────────────────
FILE: src/App.jsx  (280 B)
──────────────────────────────────────────────────────────────────────
```jsx
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
```

──────────────────────────────────────────────────────────────────────
FILE: src/colors.css  (1.8 kB)
──────────────────────────────────────────────────────────────────────
```css
/* =========================================
   STUDYHIVE COLOR SYSTEM
   Clean Semantic Token Setup
========================================= */

/* ---------- LIGHT THEME ---------- */

:root {

  /* Brand */
  --primary: 79 70 229;
  --primary-hover: 67 56 202;
  --primary-soft: 224 231 255;

  /* Backgrounds */
  --bg: 248 250 252;
  --surface: 255 255 255;
  --surface-2: 241 245 249;

  /* Text */
  --text: 15 23 42;
  --text-secondary: 71 85 105;
  --text-muted: 148 163 184;

  /* Borders */
  --border: 226 232 240;
  --border-strong: 203 213 225;

  /* Status */
  --success: 34 197 94;
  --warning: 234 179 8;
  --error: 239 68 68;
  --info: 59 130 246;

  /* Layout */
  --navbar-bg: 255 255 255;
  --sidebar-bg: 255 255 255;
  --card-bg: 255 255 255;

  /* Interaction */
  --hover: 241 245 249;
  --active: 226 232 240;
  --focus-ring: 99 102 241;

  /* Tables */
  --table-header: 248 250 252;
  --table-row-hover: 241 245 249;

  /* Overlay */
  --overlay: 15 23 42;
}


/* ---------- DARK THEME ---------- */

[data-theme="dark"] {

  /* Brand */
  --primary: 99 102 241;
  --primary-hover: 79 70 229;
  --primary-soft: 55 48 163;

  /* Backgrounds */
  --bg: 15 23 42;
  --surface: 30 41 59;
  --surface-2: 51 65 85;

  /* Text */
  --text: 248 250 252;
  --text-secondary: 203 213 225;
  --text-muted: 148 163 184;

  /* Borders */
  --border: 71 85 105;
  --border-strong: 100 116 139;

  /* Status */
  --success: 34 197 94;
  --warning: 234 179 8;
  --error: 239 68 68;
  --info: 59 130 246;

  /* Layout */
  --navbar-bg: 15 23 42;
  --sidebar-bg: 30 41 59;
  --card-bg: 30 41 59;

  /* Interaction */
  --hover: 51 65 85;
  --active: 71 85 105;
  --focus-ring: 129 140 248;

  /* Tables */
  --table-header: 30 41 59;
  --table-row-hover: 51 65 85;

  /* Overlay */
  --overlay: 0 0 0;
}
```

──────────────────────────────────────────────────────────────────────
FILE: src/index.css  (47 B)
──────────────────────────────────────────────────────────────────────
```css
@import "tailwindcss";
@import "./colors.css";
```

──────────────────────────────────────────────────────────────────────
FILE: src/main.jsx  (184 B)
──────────────────────────────────────────────────────────────────────
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
```

──────────────────────────────────────────────────────────────────────
FILE: Codebase.md  (47.5 kB)
──────────────────────────────────────────────────────────────────────
```md
# Codebase (src/)

## File Structure

```
src/
  App.jsx
  index.css
  main.jsx
  assets/
    logo.png
  components/
    AuthFooter.jsx
    AuthHeader.jsx
    EmailVerified.jsx
    LoginForm.jsx
    Sidebar.jsx
    SignUpForm.jsx
    Topbar.jsx
    landing/
      ContactSection.jsx
      CTASection.jsx
      FadeInSection.jsx
      FeaturesSection.jsx
      Footer.jsx
      HeroSection.jsx
      HowItWorks.jsx
      Navbar.jsx
      RolesSection.jsx
      SecuritySection.jsx
  contexts/
    AuthContext.jsx
  hooks/
    useAuth.js
  layouts/
    AppLayout.jsx
  pages/
    DashboardHome.jsx
    Landing.jsx
    auth/
      EmailVerification.jsx
      ForgotPassword.jsx
      Login.jsx
      ResetPassword.jsx
      SignUp.jsx
  routes/
    ProtectedRoutes.jsx
    router.jsx
  services/
    authService.js
```

## Contents

> Note: Binary asset src/assets/logo.png is not included.

### src/main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

### src/index.css

```css
@import 'tailwindcss';
```

### src/App.jsx

```jsx
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
```

### src/routes/router.jsx

```jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom'

import Landing from '../pages/Landing'
import Login from '../pages/auth/Login'
import SignUp from '../pages/auth/SignUp'
import ForgotPassword from '../pages/auth/ForgotPassword'
import AppLayout from '../layouts/AppLayout'
import DashboardHome from '../pages/DashboardHome'
import ProtectedRoute from './ProtectedRoutes'
import EmailVerification from '../pages/auth/EmailVerification'
import EmailVerified from '../components/EmailVerified'
import ResetPassword from '../pages/auth/ResetPassword'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-email" element={<EmailVerification />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/email-verified" element={<EmailVerified />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<AppLayout />}>
          <Route index element={<DashboardHome />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  )
)
```

### src/routes/ProtectedRoutes.jsx

```jsx
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoute = () => {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div>
  if (!user) return <Navigate to="/login" replace />

  return <Outlet />
}

export default ProtectedRoute
```

### src/services/authService.js

```javascript
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
      } catch (refreshError) {
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
```

### src/layouts/AppLayout.jsx

```jsx
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'
import Topbar from '../components/Topbar.jsx'

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Right Section */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <Topbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AppLayout
```

### src/contexts/AuthContext.jsx

```jsx
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
```

### src/hooks/useAuth.js

```javascript
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext.jsx'

const useAuth = () => {
  return useContext(AuthContext)
}

export default useAuth
```

### src/components/AuthHeader.jsx

```jsx
import React from 'react'
import logo from '../assets/logo.png'

const AuthHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2 sm:py-5 text-center space-y-2">
      <img
        src={logo}
        alt="StudyHive Logo"
        className="h-16 sm:h-18 md:h-20 w-auto"
      />

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray mt-0.5">
        Welcome To StudyHive
      </h2>

      <h3 className="text-gray-400 text-xs sm:text-sm md:text-base">
        Collaborative learning made simple
      </h3>
    </div>
  )
}

export default AuthHeader
```

### src/components/AuthFooter.jsx

```jsx
import React from 'react'

const AuthFooter = () => {
  return (
    <div className="py-4 text-center text-xs text-gray-400">
      By continuing, you agree to our Terms of Service and Privacy Policy
    </div>
  )
}

export default AuthFooter
```

### src/components/EmailVerified.jsx

```jsx
import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const EmailVerified = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const status = searchParams.get('status')

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        navigate('/login', { replace: true })
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [status, navigate])

  const handleGoToLogin = () => {
    navigate('/login', { replace: true })
  }

  const handleGoToSignup = () => {
    navigate('/signup', { replace: true })
  }

  const isSuccess = status === 'success'

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-xl p-8 text-center space-y-6">
        <div
          className={`h-16 w-16 mx-auto flex items-center justify-center rounded-full ${
            isSuccess ? 'bg-green-50' : 'bg-red-50'
          }`}
        >
          <span className="text-3xl">{isSuccess ? '✅' : '❌'}</span>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900">
          {isSuccess ? 'Email Verified Successfully!' : 'Verification Failed'}
        </h2>

        <p className="text-sm text-gray-600">
          {isSuccess
            ? 'Your email has been verified. Redirecting you to login...'
            : 'The verification link is invalid or has expired.'}
        </p>

        {isSuccess ? (
          <button
            onClick={handleGoToLogin}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Go to Login
          </button>
        ) : (
          <button
            onClick={handleGoToSignup}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Back to Signup
          </button>
        )}
      </div>
    </div>
  )
}

export default EmailVerified
```

### src/components/LoginForm.jsx

```jsx
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth.js'

const LoginForm = () => {
  // Controlled state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await login({ email, password })
      navigate('/dashboard', { replace: true })
    } catch (error) {
      console.log('Login error:', error.response?.data)
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
          <h2 className="text-xl sm:text-2xl font-semibold text-black">
            Sign in to your account
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-black">
            Enter your credentials to continue
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
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
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <label className="text-xs sm:text-sm font-medium text-shadow-black">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-xs sm:text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

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
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="mt-5 sm:mt-6 text-center text-xs sm:text-sm">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
```

### src/components/SignUpForm.jsx

```jsx
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

      if (response.errors && typeof response.errors === 'object') {
        setErrors(response.errors)
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
```

### src/components/Sidebar.jsx

```jsx
import React from 'react'
import logo from '../assets/logo.png'

const Sidebar = ({ isOpen, onClose }) => {
  return <div className={isOpen ? 'block' : 'hidden'}></div>
}

export default Sidebar
```

### src/components/Topbar.jsx

```jsx
import React from 'react'

const Topbar = () => {
  return <div>Topbar</div>
}

export default Topbar
```

### src/components/landing/ContactSection.jsx

```jsx
// src/components/landing/ContactSection.jsx
import FadeInSection from './FadeInSection'

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">Connect With Us</h2>

          <p className="mt-6 text-gray-600">
            StudyHive is an open collaborative project. Feel free to explore the
            codebase or connect with the creator.
          </p>

          <div className="mt-8 flex justify-center gap-6">
            <a
              href="https://github.com/Adi-Dcpp"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:scale-105 transition-all duration-300"
            >
              GitHub
            </a>

            <a
              href="mailto:luffy1120adi@gmail.com"
              className="px-6 py-3 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
            >
              Email
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

export default ContactSection
```

### src/components/landing/CTASection.jsx

```jsx
// src/components/landing/CTASection.jsx
import { Link } from 'react-router-dom'
import FadeInSection from './FadeInSection'

const CTASection = () => {
  return (
    <section className="py-20 bg-indigo-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold">
            Ready to level up your study workflow?
          </h2>

          <Link
            to="/signup"
            className="mt-8 inline-block px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Create Your StudyHive
          </Link>
        </FadeInSection>
      </div>
    </section>
  )
}

export default CTASection
```

### src/components/landing/FadeInSection.jsx

```jsx
import { motion } from 'framer-motion'

const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInSection
```

### src/components/landing/FeaturesSection.jsx

```jsx
// src/components/landing/FeaturesSection.jsx
import FadeInSection from './FadeInSection'

const features = [
  'Secure Authentication',
  'Study Group Management',
  'Learning Goal Tracking',
  'Assignment & Submissions',
  'File & Resource Sharing',
  'Progress Monitoring Dashboard',
]

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Powerful Features
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="font-semibold text-gray-800">{feature}</h3>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

export default FeaturesSection
```

### src/components/landing/Footer.jsx

```jsx
// src/components/landing/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} StudyHive. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">
            Features
          </a>
          <a href="#" className="hover:text-white transition">
            About
          </a>
          <a href="#" className="hover:text-white transition">
            Contact
          </a>
          <a href="#" className="hover:text-white transition">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
```

### src/components/landing/HeroSection.jsx

```jsx
import { Link } from 'react-router-dom'
import FadeInSection from './FadeInSection'

const HeroSection = () => {
  return (
    <section className="bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeInSection>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Organize. Collaborate.
                <span className="text-indigo-600"> Succeed Together.</span>
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                StudyHive helps mentors and learners build structured study
                groups, track learning goals, manage assignments, and
                collaborate efficiently in one powerful platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/signup"
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium transition-all duration-300 hover:bg-indigo-700 hover:scale-105"
                >
                  Get Started
                </Link>

                <Link
                  to="/login"
                  className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE - DASHBOARD MOCKUP */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">
                    Web Development Group
                  </h3>
                  <span className="text-sm bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full">
                    Active
                  </span>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Goal Progress</p>
                  <div className="mt-2 h-2 bg-gray-300 rounded-full">
                    <div className="h-2 bg-indigo-600 rounded-full w-2/3"></div>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700">
                    Assignment Status
                  </p>
                  <div className="mt-3 flex gap-3 text-xs">
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                      Pending
                    </span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      Submitted
                    </span>
                    <span className="bg-emerald-100 text-emerald-600 px-2 py-1 rounded-full">
                      Reviewed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

export default HeroSection
```

### src/components/landing/HowItWorks.jsx

```jsx
// src/components/landing/HowItWorks.jsx
import FadeInSection from './FadeInSection'

const steps = [
  'Sign Up & Verify Email',
  'Create or Join Study Group',
  'Assign & Complete Goals',
  'Track Progress & Collaborate',
]

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            How It Works
          </h2>

          <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
            {steps.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="w-12 h-12 mx-auto bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

export default HowItWorks
```

### src/components/landing/Navbar.jsx

```jsx
// src/components/landing/Navbar.jsx
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LEFT - Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="StudyHive Logo" className="h-10 w-auto" />
          {/* <span className="text-xl font-bold text-gray-900">
            StudyHive
          </span> */}
        </Link>

        {/* RIGHT - Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#features" className="hover:text-indigo-600 transition">
            Features
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>

          <Link
            to="/login"
            className="px-5 py-2 border border-gray-300 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
```

### src/components/landing/RolesSection.jsx

```jsx
// src/components/landing/RolesSection.jsx
import FadeInSection from './FadeInSection'

const RolesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-indigo-600">For Mentors</h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Create Study Groups</li>
                <li>Assign Learning Goals</li>
                <li>Review Submissions</li>
                <li>Post Announcements</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-emerald-600">
                For Learners
              </h3>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li>Join Groups</li>
                <li>Track Goals</li>
                <li>Submit Assignments</li>
                <li>Access Resources</li>
              </ul>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

export default RolesSection
```

### src/components/landing/SecuritySection.jsx

```jsx
// src/components/landing/SecuritySection.jsx
import FadeInSection from './FadeInSection'

const SecuritySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold text-gray-900">
            Secure & Reliable
          </h2>
          <p className="mt-6 text-gray-600">
            Role-based access control, secure file uploads, email verification,
            and production-ready backend architecture ensure your learning
            environment stays protected.
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}

export default SecuritySection
```

### src/pages/DashboardHome.jsx

```jsx
import React from 'react'

const DashboardHome = () => {
  return <div>DashboardHome</div>
}

export default DashboardHome
```

### src/pages/Landing.jsx

```jsx
import Navbar from '../components/landing/Navbar'
import HeroSection from '../components/landing/HeroSection'
import FeaturesSection from '../components/landing/FeaturesSection'
import RolesSection from '../components/landing/RolesSection'
import HowItWorks from '../components/landing/HowItWorks'
import SecuritySection from '../components/landing/SecuritySection'
import CTASection from '../components/landing/CTASection'
import ContactSection from '../components/landing/ContactSection'
import Footer from '../components/landing/Footer'

const Landing = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RolesSection />
      <HowItWorks />
      <SecuritySection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Landing
```

### src/pages/auth/EmailVerification.jsx

```jsx
import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { resendEmailVerification } from '../../services/authService'

const EmailVerification = () => {
  const [cooldown, setCooldown] = useState(0)

  useEffect(() => {
    if (cooldown === 0) return

    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [cooldown])

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
    if (loading || cooldown > 0) return

    try {
      setLoading(true)
      setMessage('')
      setErrorMessage('')

      await resendEmailVerification({ email })

      setMessage('Verification email resent! Please check your inbox.')
      setCooldown(60)
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
            disabled={loading || cooldown > 0}
            className={`font-medium transition-colors ${
              cooldown > 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-indigo-600 hover:text-indigo-700'
            }`}
            onClick={handleResendEmail}
          >
            {cooldown > 0 ? `Resend in ${cooldown}s` : 'Resend email'}
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
```

### src/pages/auth/ForgotPassword.jsx

```jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)
  const [loading, setLoading] = useState(false)

  const { forgotPassword } = useAuth()

  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!email.trim()) {
      setError('Email is required')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format')
      return
    }

    try {
      setLoading(true)

      const response = await forgotPassword({ email })

      setSuccess(response.data.message)

      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
      <div className="w-full flex flex-col items-center justify-center mb-6 gap-0.5">
        <h2 className="text-3xl font-semibold">Reset Password</h2>
        <h3>We'll send you a reset link</h3>
      </div>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl border border-black p-6 sm:p-8 shadow-lg">
        <div>
          <h3 className="text-xl font-semibold text-black ">
            Forgot your password?
          </h3>
          <p className="text-gray-600">
            Enter your email address and we'll send you a link to reset your
            password
          </p>
        </div>
        <div>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-xl">Email</label>
              <input
                type="email"
                placeholder="xyz@example.com"
                className="w-full rounded-lg border border-black px-3 sm:px-4 py-2 sm:py-2.5 bg-transparent text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}

            {success && (
              <p className="text-green-600 mt-3 text-sm">{success}</p>
            )}
            <div className="mt-2.5">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
              >
                {loading ? 'Sending...' : 'Send reset link'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
```

### src/pages/auth/ResetPassword.jsx

```jsx
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

          {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}

          {success && <p className="text-green-600 mt-3 text-sm">{success}</p>}

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
```

### src/pages/auth/Login.jsx

```jsx
import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import LoginForm from '../../components/LoginForm'
import AuthFooter from '../../components/AuthFooter'

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <LoginForm />
      </div>

      <AuthFooter />
    </div>
  )
}

export default Login
```

### src/pages/auth/SignUp.jsx

```jsx
import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import AuthFooter from '../../components/AuthFooter'
import SignUpForm from '../../components/SignUpForm'

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col justify-center grow">
        <AuthHeader />
        <SignUpForm />
      </div>
      <AuthFooter />
    </div>
  )
}

export default SignUp
```
```

──────────────────────────────────────────────────────────────────────
FILE: eslint.config.js  (758 B)
──────────────────────────────────────────────────────────────────────
```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```

──────────────────────────────────────────────────────────────────────
FILE: index.html  (367 B)
──────────────────────────────────────────────────────────────────────
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>studyhive-frontend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

──────────────────────────────────────────────────────────────────────
FILE: package.json  (957 B)
──────────────────────────────────────────────────────────────────────
```json
{
  "name": "studyhive-frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "tree": "node print-codebase.js",
    "codebase": "node print-codebase.js --full",
    "codebase:save": "node print-codebase.js --full --out Codebase.md"
  },
  "dependencies": {
    "axios": "^1.13.5",
    "framer-motion": "^12.34.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.13.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@tailwindcss/vite": "^4.1.18",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "prettier": "^3.8.1",
    "tailwindcss": "^4.1.18",
    "vite": "^7.2.4"
  }
}
```

──────────────────────────────────────────────────────────────────────
FILE: print-codebase.js  (4.8 kB)
──────────────────────────────────────────────────────────────────────
```js
#!/usr/bin/env node
/**
 * print-codebase.js
 * Prints the file tree and (optionally) the contents of every source file.
 *
 * Usage:
 *   node print-codebase.js          → tree only
 *   node print-codebase.js --full   → tree + file contents
 *   node print-codebase.js --out output.txt --full  → write to file
 */

import fs from 'fs'
import path from 'path'

// ── Config ────────────────────────────────────────────────────
const ROOT = process.cwd()

const IGNORE_DIRS = new Set([
  'node_modules', '.git', 'dist', '.vite', 'build', 'coverage', '.cache',
])

const IGNORE_FILES = new Set([
  '.DS_Store', 'Thumbs.db', 'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
])

const TEXT_EXTENSIONS = new Set([
  '.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.json',
  '.md', '.env', '.txt', '.yaml', '.yml', '.config',
])

// ── CLI args ──────────────────────────────────────────────────
const args = process.argv.slice(2)
const FULL  = args.includes('--full')
const outIdx = args.indexOf('--out')
const OUT_FILE = outIdx !== -1 ? args[outIdx + 1] : null

// ── Helpers ───────────────────────────────────────────────────
const lines = []
const write = (str = '') => lines.push(str)

function isText(file) {
  return TEXT_EXTENSIONS.has(path.extname(file).toLowerCase())
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

// ── Tree printer ──────────────────────────────────────────────
function printTree(dir, prefix = '') {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      // dirs first, then files
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  filtered.forEach((entry, idx) => {
    const isLast    = idx === filtered.length - 1
    const connector = isLast ? '└── ' : '├── '
    const childPfx  = isLast ? '    ' : '│   '
    const fullPath  = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      write(`${prefix}${connector}${entry.name}/`)
      printTree(fullPath, prefix + childPfx)
    } else {
      const size = formatSize(fs.statSync(fullPath).size)
      write(`${prefix}${connector}${entry.name}  (${size})`)
    }
  })
}

// ── Content printer ───────────────────────────────────────────
function printContents(dir) {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  for (const entry of filtered) {
    const fullPath = path.join(dir, entry.name)
    const relPath  = path.relative(ROOT, fullPath)

    if (entry.isDirectory()) {
      printContents(fullPath)
    } else if (isText(entry.name)) {
      const ext  = path.extname(entry.name).slice(1) || 'txt'
      const size = formatSize(fs.statSync(fullPath).size)
      write('')
      write('─'.repeat(70))
      write(`FILE: ${relPath}  (${size})`)
      write('─'.repeat(70))
      try {
        write('```' + ext)
        write(fs.readFileSync(fullPath, 'utf8').trimEnd())
        write('```')
      } catch {
        write('[binary / unreadable]')
      }
    }
  }
}

// ── Main ──────────────────────────────────────────────────────
const projectName = path.basename(ROOT)

write('='.repeat(70))
write(`  StudyHive Frontend — Codebase Snapshot`)
write(`  Root : ${ROOT}`)
write(`  Date : ${new Date().toLocaleString()}`)
write('='.repeat(70))
write('')
write(`${projectName}/`)
printTree(ROOT)

if (FULL) {
  write('')
  write('='.repeat(70))
  write('  FILE CONTENTS')
  write('='.repeat(70))
  printContents(ROOT)
}

write('')
const output = lines.join('\n')

if (OUT_FILE) {
  fs.writeFileSync(OUT_FILE, output, 'utf8')
  console.log(`✓ Written to ${OUT_FILE}`)
} else {
  console.log(output)
}
```

──────────────────────────────────────────────────────────────────────
FILE: README.md  (68 B)
──────────────────────────────────────────────────────────────────────
```md
# StudyHive-Frontend
A website made on top of the StudyHive Backend
```

──────────────────────────────────────────────────────────────────────
FILE: vercel.json  (69 B)
──────────────────────────────────────────────────────────────────────
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

──────────────────────────────────────────────────────────────────────
FILE: vite.config.js  (265 B)
──────────────────────────────────────────────────────────────────────
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allows access from phone on same WiFi
  },
})
```
```

──────────────────────────────────────────────────────────────────────
FILE: eslint.config.js  (758 B)
──────────────────────────────────────────────────────────────────────
```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```

──────────────────────────────────────────────────────────────────────
FILE: index.html  (367 B)
──────────────────────────────────────────────────────────────────────
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>studyhive-frontend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

──────────────────────────────────────────────────────────────────────
FILE: package.json  (957 B)
──────────────────────────────────────────────────────────────────────
```json
{
  "name": "studyhive-frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "tree": "node print-codebase.js",
    "codebase": "node print-codebase.js --full",
    "codebase:save": "node print-codebase.js --full --out Codebase.md"
  },
  "dependencies": {
    "axios": "^1.13.5",
    "framer-motion": "^12.34.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.13.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@tailwindcss/vite": "^4.1.18",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "prettier": "^3.8.1",
    "tailwindcss": "^4.1.18",
    "vite": "^7.2.4"
  }
}
```

──────────────────────────────────────────────────────────────────────
FILE: print-codebase.js  (4.8 kB)
──────────────────────────────────────────────────────────────────────
```js
#!/usr/bin/env node
/**
 * print-codebase.js
 * Prints the file tree and (optionally) the contents of every source file.
 *
 * Usage:
 *   node print-codebase.js          → tree only
 *   node print-codebase.js --full   → tree + file contents
 *   node print-codebase.js --out output.txt --full  → write to file
 */

import fs from 'fs'
import path from 'path'

// ── Config ────────────────────────────────────────────────────
const ROOT = process.cwd()

const IGNORE_DIRS = new Set([
  'node_modules', '.git', 'dist', '.vite', 'build', 'coverage', '.cache',
])

const IGNORE_FILES = new Set([
  '.DS_Store', 'Thumbs.db', 'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
])

const TEXT_EXTENSIONS = new Set([
  '.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.json',
  '.md', '.env', '.txt', '.yaml', '.yml', '.config',
])

// ── CLI args ──────────────────────────────────────────────────
const args = process.argv.slice(2)
const FULL  = args.includes('--full')
const outIdx = args.indexOf('--out')
const OUT_FILE = outIdx !== -1 ? args[outIdx + 1] : null

// ── Helpers ───────────────────────────────────────────────────
const lines = []
const write = (str = '') => lines.push(str)

function isText(file) {
  return TEXT_EXTENSIONS.has(path.extname(file).toLowerCase())
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

// ── Tree printer ──────────────────────────────────────────────
function printTree(dir, prefix = '') {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      // dirs first, then files
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  filtered.forEach((entry, idx) => {
    const isLast    = idx === filtered.length - 1
    const connector = isLast ? '└── ' : '├── '
    const childPfx  = isLast ? '    ' : '│   '
    const fullPath  = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      write(`${prefix}${connector}${entry.name}/`)
      printTree(fullPath, prefix + childPfx)
    } else {
      const size = formatSize(fs.statSync(fullPath).size)
      write(`${prefix}${connector}${entry.name}  (${size})`)
    }
  })
}

// ── Content printer ───────────────────────────────────────────
function printContents(dir) {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  for (const entry of filtered) {
    const fullPath = path.join(dir, entry.name)
    const relPath  = path.relative(ROOT, fullPath)

    if (entry.isDirectory()) {
      printContents(fullPath)
    } else if (isText(entry.name)) {
      const ext  = path.extname(entry.name).slice(1) || 'txt'
      const size = formatSize(fs.statSync(fullPath).size)
      write('')
      write('─'.repeat(70))
      write(`FILE: ${relPath}  (${size})`)
      write('─'.repeat(70))
      try {
        write('```' + ext)
        write(fs.readFileSync(fullPath, 'utf8').trimEnd())
        write('```')
      } catch {
        write('[binary / unreadable]')
      }
    }
  }
}

// ── Main ──────────────────────────────────────────────────────
const projectName = path.basename(ROOT)

write('='.repeat(70))
write(`  StudyHive Frontend — Codebase Snapshot`)
write(`  Root : ${ROOT}`)
write(`  Date : ${new Date().toLocaleString()}`)
write('='.repeat(70))
write('')
write(`${projectName}/`)
printTree(ROOT)

if (FULL) {
  write('')
  write('='.repeat(70))
  write('  FILE CONTENTS')
  write('='.repeat(70))
  printContents(ROOT)
}

write('')
const output = lines.join('\n')

if (OUT_FILE) {
  fs.writeFileSync(OUT_FILE, output, 'utf8')
  console.log(`✓ Written to ${OUT_FILE}`)
} else {
  console.log(output)
}
```

──────────────────────────────────────────────────────────────────────
FILE: README.md  (68 B)
──────────────────────────────────────────────────────────────────────
```md
# StudyHive-Frontend
A website made on top of the StudyHive Backend
```

──────────────────────────────────────────────────────────────────────
FILE: vercel.json  (69 B)
──────────────────────────────────────────────────────────────────────
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

──────────────────────────────────────────────────────────────────────
FILE: vite.config.js  (265 B)
──────────────────────────────────────────────────────────────────────
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allows access from phone on same WiFi
  },
})
```
```

──────────────────────────────────────────────────────────────────────
FILE: eslint.config.js  (758 B)
──────────────────────────────────────────────────────────────────────
```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```

──────────────────────────────────────────────────────────────────────
FILE: index.html  (367 B)
──────────────────────────────────────────────────────────────────────
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>studyhive-frontend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

──────────────────────────────────────────────────────────────────────
FILE: package.json  (957 B)
──────────────────────────────────────────────────────────────────────
```json
{
  "name": "studyhive-frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "tree": "node print-codebase.js",
    "codebase": "node print-codebase.js --full",
    "codebase:save": "node print-codebase.js --full --out Codebase.md"
  },
  "dependencies": {
    "axios": "^1.13.5",
    "framer-motion": "^12.34.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.13.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@tailwindcss/vite": "^4.1.18",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "prettier": "^3.8.1",
    "tailwindcss": "^4.1.18",
    "vite": "^7.2.4"
  }
}
```

──────────────────────────────────────────────────────────────────────
FILE: print-codebase.js  (4.8 kB)
──────────────────────────────────────────────────────────────────────
```js
#!/usr/bin/env node
/**
 * print-codebase.js
 * Prints the file tree and (optionally) the contents of every source file.
 *
 * Usage:
 *   node print-codebase.js          → tree only
 *   node print-codebase.js --full   → tree + file contents
 *   node print-codebase.js --out output.txt --full  → write to file
 */

import fs from 'fs'
import path from 'path'

// ── Config ────────────────────────────────────────────────────
const ROOT = process.cwd()

const IGNORE_DIRS = new Set([
  'node_modules', '.git', 'dist', '.vite', 'build', 'coverage', '.cache',
])

const IGNORE_FILES = new Set([
  '.DS_Store', 'Thumbs.db', 'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
])

const TEXT_EXTENSIONS = new Set([
  '.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.json',
  '.md', '.env', '.txt', '.yaml', '.yml', '.config',
])

// ── CLI args ──────────────────────────────────────────────────
const args = process.argv.slice(2)
const FULL  = args.includes('--full')
const outIdx = args.indexOf('--out')
const OUT_FILE = outIdx !== -1 ? args[outIdx + 1] : null

// ── Helpers ───────────────────────────────────────────────────
const lines = []
const write = (str = '') => lines.push(str)

function isText(file) {
  return TEXT_EXTENSIONS.has(path.extname(file).toLowerCase())
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

// ── Tree printer ──────────────────────────────────────────────
function printTree(dir, prefix = '') {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      // dirs first, then files
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  filtered.forEach((entry, idx) => {
    const isLast    = idx === filtered.length - 1
    const connector = isLast ? '└── ' : '├── '
    const childPfx  = isLast ? '    ' : '│   '
    const fullPath  = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      write(`${prefix}${connector}${entry.name}/`)
      printTree(fullPath, prefix + childPfx)
    } else {
      const size = formatSize(fs.statSync(fullPath).size)
      write(`${prefix}${connector}${entry.name}  (${size})`)
    }
  })
}

// ── Content printer ───────────────────────────────────────────
function printContents(dir) {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  for (const entry of filtered) {
    const fullPath = path.join(dir, entry.name)
    const relPath  = path.relative(ROOT, fullPath)

    if (entry.isDirectory()) {
      printContents(fullPath)
    } else if (isText(entry.name)) {
      const ext  = path.extname(entry.name).slice(1) || 'txt'
      const size = formatSize(fs.statSync(fullPath).size)
      write('')
      write('─'.repeat(70))
      write(`FILE: ${relPath}  (${size})`)
      write('─'.repeat(70))
      try {
        write('```' + ext)
        write(fs.readFileSync(fullPath, 'utf8').trimEnd())
        write('```')
      } catch {
        write('[binary / unreadable]')
      }
    }
  }
}

// ── Main ──────────────────────────────────────────────────────
const projectName = path.basename(ROOT)

write('='.repeat(70))
write(`  StudyHive Frontend — Codebase Snapshot`)
write(`  Root : ${ROOT}`)
write(`  Date : ${new Date().toLocaleString()}`)
write('='.repeat(70))
write('')
write(`${projectName}/`)
printTree(ROOT)

if (FULL) {
  write('')
  write('='.repeat(70))
  write('  FILE CONTENTS')
  write('='.repeat(70))
  printContents(ROOT)
}

write('')
const output = lines.join('\n')

if (OUT_FILE) {
  fs.writeFileSync(OUT_FILE, output, 'utf8')
  console.log(`✓ Written to ${OUT_FILE}`)
} else {
  console.log(output)
}
```

──────────────────────────────────────────────────────────────────────
FILE: README.md  (68 B)
──────────────────────────────────────────────────────────────────────
```md
# StudyHive-Frontend
A website made on top of the StudyHive Backend
```

──────────────────────────────────────────────────────────────────────
FILE: vercel.json  (69 B)
──────────────────────────────────────────────────────────────────────
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

──────────────────────────────────────────────────────────────────────
FILE: vite.config.js  (265 B)
──────────────────────────────────────────────────────────────────────
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allows access from phone on same WiFi
  },
})
```
```

──────────────────────────────────────────────────────────────────────
FILE: eslint.config.js  (758 B)
──────────────────────────────────────────────────────────────────────
```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```

──────────────────────────────────────────────────────────────────────
FILE: index.html  (367 B)
──────────────────────────────────────────────────────────────────────
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>studyhive-frontend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

──────────────────────────────────────────────────────────────────────
FILE: package.json  (986 B)
──────────────────────────────────────────────────────────────────────
```json
{
  "name": "studyhive-frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "tree": "node print-codebase.js",
    "codebase": "node print-codebase.js --full",
    "codebase:save": "node print-codebase.js --full --out Codebase.md"
  },
  "dependencies": {
    "axios": "^1.13.5",
    "framer-motion": "^12.34.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-icons": "^5.6.0",
    "react-router-dom": "^7.13.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@tailwindcss/vite": "^4.1.18",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "prettier": "^3.8.1",
    "tailwindcss": "^4.1.18",
    "vite": "^7.2.4"
  }
}
```

──────────────────────────────────────────────────────────────────────
FILE: print-codebase.js  (4.8 kB)
──────────────────────────────────────────────────────────────────────
```js
#!/usr/bin/env node
/**
 * print-codebase.js
 * Prints the file tree and (optionally) the contents of every source file.
 *
 * Usage:
 *   node print-codebase.js          → tree only
 *   node print-codebase.js --full   → tree + file contents
 *   node print-codebase.js --out output.txt --full  → write to file
 */

import fs from 'fs'
import path from 'path'

// ── Config ────────────────────────────────────────────────────
const ROOT = process.cwd()

const IGNORE_DIRS = new Set([
  'node_modules', '.git', 'dist', '.vite', 'build', 'coverage', '.cache',
])

const IGNORE_FILES = new Set([
  '.DS_Store', 'Thumbs.db', 'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
])

const TEXT_EXTENSIONS = new Set([
  '.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.json',
  '.md', '.env', '.txt', '.yaml', '.yml', '.config',
])

// ── CLI args ──────────────────────────────────────────────────
const args = process.argv.slice(2)
const FULL  = args.includes('--full')
const outIdx = args.indexOf('--out')
const OUT_FILE = outIdx !== -1 ? args[outIdx + 1] : null

// ── Helpers ───────────────────────────────────────────────────
const lines = []
const write = (str = '') => lines.push(str)

function isText(file) {
  return TEXT_EXTENSIONS.has(path.extname(file).toLowerCase())
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

// ── Tree printer ──────────────────────────────────────────────
function printTree(dir, prefix = '') {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      // dirs first, then files
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  filtered.forEach((entry, idx) => {
    const isLast    = idx === filtered.length - 1
    const connector = isLast ? '└── ' : '├── '
    const childPfx  = isLast ? '    ' : '│   '
    const fullPath  = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      write(`${prefix}${connector}${entry.name}/`)
      printTree(fullPath, prefix + childPfx)
    } else {
      const size = formatSize(fs.statSync(fullPath).size)
      write(`${prefix}${connector}${entry.name}  (${size})`)
    }
  })
}

// ── Content printer ───────────────────────────────────────────
function printContents(dir) {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  for (const entry of filtered) {
    const fullPath = path.join(dir, entry.name)
    const relPath  = path.relative(ROOT, fullPath)

    if (entry.isDirectory()) {
      printContents(fullPath)
    } else if (isText(entry.name)) {
      const ext  = path.extname(entry.name).slice(1) || 'txt'
      const size = formatSize(fs.statSync(fullPath).size)
      write('')
      write('─'.repeat(70))
      write(`FILE: ${relPath}  (${size})`)
      write('─'.repeat(70))
      try {
        write('```' + ext)
        write(fs.readFileSync(fullPath, 'utf8').trimEnd())
        write('```')
      } catch {
        write('[binary / unreadable]')
      }
    }
  }
}

// ── Main ──────────────────────────────────────────────────────
const projectName = path.basename(ROOT)

write('='.repeat(70))
write(`  StudyHive Frontend — Codebase Snapshot`)
write(`  Root : ${ROOT}`)
write(`  Date : ${new Date().toLocaleString()}`)
write('='.repeat(70))
write('')
write(`${projectName}/`)
printTree(ROOT)

if (FULL) {
  write('')
  write('='.repeat(70))
  write('  FILE CONTENTS')
  write('='.repeat(70))
  printContents(ROOT)
}

write('')
const output = lines.join('\n')

if (OUT_FILE) {
  fs.writeFileSync(OUT_FILE, output, 'utf8')
  console.log(`✓ Written to ${OUT_FILE}`)
} else {
  console.log(output)
}
```

──────────────────────────────────────────────────────────────────────
FILE: README.md  (68 B)
──────────────────────────────────────────────────────────────────────
```md
# StudyHive-Frontend
A website made on top of the StudyHive Backend
```

──────────────────────────────────────────────────────────────────────
FILE: vercel.json  (69 B)
──────────────────────────────────────────────────────────────────────
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

──────────────────────────────────────────────────────────────────────
FILE: vite.config.js  (265 B)
──────────────────────────────────────────────────────────────────────
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allows access from phone on same WiFi
  },
})
```
```

──────────────────────────────────────────────────────────────────────
FILE: eslint.config.js  (758 B)
──────────────────────────────────────────────────────────────────────
```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```

──────────────────────────────────────────────────────────────────────
FILE: index.html  (367 B)
──────────────────────────────────────────────────────────────────────
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>studyhive-frontend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

──────────────────────────────────────────────────────────────────────
FILE: package.json  (986 B)
──────────────────────────────────────────────────────────────────────
```json
{
  "name": "studyhive-frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "tree": "node print-codebase.js",
    "codebase": "node print-codebase.js --full",
    "codebase:save": "node print-codebase.js --full --out Codebase.md"
  },
  "dependencies": {
    "axios": "^1.13.5",
    "framer-motion": "^12.34.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-icons": "^5.6.0",
    "react-router-dom": "^7.13.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@tailwindcss/vite": "^4.1.18",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "prettier": "^3.8.1",
    "tailwindcss": "^4.1.18",
    "vite": "^7.2.4"
  }
}
```

──────────────────────────────────────────────────────────────────────
FILE: print-codebase.js  (4.8 kB)
──────────────────────────────────────────────────────────────────────
```js
#!/usr/bin/env node
/**
 * print-codebase.js
 * Prints the file tree and (optionally) the contents of every source file.
 *
 * Usage:
 *   node print-codebase.js          → tree only
 *   node print-codebase.js --full   → tree + file contents
 *   node print-codebase.js --out output.txt --full  → write to file
 */

import fs from 'fs'
import path from 'path'

// ── Config ────────────────────────────────────────────────────
const ROOT = process.cwd()

const IGNORE_DIRS = new Set([
  'node_modules', '.git', 'dist', '.vite', 'build', 'coverage', '.cache',
])

const IGNORE_FILES = new Set([
  '.DS_Store', 'Thumbs.db', 'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
])

const TEXT_EXTENSIONS = new Set([
  '.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.json',
  '.md', '.env', '.txt', '.yaml', '.yml', '.config',
])

// ── CLI args ──────────────────────────────────────────────────
const args = process.argv.slice(2)
const FULL  = args.includes('--full')
const outIdx = args.indexOf('--out')
const OUT_FILE = outIdx !== -1 ? args[outIdx + 1] : null

// ── Helpers ───────────────────────────────────────────────────
const lines = []
const write = (str = '') => lines.push(str)

function isText(file) {
  return TEXT_EXTENSIONS.has(path.extname(file).toLowerCase())
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

// ── Tree printer ──────────────────────────────────────────────
function printTree(dir, prefix = '') {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      // dirs first, then files
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  filtered.forEach((entry, idx) => {
    const isLast    = idx === filtered.length - 1
    const connector = isLast ? '└── ' : '├── '
    const childPfx  = isLast ? '    ' : '│   '
    const fullPath  = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      write(`${prefix}${connector}${entry.name}/`)
      printTree(fullPath, prefix + childPfx)
    } else {
      const size = formatSize(fs.statSync(fullPath).size)
      write(`${prefix}${connector}${entry.name}  (${size})`)
    }
  })
}

// ── Content printer ───────────────────────────────────────────
function printContents(dir) {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  for (const entry of filtered) {
    const fullPath = path.join(dir, entry.name)
    const relPath  = path.relative(ROOT, fullPath)

    if (entry.isDirectory()) {
      printContents(fullPath)
    } else if (isText(entry.name)) {
      const ext  = path.extname(entry.name).slice(1) || 'txt'
      const size = formatSize(fs.statSync(fullPath).size)
      write('')
      write('─'.repeat(70))
      write(`FILE: ${relPath}  (${size})`)
      write('─'.repeat(70))
      try {
        write('```' + ext)
        write(fs.readFileSync(fullPath, 'utf8').trimEnd())
        write('```')
      } catch {
        write('[binary / unreadable]')
      }
    }
  }
}

// ── Main ──────────────────────────────────────────────────────
const projectName = path.basename(ROOT)

write('='.repeat(70))
write(`  StudyHive Frontend — Codebase Snapshot`)
write(`  Root : ${ROOT}`)
write(`  Date : ${new Date().toLocaleString()}`)
write('='.repeat(70))
write('')
write(`${projectName}/`)
printTree(ROOT)

if (FULL) {
  write('')
  write('='.repeat(70))
  write('  FILE CONTENTS')
  write('='.repeat(70))
  printContents(ROOT)
}

write('')
const output = lines.join('\n')

if (OUT_FILE) {
  fs.writeFileSync(OUT_FILE, output, 'utf8')
  console.log(`✓ Written to ${OUT_FILE}`)
} else {
  console.log(output)
}
```

──────────────────────────────────────────────────────────────────────
FILE: README.md  (68 B)
──────────────────────────────────────────────────────────────────────
```md
# StudyHive-Frontend
A website made on top of the StudyHive Backend
```

──────────────────────────────────────────────────────────────────────
FILE: vercel.json  (69 B)
──────────────────────────────────────────────────────────────────────
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

──────────────────────────────────────────────────────────────────────
FILE: vite.config.js  (265 B)
──────────────────────────────────────────────────────────────────────
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allows access from phone on same WiFi
  },
})
```
```

──────────────────────────────────────────────────────────────────────
FILE: eslint.config.js  (758 B)
──────────────────────────────────────────────────────────────────────
```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```

──────────────────────────────────────────────────────────────────────
FILE: index.html  (367 B)
──────────────────────────────────────────────────────────────────────
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>studyhive-frontend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

──────────────────────────────────────────────────────────────────────
FILE: package.json  (986 B)
──────────────────────────────────────────────────────────────────────
```json
{
  "name": "studyhive-frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "tree": "node print-codebase.js",
    "codebase": "node print-codebase.js --full",
    "codebase:save": "node print-codebase.js --full --out Codebase.md"
  },
  "dependencies": {
    "axios": "^1.13.5",
    "framer-motion": "^12.34.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-icons": "^5.6.0",
    "react-router-dom": "^7.13.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@tailwindcss/vite": "^4.1.18",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "prettier": "^3.8.1",
    "tailwindcss": "^4.1.18",
    "vite": "^7.2.4"
  }
}
```

──────────────────────────────────────────────────────────────────────
FILE: print-codebase.js  (4.8 kB)
──────────────────────────────────────────────────────────────────────
```js
#!/usr/bin/env node
/**
 * print-codebase.js
 * Prints the file tree and (optionally) the contents of every source file.
 *
 * Usage:
 *   node print-codebase.js          → tree only
 *   node print-codebase.js --full   → tree + file contents
 *   node print-codebase.js --out output.txt --full  → write to file
 */

import fs from 'fs'
import path from 'path'

// ── Config ────────────────────────────────────────────────────
const ROOT = process.cwd()

const IGNORE_DIRS = new Set([
  'node_modules', '.git', 'dist', '.vite', 'build', 'coverage', '.cache',
])

const IGNORE_FILES = new Set([
  '.DS_Store', 'Thumbs.db', 'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
])

const TEXT_EXTENSIONS = new Set([
  '.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.json',
  '.md', '.env', '.txt', '.yaml', '.yml', '.config',
])

// ── CLI args ──────────────────────────────────────────────────
const args = process.argv.slice(2)
const FULL  = args.includes('--full')
const outIdx = args.indexOf('--out')
const OUT_FILE = outIdx !== -1 ? args[outIdx + 1] : null

// ── Helpers ───────────────────────────────────────────────────
const lines = []
const write = (str = '') => lines.push(str)

function isText(file) {
  return TEXT_EXTENSIONS.has(path.extname(file).toLowerCase())
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

// ── Tree printer ──────────────────────────────────────────────
function printTree(dir, prefix = '') {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      // dirs first, then files
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  filtered.forEach((entry, idx) => {
    const isLast    = idx === filtered.length - 1
    const connector = isLast ? '└── ' : '├── '
    const childPfx  = isLast ? '    ' : '│   '
    const fullPath  = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      write(`${prefix}${connector}${entry.name}/`)
      printTree(fullPath, prefix + childPfx)
    } else {
      const size = formatSize(fs.statSync(fullPath).size)
      write(`${prefix}${connector}${entry.name}  (${size})`)
    }
  })
}

// ── Content printer ───────────────────────────────────────────
function printContents(dir) {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  for (const entry of filtered) {
    const fullPath = path.join(dir, entry.name)
    const relPath  = path.relative(ROOT, fullPath)

    if (entry.isDirectory()) {
      printContents(fullPath)
    } else if (isText(entry.name)) {
      const ext  = path.extname(entry.name).slice(1) || 'txt'
      const size = formatSize(fs.statSync(fullPath).size)
      write('')
      write('─'.repeat(70))
      write(`FILE: ${relPath}  (${size})`)
      write('─'.repeat(70))
      try {
        write('```' + ext)
        write(fs.readFileSync(fullPath, 'utf8').trimEnd())
        write('```')
      } catch {
        write('[binary / unreadable]')
      }
    }
  }
}

// ── Main ──────────────────────────────────────────────────────
const projectName = path.basename(ROOT)

write('='.repeat(70))
write(`  StudyHive Frontend — Codebase Snapshot`)
write(`  Root : ${ROOT}`)
write(`  Date : ${new Date().toLocaleString()}`)
write('='.repeat(70))
write('')
write(`${projectName}/`)
printTree(ROOT)

if (FULL) {
  write('')
  write('='.repeat(70))
  write('  FILE CONTENTS')
  write('='.repeat(70))
  printContents(ROOT)
}

write('')
const output = lines.join('\n')

if (OUT_FILE) {
  fs.writeFileSync(OUT_FILE, output, 'utf8')
  console.log(`✓ Written to ${OUT_FILE}`)
} else {
  console.log(output)
}
```

──────────────────────────────────────────────────────────────────────
FILE: README.md  (68 B)
──────────────────────────────────────────────────────────────────────
```md
# StudyHive-Frontend
A website made on top of the StudyHive Backend
```

──────────────────────────────────────────────────────────────────────
FILE: vercel.json  (69 B)
──────────────────────────────────────────────────────────────────────
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

──────────────────────────────────────────────────────────────────────
FILE: vite.config.js  (265 B)
──────────────────────────────────────────────────────────────────────
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allows access from phone on same WiFi
  },
})
```
```

──────────────────────────────────────────────────────────────────────
FILE: eslint.config.js  (758 B)
──────────────────────────────────────────────────────────────────────
```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```

──────────────────────────────────────────────────────────────────────
FILE: index.html  (367 B)
──────────────────────────────────────────────────────────────────────
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>studyhive-frontend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

──────────────────────────────────────────────────────────────────────
FILE: package.json  (986 B)
──────────────────────────────────────────────────────────────────────
```json
{
  "name": "studyhive-frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "tree": "node print-codebase.js",
    "codebase": "node print-codebase.js --full",
    "codebase:save": "node print-codebase.js --full --out Codebase.md"
  },
  "dependencies": {
    "axios": "^1.13.5",
    "framer-motion": "^12.34.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-icons": "^5.6.0",
    "react-router-dom": "^7.13.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@tailwindcss/vite": "^4.1.18",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "prettier": "^3.8.1",
    "tailwindcss": "^4.1.18",
    "vite": "^7.2.4"
  }
}
```

──────────────────────────────────────────────────────────────────────
FILE: print-codebase.js  (4.8 kB)
──────────────────────────────────────────────────────────────────────
```js
#!/usr/bin/env node
/**
 * print-codebase.js
 * Prints the file tree and (optionally) the contents of every source file.
 *
 * Usage:
 *   node print-codebase.js          → tree only
 *   node print-codebase.js --full   → tree + file contents
 *   node print-codebase.js --out output.txt --full  → write to file
 */

import fs from 'fs'
import path from 'path'

// ── Config ────────────────────────────────────────────────────
const ROOT = process.cwd()

const IGNORE_DIRS = new Set([
  'node_modules', '.git', 'dist', '.vite', 'build', 'coverage', '.cache',
])

const IGNORE_FILES = new Set([
  '.DS_Store', 'Thumbs.db', 'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
])

const TEXT_EXTENSIONS = new Set([
  '.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.json',
  '.md', '.env', '.txt', '.yaml', '.yml', '.config',
])

// ── CLI args ──────────────────────────────────────────────────
const args = process.argv.slice(2)
const FULL  = args.includes('--full')
const outIdx = args.indexOf('--out')
const OUT_FILE = outIdx !== -1 ? args[outIdx + 1] : null

// ── Helpers ───────────────────────────────────────────────────
const lines = []
const write = (str = '') => lines.push(str)

function isText(file) {
  return TEXT_EXTENSIONS.has(path.extname(file).toLowerCase())
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

// ── Tree printer ──────────────────────────────────────────────
function printTree(dir, prefix = '') {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      // dirs first, then files
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  filtered.forEach((entry, idx) => {
    const isLast    = idx === filtered.length - 1
    const connector = isLast ? '└── ' : '├── '
    const childPfx  = isLast ? '    ' : '│   '
    const fullPath  = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      write(`${prefix}${connector}${entry.name}/`)
      printTree(fullPath, prefix + childPfx)
    } else {
      const size = formatSize(fs.statSync(fullPath).size)
      write(`${prefix}${connector}${entry.name}  (${size})`)
    }
  })
}

// ── Content printer ───────────────────────────────────────────
function printContents(dir) {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  for (const entry of filtered) {
    const fullPath = path.join(dir, entry.name)
    const relPath  = path.relative(ROOT, fullPath)

    if (entry.isDirectory()) {
      printContents(fullPath)
    } else if (isText(entry.name)) {
      const ext  = path.extname(entry.name).slice(1) || 'txt'
      const size = formatSize(fs.statSync(fullPath).size)
      write('')
      write('─'.repeat(70))
      write(`FILE: ${relPath}  (${size})`)
      write('─'.repeat(70))
      try {
        write('```' + ext)
        write(fs.readFileSync(fullPath, 'utf8').trimEnd())
        write('```')
      } catch {
        write('[binary / unreadable]')
      }
    }
  }
}

// ── Main ──────────────────────────────────────────────────────
const projectName = path.basename(ROOT)

write('='.repeat(70))
write(`  StudyHive Frontend — Codebase Snapshot`)
write(`  Root : ${ROOT}`)
write(`  Date : ${new Date().toLocaleString()}`)
write('='.repeat(70))
write('')
write(`${projectName}/`)
printTree(ROOT)

if (FULL) {
  write('')
  write('='.repeat(70))
  write('  FILE CONTENTS')
  write('='.repeat(70))
  printContents(ROOT)
}

write('')
const output = lines.join('\n')

if (OUT_FILE) {
  fs.writeFileSync(OUT_FILE, output, 'utf8')
  console.log(`✓ Written to ${OUT_FILE}`)
} else {
  console.log(output)
}
```

──────────────────────────────────────────────────────────────────────
FILE: README.md  (68 B)
──────────────────────────────────────────────────────────────────────
```md
# StudyHive-Frontend
A website made on top of the StudyHive Backend
```

──────────────────────────────────────────────────────────────────────
FILE: vercel.json  (69 B)
──────────────────────────────────────────────────────────────────────
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

──────────────────────────────────────────────────────────────────────
FILE: vite.config.js  (265 B)
──────────────────────────────────────────────────────────────────────
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allows access from phone on same WiFi
  },
})
```
```

──────────────────────────────────────────────────────────────────────
FILE: eslint.config.js  (758 B)
──────────────────────────────────────────────────────────────────────
```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```

──────────────────────────────────────────────────────────────────────
FILE: index.html  (367 B)
──────────────────────────────────────────────────────────────────────
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>studyhive-frontend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

──────────────────────────────────────────────────────────────────────
FILE: package.json  (986 B)
──────────────────────────────────────────────────────────────────────
```json
{
  "name": "studyhive-frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "tree": "node print-codebase.js",
    "codebase": "node print-codebase.js --full",
    "codebase:save": "node print-codebase.js --full --out Codebase.md"
  },
  "dependencies": {
    "axios": "^1.13.5",
    "framer-motion": "^12.34.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-icons": "^5.6.0",
    "react-router-dom": "^7.13.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@tailwindcss/vite": "^4.1.18",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "prettier": "^3.8.1",
    "tailwindcss": "^4.1.18",
    "vite": "^7.2.4"
  }
}
```

──────────────────────────────────────────────────────────────────────
FILE: print-codebase.js  (4.8 kB)
──────────────────────────────────────────────────────────────────────
```js
#!/usr/bin/env node
/**
 * print-codebase.js
 * Prints the file tree and (optionally) the contents of every source file.
 *
 * Usage:
 *   node print-codebase.js          → tree only
 *   node print-codebase.js --full   → tree + file contents
 *   node print-codebase.js --out output.txt --full  → write to file
 */

import fs from 'fs'
import path from 'path'

// ── Config ────────────────────────────────────────────────────
const ROOT = process.cwd()

const IGNORE_DIRS = new Set([
  'node_modules', '.git', 'dist', '.vite', 'build', 'coverage', '.cache',
])

const IGNORE_FILES = new Set([
  '.DS_Store', 'Thumbs.db', 'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
])

const TEXT_EXTENSIONS = new Set([
  '.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.json',
  '.md', '.env', '.txt', '.yaml', '.yml', '.config',
])

// ── CLI args ──────────────────────────────────────────────────
const args = process.argv.slice(2)
const FULL  = args.includes('--full')
const outIdx = args.indexOf('--out')
const OUT_FILE = outIdx !== -1 ? args[outIdx + 1] : null

// ── Helpers ───────────────────────────────────────────────────
const lines = []
const write = (str = '') => lines.push(str)

function isText(file) {
  return TEXT_EXTENSIONS.has(path.extname(file).toLowerCase())
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

// ── Tree printer ──────────────────────────────────────────────
function printTree(dir, prefix = '') {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      // dirs first, then files
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  filtered.forEach((entry, idx) => {
    const isLast    = idx === filtered.length - 1
    const connector = isLast ? '└── ' : '├── '
    const childPfx  = isLast ? '    ' : '│   '
    const fullPath  = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      write(`${prefix}${connector}${entry.name}/`)
      printTree(fullPath, prefix + childPfx)
    } else {
      const size = formatSize(fs.statSync(fullPath).size)
      write(`${prefix}${connector}${entry.name}  (${size})`)
    }
  })
}

// ── Content printer ───────────────────────────────────────────
function printContents(dir) {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  for (const entry of filtered) {
    const fullPath = path.join(dir, entry.name)
    const relPath  = path.relative(ROOT, fullPath)

    if (entry.isDirectory()) {
      printContents(fullPath)
    } else if (isText(entry.name)) {
      const ext  = path.extname(entry.name).slice(1) || 'txt'
      const size = formatSize(fs.statSync(fullPath).size)
      write('')
      write('─'.repeat(70))
      write(`FILE: ${relPath}  (${size})`)
      write('─'.repeat(70))
      try {
        write('```' + ext)
        write(fs.readFileSync(fullPath, 'utf8').trimEnd())
        write('```')
      } catch {
        write('[binary / unreadable]')
      }
    }
  }
}

// ── Main ──────────────────────────────────────────────────────
const projectName = path.basename(ROOT)

write('='.repeat(70))
write(`  StudyHive Frontend — Codebase Snapshot`)
write(`  Root : ${ROOT}`)
write(`  Date : ${new Date().toLocaleString()}`)
write('='.repeat(70))
write('')
write(`${projectName}/`)
printTree(ROOT)

if (FULL) {
  write('')
  write('='.repeat(70))
  write('  FILE CONTENTS')
  write('='.repeat(70))
  printContents(ROOT)
}

write('')
const output = lines.join('\n')

if (OUT_FILE) {
  fs.writeFileSync(OUT_FILE, output, 'utf8')
  console.log(`✓ Written to ${OUT_FILE}`)
} else {
  console.log(output)
}
```

──────────────────────────────────────────────────────────────────────
FILE: README.md  (68 B)
──────────────────────────────────────────────────────────────────────
```md
# StudyHive-Frontend
A website made on top of the StudyHive Backend
```

──────────────────────────────────────────────────────────────────────
FILE: vercel.json  (69 B)
──────────────────────────────────────────────────────────────────────
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

──────────────────────────────────────────────────────────────────────
FILE: vite.config.js  (265 B)
──────────────────────────────────────────────────────────────────────
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allows access from phone on same WiFi
  },
})
```
```

──────────────────────────────────────────────────────────────────────
FILE: eslint.config.js  (758 B)
──────────────────────────────────────────────────────────────────────
```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
```

──────────────────────────────────────────────────────────────────────
FILE: index.html  (367 B)
──────────────────────────────────────────────────────────────────────
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>studyhive-frontend</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

──────────────────────────────────────────────────────────────────────
FILE: package.json  (1017 B)
──────────────────────────────────────────────────────────────────────
```json
{
  "name": "studyhive-frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "tree": "node print-codebase.js",
    "codebase": "node print-codebase.js --full",
    "codebase:save": "node print-codebase.js --full --out Codebase.md"
  },
  "dependencies": {
    "axios": "^1.13.5",
    "framer-motion": "^12.34.0",
    "lucide-react": "^1.16.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-icons": "^5.6.0",
    "react-router-dom": "^7.13.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@tailwindcss/vite": "^4.1.18",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "prettier": "^3.8.1",
    "tailwindcss": "^4.1.18",
    "vite": "^7.2.4"
  }
}
```

──────────────────────────────────────────────────────────────────────
FILE: print-codebase.js  (4.8 kB)
──────────────────────────────────────────────────────────────────────
```js
#!/usr/bin/env node
/**
 * print-codebase.js
 * Prints the file tree and (optionally) the contents of every source file.
 *
 * Usage:
 *   node print-codebase.js          → tree only
 *   node print-codebase.js --full   → tree + file contents
 *   node print-codebase.js --out output.txt --full  → write to file
 */

import fs from 'fs'
import path from 'path'

// ── Config ────────────────────────────────────────────────────
const ROOT = process.cwd()

const IGNORE_DIRS = new Set([
  'node_modules', '.git', 'dist', '.vite', 'build', 'coverage', '.cache',
])

const IGNORE_FILES = new Set([
  '.DS_Store', 'Thumbs.db', 'package-lock.json', 'yarn.lock', 'pnpm-lock.yaml',
])

const TEXT_EXTENSIONS = new Set([
  '.js', '.jsx', '.ts', '.tsx', '.css', '.html', '.json',
  '.md', '.env', '.txt', '.yaml', '.yml', '.config',
])

// ── CLI args ──────────────────────────────────────────────────
const args = process.argv.slice(2)
const FULL  = args.includes('--full')
const outIdx = args.indexOf('--out')
const OUT_FILE = outIdx !== -1 ? args[outIdx + 1] : null

// ── Helpers ───────────────────────────────────────────────────
const lines = []
const write = (str = '') => lines.push(str)

function isText(file) {
  return TEXT_EXTENSIONS.has(path.extname(file).toLowerCase())
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

// ── Tree printer ──────────────────────────────────────────────
function printTree(dir, prefix = '') {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      // dirs first, then files
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  filtered.forEach((entry, idx) => {
    const isLast    = idx === filtered.length - 1
    const connector = isLast ? '└── ' : '├── '
    const childPfx  = isLast ? '    ' : '│   '
    const fullPath  = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      write(`${prefix}${connector}${entry.name}/`)
      printTree(fullPath, prefix + childPfx)
    } else {
      const size = formatSize(fs.statSync(fullPath).size)
      write(`${prefix}${connector}${entry.name}  (${size})`)
    }
  })
}

// ── Content printer ───────────────────────────────────────────
function printContents(dir) {
  let entries
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true })
  } catch {
    return
  }

  const filtered = entries
    .filter(e => !IGNORE_FILES.has(e.name))
    .filter(e => !(e.isDirectory() && IGNORE_DIRS.has(e.name)))
    .sort((a, b) => {
      if (a.isDirectory() !== b.isDirectory()) return a.isDirectory() ? -1 : 1
      return a.name.localeCompare(b.name)
    })

  for (const entry of filtered) {
    const fullPath = path.join(dir, entry.name)
    const relPath  = path.relative(ROOT, fullPath)

    if (entry.isDirectory()) {
      printContents(fullPath)
    } else if (isText(entry.name)) {
      const ext  = path.extname(entry.name).slice(1) || 'txt'
      const size = formatSize(fs.statSync(fullPath).size)
      write('')
      write('─'.repeat(70))
      write(`FILE: ${relPath}  (${size})`)
      write('─'.repeat(70))
      try {
        write('```' + ext)
        write(fs.readFileSync(fullPath, 'utf8').trimEnd())
        write('```')
      } catch {
        write('[binary / unreadable]')
      }
    }
  }
}

// ── Main ──────────────────────────────────────────────────────
const projectName = path.basename(ROOT)

write('='.repeat(70))
write(`  StudyHive Frontend — Codebase Snapshot`)
write(`  Root : ${ROOT}`)
write(`  Date : ${new Date().toLocaleString()}`)
write('='.repeat(70))
write('')
write(`${projectName}/`)
printTree(ROOT)

if (FULL) {
  write('')
  write('='.repeat(70))
  write('  FILE CONTENTS')
  write('='.repeat(70))
  printContents(ROOT)
}

write('')
const output = lines.join('\n')

if (OUT_FILE) {
  fs.writeFileSync(OUT_FILE, output, 'utf8')
  console.log(`✓ Written to ${OUT_FILE}`)
} else {
  console.log(output)
}
```

──────────────────────────────────────────────────────────────────────
FILE: README.md  (68 B)
──────────────────────────────────────────────────────────────────────
```md
# StudyHive-Frontend
A website made on top of the StudyHive Backend
```

──────────────────────────────────────────────────────────────────────
FILE: vercel.json  (69 B)
──────────────────────────────────────────────────────────────────────
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

──────────────────────────────────────────────────────────────────────
FILE: vite.config.js  (265 B)
──────────────────────────────────────────────────────────────────────
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allows access from phone on same WiFi
  },
})
```
