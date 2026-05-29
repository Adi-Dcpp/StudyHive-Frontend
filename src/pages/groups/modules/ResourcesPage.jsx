import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
    BookOpen,
    Download,
    ExternalLink,
    Eye,
    FileText,
    Link2,
    Loader2,
    Plus,
    Trash2,
    Upload,
    X,
} from 'lucide-react'

import useAuth from '../../../hooks/useAuth'
import resourceService from '../../../services/resourceService'

const typeLabels = {
    file: 'File',
    link: 'Link',
    note: 'Note',
}

const allowedFileTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf']

const typeMeta = {
    file: {
        label: 'File',
        icon: FileText,
        tint: 'rgba(var(--primary),0.16)',
        color: 'rgb(var(--primary))',
    },
    link: {
        label: 'Link',
        icon: Link2,
        tint: 'rgba(var(--success),0.16)',
        color: 'rgb(var(--success))',
    },
    note: {
        label: 'Note',
        icon: BookOpen,
        tint: 'rgba(var(--warning),0.16)',
        color: 'rgb(var(--warning))',
    },
}

const formatDate = (value) => {
    if (!value) return 'N/A'

    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return 'N/A'

    return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
}

const formatBytes = (value) => {
    if (value === null || value === undefined || value === '') return 'N/A'

    const size = Number(value)
    if (!Number.isFinite(size) || size < 0) return 'N/A'

    const units = ['B', 'KB', 'MB', 'GB']
    let index = 0
    let current = size

    while (current >= 1024 && index < units.length - 1) {
        current /= 1024
        index += 1
    }

    return `${current.toFixed(current >= 10 || index === 0 ? 0 : 1)} ${units[index]}`
}

const getResourceUrl = (resource) => resource?.fileUrl || resource?.linkUrl || ''

const getFileName = (resource) => {
    if (resource?.fileName) return resource.fileName

    const url = getResourceUrl(resource)
    if (!url) return resource?.title || 'resource'

    try {
        const parsed = new URL(url)
        return parsed.pathname.split('/').filter(Boolean).pop() || resource?.title || 'resource'
    } catch {
        return url.split('/').filter(Boolean).pop() || resource?.title || 'resource'
    }
}

const getPreviewKind = (resource) => {
    const url = getResourceUrl(resource).toLowerCase()

    if (resource?.type === 'note') return 'note'
    if (url.endsWith('.pdf')) return 'pdf'
    if (/(png|jpe?g|gif|webp)$/.test(url)) return 'image'
    return resource?.type === 'link' ? 'link' : 'file'
}

const isValidUploadType = (file) => file && allowedFileTypes.includes(file.type)

const showPopupError = (message) => {
    window.alert(message)
}

const fetchBlobUrl = async (url) => {
    const response = await fetch(url, { credentials: 'include' })

    if (!response.ok) {
        throw new Error('Failed to load resource')
    }

    const blob = await response.blob()
    return URL.createObjectURL(blob)
}

const saveBlobToLocal = async (url, fileName) => {
    const objectUrl = await fetchBlobUrl(url)

    try {
        const anchor = document.createElement('a')
        anchor.href = objectUrl
        anchor.download = fileName || 'resource'
        document.body.appendChild(anchor)
        anchor.click()
        anchor.remove()
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000)
    }
}

const saveTextToLocal = (text, fileName) => {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
    const objectUrl = URL.createObjectURL(blob)

    try {
        const anchor = document.createElement('a')
        anchor.href = objectUrl
        anchor.download = fileName || 'note.txt'
        document.body.appendChild(anchor)
        anchor.click()
        anchor.remove()
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000)
    }
}

const normalizeResource = (data) => {
    if (!data) return null
    if (data.resourceId || data._id || data.title) return data
    if (data.resource) return data.resource
    if (data.data?.resourceId || data.data?._id) return data.data
    return data.data || data
}

const ResourceCard = ({ resource, onView, onDownload, onDelete, canDelete }) => {
    const meta = typeMeta[resource?.type] || typeMeta.file
    const TypeIcon = meta.icon
    const previewKind = getPreviewKind(resource)
    const resourceId = resource.resourceId || resource._id

    return (
        <article
            className="group overflow-hidden rounded-4xl border border-[rgb(var(--border))] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[rgb(var(--primary))] hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
            style={{
                background:
                    'linear-gradient(180deg, rgba(var(--card-bg),0.98), rgba(var(--surface),0.98))',
            }}
        >
            <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${meta.color}, rgba(var(--primary),0.04))` }}
            />

            <div className="p-5">
                <div className="flex items-start gap-4">
                    <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                        style={{ background: meta.tint, color: meta.color }}
                    >
                        <TypeIcon size={20} />
                    </div>

                    <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                            <span
                                className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--text-secondary))]"
                                style={{ background: meta.tint }}
                            >
                                {meta.label}
                            </span>
                            <span className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-3 py-1 text-[11px] text-[rgb(var(--text-muted))]">
                                {formatDate(resource?.createdAt)}
                            </span>
                        </div>

                        <h3 className="mt-4 truncate text-xl font-black tracking-tight text-[rgb(var(--text))]">
                            {resource?.title || 'Untitled resource'}
                        </h3>

                        <p className="mt-3 line-clamp-4 text-sm leading-7 text-[rgb(var(--text-secondary))]">
                            {resource?.description || 'No description added.'}
                        </p>

                        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-[rgb(var(--text-muted))]">
                            <span className="rounded-full border border-[rgb(var(--border))] px-3 py-1">
                                {getFileName(resource)}
                            </span>
                            {resource?.fileSize ? (
                                <span className="rounded-full border border-[rgb(var(--border))] px-3 py-1">
                                    {formatBytes(resource.fileSize)}
                                </span>
                            ) : null}
                            {resource?.uploadedBy?.name ? (
                                <span className="rounded-full border border-[rgb(var(--border))] px-3 py-1">
                                    By {resource.uploadedBy.name}
                                </span>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[rgb(var(--border))] pt-4">
                    <span className="text-xs text-[rgb(var(--text-muted))]">Preview mode: {previewKind}</span>

                    <div className="flex flex-wrap gap-2">
                        <button
                            type="button"
                            onClick={() => onView(resource)}
                            className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--primary))] px-4 py-2 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                        >
                            <Eye size={16} />
                            View
                        </button>

                        {resource?.type === 'file' ? (
                            <button
                                type="button"
                                onClick={() => onDownload(resource)}
                                className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-2 text-sm font-semibold text-[rgb(var(--text))] transition-colors hover:bg-[rgb(var(--primary-soft))]"
                            >
                                <Download size={16} />
                                Download
                            </button>
                        ) : null}

                        {resource?.type === 'link' && resource?.linkUrl ? (
                            <a
                                href={resource.linkUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-2 text-sm font-semibold text-[rgb(var(--text))] transition-colors hover:bg-[rgb(var(--primary-soft))]"
                            >
                                <ExternalLink size={16} />
                                Open Link
                            </a>
                        ) : null}

                        {canDelete ? (
                            <button
                                type="button"
                                onClick={() => onDelete(resource)}
                                className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] px-4 py-2 text-sm font-semibold text-[rgb(var(--error))] transition-colors hover:bg-[rgb(var(--surface))]"
                            >
                                <Trash2 size={16} />
                                Delete
                            </button>
                        ) : null}
                    </div>
                </div>
            </div>
        </article>
    )
}

const ResourceModal = ({ open, onClose, form, errors, onChange, onSubmit, uploading, isMentor }) => {
    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(8,10,18,0.72)] px-4 py-8 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl overflow-hidden rounded-[34px] border border-white/10 bg-[rgb(var(--card-bg))] shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,rgb(var(--primary)),rgb(var(--success)),rgb(var(--warning)))]" />

                <div className="flex items-start justify-between gap-4 p-6 sm:p-7">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[rgb(var(--text-muted))]">
                            Create resource
                        </p>
                        <h3 className="mt-2 text-2xl font-black tracking-tight text-[rgb(var(--text))]">
                            Add something useful to the group
                        </h3>
                        <p className="mt-2 max-w-xl text-sm leading-7 text-[rgb(var(--text-secondary))]">
                            Upload a file, share a link, or publish a note.
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-2 text-[rgb(var(--text-secondary))]"
                    >
                        <X size={18} />
                    </button>
                </div>

                <form className="border-t border-[rgb(var(--border))] p-6 sm:p-7" onSubmit={onSubmit}>
                    <div className="grid gap-4 md:grid-cols-2">
                        <label className="block space-y-2 md:col-span-2">
                            <span className="text-sm font-medium text-[rgb(var(--text-secondary))]">Title</span>
                            <input
                                name="title"
                                value={form.title}
                                onChange={onChange}
                                required
                                className="w-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[rgb(var(--text-muted))] focus:border-[rgb(var(--primary))]"
                                placeholder="e.g. Exam prep checklist"
                            />
                            {errors.title ? (
                                <p className="text-xs text-[rgb(var(--error))]">{errors.title}</p>
                            ) : null}
                        </label>

                        <label className="block space-y-2">
                            <span className="text-sm font-medium text-[rgb(var(--text-secondary))]">Type</span>
                            <select
                                name="type"
                                value={form.type}
                                onChange={onChange}
                                className="w-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm outline-none transition-colors focus:border-[rgb(var(--primary))]"
                            >
                                <option value="file">File</option>
                                <option value="link">Link</option>
                                <option value="note">Note</option>
                            </select>
                        </label>

                        <label className="block space-y-2">
                            <span className="text-sm font-medium text-[rgb(var(--text-secondary))]">
                                Description
                            </span>
                            <textarea
                                name="description"
                                value={form.description}
                                onChange={onChange}
                                rows={4}
                                className="w-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[rgb(var(--text-muted))] focus:border-[rgb(var(--primary))]"
                                placeholder="Short note about what this includes"
                            />
                            {errors.description ? (
                                <p className="text-xs text-[rgb(var(--error))]">{errors.description}</p>
                            ) : null}
                        </label>

                        {form.type === 'link' ? (
                            <label className="block space-y-2 md:col-span-2">
                                <span className="text-sm font-medium text-[rgb(var(--text-secondary))]">
                                    Link URL
                                </span>
                                <input
                                    name="linkUrl"
                                    value={form.linkUrl}
                                    onChange={onChange}
                                    className="w-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[rgb(var(--text-muted))] focus:border-[rgb(var(--primary))]"
                                    placeholder="https://..."
                                />
                                {errors.linkUrl ? (
                                    <p className="text-xs text-[rgb(var(--error))]">{errors.linkUrl}</p>
                                ) : null}
                            </label>
                        ) : null}

                        {form.type === 'file' ? (
                            <label className="block space-y-2 md:col-span-2">
                                <span className="text-sm font-medium text-[rgb(var(--text-secondary))]">File</span>
                                <input
                                    type="file"
                                    name="file"
                                    accept="image/jpeg,image/png,image/webp,application/pdf"
                                    onChange={onChange}
                                    className="block w-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm text-[rgb(var(--text-secondary))] file:mr-4 file:rounded-full file:border-0 file:bg-[rgb(var(--primary))] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
                                />
                                <p className="text-xs text-[rgb(var(--text-muted))]">
                                    Allowed types: JPG, PNG, WEBP, PDF.
                                </p>
                                {errors.file ? (
                                    <p className="text-xs text-[rgb(var(--error))]">{errors.file}</p>
                                ) : null}
                            </label>
                        ) : null}
                    </div>

                    <div className="mt-5 flex flex-col gap-3 border-t border-[rgb(var(--border))] pt-4 sm:flex-row sm:justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-5 py-3 text-sm font-semibold text-[rgb(var(--text))]"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={uploading}
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[rgb(var(--primary))] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {uploading ? <Loader2 size={16} className="animate-spin" /> : <Upload size={16} />}
                            {uploading ? 'Uploading...' : 'Create resource'}
                        </button>
                    </div>

                    {!isMentor ? (
                        <p className="mt-4 text-xs leading-6 text-[rgb(var(--text-muted))]">
                            Your backend only allows mentors to add resources. Learners can still view,
                            preview, and download everything already shared.
                        </p>
                    ) : null}
                </form>
            </div>
        </div>
    )
}

const PreviewModal = ({ resource, open, onClose }) => {
    const [state, setState] = useState({ loading: false, previewUrl: '', error: null })

    useEffect(() => {
        if (!open || !resource) {
            setState({
                loading: false,
                previewUrl: '',
                error: null,
            })

            return undefined
        }

        const kind = getPreviewKind(resource)
        const url = getResourceUrl(resource)

        let active = true
        let objectUrl = ''

        const load = async () => {
            if (!url) {
                setState({
                    loading: false,
                    previewUrl: '',
                    error: 'No resource URL available.',
                })

                return
            }

            /*
              NOTE + LINK
            */
            if (kind === 'note' || kind === 'link') {
                setState({
                    loading: false,
                    previewUrl: url,
                    error: null,
                })

                return
            }

            /*
              PDF
              Use direct URL
            */
            if (kind === 'pdf') {
                setState({
                    loading: false,
                    previewUrl: url,
                    error: null,
                })

                return
            }

            /*
              IMAGE
            */
            setState({
                loading: true,
                previewUrl: '',
                error: null,
            })

            try {
                objectUrl = await fetchBlobUrl(url)

                if (!active) {
                    URL.revokeObjectURL(objectUrl)
                    return
                }

                setState({
                    loading: false,
                    previewUrl: objectUrl,
                    error: null,
                })
            } catch {
                if (!active) return

                setState({
                    loading: false,
                    previewUrl: url,
                    error:
                        'Preview did not load. You can still open or download the file.',
                })
            }
        }

        load()

        return () => {
            active = false

            if (objectUrl) {
                URL.revokeObjectURL(objectUrl)
            }
        }
    }, [open, resource])

    const handleDownload = async () => {
        if (!resource) return

        const url = getResourceUrl(resource)
        const kind = getPreviewKind(resource)

        try {
            if (kind === 'note') {
                saveTextToLocal(resource?.description || '', `${getFileName(resource) || 'note'}.txt`)
                return
            }

            await saveBlobToLocal(url, getFileName(resource))
        } catch {
            if (kind === 'note') {
                saveTextToLocal(resource?.description || '', `${getFileName(resource) || 'note'}.txt`)
                return
            }

            window.open(url, '_blank', 'noreferrer')
        }
    }

    const handleOpenInNewTab = async () => {
        if (!resource) return

        const kind = getPreviewKind(resource)

        if (kind === 'note') {
            saveTextToLocal(resource?.description || '', `${getFileName(resource) || 'note'}.txt`)
            return
        }

        if (kind === 'link') {
            window.open(getResourceUrl(resource), '_blank', 'noreferrer')
            return
        }

        try {
            const url = state.previewUrl || (await fetchBlobUrl(getResourceUrl(resource)))
            const tab = window.open(url, '_blank', 'noreferrer')

            if (!tab) {
                throw new Error('Popup blocked')
            }

            if (!state.previewUrl) {
                window.setTimeout(() => URL.revokeObjectURL(url), 60_000)
            }
        } catch {
            const fallbackUrl = getResourceUrl(resource)
            if (fallbackUrl) {
                window.open(fallbackUrl, '_blank', 'noreferrer')
            }
        }
    }

    if (!open || !resource) return null

    const kind = getPreviewKind(resource)
    const meta = typeMeta[resource?.type] || typeMeta.file

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(8,10,18,0.82)] px-4 py-6 backdrop-blur-md">
            <div className="grid max-h-[92vh] w-full max-w-6xl grid-rows-[auto_minmax(0,1fr)] overflow-hidden rounded-[36px] border border-white/10 bg-[rgb(var(--card-bg))] shadow-[0_30px_100px_rgba(0,0,0,0.42)]">
                <div className="flex items-start justify-between gap-4 border-b border-[rgb(var(--border))] p-6 sm:p-7">
                    <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.3em] text-[rgb(var(--text-muted))]">Popup preview</p>
                        <h3 className="mt-2 truncate text-2xl font-black tracking-tight text-[rgb(var(--text))]">
                            {resource.title}
                        </h3>
                        <p className="mt-2 text-sm text-[rgb(var(--text-secondary))]">
                            {typeLabels[resource.type] || 'Resource'} · {formatDate(resource.createdAt)} · {getFileName(resource)}
                        </p>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-2 text-[rgb(var(--text-secondary))]"
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="grid min-h-0 gap-0 lg:grid-cols-[minmax(0,1.35fr)_320px]">
                    <div className="min-h-0 border-b border-[rgb(var(--border))] bg-[rgb(var(--surface))] lg:border-b-0 lg:border-r">
                        {kind === 'note' ? (
                            <div className="h-full overflow-auto p-6 sm:p-8">
                                <div className="rounded-[28px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 shadow-sm">
                                    <p className="text-xs uppercase tracking-[0.24em] text-[rgb(var(--text-muted))]">
                                        Note
                                    </p>
                                    <h4 className="mt-3 text-xl font-black text-[rgb(var(--text))]">{resource.title}</h4>
                                    <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-[rgb(var(--text-secondary))]">
                                        {resource.description || 'No note content available.'}
                                    </p>
                                </div>
                            </div>
                        ) : state.loading ? (
                            <div className="flex h-full min-h-105 items-center justify-center p-8 text-sm text-[rgb(var(--text-secondary))]">
                                <Loader2 size={18} className="mr-2 animate-spin" />
                                Loading preview...
                            </div>
                        ) : kind === 'image' ? (
                            <div className="h-full overflow-auto p-4 sm:p-6">
                                <img
                                    src={state.previewUrl}
                                    alt={resource.title}
                                    className="mx-auto max-h-[78vh] w-auto rounded-[28px] object-contain shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
                                />
                            </div>
                        ) : kind === 'pdf' ? (
                            <div className="h-full overflow-hidden bg-white p-3">
                                {state.error ? (
                                    <div className="flex h-full items-center justify-center rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 text-sm leading-7 text-[rgb(var(--text-secondary))]">
                                        {state.error}
                                    </div>
                                ) : (
                                    <iframe
                                        title={resource.title}
                                        src={`https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(
                                            state.previewUrl
                                        )}`}
                                        className="
    h-[78vh] w-full
    rounded-3xl border-0
    bg-white
  "
                                    />
                                )}
                            </div>
                        ) : kind === 'link' ? (
                            <div className="flex h-full items-center justify-center p-8">
                                <div className="w-full max-w-2xl rounded-[28px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 shadow-sm">
                                    <p className="text-xs uppercase tracking-[0.24em] text-[rgb(var(--text-muted))]">Link</p>
                                    <h4 className="mt-3 text-xl font-black text-[rgb(var(--text))]">{resource.title}</h4>
                                    <p className="mt-4 text-sm leading-7 text-[rgb(var(--text-secondary))]">
                                        {resource.description || 'Open the link in a new tab to view the content.'}
                                    </p>
                                    <div className="mt-5 flex flex-wrap gap-3">
                                        <a
                                            href={state.previewUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--primary))] px-4 py-3 text-sm font-semibold text-white"
                                        >
                                            <ExternalLink size={16} />
                                            Open link
                                        </a>
                                        <button
                                            type="button"
                                            onClick={handleDownload}
                                            className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm font-semibold text-[rgb(var(--text))]"
                                        >
                                            <Download size={16} />
                                            Copy/save link
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex h-full items-center justify-center p-8">
                                <div className="w-full max-w-2xl rounded-[28px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 shadow-sm">
                                    <p className="text-xs uppercase tracking-[0.24em] text-[rgb(var(--text-muted))]">File</p>
                                    <h4 className="mt-3 text-xl font-black text-[rgb(var(--text))]">{resource.title}</h4>
                                    <p className="mt-4 text-sm leading-7 text-[rgb(var(--text-secondary))]">
                                        {resource.description || 'Use the buttons on the right to open or download the file.'}
                                    </p>
                                    <div className="mt-5 rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-4 text-sm text-[rgb(var(--text-muted))]">
                                        File name: {getFileName(resource)}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <aside className="flex min-h-0 flex-col gap-4 overflow-auto p-6 sm:p-7">
                        <div className="rounded-[28px] border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-5 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div
                                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                                    style={{ background: meta.tint, color: meta.color }}
                                >
                                    <meta.icon size={20} />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.24em] text-[rgb(var(--text-muted))]">
                                        Type
                                    </p>
                                    <p className="mt-1 text-lg font-bold text-[rgb(var(--text))]">{meta.label}</p>
                                </div>
                            </div>

                            <div className="mt-5 space-y-3 text-sm text-[rgb(var(--text-secondary))]">
                                <p>Preview kind: {kind.toUpperCase()}</p>
                                <p>Uploaded: {formatDate(resource.createdAt)}</p>
                                <p>File: {getFileName(resource)}</p>
                                {resource?.fileSize ? <p>Size: {formatBytes(resource.fileSize)}</p> : null}
                                {resource?.uploadedBy?.name ? <p>By: {resource.uploadedBy.name}</p> : null}
                            </div>
                        </div>

                        <div className="rounded-[28px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-5 shadow-sm">
                            <p className="text-xs uppercase tracking-[0.24em] text-[rgb(var(--text-muted))]">Actions</p>
                            <div className="mt-4 flex flex-col gap-3">
                                <button
                                    type="button"
                                    onClick={handleDownload}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[rgb(var(--primary))] px-4 py-3 text-sm font-semibold text-white"
                                >
                                    <Download size={16} />
                                    Download locally
                                </button>

                                {kind === 'file' || kind === 'pdf' || kind === 'link' ? (
                                    <button
                                        type="button"
                                        onClick={handleOpenInNewTab}
                                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm font-semibold text-[rgb(var(--text))]"
                                    >
                                        <ExternalLink size={16} />
                                        Open in new tab
                                    </button>
                                ) : null}
                            </div>
                        </div>

                        {state.error ? (
                            <div className="rounded-[28px] border border-[rgb(var(--error))] bg-[rgba(var(--error),0.08)] p-5 text-sm leading-7 text-[rgb(var(--error))]">
                                {state.error}
                            </div>
                        ) : null}
                    </aside>
                </div>
            </div>
        </div>
    )
}

const ResourcesPage = () => {
    const { user } = useAuth()
    const { groupId } = useParams()

    const [resources, setResources] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [uploading, setUploading] = useState(false)
    const [deletingId, setDeletingId] = useState(null)
    const [isCreateOpen, setIsCreateOpen] = useState(false)
    const [previewResource, setPreviewResource] = useState(null)
    const [searchText, setSearchText] = useState('')
    const [selectedType, setSelectedType] = useState('all')
    const [form, setForm] = useState({
        title: '',
        description: '',
        type: 'file',
        linkUrl: '',
        file: null,
    })
    const [fieldErrors, setFieldErrors] = useState({})

    const isMentor = user?.role === 'mentor' || user?.role === 'admin'

    const loadResources = async () => {
        try {
            setLoading(true)
            const data = await resourceService.getResourcesByGroup(groupId)
            setResources(data?.resources || [])
            setError(null)
        } catch (err) {
            setError(err?.response?.data?.message || err?.message || 'Failed to load resources')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadResources()
    }, [groupId])

    useEffect(() => {
        if (!isCreateOpen && !previewResource) return undefined

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsCreateOpen(false)
                setPreviewResource(null)
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isCreateOpen, previewResource])

    const resourceStats = useMemo(
        () => ({
            total: resources.length,
            files: resources.filter((resource) => resource.type === 'file').length,
            links: resources.filter((resource) => resource.type === 'link').length,
            notes: resources.filter((resource) => resource.type === 'note').length,
        }),
        [resources],
    )

    const filteredResources = useMemo(() => {
        const query = searchText.trim().toLowerCase()

        return resources.filter((resource) => {
            const matchesType = selectedType === 'all' || resource.type === selectedType
            if (!matchesType) return false

            if (!query) return true

            const haystack = [
                resource.title,
                resource.description,
                resource.type,
                resource.uploadedBy?.name,
            ]
                .filter(Boolean)
                .join(' ')
                .toLowerCase()

            return haystack.includes(query)
        })
    }, [resources, searchText, selectedType])

    const resetForm = (nextType = 'file') => {
        setForm({
            title: '',
            description: '',
            type: nextType,
            linkUrl: '',
            file: null,
        })
        setFieldErrors({})
    }

    const handleInputChange = (event) => {
        const { name, value, files } = event.target

        if (name === 'type') {
            const nextType = value
            setForm((current) => ({
                ...current,
                type: nextType,
                file: nextType === 'file' ? current.file : null,
                linkUrl: nextType === 'link' ? current.linkUrl : '',
                description: nextType === 'note' ? current.description : current.description,
            }))
            setFieldErrors((current) => ({
                ...current,
                type: undefined,
                file: undefined,
                linkUrl: undefined,
                description: undefined,
            }))
            return
        }

        if (name === 'file') {
            const file = files?.[0] || null
            setForm((current) => ({ ...current, file }))
            setFieldErrors((current) => ({ ...current, file: undefined }))
            return
        }

        setForm((current) => ({ ...current, [name]: value }))
        setFieldErrors((current) => ({ ...current, [name]: undefined }))
    }

    const validateForm = () => {
        const nextErrors = {}

        if (!form.title.trim()) {
            nextErrors.title = 'Title is required.'
        }

        if (form.type === 'file') {
            if (!form.file) {
                nextErrors.file = 'Please choose an image or PDF file.'
            } else if (!isValidUploadType(form.file)) {
                nextErrors.file = 'Only JPG, PNG, WEBP, and PDF files are allowed.'
            }
        }

        if (form.type === 'link' && !form.linkUrl.trim()) {
            nextErrors.linkUrl = 'Link URL is required.'
        }

        if (form.type === 'note' && !form.description.trim()) {
            nextErrors.description = 'Description is required for notes.'
        }

        if (!['file', 'link', 'note'].includes(form.type)) {
            nextErrors.type = 'Please select a valid resource type.'
        }

        setFieldErrors(nextErrors)
        return Object.keys(nextErrors).length === 0
    }

    const handleUpload = async (event) => {
        event.preventDefault()

        if (!validateForm()) return

        try {
            setUploading(true)
            setError(null)

            const payload = new FormData()
            payload.append('title', form.title.trim())
            payload.append('type', form.type)

            if (form.type === 'file') {
                payload.append('file', form.file)
            }

            if (form.type === 'link') {
                payload.append('linkUrl', form.linkUrl.trim())
            }

            if (form.type === 'note') {
                payload.append('description', form.description.trim())
            }

            const created = normalizeResource(await resourceService.uploadResource(groupId, payload))
            if (created) {
                setResources((current) => {
                    const createdId = created.resourceId || created._id
                    const next = [created, ...current.filter((item) => (item.resourceId || item._id) !== createdId)]
                    return next
                })
                setPreviewResource(created)
            }

            resetForm('file')
            event.target.reset()
            setIsCreateOpen(false)
            await loadResources()
        } catch (err) {
            setError(err?.response?.data?.message || err?.message || 'Failed to upload resource')
        } finally {
            setUploading(false)
        }
    }

    const handleDelete = async (resource) => {
        const resourceId = resource?.resourceId || resource?._id
        if (!resourceId) return

        if (!window.confirm('Delete this resource? This cannot be undone.')) return

        try {
            setDeletingId(resourceId)
            await resourceService.deleteResource(resourceId)
            await loadResources()
            if ((previewResource?.resourceId || previewResource?._id) === resourceId) {
                setPreviewResource(null)
            }
        } catch (err) {
            setError(err?.response?.data?.message || err?.message || 'Failed to delete resource')
        } finally {
            setDeletingId(null)
        }
    }

    const handleView = (resource) => {
        setPreviewResource(resource)
    }

    const handleDownload = async (resource) => {
        const kind = getPreviewKind(resource)

        try {
            if (kind === 'note') {
                saveTextToLocal(resource?.description || '', `${getFileName(resource) || 'note'}.txt`)
                return
            }

            const url = getResourceUrl(resource)
            await saveBlobToLocal(url, getFileName(resource))
        } catch {
            const fallbackUrl = getResourceUrl(resource)
            if (fallbackUrl) {
                window.open(fallbackUrl, '_blank', 'noreferrer')
            }
        }
    }

    const filters = [
        { key: 'all', label: 'All', count: resourceStats.total },
        { key: 'file', label: 'Files', count: resourceStats.files },
        { key: 'link', label: 'Links', count: resourceStats.links },
        { key: 'note', label: 'Notes', count: resourceStats.notes },
    ]

    return (
        <div className="min-h-screen bg-[rgb(var(--bg))] px-4 py-8 text-[rgb(var(--text))] sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <section className="relative overflow-hidden rounded-[36px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] px-6 py-7 shadow-sm sm:px-8">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(var(--primary),0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(var(--success),0.12),transparent_28%)]" />
                    <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-4xl">
                            <p className="text-xs uppercase tracking-[0.34em] text-[rgb(var(--text-muted))]">
                                Group Module
                            </p>
                            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                                Resources
                            </h1>
                            <p className="mt-3 max-w-2xl text-sm leading-7 text-[rgb(var(--text-secondary))] sm:text-base">
                                Keep files, links, and notes in one place. Upload using the backend contract,
                                preview resources in a popup, and download them locally when needed.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {filters.map((filter) => (
                                    <button
                                        key={filter.key}
                                        type="button"
                                        onClick={() => setSelectedType(filter.key)}
                                        className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${selectedType === filter.key ? 'border-[rgb(var(--primary))] bg-[rgb(var(--primary-soft))] text-[rgb(var(--text))]' : 'border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-[rgb(var(--text-secondary))]'}`}
                                    >
                                        {filter.label} <span className="ml-1 text-xs">{filter.count}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                            <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3">
                                <p className="text-[11px] uppercase tracking-[0.22em] text-[rgb(var(--text-muted))]">
                                    Total
                                </p>
                                <p className="mt-1 text-xl font-black">{resourceStats.total}</p>
                            </div>
                            <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3">
                                <p className="text-[11px] uppercase tracking-[0.22em] text-[rgb(var(--text-muted))]">
                                    Visible
                                </p>
                                <p className="mt-1 text-xl font-black">{filteredResources.length}</p>
                            </div>
                            {isMentor ? (
                                <button
                                    type="button"
                                    onClick={() => setIsCreateOpen(true)}
                                    className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--primary))] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-0.5"
                                >
                                    <Plus size={16} />
                                    New Resource
                                </button>
                            ) : (
                                <span className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm text-[rgb(var(--text-secondary))]">
                                    View-only access for learners
                                </span>
                            )}
                        </div>
                    </div>
                </section>

                <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    <div className="rounded-[28px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-5 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.24em] text-[rgb(var(--text-muted))]">Files</p>
                        <p className="mt-3 text-3xl font-black">{resourceStats.files}</p>
                        <p className="mt-2 text-sm text-[rgb(var(--text-secondary))]">Documents and uploads</p>
                    </div>
                    <div className="rounded-[28px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-5 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.24em] text-[rgb(var(--text-muted))]">Links</p>
                        <p className="mt-3 text-3xl font-black">{resourceStats.links}</p>
                        <p className="mt-2 text-sm text-[rgb(var(--text-secondary))]">External references</p>
                    </div>
                    <div className="rounded-[28px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-5 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.24em] text-[rgb(var(--text-muted))]">Notes</p>
                        <p className="mt-3 text-3xl font-black">{resourceStats.notes}</p>
                        <p className="mt-2 text-sm text-[rgb(var(--text-secondary))]">Written explanations</p>
                    </div>
                    <div className="rounded-[28px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-5 shadow-sm">
                        <p className="text-xs uppercase tracking-[0.24em] text-[rgb(var(--text-muted))]">Search</p>
                        <input
                            value={searchText}
                            onChange={(event) => setSearchText(event.target.value)}
                            className="mt-3 w-full rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[rgb(var(--text-muted))] focus:border-[rgb(var(--primary))]"
                            placeholder="Search resources"
                        />
                    </div>
                </section>

                {error ? (
                    <div className="mt-6 rounded-3xl border border-[rgb(var(--error))] bg-[rgba(var(--error),0.08)] px-4 py-3 text-sm text-[rgb(var(--error))]">
                        {error}
                    </div>
                ) : null}

                <section className="mt-6 rounded-[34px] border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-6 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="text-xs uppercase tracking-[0.28em] text-[rgb(var(--text-muted))]">
                                Library
                            </p>
                            <h2 className="mt-2 text-xl font-bold text-[rgb(var(--text))]">
                                {loading ? 'Loading resources...' : `${filteredResources.length} resources found`}
                            </h2>
                        </div>
                    </div>

                    {loading ? (
                        <div className="mt-6 rounded-3xl border border-dashed border-[rgb(var(--border))] px-6 py-14 text-center text-[rgb(var(--text-secondary))]">
                            Loading resources...
                        </div>
                    ) : filteredResources.length === 0 ? (
                        <div className="mt-6 rounded-3xl border border-dashed border-[rgb(var(--border))] px-6 py-14 text-center text-[rgb(var(--text-secondary))]">
                            No resources yet. Use the button on the right to create the first one.
                        </div>
                    ) : (
                        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {filteredResources.map((resource) => {
                                const resourceId = resource.resourceId || resource._id
                                const canDelete =
                                    isMentor ||
                                    resource?.uploadedBy?._id === user?._id ||
                                    resource?.uploadedBy === user?._id

                                return (
                                    <ResourceCard
                                        key={resourceId}
                                        resource={resource}
                                        onView={handleView}
                                        onDownload={handleDownload}
                                        onDelete={handleDelete}
                                        canDelete={canDelete && deletingId !== resourceId}
                                    />
                                )
                            })}
                        </div>
                    )}
                </section>
            </div>

            <ResourceModal
                open={isCreateOpen}
                onClose={() => {
                    setIsCreateOpen(false)
                    resetForm('file')
                }}
                form={form}
                errors={fieldErrors}
                onChange={handleInputChange}
                onSubmit={handleUpload}
                uploading={uploading}
                isMentor={isMentor}
            />

            <PreviewModal
                open={Boolean(previewResource)}
                resource={previewResource}
                onClose={() => setPreviewResource(null)}
            />
        </div>
    )
}

export default ResourcesPage