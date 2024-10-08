import React from 'react';
import './logout.css';
import { Link } from 'react-router-dom';
import { useAuthHook } from '../../Hooks/authHook';
import PopUp from '@/components/popUps/PopUp';
import { IModal } from '@/Interfaces/GlobalInterfaces';

const Logout: React.FC<IModal> = ({ id, close }) => {
  const { logoutUser } = useAuthHook();
  // const [updateLogoutTime] = useUpdateLogoutTimeMutation();

  const handleLogout = async () => {
    // await updateLogoutTime({ initialTime: Date.now() });
    logoutUser();
  };

  return (
    <div className='container-logout  '>
      <PopUp id={id}>
        <div className='logout  '>
          <h1>Log Out?</h1>
          <p>Are you sure you want to Log out of your account?</p>
          <div className='buttons'>
            <Link to='/' className='outline-dark' onClick={close}>
              Cancel
            </Link>
            <button className='main-btn log' onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </PopUp>
    </div>
  );
};

export default Logout;
