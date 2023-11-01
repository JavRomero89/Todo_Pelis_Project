import React, { useState } from 'react';
import CarouselSection from '../components/CarouselSection';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarMouseEnter = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarMouseLeave = () => {
    setIsSidebarOpen(false);
  };

  const carouselStyle = {
    marginLeft: isSidebarOpen ? '50px' : '0', 
    transition: 'margin 0.5s', 
  };

  return (
    <div className="w-full">
      <div
        className="w-[60px]"
        onMouseEnter={handleSidebarMouseEnter}
        onMouseLeave={handleSidebarMouseLeave}
      >
        <Sidebar />
      </div>
      <div className="" style={carouselStyle}>
        <CarouselSection isSidebarOpen={isSidebarOpen} />
      </div>
    </div>
  );
};

export default Home;
