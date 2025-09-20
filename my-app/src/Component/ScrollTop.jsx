import React, { useEffect, useState } from 'react';
import { IconButton, Box } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollTop = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [scrollPercent, setScrollPercent] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const scrolled = (scrollTop / docHeight) * 100 ;

//       setIsVisible(scrollTop >= 10);
//       setScrollPercent(scrolled);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleClick = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   if (!isVisible) return null;




  const [Scroll, setScroll] = useState(false)
  const [scrollPercent, setScrollPercent] = useState(0)


  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (scrollTop / docHeight) * 100

      setScroll(scrollTop >= 10) // show after 
      setScrollPercent(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  
  return (
    <>
    {Scroll && (
    <Box
      onClick={handleScrollToTop}
      sx={{
          width: { xs: 30, sm: 35 },
          height: { xs: 30, sm: 35 },

        position: 'fixed',
        bottom: { xs: 12, sm: 20 },
        right: { xs: 12, sm: 20 },
        background: `conic-gradient( #1976d2 ${scrollPercent}%, #e0e0e0 ${scrollPercent+1}%)`,
        borderRadius: '50%',
        // zIndex: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'background 0.3s ease-in-out',
      }}
    >
      <IconButton
        sx={{
          width: { xs: 25, sm: 28 },
          height: { xs: 25, sm: 28 },
          backgroundColor: 'black',
          '&:hover': {
            backgroundColor: '#333',
          },
          color: 'white',
        }}
        aria-label="scroll to top"
      >
        <ArrowUpwardIcon sx={{ fontSize: { xs: 25, sm: 27 } }} />
      </IconButton>
    </Box>
)}
    </>
  );
};

export default ScrollTop;
