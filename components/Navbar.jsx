import { LayoutPanelLeft } from "lucide-react"
import Link from "next/link"


const Navbar = () => {
  return (
    <div className="bg-white py-3 px-5">
        <nav className="w-full flex mx-auto justify-between items-center px-8">
            <Link href="/" className="flex items-center text-cyan-500 gap-1">
                <LayoutPanelLeft size={25} className="text-gray-500"/>
                <span className="text-2xl font-bold">next<span className="text-gray-400">admin</span></span>
            </Link>

            <ul className="flex items-center gap-2">
                <li className="font-medium text-[15px] text-gray-500 hover:text-cyan-600 py-2 px-3"><Link href="/">Home</Link></li>
                <li className="font-medium text-[15px] text-gray-500 hover:text-cyan-600 py-2 px-3"><Link href="/">Products</Link></li>
                <li className="font-medium text-[15px] text-gray-500 hover:text-cyan-600 py-2 px-3"><Link href="/">Categories</Link></li>
                <li className="font-medium text-[15px] text-gray-500 hover:text-cyan-600 py-2 px-3"><Link href="/">Services</Link></li>

                <li className="font-medium text-[15px] text-gray-500 hover:text-cyan-600 py-2 px-3"><Link href="/login">Login</Link></li>
                <li className="font-medium text-[15px] text-gray-500 hover:text-cyan-600 py-2 px-3"><Link href="/register">Register</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar