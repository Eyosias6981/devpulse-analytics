import { useState } from 'react'
import MetricsBanner from './components/MetricsBanner'
import TaskForm from './components/TaskForm'
import TaskCard from './components/TaskCard'
import './App.css'

function App() {
  // The Master Parent State Memory
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Connect C# Database Endpoints', points: 5, status: 'In Progress' },
    { id: 2, title: 'Fix Mantine AppShell Resize Jump', points: 3, status: 'Done' }
  ])

  // Master Action: Add a new task object to state
  function handleAddTask(title, points) {
    const newTask = {
      id: Date.now(),
      title: title,
      points: Number(points),
      status: 'Todo'
    }
    setTasks(prevTasks => [...prevTasks, newTask])
  }

  // Master Action: Mark a task row as completed
  function handleCompleteTask(taskId) {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, status: 'Done' } : task
      )
    )
  }
    // Master Action: Remove a task completely from the array state
  function handleDeleteTask(taskId) {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId))
  }


  return (
    <div className="board-wrapper">
      <h1>DevPulse Analytics Board</h1>

      {/* Passing data down through clean PROPS! */}
      <MetricsBanner tasks={tasks} />

      <TaskForm onAddTask={handleAddTask} />

      <div className="task-list">
        {tasks.map(task => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onComplete={handleCompleteTask} 
             onDelete={handleDeleteTask} 
          />
        ))}
      </div>
    </div>
  )
}

export default App
 