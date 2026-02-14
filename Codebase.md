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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/verify-email" element={<EmailVerification />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/email-verified" element={<EmailVerified />} />

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

export const loginUser = (data) => API.post('/auth/login', data)

export const getCurrentUser = () => API.get('/auth/me')

export const logoutUser = () => API.post('/auth/logout')

export const registerUser = (data) => API.post('/auth/register', data)

export const resendEmailVerification = (data) =>
  API.post('/auth/resend-email-verification', { email: data })

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
} from '../services/authService'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Load user on app start
  useEffect(() => {
    const loadUser = async () => {
      try {
        const { data } = await getCurrentUser()
        setUser(data.data)
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
    setUser(data.data)
  }

  const logout = async () => {
    await logoutUser()
    setUser(null)
  }

  const signUp = async (data) => {
    const response = await registerUser(data)
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
import React from 'react'

const ForgotPassword = () => {
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
          <form>
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-xl">Email</label>
              <input
                type="email"
                placeholder="xyz@example.com"
                className="w-full rounded-lg border border-black px-3 sm:px-4 py-2 sm:py-2.5 bg-transparent text-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mt-2.5">
              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 py-2 sm:py-2.5
                       text-white font-medium
                       hover:bg-indigo-700 transition-colors"
              >
                Send reset link
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
