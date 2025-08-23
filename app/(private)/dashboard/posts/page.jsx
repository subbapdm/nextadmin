"use client"

import DynamicTable from '@/components/dashboard/table/DynamicTable';
import { blogPosts, users } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(blogPosts);
  }, []);

  const columns = [
        {
      key: "image",
      label: "Image",
      render: (product) => (
        <div className="p-4">
            <Image src={product.image} width={100} height={100} class="max-w-full max-h-full rounded-md" alt="Apple Watch" />
        </div>
      )
    },
    { 
      key: 'title', 
      label: 'Title',
      render: (post) => (
        <div className="flex flex-col">
            <strong className="text-gray-900">
                <Link href="#" className="text-base font-semibold hover:underline">
                    {post.title}
                </Link>
            </strong>
            <span className="font-normal text-gray-400">{post.author}</span>
        </div>
      )
    },
    { key: 'category', label: 'Category' },
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

export default Posts;