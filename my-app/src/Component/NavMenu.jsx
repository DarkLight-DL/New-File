import React, { useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Box, Stack } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import CodeIcon from '@mui/icons-material/Code';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

import { styled } from '@mui/material/styles';
import ThemeContext from '../Component/ThemeContext';

const StyledDrawerButton = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'modeColor',
})(({ active, modeColor }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '5px 8px',
  fontWeight: active ? 600 : 500,
  color: active
    ? (modeColor ? '#000000ff' : '#ffffffff')
    : modeColor
    ? '#ffffffff'
    : '#1a1a1a',
  position: 'relative',
  textDecoration: 'none',
  textAlign: 'center',
  fontSize: 16,
  borderRadius: 8,
  transition: 'all 0.3s ease',
  '& svg': {
    marginRight: 10,
    fontSize: 22,
    color: 'inherit',
  },
  '&::after': {
    content: '""',
    zIndex: -1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '100%',
    width: active ? '100%' : '0',
    borderRadius: 10,
    backgroundColor: active
      ? modeColor
        ? '#66aaff'
        : '#0056d2'
      : 'transparent',
    transition: 'width 0.5s ease-in-out',
  },
  '&:hover::after': {
    backgroundColor: modeColor ? '#66aaff' : '#0056d2',
    width: '100%',
  },
}));

// Smooth scroll function for HashLink
const smoothScroll = (el) => {
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const NaveMenu = ({ toggleDrawer, open, location }) => {
  const { modeColor } = useContext(ThemeContext);

  const isActiveHash = (hash) =>
    location.pathname === '/' &&
    (location.hash === hash || (!location.hash && hash === '#home'));

  const handleLinkClick = () => {
    if (toggleDrawer) toggleDrawer(false);
  };

  return (
    <>
      {open && (
        <Box
          onClick={() => toggleDrawer(false)}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            backdropFilter: 'blur(1px)',
            WebkitBackdropFilter: 'blur(1px)',
            zIndex: 9,
          }}
        />
      )}

      {/* ✅ Navigation Drawer Menu */}
      <Box
        sx={{
          position: 'fixed',
          top: 60,
          left: 10,
          width: '150px',
          maxWidth: 150,
          bgcolor: modeColor ? 'rgba(0,0,0,0.9)' : 'rgba(106, 123, 205, 0.85)',
          color: modeColor ? '#000' : '#fff',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          boxShadow: '0px 4px 20px rgba(0,0,0,0.25)',
          borderRadius: '12px',
          paddingY: 2,
          zIndex: 10,
          maxHeight: open ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease, opacity 0.3s ease',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          '@media (max-width:600px)': {
            maxWidth: '100%',
            paddingX: 2,
          },
        }}
      >
        <Stack spacing={1}>
          <StyledDrawerButton
            to="/#home"
            active={isActiveHash('#home')}
            modeColor={modeColor}
            onClick={handleLinkClick}
            aria-current={isActiveHash('#home') ? 'page' : undefined}
            scroll={smoothScroll}
          >
            <HomeIcon />
            Home
          </StyledDrawerButton>

          <StyledDrawerButton
            to="/#project"
            active={isActiveHash('#project')}
            modeColor={modeColor}
            onClick={handleLinkClick}
            aria-current={isActiveHash('#project') ? 'page' : undefined}
            scroll={smoothScroll}
          >
            <CodeIcon />
            Project
          </StyledDrawerButton>

          <StyledDrawerButton
            to="/#about"
            active={isActiveHash('#about')}
            modeColor={modeColor}
            onClick={handleLinkClick}
            aria-current={isActiveHash('#about') ? 'page' : undefined}
            scroll={smoothScroll}
          >
            <InfoIcon />
            About
          </StyledDrawerButton>

          <StyledDrawerButton
            to="/#skills"
            active={isActiveHash('#skills')}
            modeColor={modeColor}
            onClick={handleLinkClick}
            aria-current={isActiveHash('#skills') ? 'page' : undefined}
            scroll={smoothScroll}
          >
            <QueuePlayNextIcon />
            Skills
          </StyledDrawerButton>

          <StyledDrawerButton
            to="/#contact"
            active={isActiveHash('#contact')}
            modeColor={modeColor}
            onClick={handleLinkClick}
            aria-current={isActiveHash('#contact') ? 'page' : undefined}
            scroll={smoothScroll}
          >
            <PermContactCalendarIcon />
            Contact
          </StyledDrawerButton>
        </Stack>
      </Box>
    </>
  );
};

export default NaveMenu;
