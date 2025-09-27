// import React from 'react'
// import { useLocation, Link } from 'react-router-dom';

// import HomeIcon from '@mui/icons-material/Home';
// import InfoIcon from '@mui/icons-material/Info';
// import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';import CodeIcon from '@mui/icons-material/Code';
// import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';





// import CloseIcon from '@mui/icons-material/Close';

// import HomeIcon from '@mui/icons-material/Home';
// import InfoIcon from '@mui/icons-material/Info';
// import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
// import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

// import { Box, Drawer, Stack, Typography } from '@mui/material';

// import styled from 'styled-components';


// const StyledDrawerButton = styled(Link).withConfig({
//   shouldForwardProp: (prop) => prop !== 'active',
// })`  display: flex;
//   align-items: center;
//   padding: 10px 16px;
//   text-decoration: none;
//   border-radius: 10px;
//   font-weight: ${(props) => (props.active ? '600' : '400')};
//   color: ${(props) => (props.active ? 'rgb(2, 63, 154)' : 'black')};

//   &:hover {
//     color: rgb(2, 63, 154);

//     svg {
//       color: rgb(2, 63, 154);
//     }
//   }

//   svg {
//     margin-right: 10px;
//     color: inherit;
//   }
// `;
// const NaveMenu = ( {toggleDrawer,open}) => {
//     const location = useLocation();
//   return (
//     <>
//       <Drawer
//         anchor="right"
//         open={open}
//         onClose={() => toggleDrawer(false)}
//         PaperProps={{
//           sx: {
//             backgroundColor: 'rgba(219, 216, 216, 1)',
//             boxShadow: 'none'
//           }
//         }}
//       >
//         <Box
//           sx={{ width: 185 }}
//           role="presentation"
//           onClick={() => toggleDrawer(false)}
//           onKeyDown={() => toggleDrawer(false)}
//         >
//           <Box display="flex" justifyContent="center" alignItems="center">
//             <CloseIcon
//               sx={{ flexGrow: 1, height: '30px', cursor: 'pointer' }}
//             />
//             <Typography
//               variant="h4"
//               m="20px"
//               textAlign="center"
//               sx={{ flexGrow: 1, fontFamily: 'fantasy' }}
//             >
//               Menu
//             </Typography>
//           </Box>

//           <Stack spacing={1.5} mt={2} pl={1}>
//             <StyledDrawerButton to="/" active={location.pathname === '/'}>
//               <HomeIcon />
//               Home
//             </StyledDrawerButton>

//             <StyledDrawerButton to="/about" active={location.pathname === '/about'}>
//               <InfoIcon />
//               About
//             </StyledDrawerButton>

//             <StyledDrawerButton to="/project" active={location.pathname === '/project'}>
//               <ViewCarouselIcon />
//               Project
//             </StyledDrawerButton>

//             <StyledDrawerButton to="/skills" active={location.pathname === '/skills'}>
//               <CalendarViewDayIcon />
//               Skills
//             </StyledDrawerButton>

//             <StyledDrawerButton to="/contact" active={location.pathname === '/contact'}>
//               <CalendarViewDayIcon />
//               Contact Me
//             </StyledDrawerButton>
//           </Stack>
//         </Box>
//       </Drawer>

      
//     </>
//   )
// }

// export default NaveMenu



























import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { Box, Drawer, Stack, Typography, IconButton } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';import CodeIcon from '@mui/icons-material/Code';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

import styled from 'styled-components';

// Styled components
const StyledDrawerButton = styled(Link).withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: ${(props) => (props.active ? '600' : '400')};
  color: ${(props) => (props.active ? '#023f9a' : '#333')};
  background-color: ${(props) => (props.active ? 'rgba(2, 63, 154, 0.1)' : 'transparent')};
  border-left: ${(props) => (props.active ? '4px solid #023f9a' : '4px solid transparent')};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(2, 63, 154, 0.08);
    color: #023f9a;

    svg {
      color: #023f9a;
    }
  }

  svg {
    margin-right: 12px;
    font-size: 22px;
    color: inherit;
  }
`;

const NaveMenu = ({ toggleDrawer, open }) => {
  const location = useLocation();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => toggleDrawer(false)}
      PaperProps={{
        sx: {
          background: 'linear-gradient(to bottom, #f0f0f0, #e0e0e0)',
          boxShadow: 'none',
          width: 240,
        },
      }}
    >
      <Box
        role="presentation"
        onClick={() => toggleDrawer(false)}
        onKeyDown={() => toggleDrawer(false)}
        sx={{ height: '100%', padding: '16px' }}
      >
        {/* Header */}
        <Box display="flex" alignItems="center" mb={3}>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              fontFamily: 'fantasy',
              color: '#000000ff',
              fontWeight: 400,
            }}
          >
            Menu
          </Typography>
          <IconButton onClick={() => toggleDrawer(false)}>
<CloseIcon
  sx={{
    fontSize: 28,
    color: 'black',
    cursor: 'pointer',
    '&:hover': {
      color: '#023f9a',
    },
  }}
/>
          </IconButton>
        </Box>

        {/* Menu Items */}
        <Stack spacing={1}>
          <StyledDrawerButton to="/" active={location.pathname === '/'}>
            <HomeIcon />
            Home
          </StyledDrawerButton>

          <StyledDrawerButton to="/about" active={location.pathname === '/about'}>
            <InfoIcon />
            About
          </StyledDrawerButton>

          <StyledDrawerButton to="/project" active={location.pathname === '/project'}>
            <QueuePlayNextIcon />
            Project
          </StyledDrawerButton>

          <StyledDrawerButton to="/skills" active={location.pathname === '/skills'}>
            <CodeIcon />
            Skills
          </StyledDrawerButton>

          <StyledDrawerButton to="/contact" active={location.pathname === '/contact'}>
            <PermContactCalendarIcon />
            Contact Me
          </StyledDrawerButton>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default NaveMenu;
