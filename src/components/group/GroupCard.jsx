import { Link } from 'react-router-dom'
import { FiUsers, FiKey, FiCopy, FiArrowRight } from 'react-icons/fi'

const roleStyles = {
  mentor:
    'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20',

  learner:
    'bg-white/5 text-slate-300 border border-white/10',
}

const formatDate = (value) => {
  if (!value) return '---'

  const date = new Date(value)

  return date.toLocaleDateString()
}

const GroupCard = ({ group }) => {
  const members =
    group?.membersCount ||
    group?.members?.length ||
    0

  const inviteCode =
    group?.inviteCode || 'N/A'

  const role =
    group?.role || 'learner'

  const handleCopy = async (e) => {
    e.preventDefault()

    await navigator.clipboard.writeText(
      inviteCode
    )
  }

  return (
    <Link
      to={`/app/groups/${group._id}`}
      className={
        `group relative overflow-hidden

        rounded-3xl

        border

        bg-[rgb(var(--card-bg))]

        p-6

        transition-all duration-300

        hover:-translate-y-1
        hover:shadow-2xl
        `
      }
      style={{ borderColor: 'rgb(var(--border))' }}
    >
      <div className="flex items-start justify-between">
        <div>
          <h2
            className="
              text-4xl font-bold
            "
            style={{ color: 'rgb(var(--text))' }}
          >
            {group.name}
          </h2>

          <p
            className="
              mt-3 max-w-xl
              text-base leading-8
            "
            style={{ color: 'rgb(var(--text-secondary))' }}
          >
            {group.description}
          </p>
        </div>

        <span
          className={`
            rounded-full border px-4 py-1
            text-sm font-semibold capitalize
          `}
          style={{
            background: 'rgb(var(--primary-soft))',
            color: 'rgb(var(--primary))',
            borderColor: 'rgb(var(--border))',
          }}
        >
          {role}
        </span>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <div
          className="
            flex items-center gap-2

            rounded-2xl

            px-4 py-3
          "
          style={{
            background: 'rgb(var(--surface-2))',
            color: 'rgb(var(--text))',
            border: '1px solid',
            borderColor: 'rgb(var(--border))',
          }}
        >
          <FiUsers size={18} />

          <span>{members} Members</span>
        </div>

        <div
          className="
            flex items-center gap-3

            rounded-2xl

            px-4 py-3

          "
          style={{
            background: 'rgb(var(--primary-soft))',
            color: 'rgb(var(--primary))',
            border: '1px solid',
            borderColor: 'rgb(var(--border))',
          }}
        >
          <FiKey size={18} />

          <span>{inviteCode}</span>

          <button
            onClick={handleCopy}
            className="
              transition hover:scale-110
            "
          >
            <FiCopy size={16} />
          </button>
        </div>
      </div>

      <div className="mt-10 flex items-end justify-between">
          <div
            className="
              flex items-center gap-2

              rounded-2xl

              px-4 py-2

            "
            style={{
              background: 'rgb(var(--surface-2))',
              color: 'rgb(var(--text-secondary))',
              border: '1px solid',
              borderColor: 'rgb(var(--border))',
            }}
          >
            <div
              className="
                h-3 w-3 rounded-full
              "
              style={{ background: 'rgb(var(--success))' }}
            />

            Active Group
          </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-xs" style={{ color: 'rgb(var(--text-muted))' }}>
              Created
            </p>

            <p className="font-semibold" style={{ color: 'rgb(var(--text))' }}>
              {formatDate(group.createdAt)}
            </p>
          </div>

          <div
            className={
              `
              flex h-14 w-14 items-center
              justify-center

              rounded-2xl

              transition-transform duration-300 transform
              hover:scale-110

              shadow-sm
            `
            }
            style={{
              background: 'linear-gradient(135deg, rgba(var(--primary),0.12), rgba(var(--primary),0.04))',
              border: '1px solid',
              borderColor: 'rgba(var(--primary),0.18)',
            }}
          >
            <FiArrowRight size={18} className="text-[rgb(var(--primary))]" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default GroupCard