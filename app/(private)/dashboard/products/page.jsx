"use client";

import Table from "@/components/dashboard/table/Table";
import { products } from "@/data/data";
import React from "react";

const page = () => {
  return (
    <div className="bg-white col-span-7 rounded-xl p-3">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">Statistics</h2>
        <p className="text-sm text-gray-500">
          Showing total visitors for the last 6 months
        </p>
      </div>
      <Table products={products} />
    </div>
  );
};

export default page;
