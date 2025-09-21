// // src/SetOne/Info.jsx
// import React, { useContext } from 'react';
// import { Box, Typography, Link as MUILink } from '@mui/material';
// import { Link as RouterLink } from 'react-router-dom';

// import Text from './Text';
// import ThemeContext from './ThemeContext';

// import { ReactComponent as File } from '../Assets/file.svg';
// import { ReactComponent as Person } from '../Assets/person.svg';

// const Info = () => {
//   const { modeColor } = useContext(ThemeContext);

//   return (
//     <Box sx={{ width: '100%', justifyItems: 'flex-center', alignContent: 'center' }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
//           <Typography
//             variant="h4"
//             sx={{ color: modeColor ? 'black' : 'white', fontWeight: '900', fontSize: { lg: '3.2rem', md: '3rem', sm: '3rem', xs: '2rem' } }}
//           >
//             Hi, it's
//           </Typography>
//           <Typography
//             variant="h4"
//             sx={{ color: modeColor ? 'white' : 'black', fontWeight: '900', fontSize: { lg: '3.2rem', md: '3rem', sm: '3rem', xs: '2rem' } }}
//           >
//             Asik
//           </Typography>
//         </Box>

//         <Text />
//         <Typography sx={{ mt: 1, color: 'black', fontSize: '10px' }}>people looking for innovation</Typography>
//       </Box>

//       <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'center', my: '20px' }}>
//         {/* Button to Resume Route */}
//         <MUILink
//           component={RouterLink}
//           to="/resume"
//           underline="none"
//           sx={{
//             color: 'black',
//             fontSize: { xs: '12px', sm: '14px' },
//             fontWeight: 400,
//             borderRadius: '20px',
//             border: '1px solid rgb(101, 100, 100)',
//             padding: '10px 15px 10px 20px',
//             transition: 'all 0.3s ease',
//             bgcolor: 'rgba(158, 153, 153, 0)',
//             boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.42)',
//             display: 'inline-flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             gap: '1px',
//             '&:hover': {
//               color: 'white',
//               border: '1px solid rgb(56, 91, 148)',
//               bgcolor: 'rgb(56, 91, 148)',
//               boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.8)',
//               transform: 'scale(1.2)',
//               '& svg': {
//                 filter: 'invert(1)',
//               },
//             },
//           }}
//         >
//           Open CV’
//           <Box component={File} sx={{ height: '20px', width: '20px', filter: 'invert(0)', transition: 'filter 0.3s ease' }} />
//         </MUILink>

//         {/* Contact Button */}
//         <MUILink
//           component={RouterLink}
//           to="/contact"
//           underline="none"
//           sx={{
//             color: 'white',
//             fontSize: { xs: '12px', sm: '14px' },
//             fontWeight: 400,
//             borderRadius: '20px',
//             border: '1px solid rgb(101, 100, 100)',
//             padding: '10px 15px 10px 20px',
//             transition: 'all 0.3s ease',
//             bgcolor: 'rgb(56, 91, 148)',
//             boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.42)',
//             display: 'inline-flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             gap: '1px',
//             '&:hover': {
//               color: 'black',
//               border: '1px solid rgb(56, 91, 148)',
//               bgcolor: 'rgba(158, 153, 153, 0)',
//               boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.8)',
//               transform: 'scale(1.2)',
//               '& svg': {
//                 filter: 'invert(0)',
//               },
//             },
//           }}
//         >
//           Contact
//           <Box component={Person} sx={{ height: '20px', width: '20px', filter: 'invert(1)', transition: 'filter 0.3s ease' }} />
//         </MUILink>
//       </Box>
//     </Box>
//   );
// };

// export default Info;




























import React, { useState, useContext } from 'react';
import { Box, Typography, Link as MUILink, Dialog, IconButton } from '@mui/material';
import { HashLink as Link } from 'react-router-hash-link'; // Smooth scroll
import CloseIcon from '@mui/icons-material/Close';
import { ReactComponent as File } from '../Assets/file.svg';
import { ReactComponent as Person } from '../Assets/person.svg';
import Text from './Text';
import ThemeContext from './ThemeContext';

import Resume from '../Assets/resume.pdf';

const Info = () => {
  const { modeColor } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ width: '100%', justifyItems: 'center', alignContent: 'center' }}>
      {/* Your existing UI */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
          <Typography
            variant="h4"
            sx={{
              color: modeColor ? 'black' : 'white',
              fontWeight: '900',
              fontSize: { lg: '3.2rem', md: '3rem', sm: '3rem', xs: '2rem' },
            }}
          >
            Hi, it's
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: modeColor ? 'white' : 'black',
              fontWeight: '900',
              fontSize: { lg: '3.2rem', md: '3rem', sm: '3rem', xs: '2rem' },
            }}
          >
            Asik
          </Typography>
        </Box>

        <Text />

        <Typography sx={{ mt: 1, color: 'black', fontSize: '10px' }}>
          people looking for innovation
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: '15px',
          alignItems: 'center',
          justifyContent: 'center',
          my: '20px',
        }}
      >
        {/* Open CV button */}
        <Box
          onClick={handleOpen}
          sx={{
            cursor: 'pointer',
            color: 'black',
            fontSize: { xs: '12px', sm: '14px' },
            fontWeight: 400,
            borderRadius: '20px',
            border: '1px solid rgb(101, 100, 100)',
            padding: '10px 15px 10px 20px',
            transition: 'all 0.3s ease',
            bgcolor: 'rgba(158, 153, 153, 0)',
            boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.42)',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            '&:hover': {
              color: 'white',
              border: '1px solid rgb(56, 91, 148)',
              bgcolor: 'rgb(56, 91, 148)',
              boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.8)',
              transform: 'scale(1.1)',
              '& svg': {
                filter: 'invert(1)',
              },
            },
          }}
        >
          Open CV
          <Box component={File} sx={{ height: '20px', width: '20px', filter: 'invert(0)', transition: 'filter 0.3s ease' }} />
        </Box>

        {/* Link to Contact (smooth scroll to #contact) */}
        <MUILink
          component={Link}
          smooth
          to="/#contact"
          underline="none"
          sx={{
            color: 'white',
            fontSize: { xs: '12px', sm: '14px' },
            fontWeight: 400,
            borderRadius: '20px',
            border: '1px solid rgb(101, 100, 100)',
            padding: '10px 15px 10px 20px',
            transition: 'all 0.3s ease',
            bgcolor: 'rgb(56, 91, 148)',
            boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.42)',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1px',
            '&:hover': {
              color: 'black',
              border: '1px solid rgb(56, 91, 148)',
              bgcolor: 'rgba(158, 153, 153, 0)',
              boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.8)',
              transform: 'scale(1.2)',
              '& svg': {
                filter: 'invert(0)',
              },
            },
          }}
        >
          Contact
          <Box component={Person} sx={{ height: '20px', width: '20px', filter: 'invert(1)', transition: 'filter 0.3s ease' }} />
        </MUILink>
      </Box>

      {/* Fullscreen PDF Dialog */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            margin: 0,
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            backgroundColor: '#f9f9f9',
          },
        }}
      >
        <Box sx={{ position: 'relative', height: '100vh', width: '100vw' }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ bgcolor:'white',position: 'absolute', top: 16, right: 16, color: 'black', zIndex: 1000,'&:hover': {bgcolor:'orange'} }}
          >
            <CloseIcon />
          </IconButton>

          <iframe
            src={`${Resume}#toolbar=0`}
            title="Resume"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
            }}
          />
        </Box>
      </Dialog>
    </Box>
  );
};

export default Info;
