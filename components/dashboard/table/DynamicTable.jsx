"use client"

import { Check, Eye, Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { useState } from "react"

const DynamicTable = ({ columns, data }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const handleItemSelection = (dataId) => {
        if(selectedItems.includes(dataId)){
            setSelectedItems(selectedItems.filter(id => id !== dataId));
        } else {
            setSelectedItems([...selectedItems, dataId ]);
        }
    }

    // Pagination
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const paginatedData = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );


    const handleDeleteSelected = () => {
        console.log('Deleting selected items:', selectedItems);
        setSelectedItems([]);
    }

    return (
        <div className="bg-white p-5 overflow-x-auto">

            {selectedItems.length > 0 && (
                <div className="flex justify-between items-center mb-4">
                    <div className="text-[13px] text-gray-500">
                        <p>{selectedItems.length} of {data.length} items selected</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-red-500 font-semibold hover:bg-red-100 transition duration-300 cursor-pointer py-1 px-2 rounded-lg">
                        <button onClick={handleDeleteSelected}>
                            <Trash size={17} />
                        </button>
                        <span>Delete ({selectedItems.length})</span>
                    </div>
                </div>
            )}
            
            <table className="w-full devide-y devide-gray-100">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="w-4 p-3 text-sm font-semibold tracking-wide text-left">

                            <label className="flex items-center cursor-pointer relative" htmlFor="check-all">
                                <input 
                                    type="checkbox" 
                                    checked={selectedItems.length === data.length} 
                                    onChange={() => {
                                        if(selectedItems.length === data.length){
                                            setSelectedItems([]);
                                        } else {
                                            setSelectedItems(data.map( item => item.id ));
                                        }
                                    }} 
                                    id="check-all" 
                                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-blue-500 checked:border-blue-500" 
                                />
                                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <Check size={15} />
                                </span>
                            </label>
                            
                        </th>

                        {columns.map((column) => (
                            <th key={column.key} className="p-3 text-sm font-semibold tracking-wide text-left">
                                {column.label}
                            </th>
                        ))}

                        <th className="p-3 text-sm font-semibold tracking-wide text-left">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {paginatedData.map((row, rowIndex) => (
                        <tr key={row.id || rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="p-3 text-md text-gray-400">
                                
                                <label className="flex items-center cursor-pointer relative" htmlFor={`check-item-${rowIndex}`}>
                                    <input 
                                        type="checkbox"
                                        checked={selectedItems.includes(row.id)}
                                        onChange={() => handleItemSelection(row.id)}
                                        className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-blue-500 checked:border-blue-500"
                                        id={`check-item-${rowIndex}`} 
                                    />
                                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <Check size={15} />
                                    </span>
                                </label>
                                
                            </td>
                            
                            {columns.map((column) => (
                                <td key={column.key} className="p-3 text-sm text-gray-500">
                                    {column.render ? (
                                        column.render(column.key === 'status' ? row[column.key] : row)
                                    ) : (
                                        row[column.key]
                                    )}
                                </td>
                            ))}

                            {/* Action column */}
                            <td className="p-3 text-lg text-gray-400">
                                <div className="flex items-center gap-3">
                                    <Link href="#" className="p-1 border border-gray-300 rounded-md hover:border-green-500 hover:text-green-500">
                                        <Eye size={15} />
                                    </Link>
                                    <Link href="#" className="p-1 border border-gray-300 rounded-md hover:border-blue-500 hover:text-blue-500">
                                        <Pencil size={15} />
                                    </Link>
                                    <Link href="#" className="p-1 border border-gray-300 rounded-md hover:border-rose-500 hover:text-rose-500">
                                        <Trash size={15} />
                                    </Link>
                                </div>
                            </td>
                            
                        </tr>
                    ))}

                </tbody>
            </table>
            
            {totalPages > 1 && (
                <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-[13px] text-gray-500">
                        Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, data.length)} of {data.length} entries
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1 text-[13px] border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                                Previous
                            </button>

                            {[...Array(totalPages)].map((_, i) => {
                                const page = i + 1;

                                if(page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                                    return (
                                        <button 
                                            key={i}
                                            onClick={() => setCurrentPage(page)}
                                            className={`px-3 py-1 text-[13px] rounded-lg transition-colors ${currentPage === page ? 'bg-blue-500 text-white' : 'border border-gray-200 hover:bg-gray-50'}`}
                                        >
                                            {i}
                                        </button>
                                    )
                                } else if (page === currentPage -2 || page === currentPage + 2) {
                                    return <span key={page} className="px-2">...</span>;
                                }

                                return null;
                            })}

                            <button 
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="px-3 py-1 text-[13px] border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                                    Next
                            </button>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default DynamicTable