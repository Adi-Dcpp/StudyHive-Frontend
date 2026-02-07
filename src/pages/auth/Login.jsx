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
