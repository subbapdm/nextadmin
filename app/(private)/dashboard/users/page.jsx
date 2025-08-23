"use client"

import DynamicTable from '@/components/dashboard/table/DynamicTable';
import { users } from '@/data/data';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(users);
  }, []);

  const columns = [
    { 
      key: 'name', 
      label: 'Name',
      render: (row) => (
        <div className="flex flex-col">
            <strong className="text-gray-900">
                <Link href="#" className="text-base font-semibold hover:underline">
                    {row.name}
                </Link>
            </strong>
            <span className="font-normal text-gray-400">{row.email}</span>
        </div>
      )
    },
    { key: 'phone', label: 'Phone' },
    { key: 'role', label: 'Role' },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <span className={`py-1 px-2 rounded-md text-[11px] border-[1px] ${value === 'Active' ? 'bg-green-100 border-green-200 text-green-500' : 'border-gray-200 opacity-70'}`}>
          {value}
        </span>
      )
    },
    { key: 'createdAt', label: 'Created at'}
  ];

  return (
    <div>
      <div className='bg-white col-span-7 rounded-xl p-3'>
          <div className='p-4'>
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Statistics</h2>
            <p className="text-sm text-gray-500">Showing total visitors for the last 6 months</p>
          </div>
          <DynamicTable columns={columns} data={data} />
      </div>
    </div>
  )
}

export default Users;