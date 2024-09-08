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
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();

  return (
    <aside className='bg-white w-80 h-screen border-r-[1px] border-slate-100'>
      <div className='p-4'>
        <Link href="/">
          <Image src="/images/logo.png" width={150} height={100} alt='Logo' />
          <span className='text-xs font-medium text-gray-500'>NextJs admin dashboard</span>
        </Link>
      </div>

      <nav>
        <ul>

          {menuItems.map((cat) => (
            <li key={cat.title}>
              <span className='text-gray-400 text-[14px] uppercase pl-3'>{cat.title}</span>
              <ul>
                {cat.list.map((item) => (
                  <li key={cat.title} className={`text-gray-600 font-medium hover:bg-cyan-50 hover:text-cyan-600 my-3 ${pathname === item.path ? 'text-cyan-600 bg-cyan-50 border-r-[3px] border-cyan-600' : ''}`}>
                    <Link href={`${item.path}`} className='flex text-md gap-1 p-3'>
                        <item.icon size={20} /> 
                        <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
         
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar;