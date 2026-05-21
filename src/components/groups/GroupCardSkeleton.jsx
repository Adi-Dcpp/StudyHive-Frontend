const GroupCardSkeleton = () => {
  return (
    <div
      className="
        animate-pulse rounded-3xl
        border border-[rgb(var(--border))]
        bg-[rgb(var(--card-bg))]
        p-6
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-4">
          <div className="h-6 w-1/2 rounded-xl bg-[rgb(var(--hover))]" />

          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-[rgb(var(--hover))]" />
            <div className="h-4 w-2/3 rounded bg-[rgb(var(--hover))]" />
          </div>
        </div>

        <div className="h-8 w-20 rounded-full bg-[rgb(var(--hover))]" />
      </div>

      <div className="mt-6 flex gap-3">
        <div className="h-10 w-32 rounded-xl bg-[rgb(var(--hover))]" />
        <div className="h-10 w-28 rounded-xl bg-[rgb(var(--hover))]" />
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="h-10 w-10 rounded-full bg-[rgb(var(--hover))]" />
          <div className="h-10 w-10 rounded-full bg-[rgb(var(--hover))]" />
          <div className="h-10 w-10 rounded-full bg-[rgb(var(--hover))]" />
        </div>

        <div className="h-10 w-10 rounded-2xl bg-[rgb(var(--hover))]" />
      </div>
    </div>
  )
}

export default GroupCardSkeleton