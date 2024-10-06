import React, { useState } from 'react'
import Dashboard from './components/Dashboard'

function App() {
  const [layout, setLayout] = useState([
    { i: 'sales', x: 0, y: 0, w: 6, h: 2 },
    { i: 'customers', x: 6, y: 0, w: 6, h: 2 },
    { i: 'revenue', x: 0, y: 2, w: 8, h: 2 },
    { i: 'activity', x: 8, y: 2, w: 4, h: 2 },
  ])

  const onLayoutChange = (newLayout: any) => {
    setLayout(newLayout)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Interactive Dashboard</h1>
      <Dashboard layout={layout} onLayoutChange={onLayoutChange} />
    </div>
  )
}

export default App