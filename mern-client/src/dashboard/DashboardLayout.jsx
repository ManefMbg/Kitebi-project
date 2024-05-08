import { SideDashboard } from './SideDashboard'

import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
        <SideDashboard/>
        <Outlet/>
    </div>
  )
} 

export default DashboardLayout