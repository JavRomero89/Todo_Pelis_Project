import React from 'react';

import NavBarStyle from "../utils/NavBarStyle.css?inline";

const Sidebar = () => {
    console.log(NavBarStyle);
    return (
        // <div className="bg-gray-800 text-white w-30 h-full fixed left-0 top-0 flex flex-col items-start p-6 space-y-4">
        //     {/* Logo */}
        //     <div className="flex items-center space-x-2">
        //         <img src="/path/to/logo.png" alt="Logo" className="w-10 h-10" />
        //         {/* <h1 className="text-xl font-bold">Todo Pelis</h1> */}
        //     </div>

        //     {/* Botones */}
        //     <LinksSidebar/>
            
            
        //     {/* Botón de Login */}
        //     <div className="mt-auto">
        //         <button className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-center">Login</button>
        //     </div>
        // </div>
        <>
        <div>
        <div className="h2" />
        <nav className="main-menu">
          <ul>
            <li>
              <a href="https://jbfarrow.com">
                <i className="fa fa-home fa-2x" />
                <span className="nav-text">
                  Community Dashboard
                </span>
              </a>
            </li>
            <li className="has-subnav">
              <a href="#">
                <i className="fa fa-globe fa-2x" />
                <span className="nav-text">
                  Global Surveyors
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
        </>
    );
};

export default Sidebar;
