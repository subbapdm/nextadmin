import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarItem = ({ title, path, icon: Icon }) => {
    const pathname = usePathname();

    return (
        <li key={title} className={`text-sm font-medium hover:bg-cyan-50 hover:text-cyan-600 my-3 ${pathname === path ? 'text-cyan-500 bg-cyan-50 border-r-[3px] border-cyan-500' : 'text-gray-500'}`}>
            <Link href={`${path}`} className='flex text-md gap-1 p-3'>
                <Icon size={20} /> 
                <span className='hidden lg:block'>{title}</span>
            </Link>
        </li>
    )
}

export default SidebarItem