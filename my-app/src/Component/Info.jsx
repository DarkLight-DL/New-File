
// import React, { useState, useContext } from 'react';
// import { Box, Typography, Link as MUILink, Dialog, IconButton } from '@mui/material';
// import { HashLink as Link } from 'react-router-hash-link';
// import CloseIcon from '@mui/icons-material/Close';
// import { ReactComponent as File } from '../Assets/file.svg';
// import { ReactComponent as Person } from '../Assets/person.svg';
// import Text from './Text';
// import ThemeContext from './ThemeContext';

// import Resume from '../Assets/resume.pdf';

// const Info = () => {
//   const { modeColor } = useContext(ThemeContext);
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <Box sx={{ width: '100%', justifyItems: 'center', alignContent: 'center' }}>
//       {/* Your existing UI */}
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           gap: 1,
//         }}
//       >
//         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
//           <Typography
//             variant="h4"
//             sx={{
//               color: modeColor ? 'white' : 'white',
//               fontWeight: '900',
//               fontSize: { lg: '3.2rem', md: '3rem', sm: '3rem', xs: '2rem' },
//             }}
//           >
//             Hi, it's
//           </Typography>
//           <Typography
//             variant="h4"
//             sx={{
//               color: modeColor ? 'black' : 'black',
//               fontWeight: '900',
//               fontSize: { lg: '3.2rem', md: '3rem', sm: '3rem', xs: '2rem' },
//             }}
//           >
//             Asik
//           </Typography>
//         </Box>

//         <Text />

//         <Typography sx={{ mt: 1, color: 'black', fontSize: '10px' }}>
//           people looking for innovation
//         </Typography>
//       </Box>

//       <Box
//         sx={{
//           display: 'flex',
//           gap: '15px',
//           alignItems: 'center',
//           justifyContent: 'center',
//           my: '20px',
//         }}
//       >
//         {/* Open CV button */}
//         <Box
//           onClick={handleOpen}
//           sx={{
//             cursor: 'pointer',
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
//             gap: '5px',
//             '&:hover': {
//               color: 'white',
//               border: '1px solid rgb(56, 91, 148)',
//               bgcolor: 'rgb(56, 91, 148)',
//               boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.8)',
//               transform: 'scale(1.1)',
//               '& svg': {
//                 filter: 'invert(1)',
//               },
//             },
//           }}
//         >
//           Open CV
//           <Box component={File} sx={{ height: '20px', width: '20px', filter: 'invert(0)', transition: 'filter 0.3s ease' }} />
//         </Box>

//         {/* Link to Contact (smooth scroll to #contact) */}
//         <MUILink
//           component={Link}
//           smooth
//           to="/#contact"
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

//       {/* Fullscreen PDF Dialog */}
//       <Dialog
//         fullScreen
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           sx: {
//             margin: 0,
//             maxWidth: '100vw',
//             maxHeight: '100vh',
//             height: '100vh',
//             width: '100vw',
//             overflow: 'hidden',
//             backgroundColor: '#f9f9f9',
//           },
//         }}
//       >
//         <Box sx={{ position: 'relative', height: '100vh', width: '100vw' }}>
//           <IconButton
//             aria-label="close"
//             onClick={handleClose}
//             sx={{ bgcolor:'white',position: 'absolute', top: 16, right: 16, color: 'black', zIndex: 1000,'&:hover': {bgcolor:'orange'} }}
//           >
//             <CloseIcon />
//           </IconButton>

//           <iframe
//             src={`${Resume}#toolbar=0`}
//             title="Resume"
//             style={{
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               width: '100%',
//               height: '100%',
//               border: 'none',
//             }}
//           />
//         </Box>
//       </Dialog>
//     </Box>
//   );
// };

// export default Info;






































import React, { useState, useContext } from 'react';
import {
  Box,
  Typography,
  Link as MUILink,
  Dialog,
  IconButton,
} from '@mui/material';
import { HashLink as Link } from 'react-router-hash-link';
import CloseIcon from '@mui/icons-material/Close';
import { ReactComponent as File } from '../Assets/file.svg';
import { ReactComponent as Person } from '../Assets/person.svg';
import Text from './Text';
import ThemeContext from './ThemeContext';
import Resume from '../Assets/resume.pdf';
import { Helmet } from 'react-helmet';

const Info = () => {
  const { modeColor } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Asik | Resume & Contact</title>
        <meta name="description" content="Asik's professional resume and contact section." />
      </Helmet>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: { xs: '20px', sm: '30px', md: '40px' },
          textAlign: 'center',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            flexWrap: 'wrap',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: modeColor ? '#fff' : '#fff',
              fontWeight: 900,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.2rem' },
            }}
          >
            Hi, it's
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: modeColor ? '#000' : '#000',
              fontWeight: 900,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.2rem' },
            }}
          >
            Asik
          </Typography>
        </Box>

        {/* Typing Text Component */}
        <Text />

        <Typography sx={{ mt: 1, color: '#000', fontSize: '10px' }}>
          people looking for innovation
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '15px',
            alignItems: 'center',
            justifyContent: 'center',
            my: '20px',
          }}
        >
          {/* Open CV Button */}
          <Box
            onClick={handleOpen}
            role="button"
            aria-label="Open Resume"
            tabIndex={0}
            sx={{
              cursor: 'pointer',
              color: '#000',
              fontSize: { xs: '12px', sm: '14px' },
              fontWeight: 400,
              borderRadius: '20px',
              border: '1px solid rgb(101, 100, 100)',
              padding: { xs: '12px 18px', sm: '10px 15px 10px 20px' },
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
            <Box
              component={File}
              sx={{
                height: '20px',
                width: '20px',
                filter: 'invert(0)',
                transition: 'filter 0.3s ease',
              }}
            />
          </Box>

          {/* Contact Link */}
          <MUILink
            component={Link}
            smooth
            to="/#contact"
            underline="none"
            sx={{
              color: '#fff',
              fontSize: { xs: '12px', sm: '14px' },
              fontWeight: 400,
              borderRadius: '20px',
              border: '1px solid rgb(101, 100, 100)',
              padding: { xs: '12px 18px', sm: '10px 15px 10px 20px' },
              transition: 'all 0.3s ease',
              bgcolor: 'rgb(56, 91, 148)',
              boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.42)',
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1px',
              '&:hover': {
                color: '#000',
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
            <Box
              component={Person}
              sx={{
                height: '20px',
                width: '20px',
                filter: 'invert(1)',
                transition: 'filter 0.3s ease',
              }}
            />
          </MUILink>
        </Box>
      </Box>

      {/* Resume Dialog */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            margin: 0,
            height: '100vh',
            width: '100vw',
            overflowY: 'auto',
            backgroundColor: '#f9f9f9',
          },
        }}
      >
        <Box sx={{ position: 'relative', height: '100vh', width: '100vw' }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              bgcolor: 'white',
              position: 'absolute',
              top: 16,
              right: 16,
              color: 'black',
              zIndex: 1000,
              '&:hover': { bgcolor: 'orange' },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Lazy-loaded Iframe */}
          {open && (
            <iframe
              src={`${Resume}#toolbar=0`}
              title="Resume"
              aria-label="Resume PDF Viewer"
              loading="lazy"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
          )}
        </Box>
      </Dialog>
    </>
  );
};

export default Info;
