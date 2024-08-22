import { Dispatch, SetStateAction, useState } from 'react';
import BrandLogo from '../BrandLogo';
import './Sidebar.scss';
import { SidebarData } from './SidebarData';
import { NavLink } from 'react-router-dom';
import { PiCaretDownBold, PiCaretUpBold } from 'react-icons/pi';
import { NavListIcon } from '@/SVGs/CustomSVGs';

const Sidebar = ({
  toggleSideBar,
  setToggleSideBar,
}: {
  toggleSideBar: boolean;
  setToggleSideBar: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({});

  const handleDropdownToggle = (id: string) => {
    setIsOpen((prev) => ({ [id]: !prev[id] }));
  };

  return (
    <main className=' sidebarContainer'>
      <section className='mb-5 mt-3 flex gap-3 '>
        <button
          onClick={() => setToggleSideBar(!toggleSideBar)}
          className='flex-1'
        >
          <NavListIcon />
        </button>
        {toggleSideBar && (
          <div className='flex items-center'>
            <BrandLogo />
          </div>
        )}
      </section>
      <section className=' w-full mx-auto flex flex-col'>
        <ul className='flex flex-col gap-2'>
          {SidebarData.map(({ id, url, title, icon, dropdown }) => (
            <>
              {dropdown ? (
                <div key={id} className='flex flex-col w-full'>
                  <div
                    id={id}
                    onClick={() => handleDropdownToggle(id)}
                    className={
                      isOpen[id] && toggleSideBar
                        ? 'sidebarActive !w-full'
                        : !isOpen[id] && toggleSideBar
                        ? 'sidebarNotActive !w-full'
                        : isOpen[id]
                        ? 'sidebarActive'
                        : 'sidebarNotActive '
                    }
                  >
                    <hgroup className='flex gap-2 items-center justify-between'>
                      <div className='flex gap-2 items-center'>
                        <h4>{icon} </h4>
                        {toggleSideBar && <h4>{title}</h4>}
                      </div>
                      {isOpen[id] ? <PiCaretUpBold /> : <PiCaretDownBold />}
                    </hgroup>
                  </div>
                  {isOpen[id] && (
                    <div
                      key={id}
                      className='border-l-[1px] ml-4 pl-2 flex flex-col gap-4'
                    >
                      {dropdown.map((subTab) => (
                        <NavLink
                          key={subTab.id}
                          to={subTab.url}
                          className={({ isActive }) =>
                            isActive ? 'text-pryColor font-bold' : 'text-black'
                          }
                        >
                          {subTab.title}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={id}
                  to={url}
                  className={({ isActive }) =>
                    isActive && toggleSideBar
                      ? 'sidebarActive !w-full'
                      : !isActive && toggleSideBar
                      ? 'sidebarNotActive !w-full'
                      : isActive
                      ? 'sidebarActive'
                      : 'sidebarNotActive '
                  }
                >
                  <hgroup className=' flex gap-2 items-center '>
                    <h4>{icon} </h4>
                    {toggleSideBar && <h4>{title}</h4>}
                  </hgroup>
                </NavLink>
              )}
            </>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Sidebar;
