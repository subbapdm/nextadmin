"use client"

import DashboardNavbar from '@/components/dashboard/navbar/Navbar';
import Sidebar from '@/components/dashboard/sidebar/Sidebar';
import { useState } from 'react';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggle = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <div className="flex justify-between min-h-screen relative">

      <div className={`bg-white transition-all duration-300 ease-in-out ${sidebarOpen ? 'lg:w-80' : 'lg:w-14'}`}>
          <Sidebar sidebarOpen={sidebarOpen} />
      </div>

      <div className='w-full flex flex-col gap-5 p-5'>
        <DashboardNavbar onToggle={handleToggle} />
        <main>
          {children}
        </main>
      </div>

    </div>
  )
}

export default DashboardLayout;