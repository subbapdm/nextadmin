import DashboardNavbar from '@/components/dashboard/navbar/Navbar';
import Sidebar from '@/components/dashboard/sidebar/Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className='flex gap-6'>
        <Sidebar />
        <div className='w-full flex flex-col gap-6 mt-6'>
          <DashboardNavbar/>
          <main className='bg-white p-5'>
            {children}
          </main>
        </div>
    </div>
  )
}

export default DashboardLayout;