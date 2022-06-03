import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Fill, RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../Context/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position  ="BottomCenter">
    <button type="button" onClick={customFunc} style={{ color }} className="relative text-xl rounded-full p-3 hover:bg-gray-50">
      <span style={{background: dotColor}} className="absolute inline-flex rounded-full h-3 w-3 top-1"/>{icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
    const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext()
    useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth)

      window.addEventListener("resize", handleResize)

      handleResize()

      return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
      screenSize <= 900 ? setActiveMenu(false) : setActiveMenu(true)
    }, [screenSize])
    return (
      <div className="flex justify-between p-2 md:mx-6 relative">
        <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color={currentColor} icon={<AiOutlineMenu/>}/>
        <div className="flex">
          <NavButton title="Cart" customFunc={() => handleClick("cart")} color={currentColor} icon={<FiShoppingCart/>}/>
          <NavButton title="Chat" dotColor="#03c9D7" customFunc={() => handleClick("chat")} color={currentColor} icon={<BsChatLeft/>}/>
          <NavButton title="notificaton" dotColor="#03c9D7" customFunc={() => handleClick("notificaton")} color={currentColor} icon={<RiNotification3Line/>}/>
          <TooltipComponent content="Profile" position="BottomCenter">
            <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-50 rounded-lg" onClick={() => handleClick("userProfile")}>
              <img src={avatar} className="rounded-full w-8 h-8" alt="profile" />
              <p>
                <span className="text-gray-400">Hi, </span>{" "}
                <span className="text-gray-400 font-bold ml-1">Micheal</span>
              </p>
              <MdKeyboardArrowDown className="text-gray-400"/>
            </div>
          </TooltipComponent>
          {isClicked.cart && <Cart/>}
          {isClicked.chat && <Chat/>}
          {isClicked.notificaton && <Notification/>}
          {isClicked.userProfile && <UserProfile/>}
        </div>
      </div>
    )
}

export default Navbar;