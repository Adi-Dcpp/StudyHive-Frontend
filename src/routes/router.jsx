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
import { groupRoutes } from './groupRoutes.jsx'

import AppLayout from '../layouts/AppLayout'
import AppDashboard from '../pages/app/Dashboard'
import AppGoals from '../pages/app/Goals'
import AppAssignments from '../pages/app/Assignments'
import AppSubmissions from '../pages/app/Submissions'
import AppMessages from '../pages/app/Messages'
import AppSettings from '../pages/app/Settings'
import GoalDetails from '../pages/goals/GoalDetails'

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
            path="goals/:goalId"
            element={<GoalDetails />}
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
