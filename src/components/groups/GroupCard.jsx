import { Link } from 'react-router-dom'
import { useState } from 'react'

import {
  ArrowRight,
  Users,
  KeyRound,
  Copy,
  Check,
} from 'lucide-react'

const roleStyles = {
  mentor: `
    bg-[rgba(var(--primary),0.12)]
    text-[rgb(var(--primary))]
    border border-[rgba(var(--primary),0.25)]
  `,

  learner: `
    bg-[rgb(var(--surface-2))]
    text-[rgb(var(--text-secondary))]
    border border-[rgb(var(--border))]
  `,

  member: `
    bg-[rgb(var(--surface-2))]
    text-[rgb(var(--text-secondary))]
    border border-[rgb(var(--border))]
  `,
}

const formatDate = (value) => {
  if (!value) return '---'

  const date = new Date(value)

  if (Number.isNaN(date.getTime())) return '---'

  return date.toLocaleDateString()
}

const GroupCard = ({ group }) => {
  const [copied, setCopied] = useState(false)

  const groupId =
    group?._id ||
    group?.id ||
    group?.groupId

  const name =
    group?.name ||
    group?.title ||
    'Untitled Group'

  const description =
    group?.description ||
    'No description provided yet.'

  const role =
    group?.role ||
    group?.userRole ||
    group?.memberRole ||
    'member'

  const members =
    group?.membersCount ||
    group?.memberCount ||
    group?.members?.length ||
    0

  const inviteCode =
    group?.inviteCode ||
    group?.invite_code ||
    'N/A'

  const createdAt = formatDate(
    group?.createdAt ||
    group?.created_at
  )

  const handleCopyInviteCode = async (
    event
  ) => {
    event.preventDefault()
    event.stopPropagation()

    if (
      !inviteCode ||
      inviteCode === 'N/A'
    ) {
      return
    }

    try {
      await navigator.clipboard.writeText(
        inviteCode
      )

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      console.error(
        'Failed to copy invite code',
        error
      )
    }
  }

  return (
    <Link
      to={`/app/groups/${groupId}`}
      className="
        group relative overflow-hidden rounded-3xl

        border border-[rgb(var(--border))]
        bg-[rgb(var(--surface))]

        p-6

        shadow-sm
        transition-all duration-300

        hover:-translate-y-1
        hover:border-[rgba(var(--primary),0.35)]
        hover:shadow-2xl
      "
    >
      {/* Premium Gradient Layer */}
      <div
        className="
          absolute inset-0 opacity-0
          transition-opacity duration-300

          group-hover:opacity-100

          bg-gradient-to-br
          from-[rgba(var(--primary),0.05)]
          via-transparent
          to-[rgba(var(--primary),0.02)]
        "
      />

      {/* Decorative Blur Orb */}
      <div
        className="
          absolute -right-10 -top-10
          h-32 w-32 rounded-full

          bg-[rgba(var(--primary),0.10)]
          blur-3xl

          opacity-0
          transition-opacity duration-500

          group-hover:opacity-100
        "
      />

      {/* Top Section */}
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3
            className="
              text-2xl font-bold tracking-tight
              text-[rgb(var(--text))]

              transition-colors duration-300

              group-hover:text-[rgb(var(--primary))]
            "
          >
            {name}
          </h3>

          <p
            className="
              mt-3 line-clamp-2

              text-sm leading-7
              text-[rgb(var(--text-secondary))]
            "
          >
            {description}
          </p>
        </div>

        {/* Role Badge */}
        <span
          className={`
            rounded-full px-4 py-1.5

            text-xs font-semibold capitalize

            backdrop-blur-md

            ${roleStyles[role] ||
            roleStyles.member}
          `}
        >
          {role}
        </span>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 mt-7 flex flex-wrap items-center gap-3">
        {/* Members */}
        <div
          className="
            flex items-center gap-2

            rounded-2xl

            border border-[rgb(var(--border))]
            bg-[rgb(var(--surface-2))]

            px-4 py-2.5

            text-sm
            text-[rgb(var(--text-secondary))]
          "
        >
          <Users size={16} />

          <span className="font-medium">
            {members} Members
          </span>
        </div>

        {/* Invite Code */}
        <div
          className="
            flex items-center gap-3

            rounded-2xl

            border border-[rgba(var(--primary),0.20)]

            bg-[rgba(var(--primary),0.08)]

            px-4 py-2.5

            text-sm font-medium
            text-[rgb(var(--primary))]
          "
        >
          <KeyRound size={16} />

          <span className="tracking-wide">
            {inviteCode}
          </span>

          <button
            type="button"
            onClick={handleCopyInviteCode}
            className="
              flex h-8 w-8 items-center justify-center

              rounded-xl

              bg-[rgba(var(--primary),0.10)]

              transition-all duration-200

              hover:scale-105
              hover:bg-[rgba(var(--primary),0.18)]

              active:scale-95
            "
          >
            {copied ? (
              <Check size={14} />
            ) : (
              <Copy size={14} />
            )}
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="
          relative z-10 mt-10

          flex items-center justify-between
        "
      >
        <div
  className="
    flex items-center gap-2

    rounded-2xl

    border border-[rgb(var(--border))]

    bg-[rgb(var(--surface-2))]

    px-4 py-2

    text-sm font-medium
    text-[rgb(var(--text-secondary))]
  "
>
  <span className="relative flex h-2.5 w-2.5">
    <span
      className="
        absolute inline-flex h-full w-full
        animate-ping rounded-full
        bg-emerald-400 opacity-75
      "
    />

    <span
      className="
        relative inline-flex h-2.5 w-2.5
        rounded-full bg-emerald-500
      "
    />
  </span>

  <span>Active Group</span>
</div>

        {/* Footer Right */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p
              className="
                text-xs
                text-[rgb(var(--text-muted))]
              "
            >
              Created
            </p>

            <p
              className="
                text-sm font-semibold
                text-[rgb(var(--text-secondary))]
              "
            >
              {createdAt}
            </p>
          </div>

          {/* Arrow */}
          <div
            className="
              flex h-12 w-12
              items-center justify-center

              rounded-2xl

              border border-[rgb(var(--border))]

              bg-[rgb(var(--surface-2))]

              transition-all duration-300

              group-hover:translate-x-1
              group-hover:border-[rgba(var(--primary),0.35)]
              group-hover:bg-[rgba(var(--primary),0.08)]
            "
          >
            <ArrowRight
              size={18}
              className="
                text-[rgb(var(--text-secondary))]
              "
            />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default GroupCard