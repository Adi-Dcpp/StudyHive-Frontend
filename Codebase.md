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
    LoginForm.jsx
    Sidebar.jsx
    SignUpForm.jsx
    Topbar.jsx
  contexts/
    AuthContext.jsx
  hooks/
    useAuth.js
  layouts/
    AppLayout.jsx
  pages/
    auth/
      EmailVerification.jsx
      ForgotPassword.jsx
      Login.jsx
      SignUp.jsx
  routes/
    ProtectedRoutes.jsx
  services/
    authService.js
  api/
  auth/
  utils/
```

## Contents

> Note: Binary asset src/assets/logo.png is not included.

### src/main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/ProtectedRoutes.jsx' // adjust path
import { AuthProvider } from './contexts/AuthContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
```

### src/index.css

```css
@import 'tailwindcss';
```

### src/App.jsx

```jsx
import { Routes, Route } from "react-router-dom";
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import ForgotPassword from './pages/auth/ForgotPassword'
import EmailVerification from './pages/auth/EmailVerification'
import AppLayout from './layouts/AppLayout'

function App() {
  return (
  )
}

export default App

```

### src/routes/ProtectedRoutes.jsx

```jsx
import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom'

import AppLayout from '../layouts/AppLayout.jsx'
import Login from '../pages/auth/Login.jsx'
import useAuth from '../hooks/useAuth.js'

const ProtectedRoutes = () => {
  const { user } = useAuth()

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Wrapper */}
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<AppLayout />} />
      </Route>

      {/* Default Redirect */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </>
  )
)
```

### src/services/authService.js

```javascript
import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  withCredentials: true,
})

export const loginUser = (data) => API.post('/auth/login', data)

export const getCurrentUser = () => API.get('/auth/me')

export const logoutUser = () => API.post('/auth/logout')

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
import { loginUser, logoutUser, getCurrentUser } from '../services/authService'

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

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
```

### src/components/Sidebar.jsx

```jsx
import React from 'react'
import logo from '../assets/logo.png'

const Sidebar = () => {
  return <div></div>
}

export default Sidebar
```

### src/components/LoginForm.jsx

```jsx
import React, { useState } from 'react'
import { loginUser, getCurrentUser } from '../services/authService.js'
import { useNavigate } from 'react-router-dom'
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
              <a
                href="#"
                className="text-xs sm:text-sm text-blue-500 hover:underline"
              >
                Forgot password?
              </a>
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
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
```

### src/components/AuthHeader.jsx

```jsx
import React from 'react'

const AuthHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-2 sm:py-5 text-center space-y-2">
      <img
        src="/src/assets/logo.png"
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

### src/components/SignUpForm.jsx

```jsx
import React from 'react'

const SignUpForm = () => {
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
            Enter your datails
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4 sm:space-y-5">
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
            />
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
            />
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
            />
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
            />
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
                  defaultChecked
                  className="accent-indigo-600"
                />
                <span className="text-sm text-black">Learner</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="mentor"
                  className="accent-indigo-600"
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
          <a href="#" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignUpForm
```

### src/components/Topbar.jsx

```jsx
import React from 'react'

const Topbar = () => {
  return <div>Topbar</div>
}

export default Topbar
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

### src/pages/auth/EmailVerification.jsx

```jsx
import React from 'react'

const EmailVerification = () => {
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
            your@email.com
          </p>
        </div>

        {/* Resend */}
        <div className="text-center text-sm text-gray-600">
          Didn’t receive the email?{' '}
          <button
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
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
        >
          Back to login
        </button>
      </div>
    </div>
  )
}

export default EmailVerification
```
