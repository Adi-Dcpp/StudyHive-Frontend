import { useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Send, Trash2, RefreshCcw, MessageCircle, Users } from 'lucide-react'

import useAuth from '../../../hooks/useAuth'
import { deleteMessage, getGroupMessages, sendMessage } from '../../../services/messageService'

const MAX_LENGTH = 2000

const formatTime = (value) => {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleString(undefined, {
    hour: 'numeric',
    minute: '2-digit',
    month: 'short',
    day: 'numeric',
  })
}

const MessagesPage = () => {
  const { groupId } = useParams()
  const { user } = useAuth()

  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [sending, setSending] = useState(false)
  const [deletingId, setDeletingId] = useState(null)
  const [content, setContent] = useState('')
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [autoScroll, setAutoScroll] = useState(true)
  const [showJump, setShowJump] = useState(false)

  const listRef = useRef(null)

  const characterCount = content.trim().length
  const remaining = MAX_LENGTH - characterCount
  const canSend = characterCount > 0 && remaining >= 0 && !sending

  const totalCount = useMemo(() => messages.length, [messages])
  const orderedMessages = useMemo(() => [...messages].reverse(), [messages])

  const loadMessages = async (nextPage = 1, replace = false) => {
    try {
      if (nextPage === 1) setLoading(true)
      setError(null)

      const data = await getGroupMessages(groupId, nextPage, 20)
      const nextMessages = data?.messages || []
      const hasNext = Boolean(data?.pagination?.hasNextPage)

      setMessages((current) => (replace ? nextMessages : [...current, ...nextMessages]))
      setPage(nextPage)
      setHasMore(hasNext)
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to load messages')
    } finally {
      if (nextPage === 1) setLoading(false)
    }
  }

  useEffect(() => {
    loadMessages(1, true)
  }, [groupId])


  useEffect(() => {
    const container = listRef.current
    if (!container) return undefined

    const handleScroll = () => {
      const isAtBottom =
        container.scrollTop + container.clientHeight >= container.scrollHeight - 24
      setShowJump(!isAtBottom)
      setAutoScroll(isAtBottom)
    }

    handleScroll()
    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!autoScroll) return
    const container = listRef.current
    if (!container) return
    container.scrollTo({ top: container.scrollHeight })
  }, [messages, autoScroll])

  const handleJumpToLatest = () => {
    const container = listRef.current
    if (!container) return
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' })
  }

  const handleSend = async (event) => {
    event.preventDefault()

    if (!canSend) return

    try {
      setSending(true)
      setError(null)

      const payload = await sendMessage(groupId, content.trim())
      setMessages((current) => [payload, ...current])
      setContent('')
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to send message')
    } finally {
      setSending(false)
    }
  }

  const handleDelete = async (messageId) => {
    if (!messageId) return
    if (!window.confirm('Delete this message?')) return

    try {
      setDeletingId(messageId)
      await deleteMessage(messageId)
      setMessages((current) => current.filter((item) => item._id !== messageId))
    } catch (err) {
      setError(err?.response?.data?.message || err?.message || 'Failed to delete message')
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="min-h-screen bg-[rgb(var(--bg))] px-4 py-8 text-[rgb(var(--text))] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <section className="relative overflow-hidden rounded-[36px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] px-6 py-7 shadow-sm sm:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(var(--primary),0.14),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(var(--success),0.14),transparent_32%)]" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.34em] text-[rgb(var(--text-muted))]">
                Group Module
              </p>
              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Messages
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgb(var(--text-secondary))] sm:text-base">
                Keep the conversation moving. Post updates, ask questions, and stay aligned with the
                group in real time.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[rgb(var(--text-muted))]">
                  Total
                </p>
                <p className="mt-1 text-xl font-black">{totalCount}</p>
              </div>
              <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[rgb(var(--text-muted))]">
                  Active
                </p>
                <p className="mt-1 text-xl font-black">{messages.filter(Boolean).length}</p>
              </div>
              <button
                type="button"
                onClick={() => loadMessages(1, true)}
                className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm font-semibold text-[rgb(var(--text))]"
              >
                <RefreshCcw size={16} />
                Refresh
              </button>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="rounded-[34px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[rgb(var(--text-muted))]">
                  Conversation
                </p>
                <h2 className="mt-2 text-xl font-bold text-[rgb(var(--text))]">
                  {loading ? 'Loading messages...' : `${messages.length} messages loaded`}
                </h2>
              </div>
              <div className="flex items-center gap-2 text-xs text-[rgb(var(--text-muted))]">
                <Users size={14} />
                {user?.role ? `You are ${user.role}` : 'Member'}
              </div>
            </div>

            {error ? (
              <div className="mt-5 rounded-2xl border border-[rgb(var(--error))] bg-[rgba(var(--error),0.08)] px-4 py-3 text-sm text-[rgb(var(--error))]">
                {error}
              </div>
            ) : null}

            {loading ? (
              <div className="mt-6 rounded-3xl border border-dashed border-[rgb(var(--border))] px-6 py-14 text-center text-[rgb(var(--text-secondary))]">
                Loading messages...
              </div>
            ) : messages.length === 0 ? (
              <div className="mt-6 rounded-3xl border border-dashed border-[rgb(var(--border))] px-6 py-14 text-center text-[rgb(var(--text-secondary))]">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(var(--primary),0.12)] text-[rgb(var(--primary))]">
                  <MessageCircle size={20} />
                </div>
                <p className="mt-4 text-sm">No messages yet. Start the conversation below.</p>
              </div>
            ) : (
              <div className="relative mt-6">
                <div
                  ref={listRef}
                  className="flex max-h-[65vh] flex-col gap-4 overflow-auto rounded-[28px] border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-5 pr-2 shadow-inner"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 12% 10%, rgba(var(--primary),0.08), transparent 35%), radial-gradient(circle at 85% 20%, rgba(var(--success),0.08), transparent 38%), linear-gradient(180deg, rgba(var(--surface),0.96), rgba(var(--card-bg),0.98))',
                  }}
                >
                  {hasMore ? (
                    <button
                      type="button"
                      onClick={() => loadMessages(page + 1)}
                      className="mt-1 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-2 text-sm font-semibold text-[rgb(var(--text))]"
                    >
                      Load older messages
                    </button>
                  ) : null}

                  {orderedMessages.map((message) => {
                    const senderId = message?.sender?._id || message?.sender
                    const isMine = senderId && user?._id ? String(senderId) === String(user._id) : false
                    return (
                      <div
                        key={message._id}
                        className={`flex ${isMine ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`relative max-w-[85%] rounded-[22px] px-4 py-3 shadow-sm sm:max-w-[70%] ${
                            isMine
                              ? 'rounded-br-sm border border-[rgba(var(--primary),0.35)] bg-[rgba(var(--primary),0.16)] text-[rgb(var(--text))]'
                              : 'rounded-bl-sm border border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-[rgb(var(--text))]'
                          }`}
                        >
                          {!isMine ? (
                            <span
                              className="absolute bottom-3 -left-1 h-3 w-3 rotate-45 border-b border-l border-[rgb(var(--border))] bg-[rgb(var(--surface))]"
                            />
                          ) : null}
                          <div className="flex items-center justify-between gap-3">
                            <p
                              className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${
                                isMine ? 'text-[rgb(var(--text-muted))]' : 'text-[rgb(var(--text-muted))]'
                              }`}
                            >
                              {isMine ? 'You' : message?.sender?.name || 'Member'}
                            </p>
                          </div>
                          <p className="mt-2 whitespace-pre-wrap text-sm leading-7">
                            {message?.content}
                          </p>
                          <div className="mt-2 flex items-center justify-end text-[11px] text-[rgb(var(--text-muted))]">
                            {formatTime(message?.createdAt)}
                          </div>
                          {isMine ? (
                            <div className="mt-3 flex justify-end">
                              <button
                                type="button"
                                disabled={deletingId === message._id}
                                onClick={() => handleDelete(message._id)}
                                className="inline-flex items-center gap-2 rounded-full border border-[rgba(var(--text),0.2)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgb(var(--text))] transition-colors hover:bg-[rgba(var(--text),0.06)]"
                              >
                                <Trash2 size={12} />
                                {deletingId === message._id ? 'Deleting...' : 'Delete'}
                              </button>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    )
                  })}

                </div>

                {showJump ? (
                  <button
                    type="button"
                    onClick={handleJumpToLatest}
                    className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-[rgb(var(--primary))] px-4 py-2 text-xs font-semibold text-white shadow-[0_16px_40px_rgba(0,0,0,0.2)]"
                  >
                    Jump to latest
                  </button>
                ) : null}
              </div>
            )}
          </div>

          <aside className="flex flex-col gap-4">
            <div className="rounded-[30px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <p className="text-xs uppercase tracking-[0.24em] text-[rgb(var(--text-muted))]">
                Composer
              </p>
              <form className="mt-4 flex flex-col gap-3" onSubmit={handleSend}>
                <textarea
                  value={content}
                  onChange={(event) => setContent(event.target.value)}
                  rows={5}
                  className="w-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm leading-7 text-[rgb(var(--text))] outline-none transition-colors placeholder:text-[rgb(var(--text-muted))] focus:border-[rgb(var(--primary))]"
                  placeholder="Share an update or ask a question..."
                />
                <div className="flex items-center justify-between text-xs text-[rgb(var(--text-muted))]">
                  <span>{remaining} characters left</span>
                  {characterCount > 0 ? (
                    <span>
                      {characterCount}/{MAX_LENGTH}
                    </span>
                  ) : null}
                </div>
                <button
                  type="submit"
                  disabled={!canSend}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[rgb(var(--primary))] px-4 py-3 text-sm font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send size={16} />
                  {sending ? 'Sending...' : 'Send message'}
                </button>
              </form>
            </div>

            <div className="rounded-[30px] border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-5 text-sm leading-7 text-[rgb(var(--text-secondary))] shadow-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-[rgb(var(--text-muted))]">
                Tips
              </p>
              <p className="mt-3">
                Messages are visible only to group members. Keep it concise, actionable, and respectful.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </div>
  )
}

export default MessagesPage
