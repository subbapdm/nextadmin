'use client'

import Image from 'next/image';
import Link from 'next/link';
import {
  Calendar, 
  ChartBar, 
  ChartLine, 
  FileQuestion, 
  LayoutGrid, 
  Settings, 
  ShoppingBag, 
  StickyNote, 
  User, 
  Users, 
  Wallet
} from 'lucide-react';
import SidebarItem from './SidebarItem';

const menuItems = [
  {
      title: "Pages",
      list: [
          {
              title: "Dashboard",
              path: "/dashboard",
              icon: LayoutGrid
          },
          {
              title: "User",
              path: "/dashboard/users",
              icon: User
          },
          {
              title: "Products",
              path: "/dashboard/products",
              icon: ShoppingBag
          },
          {
              title: "Posts",
              path: "/dashboard/posts",
              icon: StickyNote
          },
          {
              title: "Transactions",
              path: "/dashboard/transactions",
              icon: Wallet
          }
      ],
  },
  {
      title: "Analytics",
      list: [
          {
              title: "Revenue",
              path: "/dashboard/revenue",
              icon: ChartLine
          },
          {
              title: "Report",
              path: "/dashboard/reports",
              icon: ChartBar
          },
          {
              title: "Team",
              path: "/dashboard/teams",
              icon: Users
          }
      ],
  },
  {
      title: "User",
      list: [
          {
              title: "Settings",
              path: "/dashboard/settings",
              icon: Settings
          },
          {
              title: "Calender",
              path: "/dashboard/calender",
              icon: Calendar
          },
          {
              title: "Help",
              path: "/dashboard/help",
              icon: FileQuestion
          }
      ]
  }
];

const Sidebar = () => {

  return (
    <aside className='bg-white h-screen shadow-sm'>
      <div className='p-4 hidden lg:block'>
        <Link href="/dashboard">
          <Image src="/images/logo.png" width={150} height={100} alt='Logo' priority />
          <span className='text-xs font-medium text-gray-400'>NextJs admin dashboard</span>
        </Link>
      </div>

      <nav className='py-4'>
        <ul>

          {menuItems.map((cat) => (
            <li key={cat.title}>
              <span className='hidden lg:block uppercase text-sm text-gray-400 ml-2'>{cat.title}</span>
              <ul className=''>
                {cat.list.map((item) => (
                  <SidebarItem key={item.path} title={item.title} path={item.path} icon={item.icon}/>
                ))}
              </ul>
            </li>
          ))}
         
        </ul>
        <form className='px-2'>
          <button className="flex gap-2 items-center justify-between text-white font-medium py-3 px-2 md:px-4 my-3 bg-cyan-500 rounded-md md:w-full w-max">
              <span className="hidden lg:block">Logout</span>
              <User size={20} />
          </button>
        </form>
      </nav>
    </aside>
  )
}

export default Sidebar;