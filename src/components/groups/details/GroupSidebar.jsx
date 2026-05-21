const GroupSidebar = ({ tabs, activeTab, onTabChange }) => {
  return (
    <aside className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card-bg))] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--text-muted))]">
        Group menu
      </p>
      <div className="mt-4 flex flex-col gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => onTabChange(tab.key)}
            className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold transition ${
              activeTab === tab.key
                ? 'bg-[rgb(var(--primary-soft))] text-[rgb(var(--primary))]'
                : 'text-[rgb(var(--text))] hover:bg-[rgb(var(--hover))]'
            }`}
          >
            <span>{tab.label}</span>
            <span className="text-xs text-[rgb(var(--text-muted))]">
              {tab.badge || ''}
            </span>
          </button>
        ))}
      </div>
    </aside>
  )
}

export default GroupSidebar
