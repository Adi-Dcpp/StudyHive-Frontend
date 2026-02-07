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