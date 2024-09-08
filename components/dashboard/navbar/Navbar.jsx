'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import { BellRing, MessageSquare, MoonStar, Settings, SunMoon } from 'lucide-react';

const DashboardNavbar = () => {
  const[darkMode, setDarkMode] = useState(false);
  return (
    <nav className='bg-white flex justify-between items-center w-full p-4'>
      <div className='text-gray-400'>
        Search
      </div>
      <nav>
        <ul className='flex items-center gap-3'>
          <li className='bg-gray-100 p-2 rounded-full text-gray-500'>
            <Link href="/" onClick={(e) => {
              e.preventDefault()
              setDarkMode(prev => !prev)
            }}>
              {darkMode ? <SunMoon size={20} /> :<MoonStar size={20} />}
            </Link>
          </li>
          <li className='bg-gray-100 p-2 rounded-full text-gray-500'>
            <Link href="/">
              <MessageSquare size={20} />
            </Link>
          </li>
          <li className='bg-gray-100 p-2 rounded-full text-gray-500'>
            <Link href="/">
              <BellRing size={20} />
            </Link>
          </li>
          <li className='bg-gray-100 p-2 rounded-full text-gray-500'>
            <Link href="/">
              <Settings size={20} />
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  )
}

export default DashboardNavbar;