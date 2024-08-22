/* eslint @typescript-eslint/no-explicit-any: "off" */

import { ReactNode, useState } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import NavBar from '@/components/Header/NavBar';
// import { Navigate } from 'react-router-dom';

interface Layout {
  children: ReactNode;
}
const DashboardLayout: React.FC<Layout> = ({ children }) => {
  const [toggleSideBar, setToggleSideBar] = useState(true);
  // const { isLoggedIn } = useAppSelector(selectUserData);

  // if (!isLoggedIn) {
  //   return <Navigate to='/signin' replace />;
  // }

  // if (isLoggedIn && !checkOnboarded) {
  //   return <Navigate to='/onboarding' replace />;
  // }

  return (
    <main className='flex justify-between'>
      <section
        className={` ${
          toggleSideBar ? ' w-72' : 'w-[20%] md:w-[15%]'
        } min-h-screen border-r border-Grey5 bg-white p-1 transition-all duration-300 px-2 md:px-4`}
      >
        <Sidebar
          toggleSideBar={toggleSideBar}
          setToggleSideBar={setToggleSideBar}
        />
      </section>
      <aside className='flex-1 transition-all duration-300'>
        <NavBar />
        {children}
      </aside>
    </main>
  );
};

export default DashboardLayout;
