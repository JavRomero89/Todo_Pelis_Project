import React from 'react';
import LinksSidebar from './LinksSIdebar';

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
       
        
   

        <LinksSidebar/>
      
      
    );
};

export default Sidebar;
