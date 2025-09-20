import React from 'react';
import { Box, Typography, Grid} from '@mui/material';
import Linkus from './Linkus';

// import Link from './Linkus';


const Intro = () => {
  return (
    <>
      <Grid item lg={6} md={7} display='flex' justifyContent='flex-'alignItems='flex-start'>
        <Typography textAlign={'center'} my='20px' sx={{
                    mt:{xs:'10px',sm:'15px',md:'50px',lg:'50px'},
          fontSize:{xs:'14px',sm:'15px',md:'18px',lg:'20px'}
        }}>
          I am a Frontend Developer who loves building websites that are interactive and easy to use.
          I focus on writing clean code and creating beautiful designs that help turn ideas into reality.
          I'm always eager to learn and improve my skills.
        </Typography>
      </Grid>


      <Box
        sx={{
          height: '50px',
          width: '100%',
          bgcolor: 'rgba(254, 254, 254, 0.47)',
          borderRadius: '10px',
          my: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          px: 2,
        }}
      >

        <Linkus/>

      </Box>



    </>
  );
};

export default Intro;
