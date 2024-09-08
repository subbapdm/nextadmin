import Image from "next/image"
import Link from "next/link"


const Navbar = () => {
  return (
    <div className="bg-white py-3 px-5">
        <nav className="w-full flex mx-auto justify-between items-center px-8">
            <Link href="/" className="flex items-center text-cyan-500 gap-1">
              <Image src="/images/logo.png" width={150} height={100} alt="Logo" />
            </Link>

            <ul className="flex items-center gap-2 py-2">
                <li className="font-bold text-[15px] text-gray-600 hover:text-cyan-600 py-2 px-3"><Link href="/">Home</Link></li>
                <li className="font-bold text-[15px] text-gray-600 hover:text-cyan-600 py-2 px-3"><Link href="/">Products</Link></li>
                <li className="font-bold text-[15px] text-gray-600 hover:text-cyan-600 py-2 px-3"><Link href="/">Categories</Link></li>
                <li className="font-bold text-[15px] text-gray-600 hover:text-cyan-600 py-2 px-3"><Link href="/">Services</Link></li>
                <li className="font-bold text-[15px] text-gray-600 hover:text-cyan-600 py-2 px-3"><Link href="/dashboard">Dashboard</Link></li>

                <li className="font-bold text-[15px] text-gray-600 hover:text-cyan-600 py-2 px-3"><Link href="/login">Login</Link></li>
                <li className="font-medium text-[15px] text-white py-2 px-3 bg-cyan-500 hover:bg-cyan-400 rounded-md"><Link href="/register">Register</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar