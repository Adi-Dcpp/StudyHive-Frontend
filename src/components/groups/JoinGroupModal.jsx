import { useEffect, useState } from 'react'

const JoinGroupModal = ({ open, onClose, onJoin, loading }) => {
  const [inviteCode, setInviteCode] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!open) return
    setError(null)
    setInviteCode('')
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  useEffect(() => {
    if (!open) return undefined
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [open])

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError(null)

    if (!inviteCode.trim()) {
      setError('Invite code is required.')
      return
    }

    try {
      await onJoin(inviteCode.trim())
      onClose()
    } catch (err) {
      setError(err?.message || 'Unable to join group.')
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-[rgb(var(--overlay))] opacity-50"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-md rounded-2xl bg-[rgb(var(--card-bg))] p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
              Join group
            </p>
            <h3 className="text-lg font-semibold text-[rgb(var(--text))]">
              Enter an invite code
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-[rgb(var(--text-muted))] hover:bg-[rgb(var(--hover))]"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
              Invite code
            </label>
            <input
              value={inviteCode}
              onChange={(event) => setInviteCode(event.target.value)}
              placeholder="Enter the 6-8 character code"
              className="mt-2 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-2.5 text-sm text-[rgb(var(--text))] outline-none focus:ring-2 focus:ring-[rgb(var(--focus-ring))]"
            />
          </div>

          {error && (
            <p className="text-sm text-[rgb(var(--error))]">{error}</p>
          )}

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-[rgb(var(--border))] px-4 py-2.5 text-sm font-semibold text-[rgb(var(--text))] hover:bg-[rgb(var(--hover))]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-[rgb(var(--primary))] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[rgb(var(--primary-hover))] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? 'Joining...' : 'Join Group'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default JoinGroupModal
