
import React, { useContext, 
  // useMemo 
} from 'react';
import {
  Box,
  // Button,
  Typography
} from '@mui/material';
// import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import ThemeContext from '../Component/ThemeContext'; 
const Footer = () => {
  const { modeColor } = useContext(ThemeContext); // get dark mode state

  // const handleScroll = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };



  // const scrollButtonStyles = useMemo(() => ({
  //   m: 0,
  //   p: 1,
  //   minWidth: '0px',
  //   borderRadius: '20px',
  //   bgcolor: modeColor ? '#ffffffff' : 'rgb(0, 0, 2)',
  //   fontWeight: '700',
  //   boxShadow: modeColor
  //     ? '-5px -5px 15px rgba(255, 255, 255, 0.08)'
  //     : '-5px -5px 15px rgba(247, 247, 247, 0.12)',
  //   position: 'absolute',
  //   top:10,
  //   right: 10,
  //   color: modeColor ? '#000000ff' : '#ffffffff',
  //   '&:hover': {
  //     transform: 'scale(1.10)',
  //     bgcolor: modeColor ? '#ffffffff' : 'rgba(0, 0, 0, 1)',
  //     boxShadow: modeColor
  //       ? '5px 5px 20px rgba(255, 255, 255, 1)'
  //       : '5px 5px 20px rgba(0, 0, 0, 1)',
  //   },
  // }), [modeColor]);

  return (
    <>
      <Box
        sx={{
                bgcolor: modeColor ? '#00000036' : 'rgba(255, 255, 255, 0.13)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: {xs:'120px',sm:'150px'},
          width: '100%',
          position: 'relative',
        }}
      >
        {/* <Box>
          <Button
            variant="contained"
            onClick={handleScroll}
            sx={scrollButtonStyles}
          >
            <KeyboardDoubleArrowUpIcon sx={{ height: '20px', width: '20px' }} />
          </Button>
        </Box> */}

        <Typography
          sx={{
            textAlign: 'center',
            color: modeColor ? 'white' : 'black',
            mt: '20px',
            fontSize: '14px',
          }}
        >
          Copyright &copy; {new Date().getFullYear()} All rights reserved |
          Made with ❤️ by Asik Ahamed (●◡●)
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
