import React from 'react'
import '../leftbar/leftbar.css'

// icons
import Logo from '../../assets/images/logo2.svg'
import Dashicon from '../../assets/images/icons/dashicon.svg?react'
import Contenticon from '../../assets/images/icons/contenticon.svg'
import Settings from '../../assets/images/icons/settings.svg'
import Bell from '../../assets/images/icons/bellicon.svg'
import Avatar from '../../assets/images/icons/avatar.svg'

const Leftbar = () => {
  return (
    <div className='leftbar'>
      <div className="logo">
        <img src={Logo} alt="" className='logo-icon' />
      </div>

      <div className="menus">
        <div className="top-menu">
          <Dashicon className="menu-icon dash-icon" />
          <br />
          <img src={Contenticon} alt="" className='menu-icon' />
          <br />
          <img src={Settings} alt="" className='menu-icon' />
        </div>

        <div className="bottom-menu">
          <img src={Bell} alt="" className='menu-icon' />
          <br />
          <img src={Avatar} alt="" className='menu-icon' />
        </div>
      </div>
    </div>
  )
}

export default Leftbar
