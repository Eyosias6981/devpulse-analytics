export default function TaskCard({ task, onComplete, onDelete }) {
  return (
    <div className={`task-card ${task.status.toLowerCase().replace(' ', '-')}`}>
      <div className="card-header-row">
        <h3>{task.title}</h3>
        <button onClick={() => onDelete(task.id)} className="btn-delete" title="Delete Task">
          🗑
        </button>
      </div>

      <div className="card-meta">
        <span className="badge-points">⚡ {task.points} Story Points</span>
        <span className="badge-status">{task.status}</span>
      </div>

      {task.status !== 'Done' && (
        <button onClick={() => onComplete(task.id)} className="btn-complete">
          ✔ Complete Task
        </button>
      )}
    </div>
  )
}
