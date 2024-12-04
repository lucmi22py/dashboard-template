import React from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout'
import { BarChart, PieChart, LineChart, Activity } from 'lucide-react'
import { DashboardCard } from './DashboardCard'
import { BREAKPOINT_COLS, DEFAULT_LAYOUT } from '../constants/layoutConfig'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const ResponsiveGridLayout = WidthProvider(Responsive)

interface DashboardProps {
  layout: Array<{ i: string; x: number; y: number; w: number; h: number }>
  onLayoutChange: (layout: any) => void
}

const Dashboard: React.FC<DashboardProps> = ({ layout, onLayoutChange }) => {
  const generateResponsiveLayout = () => {
    const responsiveLayout: any = {}
    Object.keys(BREAKPOINT_COLS).forEach(breakpoint => {
      // Maintain the same proportions across breakpoints
      responsiveLayout[breakpoint] = layout.map(item => ({
        ...item,
        w: Math.floor((item.w * BREAKPOINT_COLS[breakpoint]) / BREAKPOINT_COLS.lg),
        x: Math.floor((item.x * BREAKPOINT_COLS[breakpoint]) / BREAKPOINT_COLS.lg),
      }))
    })
    return responsiveLayout
  }

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={generateResponsiveLayout()}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={BREAKPOINT_COLS}
      rowHeight={100}
      onLayoutChange={(_, layouts) => onLayoutChange(layouts.lg)}
      isDraggable={true}
      isResizable={true}
      resizeHandles={['se']}
      margin={[16, 16]}
      containerPadding={[16, 16]}
      useCSSTransforms={true}
      preventCollision={false}
      compactType="vertical"
    >
      <div key="sales" className="bg-white rounded-lg shadow-md overflow-hidden">
        <DashboardCard title="Sales Overview" icon={<BarChart className="w-6 h-6" />} />
      </div>
      <div key="customers" className="bg-white rounded-lg shadow-md overflow-hidden">
        <DashboardCard title="Customer Distribution" icon={<PieChart className="w-6 h-6" />} />
      </div>
      <div key="revenue" className="bg-white rounded-lg shadow-md overflow-hidden">
        <DashboardCard title="Revenue Trends" icon={<LineChart className="w-6 h-6" />} />
      </div>
      <div key="activity" className="bg-white rounded-lg shadow-md overflow-hidden">
        <DashboardCard title="Activity Log" icon={<Activity className="w-6 h-6" />} />
      </div>
    </ResponsiveGridLayout>
  )
}

export default Dashboard