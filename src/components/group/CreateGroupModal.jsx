import { useEffect, useState } from 'react'

const CreateGroupModal = ({ open, onClose, onCreate, loading }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!open) return
    setError(null)
    setName('')
    setDescription('')
  }, [open])

  if (!open) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!name.trim()) {
      setError('Group name is required')
      return
    }

    try {
      await onCreate({ name: name.trim(), description: description.trim() })
      onClose()
    } catch (err) {
      setError(err?.message || 'Failed to create group')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[rgb(var(--overlay))] opacity-40" onClick={onClose} />

      <form onSubmit={handleSubmit} className="relative z-10 w-full max-w-md rounded-2xl bg-[rgb(var(--card-bg))] p-6 shadow-xl">
        <h3 className="text-lg font-semibold text-[rgb(var(--text))]">Create Group</h3>

        <p className="mt-2 text-sm text-[rgb(var(--text-muted))]">Start a new learning circle for your cohort.</p>

        <div className="mt-4 space-y-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Group name"
            className="w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-2 text-sm text-[rgb(var(--text))]"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short description (optional)"
            rows={3}
            className="w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-2 text-sm text-[rgb(var(--text))]"
          />
        </div>

        {error && <p className="mt-3 text-sm text-[rgb(var(--error))]">{error}</p>}

        <div className="mt-4 flex items-center justify-end gap-3">
          <button type="button" onClick={onClose} className="rounded-xl border border-[rgb(var(--border))] px-4 py-2 text-sm text-[rgb(var(--text))]">Cancel</button>
          <button type="submit" disabled={loading} className="rounded-xl bg-[rgb(var(--primary))] px-4 py-2 text-sm text-white">
            {loading ? 'Creating...' : 'Create Group'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateGroupModal
