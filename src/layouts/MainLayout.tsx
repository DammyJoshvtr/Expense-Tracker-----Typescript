import React from 'react'
import { Outlet } from 'react-router-dom'
import Titlebar from '../components/Titlebar'

const MainLayout = () => {
  return (
    <div className='min-h-screen w-full'>
      <Titlebar />
      <div className='bg-gray-50 min-h-screen'>
        <Outlet />
      </div>

    </div>
  )
}

export default MainLayout