import { useState, useRef } from 'react'
import './Todo.css'

let nextId = 1

export default function Todo() {
  const [tasks, setTasks] = useState([
    { id: nextId++, text: 'Review database normalization notes', done: false },
    { id: nextId++, text: 'Finish hardware maintenance lab report', done: true },
    { id: nextId++, text: 'Study OSI model layers for exam', done: false },
  ])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('all')
  const inputRef = useRef(null)

  const addTask = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    setTasks(prev => [{ id: nextId++, text: trimmed, done: false }, ...prev])
    setInput('')
    inputRef.current.focus()
  }

  const toggleTask = (id) =>
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))

  const deleteTask = (id) =>
    setTasks(prev => prev.filter(t => t.id !== id))

  const clearCompleted = () =>
    setTasks(prev => prev.filter(t => !t.done))

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTask()
  }

  const filtered = tasks.filter(t => {
    if (filter === 'completed') return t.done
    if (filter === 'pending')   return !t.done
    return true
  })

  const pendingCount = tasks.filter(t => !t.done).length
  const doneCount    = tasks.filter(t => t.done).length

  return (
    <div className="min-h-screen flex items-start justify-center py-10 px-4 app-bg">
      <div className="card p-7 w-full max-w-md">

        {/* Header */}
        <div className="mb-6">
          <h1 className="heading-font text-3xl text-gray-800 mb-1">My Tasks</h1>
          <p className="text-sm text-gray-400">
            {pendingCount} remaining &nbsp;·&nbsp; {doneCount} completed
          </p>
        </div>

        {/* Input */}
        <div className="flex gap-2 mb-6">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add a new task..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="input-field flex-1 px-4 py-3 text-sm text-gray-700"
          />
          <button className="add-btn px-5 py-3 text-sm" onClick={addTask}>
            + Add
          </button>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-1 filter-bar rounded-xl p-1 mb-5">
          {['all', 'pending', 'completed'].map(f => (
            <button
              key={f}
              className={`filter-btn flex-1 capitalize ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
              {f === 'pending' && pendingCount > 0 && (
                <span className="badge ml-1.5">{pendingCount}</span>
              )}
            </button>
          ))}
        </div>

        {/* Task list */}
        <div className="flex flex-col gap-2">
          {filtered.length === 0 && (
            <div className="empty-state">
              <div className="text-4xl mb-3">
                {filter === 'completed' ? '🎉' : '✅'}
              </div>
              <p className="text-sm font-medium">
                {filter === 'completed'
                  ? 'No completed tasks yet.'
                  : filter === 'pending'
                  ? 'All done — nothing pending!'
                  : 'No tasks yet. Add one above!'}
              </p>
            </div>
          )}

          {filtered.map(task => (
            <div
              key={task.id}
              className={`task-item flex items-center gap-3 px-4 py-3 ${task.done ? 'done' : ''}`}
            >
              <div
                className={`checkbox-custom ${task.done ? 'checked' : ''}`}
                onClick={() => toggleTask(task.id)}
              >
                {task.done && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>

              <span
                className={`flex-1 text-sm cursor-pointer select-none leading-snug ${
                  task.done ? 'line-through text-gray-400' : 'text-gray-700'
                }`}
                onClick={() => toggleTask(task.id)}
              >
                {task.text}
              </span>

              <button className="delete-btn" onClick={() => deleteTask(task.id)}>×</button>
            </div>
          ))}
        </div>

        {/* Clear completed */}
        {doneCount > 0 && (
          <div className="mt-5 text-right">
            <button
              className="text-xs text-gray-400 hover:text-red-400 transition-colors cursor-pointer underline underline-offset-2"
              onClick={clearCompleted}
            >
              Clear {doneCount} completed {doneCount === 1 ? 'task' : 'tasks'}
            </button>
          </div>
        )}

      </div>
    </div>
  )
}