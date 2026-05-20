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
