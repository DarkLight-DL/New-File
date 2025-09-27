import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import {Box,Drawer,Stack,} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import CodeIcon from '@mui/icons-material/Code';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

import { styled } from '@mui/material/styles';
import ThemeContext from '../Component/ThemeContext';

const StyledDrawerButton = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'modeColor',})(({ active, modeColor }) => {

  return {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 8px',
    fontWeight: active ? '600' : '500',
    color: active ? modeColor ? '#000000ff' : '#ffffffff' : modeColor ? '#ffffffff' : '#1a1a1a',
    position: 'relative',
    textDecoration: 'none',
    textAlign: 'center',
    fontSize: '16px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',

    '& svg': {
      marginRight: '10px',
      fontSize: '22px',
      color: 'inherit',
    },

    '&::after': {
      content: '""',
      zIndex: -1,
      position: 'absolute',
      bottom: '0px',
      left: 0,
      height: '100%',
      width: active ? '120%' : '0',
      borderRadius: '10px',
      backgroundColor: active ? modeColor ? '#66aaff' : '#0056d2' : 'transparent',
      transition: 'width 0.5s ease-in-out',
    },

    '&:hover': {
      '&::after': {
        backgroundColor: modeColor ? '#66aaff' : '#0056d2',
        width: '120%',
      },
    },
  };
});

const NaveMenu = ({ toggleDrawer, open }) => {
  const location = useLocation();
  const { modeColor } = useContext(ThemeContext);

  const isActiveHash = (hash) =>
    location.pathname === '/' &&
    (location.hash === hash || (!location.hash && hash === '#home'));

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => toggleDrawer(false)}
      ModalProps={{
        BackdropProps: {
          sx: {
            backgroundColor: 'transparent',
            backdropFilter: 'none',
            WebkitBackdropFilter: 'none',
          },
        },
      }}
      PaperProps={{
        sx: {
          position: 'absolute',
          top: '60px',
          left: '20px',
              backgroundColor: modeColor
      ? 'rgba(0, 0, 0, 1)'    // dark semi-transparent background for dark mode
      : 'rgba(106, 123, 205, 0.81)', // soft lavender transparent for light mode
    color: modeColor ? '#000000ff' : '#ffffffff',   // secondary text colors from palette
    backdropFilter: 'blur(3px)',
    WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0px 4px 20px rgba(0,0,0,0.2)',
          height: 'fit-content',
          width: 'fit-content',
          m: 0,
          px: 1,
          borderRadius: '10px',
        },
      }}
    >
      <Box
        role="presentation"
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
        sx={{
          height: '100%',
          pl:1,
          pr:5,
          py:1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Stack spacing={1}>
          <StyledDrawerButton to="/#home" active={isActiveHash('#home')} modeColor={modeColor}>
            <HomeIcon />
            Home
          </StyledDrawerButton>

          <StyledDrawerButton to="/#about" active={isActiveHash('#about')} modeColor={modeColor}>
            <InfoIcon />
            About
          </StyledDrawerButton>

          <StyledDrawerButton to="/#project" active={isActiveHash('#project')} modeColor={modeColor}>
            <QueuePlayNextIcon />
            Project
          </StyledDrawerButton>

          <StyledDrawerButton to="/#skills" active={isActiveHash('#skills')} modeColor={modeColor}>
            <CodeIcon />
            Skills
          </StyledDrawerButton>

          <StyledDrawerButton to="/#contact" active={isActiveHash('#contact')} modeColor={modeColor}>
            <PermContactCalendarIcon />
            Contact
          </StyledDrawerButton>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default NaveMenu;
