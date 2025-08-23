'use client'

import DynamicTable from '@/components/dashboard/table/DynamicTable'
import { products } from '@/data/data'
import { TrendingDown, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(products);
  }, []);

  const columns = [
    {
      key: 'title', 
      label: 'Product Name',
      render: (row) => (
        <div className="flex flex-col">
            <strong className="text-gray-900">
                <Link href="#" className="text-base font-semibold hover:underline">
                    {row.title}
                </Link>
            </strong>
            <span className="font-normal text-gray-400">{row.category.name}</span>
        </div>
      )
    },
    { key: 'price', label: 'Price'},
    { 
      key: 'Stock',
      label: 'stock',
      render: (value) => (
        <span className={`py-1 px-2 rounded-md text-[11px] border-[1px] ${value.stock <= 0 ? 'bg-red-100 border-red-200 text-red-500' : value.stock <= 5  ? 'text-yellow-400 border-yellow-500' : 'border-[1px] border-gray-200 text-gray-600'}`}>
          {value.stock <= 0 ? 'Out of stock' : value.stock <= 5 ? 'Limited' : 'In stock' }
        </span>
      )
    },
    {
      key: 'trend',
      label: 'Trend',
      render: (product) => {
        const isPositive = product.trend >= 0;
        const trendValue = Math.abs(product.trend);

        return (
          <div className="flex items-center text-xs gap-2">
            {isPositive ? (
              <>
                <TrendingUp size={10} className="text-emerald-500" />
                <span className="text-emerald-500">+{trendValue}%</span>
              </>
            ) : (
              <>
                <TrendingDown size={10} className="text-red-500" />
                <span className="text-red-500">-{trendValue}%</span>
              </>
            )}
          </div>
        )
      }
    },
    { key: 'createdAt', label: 'Created at'}
  ]

  return (
    <div>
      <div className='bg-white col-span-7 rounded-xl p-3'>
          <div className='p-4'>
            <h2 className='text-xl font-bold mb-2'>Statistics</h2>
            <p className='text-sm text-gray-300'>Showing total visitors for the last 6 months</p>
          </div>
          <DynamicTable columns={columns} data={data} />
      </div>
    </div>
  )
}

export default page