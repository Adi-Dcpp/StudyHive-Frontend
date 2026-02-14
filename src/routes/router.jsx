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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<AppLayout />}>
          <Route index element={<DashboardHome />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  )
)