import React from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { BarChart, PieChart, LineChart, Activity } from 'lucide-react'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const ResponsiveGridLayout = WidthProvider(Responsive)

interface DashboardProps {
  layout: Array<{ i: string; x: number; y: number; w: number; h: number }>
  onLayoutChange: (layout: any) => void
}

const Dashboard: React.FC<DashboardProps> = ({ layout, onLayoutChange }) => {
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={100}
      onLayoutChange={onLayoutChange}
      isDraggable={true}
      isResizable={true}
      resizeHandles={['s', 'w', 'e', 'n', 'se']}
    >
      <div key="sales" className="bg-white p-6 rounded-lg shadow-md">
        <DashboardCard title="Sales Overview" icon={<BarChart />} />
      </div>
      <div key="customers" className="bg-white p-6 rounded-lg shadow-md">
        <DashboardCard title="Customer Distribution" icon={<PieChart />} />
      </div>
      <div key="revenue" className="bg-white p-6 rounded-lg shadow-md">
        <DashboardCard title="Revenue Trends" icon={<LineChart />} />
      </div>
      <div key="activity" className="bg-white p-6 rounded-lg shadow-md">
        <DashboardCard title="Activity Log" icon={<Activity />} />
      </div>
    </ResponsiveGridLayout>
  )
}

interface DashboardCardProps {
  title: string
  icon: React.ReactNode
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, icon }) => {
  return (
    <div className="h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <span className="text-gray-500">{icon}</span>
      </div>
      <p className="text-gray-600">Content for {title}</p>
    </div>
  )
}

export default Dashboard