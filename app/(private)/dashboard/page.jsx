'use client'

import CardDefault from '@/components/dashboard/cards/CardDefault';
import { ChartSpline, Eye, ShoppingBag, Users } from 'lucide-react';

import dynamic from 'next/dynamic';

const Bar = dynamic(() => import('@/components/dashboard/charts/Bar'), {
    ssr: false
});

const Pie = dynamic(() => import('@/components/dashboard/charts/Pie'), {
  ssr: false
});

const Line = dynamic(() => import('@/components/dashboard/charts/Line'), {
  ssr: false
});

const Area = dynamic(() => import('@/components/dashboard/charts/Area'), {
  ssr: false
});

const Dashboard = () => {
  return (
    <div className='w-full flex flex-col gap-5'>

      <div className='grid grid-cols-10 gap-5'>

        <div className='col-span-7 rounded-xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
            <CardDefault title="Total customer" Icon={Users} number="509600" percent="2.5" background="#0891B2" />
            <CardDefault title="Total revenue" Icon={ChartSpline} number="96500" percent="2.5" chart={ <Line width={100} height={100} /> }/>
            <CardDefault title="Total visitors" Icon={Eye} number="596200" percent="2.5" chart={ <Line width={100} height={100} /> }/>
            <CardDefault title="Total orders" Icon={ShoppingBag} number="96300" percent="2.5" chart={ <Line width={100} height={100} /> }/>
          </div>

          <div className='bg-white col-span-5 rounded-xl mt-5'>
            <div className='p-4'>
              <h2 className='text-xl font-bold mb-2'>Pie Chart</h2>
              <p className='text-sm text-gray-300'>Showing total visitors for the last 6 months</p>
            </div>
            <Bar width={100} height={400} />
          </div>

          <div className='grid grid-cols-2 gap-5 mt-5'>

            <div className='bg-white rounded-xl'>
              <div className='p-4'>
                <h2 className='text-xl font-bold mb-2'>Statistics</h2>
                <p className='text-sm text-gray-300'>Showing total visitors for the last 6 months</p>
              </div>

              
              <Area width={100} height={400} />
            </div>

            <div className='bg-white rounded-xl'>
              <div className='p-4'>
                <h2 className='text-xl font-bold mb-2'>Pie Chart</h2>
                <p className='text-sm text-gray-300'>Showing total visitors for the last 6 months</p>
              </div>

              <Line width={100} height={400} />
            </div>

          </div>

        </div>

        <div className='col-span-3 rounded-xl'>

          <div className='bg-white col-span-3 rounded-xl'>
            
          </div>
          <div className='bg-white col-span-3 rounded-xl'>
            <div className='p-4'>
              <h2 className='text-xl font-bold mb-2'>Pie Chart</h2>
              <p className='text-sm text-gray-300'>Showing total visitors for the last 6 months</p>
            </div>
            <Pie width={100} height={400} />

          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard