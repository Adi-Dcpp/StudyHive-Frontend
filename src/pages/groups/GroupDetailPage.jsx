import { useParams } from 'react-router-dom'

const GroupDetailPage = () => {
  const { groupId } = useParams()

  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold text-white">
        Group {groupId}
      </h1>

      <p className="mt-4 text-slate-400">
        Group workspace coming soon...
      </p>
    </div>
  )
}

export default GroupDetailPage