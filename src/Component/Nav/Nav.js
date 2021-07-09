import React, { useState } from 'react';
import * as BsIcons from "react-icons/bs";
//import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Nav.css';
import {IconContext} from 'react-icons'

function Nav() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
    <div className="nav">
      <Link to="#" className='menu-bars'>
        <BsIcons.BsReverseLayoutTextSidebarReverse onClick={showSidebar} />
      </Link>
      <p className="nav-name">-찬영-</p>
    </div>
    <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
      <ul className='nav-menu-items'onClick={showSidebar}>
        <li className ="navbar-toggle">
          <Link to="#" className='menu-bars'>
            <AiIcons.AiOutlineClose />
          </Link>

        </li>
          {SidebarData.map((item,index) =>{
            return(
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
      </ul>
    </nav>
    </IconContext.Provider>
      
    </>
  )
}

export default Nav;
