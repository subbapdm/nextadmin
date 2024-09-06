import { LayoutPanelLeft } from "lucide-react"
import Link from "next/link"


const Navbar = () => {
  return (
    <div className="bg-white py-2 px-3">
        <nav className="flex justify-between items-center">
            <Link href="/" className="flex items-center text-cyan-500 gap-2">
                <LayoutPanelLeft size={35}/>
                <span className="text-2xl font-bold">nextAdmin</span>
            </Link>

            <ul className="flex items-center gap-2">
                <li className="font-bold text-gray-500 py-2 px-3"><Link href="/">Home</Link></li>
                <li className="font-bold text-gray-500 py-2 px-3"><Link href="/">Products</Link></li>
                <li className="font-bold text-gray-500 py-2 px-3"><Link href="/">Categories</Link></li>
                <li className="font-bold text-gray-500 py-2 px-3"><Link href="/">Services</Link></li>

                <li className="font-bold text-gray-500 py-2 px-3"><Link href="/">Login</Link></li>
                <li className="font-bold text-gray-500 py-2 px-3"><Link href="/">Register</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar