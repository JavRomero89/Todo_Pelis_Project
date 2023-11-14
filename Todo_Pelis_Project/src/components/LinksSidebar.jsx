import React from 'react'
import { Link } from 'react-router-dom'
import '../utils/NavBarStyle.css'
import { IconArrowLeft } from '@tabler/icons-react';

const LinksSidebar = (style) => {
  return (
    
    <div className='flex flex-col px-2 py-1 gap-7'>
                {/* <Link to={'/'}>Home</Link>
                <Link to={'/Movies'}>Movies</Link>
                <Link to={'/TVShows'}>TVShows</Link>
                <Link to={'/Documentales'}>Documentales</Link>
                <Link to={'/Contacto'}>Contacto</Link> */}

                <div className='fixed left-0 h-full '>
        <div className="h2" />
        <nav className="main-menu">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-home fa-2x" />
                <span className="nav-text">
                <Link to={'/'}>Home</Link>
                </span>
              </a>
            </li>
            <li className="has-subnav">
              <a href="#">
                <i className="fa fa-film fa-2x" />
                <span className="nav-text">
                <Link to={'/Movies'}>Movies</Link>
                </span>
              </a>
            </li>
            <li className="has-subnav">
              <a href="#">
                <i className="fa fa-comments fa-2x " />
                <span className="nav-text">
                <Link to={'/TVShows'}>TVShows</Link>
                </span>
              </a>
            </li>
            <li className="has-subnav">
              <a href="#">
                <i className="fa fa-camera-retro fa-2x" />
                <span className="nav-text">
                <Link to={'/Kids'}>Kids</Link>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-film fa-2x" />
                <span className="nav-text">
                <Link to={'/Contacto'}>Contacto</Link>
                </span>
              </a>
            </li>
            {/* 
             */}
          </ul>
          <ul className="logout">
            <li>
              <a href="#">
                <i className="fa fa-power-off fa-2x" />
                <span className="nav-text">
                  Login
                </span>
              </a>
            </li>
          </ul>
        </nav>
        </div>
           
    </div>
    
  );
};

export default LinksSidebar