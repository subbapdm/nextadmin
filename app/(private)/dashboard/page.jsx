'use client'

import CardDefault from '@/components/dashboard/cards/CardDefault'
import { ChartSpline, Eye, ShoppingBag, Users } from 'lucide-react'

import dynamic from 'next/dynamic';

const Bar = dynamic(() => import('@/components/dashboard/charts/Bar'), {
    ssr: false
});

const Pie = dynamic(() => import('@/components/dashboard/charts/Pie'), {
  ssr: false
});

const Dashboard = () => {
  return (
    <div className='w-full flex flex-col gap-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        <CardDefault title="Total customer" Icon={Users} number="509600" percent="2.5" bg="#D0EFFF" color="#1A567E" />
        <CardDefault title="Total revenue" Icon={ChartSpline} number="96500" percent="2.5" bg="#FFF9C4" color="#B59B0B" />
        <CardDefault title="Total visitors" Icon={Eye} number="596200" percent="2.5" bg="#E6E6FA" color="#5A3E89" />
        <CardDefault title="Total orders" Icon={ShoppingBag} number="96300" percent="2.5" bg="#FAD4D4" color="#A24E4E" />
      </div>
        
      <div className='w-full grid grid-cols-10 gap-5'>
        <div className='bg-white col-span-7 rounded-xl p-3'>
          <div className='p-4'>
            <h2 className='text-xl font-bold'>Statistics</h2>
          </div>
          <Bar width={'100%'} height={400} />
        </div>
        <div className='bg-white col-span-3 rounded-xl'>
          <div className='p-4'>
            <h2 className='text-xl font-bold'>Statistics</h2>
          </div>
          <Pie width={'100%'} height={400} />
        </div>
      </div>

    </div>
  )
}

export default Dashboard