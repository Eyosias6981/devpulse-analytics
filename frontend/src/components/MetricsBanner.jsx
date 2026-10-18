export default function MetricsBanner({ tasks }) {
  // The child accepts 'tasks' as a PROP and calculates metrics locally!
  const totalTasks = tasks.length
  const doneTasks = tasks.filter(task => task.status === 'Done').length
  
  const completedPoints = tasks
    .filter(task => task.status === 'Done')
    .reduce((sum, task) => sum + task.points, 0)

  const progressPercentage = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0

  return (
    <div className="metrics-banner">
      <div className="metric-card">
        <span className="metric-value">⚡ {completedPoints}</span>
        <span className="metric-label">Velocity Points</span>
      </div>
      <div className="metric-card">
        <span className="metric-value">📋 {doneTasks}/{totalTasks}</span>
        <span className="metric-label">Tasks Closed</span>
      </div>
      <div className="metric-card">
        <span className="metric-value">📈 {progressPercentage}%</span>
        <span className="metric-label">Sprint Progress</span>
      </div>
    </div>
  )
}
