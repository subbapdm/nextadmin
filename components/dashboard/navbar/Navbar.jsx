'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import { BellRing, MessageSquare, MoonStar, Search, Settings, SunMoon, Text } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const DashboardNavbar = ({ onToggle }) => {
  const[darkMode, setDarkMode] = useState(false);

  const pathname = usePathname();
  const match = pathname.match(/\/dashboard\/([^\/]*)/);
  const currentPage = match && match[1] ? match[1] : 'dashboard';
  const title = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  return (
    <nav className='w-full bg-white shadow-sm flex justify-between items-center gap-4 rounded-xl overflow-x-auto p-4'>
      <div className='w-full flex gap-4 items-center'>

        <button onClick={onToggle} className='h-10 w-10 p-2.5 hover:bg-blue-100 rounded-full'>
          <Text size={20} />
        </button>

        <div className='md:md:w-3/6'>
          <h1 className='text-xl font-bold text-slate-700'>{title}</h1>
        </div>

        <div className='w-[300px] md:md:w-3/6 flex items-center border-[1px] border-gray-200 rounded-md py2 px-3'>
            <button className='text-gray-300'><Search size={20} /></button>
            <input type='text' placeholder='Search here' className='w-full focus:outline-none focus:placeholder:text-transparent p-2' />
        </div>
        
      </div>
      <nav>
        <ul className='flex items-center gap-3'>
          <li className='bg-gray-100 p-2 rounded-lg text-gray-500'>
            <Link href="/" onClick={(e) => {
              e.preventDefault()
              setDarkMode(prevDarkMode => !prevDarkMode)
            }}>
              {darkMode ? <SunMoon size={20} /> :<MoonStar size={20} />}
            </Link>
          </li>
          <li className='bg-gray-100 p-2 rounded-lg text-gray-500'>
            <Link href="/">
              <MessageSquare size={20} />
            </Link>
          </li>
          <li className='bg-gray-100 p-2 rounded-lg text-gray-500'>
            <Link href="/">
              <BellRing size={20} />
            </Link>
          </li>
          <li className='bg-gray-100 p-2 rounded-lg text-gray-500'>
            <Link href="/">
              <Settings size={20} />
            </Link>
          </li>
          <li className='w-10 h-10 bg-gray-100 rounded-full text-gray-700 overflow-hidden border-[3px] border-gray-200'>
            <Link href="/dashboard/users">
              <Image src="/images/profile.png" width={50} height={50} alt='profile' className='object-cover' />
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  )
}

export default DashboardNavbar;