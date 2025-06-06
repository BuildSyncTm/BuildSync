import React from 'react'
import Sidebar from '../components/ClientDashboard/Sidebar'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/dashboard/Navbar'

const ClientDashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 ml-64 bg-gray-100 h-screen'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default ClientDashboard