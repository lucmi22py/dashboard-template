import React from 'react'

interface DashboardCardProps {
  title: string
  icon: React.ReactNode
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ title, icon }) => {
  return (
    <div className="h-full p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <span className="text-gray-500">{icon}</span>
      </div>
      <div className="h-[calc(100%-4rem)] flex items-center justify-center bg-gray-50 rounded-lg">
        <p className="text-gray-600">Content for {title}</p>
      </div>
    </div>
  )
}