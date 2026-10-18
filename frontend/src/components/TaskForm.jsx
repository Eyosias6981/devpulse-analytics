import { useState } from 'react'

export default function TaskForm({ onAddTask }) {
  const [newTitle, setNewTitle] = useState('')
  const [newPoints, setNewPoints] = useState(1)

  function handleSubmit(e) {
    e.preventDefault()
    if (newTitle.trim() === '') return

    // Pass the typed data back up to the parent function!
    onAddTask(newTitle, newPoints)
    
    setNewTitle('')
    setNewPoints(1)
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h3>Create New Task</h3>
      <div className="form-group">
        <input 
          type="text" 
          placeholder="What needs to be done?" 
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <select value={newPoints} onChange={(e) => setNewPoints(e.target.value)}>
          <option value="1">⚡ 1 Point</option>
          <option value="3">⚡ 3 Points</option>
          <option value="5">⚡ 5 Points</option>
          <option value="8">⚡ 8 Points</option>
        </select>
        <button type="submit" className="btn-submit">➕ Add</button>
      </div>
    </form>
  )
}
