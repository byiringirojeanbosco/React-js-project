import { useState } from 'react'
import Calculator from "./assets/apps/Calculator";
import Todo from "./assets/apps/Todo";

export default function App() {
  const [currentApp, setCurrentApp] = useState(null)

  // show the selected app with a back button
  if (currentApp === 'calculator') {
    return (
      <div>
        <button
          onClick={() => setCurrentApp(null)}
          className="fixed top-4 left-4 z-50 flex items-center gap-2 bg-white text-gray-700 border border-gray-200 px-4 py-2 rounded-xl shadow-md text-sm font-semibold hover:bg-gray-50 transition-all"
        >
          ← Back
        </button>
        <Calculator />
      </div>
    )
  }

  if (currentApp === 'todo') {
    return (
      <div>
        <button
          onClick={() => setCurrentApp(null)}
          className="fixed top-4 left-4 z-50 flex items-center gap-2 bg-white text-gray-700 border border-gray-200 px-4 py-2 rounded-xl shadow-md text-sm font-semibold hover:bg-gray-50 transition-all"
        >
          ← Back
        </button>
        <Todo />
      </div>
    )
  }

  // home screen
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 home-bg px-4">

      <div className="text-center">
        <h1 className="home-title text-5xl font-bold text-white mb-3">React Project</h1>
        <p className="text-white/60 text-lg">Choose an app to open</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">

        {/* Calculator card */}
        <button
          onClick={() => setCurrentApp('calculator')}
          className="app-card group"
        >
          <div className="app-icon calc-icon">🧮</div>
          <h2 className="text-xl font-bold text-white mt-4 mb-1">Calculator</h2>
          <p className="text-white/50 text-sm">Basic arithmetic operations</p>
          <div className="open-label">Open →</div>
        </button>

        {/* To-Do card */}
        <button
          onClick={() => setCurrentApp('todo')}
          className="app-card group"
        >
          <div className="app-icon todo-icon">✅</div>
          <h2 className="text-xl font-bold text-white mt-4 mb-1">To-Do List</h2>
          <p className="text-white/50 text-sm">Manage your daily tasks</p>
          <div className="open-label">Open →</div>
        </button>

      </div>
    </div>
  )
}