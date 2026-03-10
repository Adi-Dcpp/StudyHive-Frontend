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
