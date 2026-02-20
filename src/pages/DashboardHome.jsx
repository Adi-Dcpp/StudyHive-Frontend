import useAuth from '../hooks/useAuth'

const DashboardHome = () => {
  const { user, logout } = useAuth()
  const accessToken = localStorage.getItem('accessToken')

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">
        🎉 Login Successful
      </h1>

      <div className="bg-white p-4 rounded-lg shadow-md border">
        <h2 className="font-semibold mb-2">User Info:</h2>

        {user ? (
          <div className="space-y-1 text-sm">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p>
              <strong>Email Verified:</strong>{' '}
              {user.isEmailVerified ? 'Yes' : 'No'}
            </p>
          </div>
        ) : (
          <p className="text-red-500">User not loaded</p>
        )}
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md border">
        <h2 className="font-semibold mb-2">Access Token:</h2>

        {accessToken ? (
          <p className="text-xs break-all text-green-600">
            {accessToken}
          </p>
        ) : (
          <p className="text-red-500">No access token found</p>
        )}
      </div>

      <button
        onClick={logout}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  )
}

export default DashboardHome