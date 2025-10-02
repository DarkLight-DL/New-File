
// import React, { useContext, 
//   // useMemo 
// } from 'react';
// import {
//   Box,
//   // Button,
//   Typography
// } from '@mui/material';
// // import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
// import ThemeContext from '../Component/ThemeContext'; 
// const Footer = () => {
//   const { modeColor } = useContext(ThemeContext); // get dark mode state

//   // const handleScroll = () => {
//   //   window.scrollTo({
//   //     top: 0,
//   //     behavior: 'smooth',
//   //   });
//   // };



//   // const scrollButtonStyles = useMemo(() => ({
//   //   m: 0,
//   //   p: 1,
//   //   minWidth: '0px',
//   //   borderRadius: '20px',
//   //   bgcolor: modeColor ? '#ffffffff' : 'rgb(0, 0, 2)',
//   //   fontWeight: '700',
//   //   boxShadow: modeColor
//   //     ? '-5px -5px 15px rgba(255, 255, 255, 0.08)'
//   //     : '-5px -5px 15px rgba(247, 247, 247, 0.12)',
//   //   position: 'absolute',
//   //   top:10,
//   //   right: 10,
//   //   color: modeColor ? '#000000ff' : '#ffffffff',
//   //   '&:hover': {
//   //     transform: 'scale(1.10)',
//   //     bgcolor: modeColor ? '#ffffffff' : 'rgba(0, 0, 0, 1)',
//   //     boxShadow: modeColor
//   //       ? '5px 5px 20px rgba(255, 255, 255, 1)'
//   //       : '5px 5px 20px rgba(0, 0, 0, 1)',
//   //   },
//   // }), [modeColor]);

//   return (
//     <>
//       <Box
//         sx={{
//                 bgcolor: modeColor ? '#00000036' : 'rgba(255, 255, 255, 0.13)',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: {xs:'120px',sm:'150px'},
//           width: '100%',
//           position: 'relative',
//         }}
//       >
//         {/* <Box>
//           <Button
//             variant="contained"
//             onClick={handleScroll}
//             sx={scrollButtonStyles}
//           >
//             <KeyboardDoubleArrowUpIcon sx={{ height: '20px', width: '20px' }} />
//           </Button>
//         </Box> */}

//         <Typography
//           sx={{
//             textAlign: 'center',
//             color: modeColor ? 'white' : 'black',
//             mt: '20px',
//             fontSize: '14px',
//           }}
//         >
//           Copyright &copy; {new Date().getFullYear()} All rights reserved |
//           Made with ❤️ by Asik Ahamed (●◡●)
//         </Typography>
//       </Box>
//     </>
//   );
// };

// export default Footer;




































import React, { useContext } from 'react';
import {
  Box,
  Grid,
  Typography,
  Link as MUILink,
  Stack } from '@mui/material';
import { HashLink as Link } from 'react-router-hash-link';
import ThemeContext from '../Component/ThemeContext';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import InfoIcon from '@mui/icons-material/Info';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';

import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  const { modeColor } = useContext(ThemeContext);

  const linkStyle = {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: modeColor ? '#eee' : '#111',
    fontSize: { xs: '10px', sm: '14px' },
    transition: 'all 0.3s ease',
    '&:hover': {
      color: modeColor ? 'rgba(15, 104, 237, 1)': 'rgb(2, 63, 154)' ,
      transform: 'scale(1.30)'
    },
  };

  const iconStyle={
        fontSize: { xs: '10px', sm: '14px' },
  }

  return (
    <Box sx={{ width: '100%', mt: 10 }}>
      {/* Footer Content */}
      <Grid
        container
        justifyContent="center"

        spacing={2}
        sx={{
          pl:{xs:'30px',sm:'35px',md:'0px',lg:'0px'},
           textAlign:{xs:'left',sm:'left',md:'center',lg:'center'},
          color: modeColor ? '#fff' : '#000',
           bgcolor: modeColor ? '#00000036' : 'rgba(255, 255, 255, 0.13)',

        }}
      >
        {/* About Me */}
        <Grid item xs={12} md={4} lg={4}>
          <Typography variant="h6" gutterBottom sx={{mb:{xs:1,sm:2,md:4,lg:5}, fontWeight: 'bold' ,fontSize: { xs: '12px', sm: '18px' }}}>
            About Me
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: { xs: '10px', sm: '14px' }, mx: 'auto' }}
          >
            I'm Asik Ahamed, a passionate developer focused on building modern,
            fast, and accessible websites.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4} lg={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' ,fontSize: { xs: '12px', sm: '18px' }}}>
            Quick Links
          </Typography>
          <Stack spacing={1} sx={{display:'inline-block'}}> 
            <MUILink component={Link} to="/#home" smooth sx={linkStyle}>
              <HomeIcon sx={iconStyle} /> Home
            </MUILink>
            <MUILink component={Link} to="/#project" smooth sx={linkStyle}>
              <CodeIcon sx={iconStyle} /> Projects
            </MUILink>
            <MUILink component={Link} to="/#about" smooth sx={linkStyle}>
              <InfoIcon sx={iconStyle} /> About
            </MUILink>
            <MUILink component={Link} to="/#skills" smooth sx={linkStyle}>
              <QueuePlayNextIcon sx={iconStyle} /> Skills
            </MUILink>
            <MUILink component={Link} to="/#contact" smooth sx={linkStyle}>
              <PermContactCalendarIcon sx={iconStyle} /> Contact
            </MUILink>
          </Stack>
        </Grid>

        {/* Contact */}
        <Grid item xs={12} md={4} lg={4}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold',fontSize: { xs: '12px', sm: '18px' } }}>
            Contact
          </Typography>
          <Stack spacing={1}sx={{display:'inline-block'}} >
            <MUILink href="mailto:a.asikahamedm@gmail.com" sx={linkStyle}>
              <EmailIcon sx={iconStyle} /> a.asikahamedm@gmail.com
            </MUILink>
            <MUILink href="tel:+919500302681" sx={linkStyle}>
              <PhoneIcon sx={iconStyle} /> +91 95003 02681
            </MUILink>
            <MUILink
              href="https://www.google.com/maps/place/Kanniyakumari"
              target="_blank"
              rel="noopener noreferrer"
              sx={linkStyle}
            >
              <LocationOnIcon sx={iconStyle} /> Kanniyakumari, India
            </MUILink>
          </Stack>
        </Grid>

        
        {/* footer */}
        <Grid item xs={12} md={4} lg={4}>
      <Box
        sx={{
          textAlign: 'center',
          py: 2,
          pb:3,
        }}
      >
        <Typography
          sx={{
            color: modeColor ? 'white' : 'black',
            fontSize: { xs: '12px', sm: '14px' },
          }}
        >
          &copy; {new Date().getFullYear()} All rights reserved | Made with ❤️ by Asik Ahamed
        </Typography>
      </Box>
        </Grid>
      </Grid>


    </Box>
  );
};

export default Footer;
