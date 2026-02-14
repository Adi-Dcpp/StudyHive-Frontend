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
