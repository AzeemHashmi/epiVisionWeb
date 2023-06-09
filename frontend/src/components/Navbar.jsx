import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
// import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { logout,getProfile } from '../actions/auth';

import avatar from "../Images/avatar.jpg";
import { Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <div content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </div>
);

const Navbar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const profileData = useSelector(auth=>auth?.auth?.profileData)


  console.log(profileData)

  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();



  const logoutHandler = () =>{
    dispatch(logout(navigate))
  }


  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);



  useEffect(() => {
    dispatch(getProfile())
  }, [])
  

  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  
  return (
    // p-2 md:mx-6 relative
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative" style={{width:'100%'}}>

    <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
    <div className="flex">
  
      {/* <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} /> */}
      <div content="Profile" position="BottomCenter">
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick('userProfile')}
        >
          {/* <img
            className="rounded-full w-8 h-8"
            src={avatar}
            alt="user-profile"
          /> */}
          <p>
            <span className="text-gray-400 font-bold ml-1 text-14">
              {profileData?.name?.toUpperCase()}
            </span>

            <span>
              <button style={{backgroundColor: "#d7d7d7", padding: "5px",  borderRadius: "10px", marginLeft: "5px"}} onClick={logoutHandler}>Logout</button>
            </span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
      </div>

      {/* {isClicked.notification && (<Notification />)} */}
      {/* {isClicked.userProfile && (<UserProfile />)}s */}
    </div>
  </div>
  )
}

export default Navbar;