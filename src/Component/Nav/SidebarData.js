import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";

export const SidebarData= [
    {
        title: 'Home',
        path: '/chanyoungblog',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Movie',
        path: '/movie',
        icon: <RiIcons.RiMovie2Line/>,
        cName: 'nav-text'
    },
    {
        title: 'Map',
        path: '/map',
        icon: <BsIcons.BsMap/>,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/Login',
        icon: <RiIcons.RiLoginBoxLine />,
        cName: 'nav-text'
    },
    {
        title: 'Signup',
        path: '/signup',
        icon: <AiIcons.AiOutlineUserAdd/>,
        cName:'nav-text'
    }
    
]