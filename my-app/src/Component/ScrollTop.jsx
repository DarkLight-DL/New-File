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

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${scrollPercent}%`,
          height: '5px',
          backgroundColor: '#FF6B00',
          zIndex: 21,
          overflow: 'hidden',
          transition: 'width 0.2s ease-out',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%', 
            background: `linear-gradient(
              90deg,
              hsla(0, 0%, 100%, 0.00) 30%,
              rgba(0, 0, 0, 0.78) 48%,
              rgba(255, 255, 255, 0) 50%
            )`,
            backgroundSize: '200% 100%',
            animation: 'glowMove 3s linear infinite',
            pointerEvents: 'none',
          },
          '@keyframes glowMove': {
            '0%': {
              transform: 'translateX(-100%)',
            },
            '100%': {
              transform: 'translateX(10%)',
            },
          },
        }}
      />
    </>
  );
};

export default ScrollTop;
