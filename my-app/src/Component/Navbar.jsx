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

import NavMenu from './NavMenu';
import ThemeContext from './ThemeContext';
const Navbar = () => {
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
            Asik Ahamed<span style={{ color: 'red', marginLeft: '4px',marginTop:'2px' }}>•</span>
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
                  textAlign: 'center',
                  gap: '4px',
                  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
                  fontSize: { xs: '15px', sm: '17px', md: '18px', lg: '20px' },
                  fontWeight: 'bold',
                  color: modeColor ? 'white' : 'black',
                  textDecoration: 'none',
                }}
              >
            Asik Ahamed<span style={{ color: 'red', marginTop:'2px' }}>•</span>
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
          <Box sx={{ ml: 'auto', width: { xs: '50px', sm: '30px', md: '110px', lg: '110px' }, justifyItems: 'flex-end' }}>

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
        <NavMenu toggleDrawer={setOpen} open={open} location={location} />
      </Container >
    </AppBar >
  );
};

export default Navbar;






























































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
//   // Switch, 
//   // FormControlLabel,
//   Link as MUILink,
//   Tooltip,
// } from '@mui/material';

// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// // import DarkModeIcon from '@mui/icons-material/DarkMode';
// // import LightModeIcon from '@mui/icons-material/LightMode';

// import NavMenu from './NavMenu';
// import ThemeContext from './ThemeContext';

// import ToggleSwitch from './ToggleSwitch';
// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();
//   const { modeColor, handleColor } = useContext(ThemeContext);

//   const [clickedHash, setClickedHash] = useState(location.hash || '#home');
//   const [isClicking, setIsClicking] = useState(false);

//   // Handle hash from location (e.g., if user refreshes or uses back/forward buttons)
//   useEffect(() => {
//     if (location.hash) {
//       setClickedHash(location.hash);
//     }
//   }, [location.hash]);

//   // Block scroll updates right after clicking
//   useEffect(() => {
//     if (isClicking) {
//       const timer = setTimeout(() => setIsClicking(false), 800);
//       return () => clearTimeout(timer);
//     }
//   }, [isClicking]);

//   // Update clickedHash based on scroll position
//   useEffect(() => {
//     const handleScroll = () => {
//       if (isClicking) return;

//       const scrollTop = window.scrollY;
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const scrolledPercent = (scrollTop / docHeight) * 100;

//       let newHash = '#home';
//       if (scrolledPercent >= 0 && scrolledPercent < 12) newHash = '#home';
//       else if (scrolledPercent >= 12 && scrolledPercent < 39) newHash = '#project';
//       else if (scrolledPercent >= 39 && scrolledPercent < 60) newHash = '#about';
//       else if (scrolledPercent >= 60 && scrolledPercent < 81) newHash = '#skills';
//       else if (scrolledPercent >= 81) newHash = '#contact';

//       if (clickedHash !== newHash) {
//         setClickedHash(newHash);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [clickedHash, isClicking]);

//   const isActiveHash = (hash) => hash === clickedHash;

//   const getNavLinkStyle = (active) => ({
//     textDecoration: 'none',
//     color: active
//       ? modeColor
//         ? ' rgb(2, 63, 154)'      // orange active color for dark mode
//         : ' rgb(2, 63, 154)'      // lavender active color for light mode
//       : modeColor
//         ? '#eeeeee'        // light gray for dark mode text
//         : '#1a1a1a',       // dark gray for light mode text
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
//       backgroundColor: active
//         ? (modeColor ? ' rgb(2, 63, 154)' : ' rgb(2, 63, 154)')  // orange or lavender underline
//         : 'transparent',
//       transition: 'width 0.5s ease-in-out',
//     },
//     '&:hover': {
//       color: modeColor ? ' rgb(2, 63, 154)' : ' rgb(2, 63, 154)',  // softer orange or lavender on hover
//       '&::after': {
//         backgroundColor: modeColor ? ' rgb(2, 63, 154)' : ' rgb(2, 63, 154)',
//       },
//     },
//   });

//   const navBackground = {
//     backgroundColor: modeColor
//       ? 'rgba(0, 0, 0, 0.23)'    // dark semi-transparent background for dark mode
//       : 'rgba(106, 123, 205, 0.1)', // soft lavender transparent for light mode
//     color: modeColor ? '#bbbbbb' : '#555555',   // secondary text colors from palette
//     backdropFilter: 'blur(2px)',
//     WebkitBackdropFilter: 'blur(10px)',
//     padding: '6px 10px',
//     borderRadius: '30px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: '8px auto',
//     // width: { xs: '60%', sm: '60%', md: '70%', lg: '70%' },
//     width: 'fit-content',
//   };

//   return (
//     <AppBar position="fixed" elevation={0} sx={{ p: 0, bgcolor: 'transparent', top: 2 }}>
//       <Container p={0}>
//         <Toolbar sx={{ p: 0, justifyItems: 'center', alignContent: 'center' }}>

//           {/* Mobile Nav Button */}
//           <Box
//             sx={{
//               mr: 'auto',
//               ml: '50px',
//               width: { xs: '40px', sm: '0px', md: '100px', lg: '100px' },
//               display: { xs: 'flex', sm: 'none' },
//             }}
//           >
//             <Tooltip title={open ? 'Close' : 'Menu'} placement="left" arrow>
//               <IconButton
//                 edge="start"
//                 onClick={() => setOpen((prev) => !prev)}
//                 sx={{

//                   bgcolor: '#E6E6FA',
//                   color: 'black',
//                   height: '25px',
//                   width: '25px',
//                   '&:hover': {
//                     bgcolor: '#FF6B00',
//                   },
//                 }}
//               >
//                 {open ? (
//                   <CloseIcon sx={{ height: '20px', width: '20px' }} />
//                 ) : (
//                   <MenuIcon sx={{ height: '20px', width: '20px' }} />
//                 )}
//               </IconButton>
//             </Tooltip>
//           </Box>


//           {/* Brand (Large screens) */}
//           <MUILink
//             component={Link}
//             smooth
//             to="/#home"
//             onClick={() => {
//               setClickedHash('#home');
//               setIsClicking(true);
//             }}
//             sx={{
//               mr: 'auto',
//               display: { xs: 'none', sm: 'flex' },
//               fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
//               fontSize: { xs: '20px', sm: '16px', md: '20px', lg: '20px' },
//               fontWeight: 'bold',
//               color: modeColor ? 'white' : 'black',
//               textDecoration: 'none',
//             }}
//           >
//             Asik Ahamed<span style={{ color: 'red', marginLeft: '4px', marginTop: '2px' }}>•</span>
//           </MUILink>

//           {/* Nav Links */}
//           <Box sx={navBackground}>
//             <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
//               {/* Brand (Mobile) */}
//               <MUILink
//                 component={Link}
//                 smooth
//                 to="/#home"
//                 onClick={() => {
//                   setClickedHash('#home');
//                   setIsClicking(true);
//                 }}
//                 sx={{
//                   display: { xs: 'flex', sm: 'none' },
//                   textAlign: 'center',
//                   gap: '4px',
//                   fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
//                   fontSize: { xs: '15px', sm: '17px', md: '18px', lg: '20px' },
//                   fontWeight: 'bold',
//                   color: modeColor ? 'white' : 'black',
//                   textDecoration: 'none',
//                 }}
//               >
//                 Asik Ahamed<span style={{ color: 'red', marginTop: '2px' }}>•</span>
//               </MUILink>

//               {/* Navigation Links */}
//               <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
//                 <MUILink
//                   component={Link}
//                   smooth
//                   to={`/#home`}
//                   onClick={() => setClickedHash(`#home`)}
//                   sx={getNavLinkStyle(isActiveHash(`#home`))}
//                 >
//                   {/* {section.charAt(0).toUpperCase() + section.slice(1)} */}
//                   Home
//                 </MUILink>


//                 <MUILink
//                   component={Link}
//                   smooth
//                   to={`/#project`}
//                   onClick={() => setClickedHash(`#project`)}
//                   sx={getNavLinkStyle(isActiveHash(`#project`))}
//                 >
//                   project
//                 </MUILink>

//                 <MUILink
//                   component={Link}
//                   smooth
//                   to={`/#about`}
//                   onClick={() => setClickedHash(`#about`)}
//                   sx={getNavLinkStyle(isActiveHash(`#about`))}
//                 >
//                   About
//                 </MUILink>


//                 <MUILink
//                   component={Link}
//                   smooth
//                   to={`/#skills`}
//                   onClick={() => setClickedHash(`#skills`)}
//                   sx={getNavLinkStyle(isActiveHash(`#skills`))}
//                 >
//                   Skills
//                 </MUILink>


//                 {(() => {
//                   const contactActive = isActiveHash('#contact');
//                   return (
//                     <MUILink
//                       component={Link}
//                       smooth
//                       to="/#contact"
//                       onClick={() => setClickedHash('#contact')}
//                       sx={{
//                         ...getNavLinkStyle(contactActive),

//                         textAlign: 'center',
//                         fontSize: '14px',
//                         fontWeight: 600,
//                         color: modeColor ? 'rgba(255, 106, 0, 1)' : 'rgba(255, 106, 0, 1)',
//                         bgcolor: modeColor ? 'rgba(255, 255, 255, 0.16)' : 'rgba(12, 214, 79, 0.16)',
//                         backgroundColor: modeColor ? '' : '',


//                         '&::after': {
//                           content: '""',
//                           position: 'absolute',
//                           bottom: '-3px',
//                           left: 0,
//                           width: contactActive ? '100%' : '0',
//                           height: '2px',
//                           backgroundColor: contactActive
//                             ? (modeColor ? 'rgba(255, 106, 0, 1)' : 'rgba(255, 106, 0, 1)')
//                             : 'transparent',
//                           transition: 'width 0.5s ease-in-out',
//                         },
//                         '&:hover': {
//                           color: modeColor ? ' rgb(2, 63, 154)' : ' rgb(2, 63, 154)',
//                           '&::after': {
//                             backgroundColor: modeColor ? ' rgb(2, 63, 154)' : ' rgb(2, 63, 154)',
//                           },
//                         },
//                       }}
//                     >
//                       Contact
//                     </MUILink>
//                   );
//                 })()}





//               </Box>
//             </Stack>
//           </Box>

//           {/* Dark/Light Mode Toggle */}
//           {/* <Box sx={{ ml: 'auto', width: { xs: '50px', sm: '30px', md: '110px', lg: '110px' }, justifyItems: 'flex-end' }}>

//             <Box
//               onClick={handleColor}
//               sx={{
//                 cursor: 'pointer',
//                 height: '15px',
//                 width: '30px',
//                 bgcolor: 'rgba(0, 0, 0, 0.39)',
//                 borderRadius: '50px',
//                 position: 'relative',
//               }}
//             >
//               <Tooltip title='Dark & Light Mode ' placement="right" arrow>

//                 <IconButton
//                   sx={{
//                     // bgcolor: '#FF6B00',
//                     bgcolor: '#E6E6FA',
//                     color: 'black',
//                     height: '25px',
//                     width: '25px',
//                     position: 'absolute',
//                     top: '-5px',
//                     left: -7,
//                     transform: modeColor ? 'translateX(20px)' : 'translateX(0)',
//                     transition: 'transform 0.3s ease',
//                     '&:hover': {
//                       bgcolor: '#e65c00',
//                     },
//                   }}
//                 >
//                   {modeColor ? (
//                     <DarkModeIcon sx={{ height: '15px', width: '15px' }} />
//                   ) : (
//                     < LightModeIcon sx={{ height: '15px', width: '15px' }} />
//                   )}
//                 </IconButton>
//               </Tooltip>
//             </Box>
//           </Box> */}

//           {/* ✅ Basketball Toggle Switch instead of old theme switch */}
//           <Box sx={{
//             ml: "auto",
//             mr: 10,
//             mt:0,
//             height: '25px',
//             width: '25px',
//             // position: 'absolute',
//           }}>
//             <ToggleSwitch checked={modeColor} onToggle={handleColor} />
//           </Box>





//         </Toolbar>

//         {/* Mobile Drawer */}
//         <NavMenu toggleDrawer={setOpen} open={open} location={location} />
//       </Container >
//     </AppBar >
//   );
// };

// export default Navbar;
