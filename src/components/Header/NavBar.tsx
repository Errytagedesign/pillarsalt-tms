import './Navbar.scss';

import userIcon from '@/assets/noAvatar.png';
import Modal from '../popUps/Modal';
import { useAppSelector } from '@/Redux/reduxHooks';
import { selectGlobal } from '@/Redux/Features/globalSlice';
import { FaChevronDown } from 'react-icons/fa';
import UserCard from './UserCard';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { NotifIcon } from '@/SVGs/CustomSVGs';

const NavBar = () => {
  const { handleShow } = useGlobalHooks();
  const toggle = useAppSelector(selectGlobal);

  return (
    <main className='navbar flex items-center '>
      <header className='  w-full flex container justify-between items-center'>
        <h2>Pillarsalt</h2>
        <div className='flex items-center gap-2 cursor-pointer'>
          <button
            type='button'
            onClick={() => handleShow('notif')}
            id='notif'
            className='notifs'
          >
            <NotifIcon />
            <small> </small>
          </button>
          <figure className='w-[40px] h-[40px] '>
            <img src={userIcon} alt='' />
          </figure>
          <FaChevronDown onClick={() => handleShow('user')} />
        </div>
      </header>

      {toggle['user'] && (
        <Modal id='user' className='userPopUp w-full md:w-6/12 lg:w-4/12 m-3'>
          <UserCard />
        </Modal>
      )}
    </main>
  );
};

export default NavBar;
