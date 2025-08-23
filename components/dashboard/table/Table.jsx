
import { Eye, Pencil, Trash, TrendingDown, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


const Table = ({ products }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemSelection = (productId) => {
    if(selectedItems.includes(productId)){
      setSelectedItems(selectedItems.filter(id => id !== productId));
    }else{
      setSelectedItems([...selectedItems, productId]);
    }
  }

  const handleDeleteSelected = () => {
    console.log('Deleting selected items:', selectedItems);
    setSelectedItems([]);
  };

  return (

    <div className="bg-white p-5 overflow-x-auto">
      {selectedItems.length > 0 && (
        <div className="flex justify-between items-center mb-4">
          <div className="text-gray-400">
            <p>{selectedItems.length} of {products.length} items selected</p>
          </div>
          <div className="flex items-center gap-2 text-red-500 font-semibold hover:bg-red-100 transition duration-300 cursor-pointer py-1 px-2 rounded-lg">
            <button className="text-lg" onClick={handleDeleteSelected}>
              <Trash/>
            </button>
            <span>Delete ({selectedItems.length})</span>
          </div>
        </div>
      )}

      <table className="w-full divide-y divide-gray-100">
        <thead className="bg-gray-50 text-md text-gray-500 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="w-4 p-3 text-sm font-semibold tracking-wide text-left">
              <input 
                type="checkbox" 
                checked={selectedItems.length === products.length}
                onChange={() => {
                  if(selectedItems.length === products.length){
                    setSelectedItems([]);
                  }else{
                    setSelectedItems(products.map(product => product.id));
                  }
                }}
                id="check-all" 
                className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer" 
              />
              <label htmlFor="check-all" className="sr-only">Checkbox</label>
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Product</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Price</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left hidden lg:table-cell">Stock</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Created at</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left hidden lg:table-cell">Sales</th>
            <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">Action</th>
          </tr>
        </thead>
        <tbody>

          {products.map((product, index) => (
            <tr className="bg-white hover:bg-gray-50" key={index}>
              <td className="p-3 text-md text-gray-400">
                <input 
                  type="checkbox"
                  checked={selectedItems.includes(product.id)}
                  onChange={() => handleItemSelection(product.id)} 
                  id="check-all" 
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500" 
                />
                <label htmlFor="check-all" className="sr-only">Checkbox</label>
              </td>
              <td className="p-3 text-sm text-gray-400">
                <div className="felx items-center flex-col gap-2">
                  <strong className="text-gray-700">
                    <Link href="" className="text-gray-700 hover:underline">
                      {product.title}
                    </Link>
                  </strong>
                  <span className="text-xs text-gray-400 block">{product.category.name}</span>
                </div>
              </td>
              <td className="p-3 text-sm text-gray-400">${product.price}</td>

              <td className="p-3 text-[12px] text-gray-400 hidden lg:table-cell">
                <span className={`py-1 px-2 font-medium rounded-md bg-opacity-50 ${product.stock <= 0 ? 'bg-gray-200 text-[11px]' : product.stock <= 5  ? 'text-gray-600' : 'border-[1px] border-gray-200 text-gray-600'}`}>{product.stock <= 0 ? 'Out of stock' : product.stock <= 5 ? 'Limited' : 'In stock'}</span>
              </td>
              
              <td className="p-3 text-sm text-gray-400">{product.createdAt}</td>
              <td className="p-3 text-xs text-gray-400 hidden lg:table-cell">
                {/* This is just a sample column to show the increase and decrease case */}
                {index % 3 == 0 ? (
                  <div className="flex items-center gap-2 text-emerald-400 font-medium">
                    <TrendingUp size={10} />
                    <span>2.5%</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-500 font-medium">
                    <TrendingDown size={10} />
                    <span>2.5%</span>
                  </div>
                )}
              </td>
              <td className="p-3 text-lg text-gray-400">
                <div className="flex items-center justify-center gap-3">
                  <Link href="#" className="p-1 border border-gray-300 rounded-md hover:border-gray-700">
                    <Eye size={15}/>
                  </Link>
                  <Link href="#" className="p-1 border border-gray-300 rounded-md hover:border-gray-700">
                    <Pencil size={15}/>
                  </Link>
                  <button className="p-1 border border-gray-300 rounded-md hover:border-gray-700">
                    <Trash size={15}/>
                  </button>
                </div>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>

  )
}

export default Table;