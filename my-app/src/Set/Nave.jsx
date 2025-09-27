import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  // Drawer,
  Box,
  Stack
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import HomeIcon from '@mui/icons-material/Home';
// import InfoIcon from '@mui/icons-material/Info';
// import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
// import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import NaveMenu from './NaveMenu';

// Prevent passing 'active' to DOM elements
const customShouldForwardProp = (prop) => prop !== 'active';

// Styled Components
const StyledLink = styled(Link).withConfig({ shouldForwardProp: customShouldForwardProp })`
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.active ? 'black' : 'black')};
  background-color: ${(props) => (props.active ? 'rgb(255, 254, 254)' : '')};
  border: ${(props) => (props.active ? '1px solid rgb(147, 145, 145)' : '1px solid rgba(218, 216, 216, 0.41)')};
  border-radius: 14px;
  padding: 5px 17px 8px 17px;
  transition: all 0.3s ease;
  box-shadow: 3px 7px 10px 0px rgba(210, 212, 232, 0.6);

  &:hover {
    color: white;
    font-weight: 600;
    background-color: rgb(2, 63, 154);
    box-shadow: 3px 7px 10px 0px rgba(54, 59, 115, 0.77);
  }
`;

const StyledLinkContact = styled(StyledLink).withConfig({ shouldForwardProp: customShouldForwardProp })`
  background-color: ${(props) => (props.active ? 'rgb(75, 70, 150)' : 'rgb(255, 123, 0)')};  
  color:${(props) => (props.active ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)')};  
  
  box-shadow: 3px 7px 10px 0px rgb(43, 39, 39);
  &:hover {
    background-color: rgb(2, 63, 154);
    box-shadow: 3px 7px 10px 0px rgba(54, 59, 115, 0.77);
    color: white;
  }
`;


// const StyledDrawerButton = styled(Link).withConfig({ shouldForwardProp: customShouldForwardProp })`
//   display: flex;
//   align-items: center;
//   padding: 10px 16px;
//   text-decoration: none;
//   border-radius: 10px;
//   font-weight: ${(props) => (props.active ? '600' : '400')};
//   color: ${(props) => (props.active ? 'rgb(36, 137, 187)' : 'black')};

//   &:hover {
//     color: rgb(36, 137, 187);

//     svg {
//       color: rgb(36, 137, 187);
//     }
//   }

//   svg {
//     margin-right: 10px;
//     color: inherit;
//   }
// `;

const Nave = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (openState) => {
    setOpen(openState);
  };

  return (
    <Box>

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 0,
          bgcolor: 'rgba(255, 255, 255, 0)',
          mb: '10px',
        }}
      >
        <Toolbar>
          <Link to={'./'} style={{ textDecoration: 'none', flexGrow: 1 }}>
            <Typography
              variant="h4"
              sx={{
                ml: '5px',
                fontWeight: '500',
                fontFamily: 'fantasy',
                background: 'linear-gradient(90deg,rgba(255, 255, 255, 1) 100%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)',
                bgcolor: 'rgba(10, 10, 10, 0.83)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Portfolio
            </Typography>
          </Link>


          {/* Desktop Menu */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              p: 1,
              mr: '20px',
              display: { xs: 'none', md: 'flex' },
              border: '1.5px solid black',
              borderRadius: '20px',
            }}
          >
            <StyledLink to="/" active={location.pathname === '/'}>
              Home
            </StyledLink>
            <StyledLink to="/about" active={location.pathname === '/about'}>
              About
            </StyledLink>
            <StyledLink to="/project" active={location.pathname === '/project'}>
              Project
            </StyledLink>
            <StyledLink to="/skills" active={location.pathname === '/skills'}>
              Skills
            </StyledLink>
          </Stack>

          <Box flexGrow={1} />

          {/* Contact Link (Right Side) */}
          <Box sx={{ display: { xs: 'none', md: 'block' }, mb: 1 }}>
            <StyledLinkContact
              to="/contact"
              active={location.pathname === '/contact'}
            >
              Contact Me
            </StyledLinkContact>
          </Box>



          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={() => toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>


      {/* Drawer for Mobile */}

      <NaveMenu toggleDrawer={toggleDrawer} open={open} location={location} />


      {/* <Drawer
        anchor="right"
        open={open}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: 'rgb(220, 220, 222)',
            boxShadow: 'none'
          }
        }}
      >
        <Box
          sx={{ width: 185 }}
          role="presentation"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <CloseIcon
              sx={{ flexGrow: 1, height: '30px', cursor: 'pointer' }}
            />
            <Typography
              variant="h4"
              m="20px"
              textAlign="center"
              sx={{ flexGrow: 1, fontFamily: 'fantasy' }}
            >
              Menu
            </Typography>
          </Box>

          <Stack spacing={1.5} mt={2} pl={1}>
            <StyledDrawerButton to="/" active={location.pathname === '/'}>
              <HomeIcon />
              Home
            </StyledDrawerButton>

            <StyledDrawerButton to="/about" active={location.pathname === '/about'}>
              <InfoIcon />
              About
            </StyledDrawerButton>

            <StyledDrawerButton to="/project" active={location.pathname === '/project'}>
              <ViewCarouselIcon />
              Project
            </StyledDrawerButton>

            <StyledDrawerButton to="/skills" active={location.pathname === '/skills'}>
              <CalendarViewDayIcon />
              Skills
            </StyledDrawerButton>

            <StyledDrawerButton to="/contact" active={location.pathname === '/contact'}>
              <CalendarViewDayIcon />
              Contact Me
            </StyledDrawerButton>
          </Stack>
        </Box>
      </Drawer> */}





    </Box>
  );
};

export default Nave;
