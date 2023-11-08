import React from 'react';
import { Link } from 'react-router-dom'


import "../utils/NavBarStyle.css";

const Sidebar = () => {

  const handleSidebarMouseEnter = () => {
    console.log('Mouse enter');
    setIsSidebarOpen(true);
  };
  
  const handleSidebarMouseLeave = () => {
    console.log('Mouse leave');
    setIsSidebarOpen(false);
  };
    
    return (
       
        
        <div className='fixed left-0 h-full '>
        <div className="h2" />
        <nav className="main-menu">
          <ul>
            <li>
              <a href="https://jbfarrow.com">
                <i className="fa fa-home fa-2x" />
                <span className="nav-text">
                <Link to={'/Home'}>Home</Link>
                </span>
              </a>
            </li>
            <li className="has-subnav">
              <a href="#">
                <i className="fa fa-globe fa-2x" />
                <span className="nav-text">
                <Link to={'/Movies'}>Movies</Link>
                </span>
              </a>
            </li>
            <li className="has-subnav">
              <a href="#">
                <i className="fa fa-comments fa-2x" />
                <span className="nav-text">
                  Group Hub Forums
                </span>
              </a>
            </li>
            <li className="has-subnav">
              <a href="#">
                <i className="fa fa-camera-retro fa-2x" />
                <span className="nav-text">
                  Survey Photos
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-film fa-2x" />
                <span className="nav-text">
                  Surveying Tutorials
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-book fa-2x" />
                <span className="nav-text">
                  Surveying Jobs
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-cogs fa-2x" />
                <span className="nav-text">
                  Tools &amp; Resources
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-map-marker fa-2x" />
                <span className="nav-text">
                  Member Map
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-info fa-2x" />
                <span className="nav-text">
                  Documentation
                </span>
              </a>
            </li>
          </ul>
          <ul className="logout">
            <li>
              <a href="#">
                <i className="fa fa-power-off fa-2x" />
                <span className="nav-text">
                  Logout
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      
    );
};

export default Sidebar;
