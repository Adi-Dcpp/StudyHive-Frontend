import { useEffect, useState } from 'react'

const JoinGroupModal = ({ open, onClose, onJoin, loading }) => {
  const [code, setCode] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!open) return
    setCode('')
    setError(null)
  }, [open])

  if (!open) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!code.trim()) {
      setError('Invite code is required')
      return
    }

    try {
      await onJoin(code.trim())
      onClose()
    } catch (err) {
      setError(err?.message || 'Failed to join group')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[rgb(var(--overlay))] opacity-40" onClick={onClose} />

      <form onSubmit={handleSubmit} className="relative z-10 w-full max-w-md rounded-2xl bg-[rgb(var(--card-bg))] p-6 shadow-xl">
        <h3 className="text-lg font-semibold text-[rgb(var(--text))]">Join Group</h3>

        <p className="mt-2 text-sm text-[rgb(var(--text-muted))]">Enter an invite code to join a group.</p>

        <div className="mt-4">
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Invite code"
            className="w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-2 text-sm text-[rgb(var(--text))]"
          />
        </div>

        {error && <p className="mt-3 text-sm text-[rgb(var(--error))]">{error}</p>}

        <div className="mt-4 flex items-center justify-end gap-3">
          <button type="button" onClick={onClose} className="rounded-xl border border-[rgb(var(--border))] px-4 py-2 text-sm text-[rgb(var(--text))]">Cancel</button>
          <button type="submit" disabled={loading} className="rounded-xl bg-[rgb(var(--primary))] px-4 py-2 text-sm text-white">
            {loading ? 'Joining...' : 'Join Group'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default JoinGroupModal
