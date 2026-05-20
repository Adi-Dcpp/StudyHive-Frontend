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