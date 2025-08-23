"use client";

import CardDefault from "@/components/dashboard/cards/CardDefault";
import Table from "@/components/dashboard/table/Table";
import { products } from "@/data/data";
import { ChartSpline, Eye, ShoppingBag, Users } from "lucide-react";

import dynamic from "next/dynamic";
import Image from "next/image";

const Bar = dynamic(() => import("@/components/dashboard/charts/Bar"), {
  ssr: false,
});

const Pie = dynamic(() => import("@/components/dashboard/charts/Pie"), {
  ssr: false,
});

const Line = dynamic(() => import("@/components/dashboard/charts/Line"), {
  ssr: false,
});

const Area = dynamic(() => import("@/components/dashboard/charts/Area"), {
  ssr: false,
});

const Dashboard = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          <CardDefault
            title="Total customer"
            icon={Users}
            number="509600"
            percent="2.5"
            background="bg-gradient-to-br from-teal-500 to-teal-600"
          />
          <CardDefault
            title="Total revenue"
            icon={ChartSpline}
            number="96500"
            percent="2.5"
          />
          <CardDefault
            title="Total visitors"
            icon={Eye}
            number="596200"
            percent="2.5"
          />
          <CardDefault
            title="Total orders"
            icon={ShoppingBag}
            number="96300"
            percent="2.5"
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5">
          <div className="bg-white rounded-xl shadow-sm xl:col-span-2 2xl:col-span-1">
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                Products
              </h2>
              <p className="text-sm text-gray-500">
                Showing total visitors for the last 6 months
              </p>
            </div>

            <Table products={products} />
          </div>

          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                Pie Chart
              </h2>
              <p className="text-sm text-gray-500">
                Showing total visitors for the last 6 months
              </p>
            </div>
            <Bar width={100} height="100" />
          </div>

          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                Pie Chart
              </h2>
              <p className="text-sm text-gray-500">
                Showing total visitors for the last 6 months
              </p>
            </div>
            <Pie width={100} height="100" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        <div className="bg-white rounded-xl shadow-sm col-span-3">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Pie Chart
            </h2>
            <p className="text-sm text-gray-500">
              Showing total visitors for the last 6 months
            </p>
          </div>

          <Line width={100} height={400} />
        </div>
        <div className="bg-white rounded-xl shadow-sm col-span-2">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Pie Chart
            </h2>
            <p className="text-sm text-gray-500">
              Showing total visitors for the last 6 months
            </p>
          </div>
          <div className="px-5 pb-5">
            <div className="flex justify-beteween items-center gap-2 mb-3">
              <div className="w-[60px] h-[60px] relative overflow-hidden rounded-md">
                <Image
                  fill
                  alt="Listing"
                  src="/images/thumb-1.jpg"
                  className="object-cover h-full w-full transition"
                />
              </div>
              <div>
                <h2 className="text-sm text-gray-700 font-[600] mb-2">
                  Beautiful Day with Friends
                </h2>
                <p className="text-xs font-medium text-gray-400">
                  24 Oct, 2024
                </p>
              </div>
            </div>

            <div className="flex justify-beteween items-center gap-2 mb-3">
              <div className="w-[60px] h-[60px] relative overflow-hidden rounded-md">
                <Image
                  fill
                  alt="Listing"
                  src="/images/thumb-3.jpg"
                  className="object-cover h-full w-full transition"
                />
              </div>
              <div>
                <h2 className="text-sm text-gray-700 font-[600] mb-2">
                  Mountain Trekking Blogs
                </h2>
                <p className="text-xs font-medium text-gray-400">
                  24 Oct, 2024
                </p>
              </div>
            </div>

            <div className="flex justify-beteween items-center gap-2 mb-3">
              <div className="w-[60px] h-[60px] relative overflow-hidden rounded-md">
                <Image
                  fill
                  alt="Listing"
                  src="/images/thumb-2.jpg"
                  className="object-cover h-full w-full transition"
                />
              </div>
              <div>
                <h2 className="text-sm text-gray-700 font-[600] mb-2">
                  Session vs token based authentication
                </h2>
                <p className="text-xs font-medium text-gray-400">
                  24 Oct, 2024
                </p>
              </div>
            </div>

            <div className="flex justify-beteween items-center gap-2 mb-3">
              <div className="w-[60px] h-[60px] relative overflow-hidden rounded-md">
                <Image
                  fill
                  alt="Listing"
                  src="/images/thumb-2.jpg"
                  className="object-cover h-full w-full transition"
                />
              </div>
              <div>
                <h2 className="text-sm text-gray-700 font-[600] mb-2">
                  Session vs token based authentication
                </h2>
                <p className="text-xs font-medium text-gray-400">
                  24 Oct, 2024
                </p>
              </div>
            </div>

            <div className="flex justify-beteween items-center gap-2 mb-3">
              <div className="w-[60px] h-[60px] relative overflow-hidden rounded-md">
                <Image
                  fill
                  alt="Listing"
                  src="/images/thumb-3.jpg"
                  className="object-cover h-full w-full transition"
                />
              </div>
              <div>
                <h2 className="text-sm text-gray-700 font-[600] mb-2">
                  Mountain Trekking Blogs
                </h2>
                <p className="text-xs font-medium text-gray-400">
                  24 Oct, 2024
                </p>
              </div>
            </div>
            <div className="flex justify-beteween items-center gap-2 mb-3">
              <div className="w-[60px] h-[60px] relative overflow-hidden rounded-md">
                <Image
                  fill
                  alt="Listing"
                  src="/images/thumb-1.jpg"
                  className="object-cover h-full w-full transition"
                />
              </div>
              <div>
                <h2 className="text-sm text-gray-700 font-[600] mb-2">
                  Beautiful Day with Friends
                </h2>
                <p className="text-xs font-medium text-gray-400">
                  24 Oct, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* new div */}
    </div>
  );
};

export default Dashboard;
