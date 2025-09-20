import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const ScrollTop = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    
  }, []);
  // console.log(scrollPercent);

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${scrollPercent}%`,
          height: '5px',
          backgroundColor: '#FF6B00',
          zIndex: 1200,
          transition: 'width 0.2s ease-out',
        }}
      />
    </>
  );
};

export default ScrollTop;
