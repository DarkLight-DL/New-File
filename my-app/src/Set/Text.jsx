import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
// import TextAnimation from './TextAnimation';

const Text = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  // const texts = ['Frontend Developer', 'Backend Developer', 'React Js Developer','Mernstack Developer'];
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
    fontSize: { md: '2.7rem', sm: '1.8rem', xs: '1.6rem' },
    fontWeight: '600',
    color: 'rgb(88, 57, 35)',
    marginRight: '10px',
    width: '100%',
    borderRadius:'solid'

  }

  const textStyle1 = {
    fontSize: { md: '2.7rem', sm: '1.8rem', xs: '1.6rem' },
    fontWeight: '600',
    textAlign: 'center',
    mt: { xs: '5px' },
    height: '50px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
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
      <Box>
      </Box> 

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection:'column',
      }}>
        <Typography sx={textStyle}>i'm <span style={{
          color:'black',
          textShadow:'0px 0px 5px rgba(0, 249, 245, 1)',
        }}
        >
          Asik ahamed</span>
          {/* <span style={{justifyItems:'center',alignContent:'center'}}> <TextAnimation/></span>  */}
          </Typography>
        <Typography sx={textStyle1}>{texts[currentIndex]}</Typography>
      </Box>
    </>
  );
};

export default Text;