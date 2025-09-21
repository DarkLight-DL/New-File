// import React, { useState } from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import styled from 'styled-components';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Box,
//   Stack
// } from '@mui/material';

// import MenuIcon from '@mui/icons-material/Menu';

// import NaveMenu from './NaveMenu';

// // Prevent passing 'active' to DOM elements
// const customShouldForwardProp = (prop) => prop !== 'active';

// // Styled Components
// const StyledLink = styled(Link).withConfig({ shouldForwardProp: customShouldForwardProp })`
//   text-decoration: none;
//   text-align: center;
//   font-size: 14px;
//   font-weight: 600;
//   color: ${(props) => (props.active ? 'black' : 'black')};
//   background-color: ${(props) => (props.active ? 'rgb(255, 254, 254)' : '')};
//   border: ${(props) => (props.active ? '1px solid rgb(147, 145, 145)' : '1px solid rgba(218, 216, 216, 0.41)')};
//   border-radius: 14px;
//   padding: 5px 17px 8px 17px;
//   transition: all 0.3s ease;
//   box-shadow: 3px 7px 10px 0px rgba(210, 212, 232, 0.6);

//   &:hover {
//     color: white;
//     font-weight: 600;
//     background-color: rgb(2, 63, 154);
//     box-shadow: 3px 7px 10px 0px rgba(54, 59, 115, 0.77);
//   }
// `;

// const StyledLinkContact = styled(StyledLink).withConfig({ shouldForwardProp: customShouldForwardProp })`
//   background-color: ${(props) => (props.active ? 'rgb(75, 70, 150)' : 'rgb(255, 123, 0)')};  
//   color:${(props) => (props.active ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)')};  

//   box-shadow: 3px 7px 10px 0px rgb(43, 39, 39);
//   &:hover {
//     background-color: rgb(2, 63, 154);
//     box-shadow: 3px 7px 10px 0px rgba(54, 59, 115, 0.77);
//     color: white;
//   }
// `;


// const Nave = () => {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();

//   const toggleDrawer = (openState) => {
//     setOpen(openState);
//   };

//   return (
//     <Box>

//       <AppBar
//         position="fixed"
//         elevation={0}
//         sx={{
//           top: 0,
//           bgcolor: 'rgba(255, 255, 255, 0)',
//           mb: '10px',
//         }}
//       >
//         <Toolbar>
//           <Link to={'./'} style={{ textDecoration: 'none', flexGrow: 1 }}>
//             <Typography
//               variant="h4"
//               sx={{
//                 ml: '5px',
//                 fontWeight: '500',
//                 fontFamily: 'fantasy',
//                 background: 'linear-gradient(90deg,rgba(255, 255, 255, 1) 100%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)',
//                 bgcolor: 'rgba(10, 10, 10, 0.83)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//               }}
//             >
//               Portfolio
//             </Typography>
//           </Link>


//           {/* Desktop Menu */}
//           <Stack
//             direction="row"
//             spacing={2}
//             sx={{
//               p: 1,
//               mr: '20px',
//               display: { xs: 'none', md: 'flex' },
//               border: '1.5px solid black',
//               borderRadius: '20px',
//             }}
//           >
// {/*             
//             <StyledLink to="/" active={location.pathname === '/'}>
//               Home
//             </StyledLink>
//             <StyledLink to="/about" active={location.pathname === '/about'}>
//               About
//             </StyledLink>
//             <StyledLink to="/project" active={location.pathname === '/project'}>
//               Project
//             </StyledLink>
//             <StyledLink to="/skills" active={location.pathname === '/skills'}>
//               Skills
//             </StyledLink>
//           </Stack>

//           <Box flexGrow={1} />

//           <Box sx={{ display: { xs: 'none', md: 'block' }, mb: 1 }}>
//             <StyledLinkContact
//               to="/contact"
//               active={location.pathname === '/contact'}
//             >
//               Contact Me
//             </StyledLinkContact>
//           </Box> */}

//              <StyledLink to='#home' active={location.pathname === '#home'}>
//                Home
//              </StyledLink>

//              <StyledLink to='#about' active={location.pathname === '#about'}>
//                about
//              </StyledLink>

//              <StyledLink to='#project' active={location.pathname === '#project'}>
//                project
//              </StyledLink>

//              <StyledLink to='#skills' active={location.pathname === '#skills'}>
//                skills
//              </StyledLink>
//            </Stack>

//            <Box flexGrow={1} />

//            <Box sx={{ display: { xs: 'none', md: 'block' }, mb: 1 }}>
//              <StyledLinkContact to="/#contact" active={location.pathname === '#contact'}>
//                Contact Me
//              </StyledLinkContact>
//            </Box>

//           {/* Mobile Menu Button */}
//           <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               onClick={() => toggleDrawer(true)}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>


//       {/* Drawer for Mobile */}

//       <NaveMenu toggleDrawer={toggleDrawer} open={open} location={location} />





//     </Box>
//   );
// };

// export default Nave;




































// import React, { useState, useContext, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Box,
//   Stack,
//   Container,
//   Link as MUILink,
// } from '@mui/material';

// import MenuIcon from '@mui/icons-material/Menu';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';

// import NaveMenu from './NaveMenu';
// import ThemeContext from '../SetOne/ThemeContext';

// const Nave = () => {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();
//   const { modeColor, handleColor } = useContext(ThemeContext);

//   // New: Track clicked hash
//   const [clickedHash, setClickedHash] = useState(location.hash || '#home');

//   // Update state if user directly navigates or uses back/forward
//   useEffect(() => {
//     if (location.hash) {
//       setClickedHash(location.hash);
//     }
//   }, [location.hash]);

//   // Determine if a link is active
//   const isActiveHash = (hash) => hash === clickedHash;

//   // Styling for nav links
//   const getNavLinkStyle = (active) => ({
//     textDecoration: 'none',
//     color: active ? '#FF6B00' : modeColor ? '#fff' : '#000',
//     fontWeight: 500,
//     marginRight: '12px',
//     position: 'relative',
//     padding: '4px',
//     transition: 'color 0.3s',
//     '&::after': {
//       content: '""',
//       position: 'absolute',
//       bottom: '-3px',
//       left: 0,
//       width: active ? '100%' : '0',
//       height: '2px',
//       backgroundColor: '#FF6B00',
//       transition: 'width 0.5s ease-in-out',
//     },
//     '&:hover': {
//       color: '#FF6B00',
//       '&::after': {
//         width: '100%',
//       },
//     },
//   });

//   // Background styling for nav bar
//   const navBackground = {
//     background: 'rgba(255, 255, 255, 0.15)',
//     color: modeColor ? 'rgba(20, 20, 20, 0.25)' : 'rgba(255, 255, 255, 0.15)',
//     padding: '6px 16px',
//     borderRadius: '30px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: '8px auto',
//     width: { xs: '60%', sm: '60%', md: '70%', lg: '70%' },
//   };

//   return (
//     <AppBar position="fixed" elevation={0} sx={{ p: 0, bgcolor: 'transparent', top: 2 }}>
//       <Container p={0}>
//         <Toolbar sx={{ p: 0, justifyContent: 'center', alignItems: 'center' }}>
//           {/* Mobile Nav Button */}
//           <Box sx={{ ml: 'auto', display: { xs: 'flex', sm: 'none' } }}>
//             <IconButton
//               edge="start"
//               onClick={() => setOpen(true)}
//               sx={{ bgcolor: '#FF6B00', color: 'white', height: '25px', width: '25px' }}
//             >
//               <MenuIcon sx={{ height: '20px', width: '20px' }} />
//             </IconButton>
//           </Box>

//           {/* Brand (Large screens) */}
//           <MUILink
//             component={Link}
//             smooth
//             to="/#home"
//             onClick={() => setClickedHash('#home')}
//             sx={{
//               display: { xs: 'none', sm: 'flex' },
//               fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
//               fontSize: { xs: '20px', sm: '16px', md: '20px', lg: '20px' },
//               fontWeight: 'bold',
//               color: modeColor ? 'white' : 'black',
//               textDecoration: 'none',
//             }}
//           >
//             Asik Ahamed<span style={{ color: 'red', marginLeft: '4px' }}>•</span>
//           </MUILink>

//           {/* Nav Links */}
//           <Box sx={navBackground}>
//             <Stack direction="row" spacing={2} alignItems="center">
//               {/* Brand (Mobile) */}
//               <MUILink
//                 component={Link}
//                 smooth
//                 to="/#home"
//                 onClick={() => setClickedHash('#home')}
//                 sx={{
//                   display: { xs: 'flex', sm: 'none' },
//                   fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
//                   fontSize: { xs: '15px', sm: '17px', md: '18px', lg: '20px' },
//                   fontWeight: 'bold',
//                   color: modeColor ? 'white' : 'black',
//                   textDecoration: 'none',
//                 }}
//               >
//                 Asik Ahamed<span style={{ color: 'red', marginLeft: '4px' }}>•</span>
//               </MUILink>

//               {/* Navigation Links */}
//               <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
//                 {/* {['home', 'project', 'about', 'skills', 'contact'].map((section) => ( */}
//                   <MUILink
//                     component={Link}
//                     smooth
//                     to={`/#home`}
//                     onClick={() => setClickedHash(`#home`)}
//                     sx={getNavLinkStyle(isActiveHash(`#home`))}
//                   >
//                     {/* {section.charAt(0).toUpperCase() + section.slice(1)} */}
//                     Home
//                   </MUILink>


//                   <MUILink
//                     component={Link}
//                     smooth
//                     to={`/#project`}
//                     onClick={() => setClickedHash(`#project`)}
//                     sx={getNavLinkStyle(isActiveHash(`#project`))}
//                   >
//                     project
//                   </MUILink>

//                                     <MUILink
//                     component={Link}
//                     smooth
//                     to={`/#about`}
//                     onClick={() => setClickedHash(`#about`)}
//                     sx={getNavLinkStyle(isActiveHash(`#about`))}
//                   >
//                     About
//                   </MUILink>


//                                     <MUILink
//                     component={Link}
//                     smooth
//                     to={`/#skills`}
//                     onClick={() => setClickedHash(`#skills`)}
//                     sx={getNavLinkStyle(isActiveHash(`#skills`))}
//                   >
//                     Skills
//                   </MUILink>


//                                                       <MUILink
//                     component={Link}
//                     smooth
//                     to={`/#contact`}
//                     onClick={() => setClickedHash(`#contact`)}
//                     sx={getNavLinkStyle(isActiveHash(`#contact`))}
//                   >
//                     Contact
//                   </MUILink>




//               </Box>
//             </Stack>
//           </Box>

//           {/* Dark/Light Mode Toggle */}
//           <Box sx={{ mr: 'auto' }}>
//             <IconButton
//               onClick={handleColor}
//               sx={{ bgcolor: '#FF6B00', color: 'white', height: '25px', width: '25px' }}
//             >
//               {modeColor ? (
//                 <LightModeIcon sx={{ height: '15px', width: '15px' }} />
//               ) : (
//                 <DarkModeIcon sx={{ height: '15px', width: '15px' }} />
//               )}
//             </IconButton>
//           </Box>
//         </Toolbar>

//         {/* Mobile Drawer */}
//         <NaveMenu toggleDrawer={setOpen} open={open} location={location} />
//       </Container>
//     </AppBar>
//   );
// };

// export default Nave;






















import React, { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Stack,
  Container,
  // Switch, 
  // FormControlLabel,
  Link as MUILink,
  Tooltip,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import NaveMenu from './NaveMenu';
import ThemeContext from '../SetOne/ThemeContext';

const Nave = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { modeColor, handleColor } = useContext(ThemeContext);

  const [clickedHash, setClickedHash] = useState(location.hash || '#home');
  const [isClicking, setIsClicking] = useState(false);

  // Handle hash from location (e.g., if user refreshes or uses back/forward buttons)
  useEffect(() => {
    if (location.hash) {
      setClickedHash(location.hash);
    }
  }, [location.hash]);

  // Block scroll updates right after clicking
  useEffect(() => {
    if (isClicking) {
      const timer = setTimeout(() => setIsClicking(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isClicking]);

  // Update clickedHash based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isClicking) return;

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercent = (scrollTop / docHeight) * 100;

      let newHash = '#home';
      if (scrolledPercent >= 0 && scrolledPercent < 12) newHash = '#home';
      else if (scrolledPercent >= 12 && scrolledPercent < 39) newHash = '#project';
      else if (scrolledPercent >= 39 && scrolledPercent < 60) newHash = '#about';
      else if (scrolledPercent >= 60 && scrolledPercent < 81) newHash = '#skills';
      else if (scrolledPercent >= 81) newHash = '#contact';

      if (clickedHash !== newHash) {
        setClickedHash(newHash);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [clickedHash, isClicking]);

  const isActiveHash = (hash) => hash === clickedHash;

  // const getNavLinkStyle = (active) => ({
  //   textDecoration: 'none',
  //   color: active ? 'rgb(2, 63, 154)' : modeColor ? '#fff' : '#000',
  //   fontWeight: 500,
  //   marginRight: '12px',
  //   position: 'relative',
  //   padding: '4px',
  //   transition: 'color 0.3s',
  //   '&::after': {
  //     content: '""',
  //     position: 'absolute',
  //     bottom: '-3px',
  //     left: 0,
  //     width: active ? '100%' : '0',
  //     height: '2px',
  //     backgroundColor: ' rgb(2, 63, 154)',
  //     transition: 'width 0.5s ease-in-out',
  //   },
  //   '&:hover': {
  //     color: ' rgb(2, 63, 154)',
  //     '&::after': {
  //       width: '100%',
  //     },
  //   },
  // });


  // const navBackground = {
  //   background: 'rgba(255, 255, 255, 0.15)',
  //   color: modeColor ? 'rgba(20, 20, 20, 0.25)' : 'rgba(255, 255, 255, 0.15)',
  //   padding: '6px 16px',
  //   borderRadius: '30px',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   margin: '8px auto',
  //   width: { xs: '60%', sm: '60%', md: '70%', lg: '70%' },
  // };







  const getNavLinkStyle = (active) => ({
    textDecoration: 'none',
    color: active
      ? modeColor
        ? ' rgb(2, 63, 154)'      // orange active color for dark mode
        : ' rgb(2, 63, 154)'      // lavender active color for light mode
      : modeColor
        ? '#eeeeee'        // light gray for dark mode text
        : '#1a1a1a',       // dark gray for light mode text
    fontWeight: 500,
    marginRight: '12px',
    position: 'relative',
    padding: '4px',
    transition: 'color 0.3s',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-3px',
      left: 0,
      width: active ? '100%' : '0',
      height: '2px',
      backgroundColor: active
        ? (modeColor ? ' rgb(2, 63, 154)' : ' rgb(2, 63, 154)')  // orange or lavender underline
        : 'transparent',
      transition: 'width 0.5s ease-in-out',
    },
    '&:hover': {
      color: modeColor ? ' rgb(2, 63, 154)' : ' rgb(2, 63, 154)',  // softer orange or lavender on hover
      '&::after': {
        backgroundColor: modeColor ? ' rgb(2, 63, 154)' : ' rgb(2, 63, 154)',
      },
    },
  });

  const navBackground = {
    backgroundColor: modeColor
      ? 'rgba(0, 0, 0, 0.23)'    // dark semi-transparent background for dark mode
      : 'rgba(106, 123, 205, 0.1)', // soft lavender transparent for light mode
    color: modeColor ? '#bbbbbb' : '#555555',   // secondary text colors from palette
    backdropFilter: 'blur(2px)',
    WebkitBackdropFilter: 'blur(10px)',
    padding: '6px 10px',
    borderRadius: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '8px auto',
    // width: { xs: '60%', sm: '60%', md: '70%', lg: '70%' },
    width: 'fit-content',
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ p: 0, bgcolor: 'transparent', top: 2 }}>
      <Container p={0}>
        <Toolbar sx={{ p: 0, justifyItems: 'center', alignContent: 'center' }}>
          {/* Mobile Nav Button */}

          {/* <Box sx={{mr: 'auto', ml:'10px',  width: {xs:'40px',sm:'0px',md:'100px',lg:'100px'},  display: { xs: 'flex', sm: 'none' } }}>
<Tooltip title={open ? 'Close' : 'Menu'} placement="right" arrow>

            <IconButton
              edge="start"
              onClick={() => setOpen((prev) => !prev)}
              sx={{ bgcolor: '#E6E6FA ', color: 'black', height: '25px', width: '25px', '&:hover': { bgcolor: '#FF6B00' } }}
            >
              {open ? (
                <CloseIcon sx={{ height: '20px', width: '20px' }} />
              ) : (
                <MenuIcon sx={{ height: '20px', width: '20px' }} />
              )}
            </IconButton>
            </Tooltip>

          </Box> */}


          <Box
  sx={{
    mr: 'auto',
    ml: '10px',
    width: { xs: '40px', sm: '0px', md: '100px', lg: '100px' },
    display: { xs: 'flex', sm: 'none' },
  }}
>
  <Tooltip title={open ? 'Close' : 'Menu'} placement="left" arrow>
    <IconButton
      edge="start"
      onClick={() => setOpen((prev) => !prev)}
      sx={{
        
        bgcolor: '#E6E6FA',
        color: 'black',
        height: '25px',
        width: '25px',
        '&:hover': {
          bgcolor: '#FF6B00',
        },
      }}
    >
      {open ? (
        <CloseIcon sx={{ height: '20px', width: '20px' }} />
      ) : (
        <MenuIcon sx={{ height: '20px', width: '20px' }} />
      )}
    </IconButton>
  </Tooltip>
</Box>


          {/* Brand (Large screens) */}
          <MUILink
            component={Link}
            smooth
            to="/#home"
            onClick={() => {
              setClickedHash('#home');
              setIsClicking(true);
            }}
            sx={{
              mr: 'auto',
              display: { xs: 'none', sm: 'flex' },
              fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
              fontSize: { xs: '20px', sm: '16px', md: '20px', lg: '20px' },
              fontWeight: 'bold',
              color: modeColor ? 'white' : 'black',
              textDecoration: 'none',
            }}
          >
            Asik Ahamed<span style={{ color: 'red', marginLeft: '4px' }}>•</span>
          </MUILink>

          {/* Nav Links */}
          <Box sx={navBackground}>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
              {/* Brand (Mobile) */}
              <MUILink
                component={Link}
                smooth
                to="/#home"
                onClick={() => {
                  setClickedHash('#home');
                  setIsClicking(true);
                }}
                sx={{
                  display: { xs: 'flex', sm: 'none' },
                  textAlign:'center',
                  gap:'4px',
                  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                  fontSize: { xs: '15px', sm: '17px', md: '18px', lg: '20px' },
                  fontWeight: 'bold',
                  color: modeColor ? 'white' : 'black',
                  textDecoration: 'none',
                }}
              >
                Asik Ahamed<span style={{ color: 'red'}}>•</span>
              </MUILink>

              {/* Navigation Links */}
              <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                <MUILink
                  component={Link}
                  smooth
                  to={`/#home`}
                  onClick={() => setClickedHash(`#home`)}
                  sx={getNavLinkStyle(isActiveHash(`#home`))}
                >
                  {/* {section.charAt(0).toUpperCase() + section.slice(1)} */}
                  Home
                </MUILink>


                <MUILink
                  component={Link}
                  smooth
                  to={`/#project`}
                  onClick={() => setClickedHash(`#project`)}
                  sx={getNavLinkStyle(isActiveHash(`#project`))}
                >
                  project
                </MUILink>

                <MUILink
                  component={Link}
                  smooth
                  to={`/#about`}
                  onClick={() => setClickedHash(`#about`)}
                  sx={getNavLinkStyle(isActiveHash(`#about`))}
                >
                  About
                </MUILink>


                <MUILink
                  component={Link}
                  smooth
                  to={`/#skills`}
                  onClick={() => setClickedHash(`#skills`)}
                  sx={getNavLinkStyle(isActiveHash(`#skills`))}
                >
                  Skills
                </MUILink>


                {(() => {
                  const contactActive = isActiveHash('#contact');
                  return (
                    <MUILink
                      component={Link}
                      smooth
                      to="/#contact"
                      onClick={() => setClickedHash('#contact')}
                      sx={{
                        ...getNavLinkStyle(contactActive),

                        textAlign: 'center',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: modeColor ? 'rgba(255, 106, 0, 1)' : 'rgba(255, 106, 0, 1)',
                        bgcolor: modeColor ? 'rgba(255, 255, 255, 0.16)' : 'rgba(12, 214, 79, 0.16)',
                        backgroundColor: modeColor ? '' : '',


                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: '-3px',
                          left: 0,
                          width: contactActive ? '100%' : '0',
                          height: '2px',
                          backgroundColor: contactActive
                            ? (modeColor ? 'rgba(255, 106, 0, 1)' : 'rgba(255, 106, 0, 1)')
                            : 'transparent',
                          transition: 'width 0.5s ease-in-out',
                        },
                        '&:hover': {
                          color: modeColor ? ' rgb(2, 63, 154)' : ' rgb(2, 63, 154)',
                          '&::after': {
                            backgroundColor: modeColor ? ' rgb(2, 63, 154)' : ' rgb(2, 63, 154)',
                          },
                        },
                      }}
                    >
                      Contact
                    </MUILink>
                  );
                })()}





              </Box>
            </Stack>
          </Box>

          {/* Dark/Light Mode Toggle */}
          <Box sx={{ ml: 'auto', width: {xs:'50px',sm:'30px',md:'100px',lg:'100px'}, justifyItems: 'flex-end'}}>
            
            <Box
              onClick={handleColor}
              sx={{
                cursor: 'pointer',
                height: '15px',
                width: '30px',
                bgcolor: 'rgba(0, 0, 0, 0.39)',
                borderRadius: '50px',
                position: 'relative',
              }}
            >
                            <Tooltip title='Dark & Light Mode ' placement="right" arrow>

              <IconButton
                sx={{
                  // bgcolor: '#FF6B00',
                  bgcolor: '#E6E6FA',
                  color: 'black',
                  height: '25px',
                  width: '25px',
                  position: 'absolute',
                  top: '-5px',
                  left: -7,
                  transform: modeColor ? 'translateX(20px)' : 'translateX(0)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    bgcolor: '#e65c00',
                  },
                }}
              >
                {modeColor ? (
                  <DarkModeIcon sx={{ height: '15px', width: '15px' }} />
                ) : (
                  < LightModeIcon sx={{ height: '15px', width: '15px' }} />
                )}
              </IconButton>
              </Tooltip>
            </Box>
          </Box>





        </Toolbar>

        {/* Mobile Drawer */}
        <NaveMenu toggleDrawer={setOpen} open={open} location={location} />
      </Container >
    </AppBar >
  );
};

export default Nave;
