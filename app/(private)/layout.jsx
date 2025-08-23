import DashboardNavbar from '@/components/dashboard/navbar/Navbar';
import Sidebar from '@/components/dashboard/sidebar/Sidebar';

const DashboardLayout = ({ children }) => {

  return (
    <div className="flex justify-between min-h-screen relative">

      <div className='bg-white w-max lg:w-80'>
          <Sidebar/>
      </div>

      <div className='w-full flex flex-col gap-5 p-5'>
        <DashboardNavbar/>
        <main>
          {children}
        </main>
      </div>

    </div>
  )
}

export default DashboardLayout;