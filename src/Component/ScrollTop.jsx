import React, { useContext, useMemo, useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import ThemeContext from '../Component/ThemeContext';

const ScrollTop = () => {
  const { modeColor } = useContext(ThemeContext);

  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Show button after scrolling 100px
  useEffect(() => {
    const handleScrollEvent = () => {
      setShowButton(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScrollEvent);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  const scrollButtonStyles = useMemo(() => ({
    m: 0,
    p: 1,
    minWidth: '0px',
    borderRadius: '50px',
    bgcolor: modeColor ? '#ffffffff' : 'rgb(0, 0, 2)',
    fontWeight: '700',
    position: 'fixed',
    bottom: 50,
    right: 20,
    color: modeColor ? '#000000ff' : '#ffffffff',
    boxShadow: modeColor
      ? '5px 5px 10px rgba(255, 255, 255, 0.54)'
      : '5px 5px 10px rgba(0, 0, 0, 0.66)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.10)',
      bgcolor: modeColor ? '#ffffffff' : 'rgba(0, 0, 0, 1)',
      boxShadow: modeColor
        ? '5px 5px 20px rgba(255, 255, 255, 1)'
        : '5px 5px 20px rgba(0, 0, 0, 1)',
    },
  }), [modeColor]);

  return (
    <>
      {showButton && (
        <Box>
          <Button
            variant="contained"
            onClick={handleScroll}
            sx={scrollButtonStyles}
          >
            <KeyboardDoubleArrowUpIcon sx={{ height: '25px', width: '25px'}} />
          </Button>
        </Box>
      )}
    </>
  );
};

export default ScrollTop;
