'use client'

import Table from '@/components/dashboard/table/Table'
import { products } from '@/data/data'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='bg-white col-span-7 rounded-xl p-3'>
          <div className='p-4'>
            <h2 className='text-xl font-bold mb-2'>Statistics</h2>
            <p className='text-sm text-gray-300'>Showing total visitors for the last 6 months</p>
          </div>
          <Table products={products} />
      </div>
    </div>
  )
}

export default page