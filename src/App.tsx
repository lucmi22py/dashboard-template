import React, { useState } from 'react'
import Dashboard from './components/Dashboard'
import { DEFAULT_LAYOUT } from './constants/layoutConfig'

function App() {
  const [layout, setLayout] = useState(DEFAULT_LAYOUT)

  const onLayoutChange = (newLayout: any) => {
    setLayout(newLayout)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Interactive Dashboard</h1>
        <Dashboard layout={layout} onLayoutChange={onLayoutChange} />
      </div>
    </div>
  )
}

export default App