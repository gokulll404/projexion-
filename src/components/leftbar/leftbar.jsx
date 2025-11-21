import React, { useState } from "react";
import '../leftbar/leftbar.css'

import Dashicon from '../../assets/images/icons/dashicon.svg?react'
import Contenticon from '../../assets/images/icons/contenticon.svg'
import Settings from '../../assets/images/icons/settings.svg'
import Bell from '../../assets/images/icons/bellicon.svg'
import Avatar from '../../assets/images/icons/avatar.svg'
import Logo from '../../assets/images/logo2.svg'

const Leftbar = () => {

  const [active, setActive] = useState("dashboard");

  return (
    <div className='leftbar'>
      <div className="logo">
        <img src={Logo} className='logo-icon' />
      </div>

      <div className="menus">
        
        <div className="top-menu">
          <Dashicon
            className={`menu-icon ${active === "dashboard" ? "active" : ""}`}
            onClick={() => setActive("dashboard")}
          />

          <img
            src={Contenticon}
            className={`menu-icon ${active === "content" ? "active" : ""}`}
            onClick={() => setActive("content")}
          />

          <img
            src={Settings}
            className={`menu-icon ${active === "settings" ? "active" : ""}`}
            onClick={() => setActive("settings")}
          />
        </div>

        <div className="bottom-menu">
          <img
            src={Bell}
            className={`menu-icon ${active === "bell" ? "active" : ""}`}
            onClick={() => setActive("bell")}
          />

          <img
            src={Avatar}
            className={`menu-icon ${active === "avatar" ? "active" : ""}`}
            onClick={() => setActive("avatar")}
          />
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
