import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const Text = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  const texts = ['Frontend Developer', 'Backend Developer', 'React Js Developer', 'MERN Stack Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTriggerAnimation(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTriggerAnimation(false);
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);


  const textStyle = {
    textAlign: 'center',
    alignContent: 'center',
    fontSize: { md: '2rem', sm: '2rem', xs: '1.3rem' },
    fontWeight: '600',
    color: 'rgb(88, 57, 35)',
    borderRadius: 'solid'

  }

  const textStyle1 = {
    fontSize: { md: '2rem', sm: '2rem', xs: '1.3rem' },
    fontWeight: '600',
    textAlign: 'center',
    height: '50px',
    // width: {xs:'fight-content',sm:'50%',md:'65%',lg:'70%',xl:'60%'},
    // width: 'fight-content',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 30%,rgb(56, 91, 148)  48%, rgba(0, 0, 0, 1) 65%)',
    backgroundClip: 'text',
    color: 'transparent',
    lineHeight: 1,
    opacity: triggerAnimation ? 0 : 1,
    transition: 'opacity 1s ease-in-out',
    border: 'solid'
  };

  return (
    <>


      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
      }}>


        <Box sx={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'center',alignItems:'center', gap:1,ml:{sm:'0px',md:'auto',lg:'auto'} }}>
          <Typography sx={textStyle}>
            i'm
          </Typography>
          <Typography sx={textStyle1}> {texts[currentIndex]}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Text;