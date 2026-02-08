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
