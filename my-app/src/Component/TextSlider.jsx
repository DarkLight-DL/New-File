import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import ThemeContext from './ThemeContext';

// Text items to scroll
const texts = [
  'Frontend Developer', '⁕',
  'Backend Developer', '⁕',
  'React Js Developer', '⁕',
  'MERN Stack Developer', '⁕'
];

const keyframesStyle = `
  @keyframes slide {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const TextSlider = () => {

  const { modeColor } = useContext(ThemeContext);

  const handlePause = (e) => {
    const track = e.currentTarget.querySelector('.slider-track');
    if (track) {
      track.style.animationPlayState = 'paused';
    }
  };

  const handleResume = (e) => {
    const track = e.currentTarget.querySelector('.slider-track');
    if (track) {
      track.style.animationPlayState = 'running';
    }
  };

  return (
    <>

      <style>{keyframesStyle}</style>
      <Box sx={{
        // border: 'solid',
        // backgroundColor: 'green',
        mt: { xs: 1, sm: 2, md: 3, lg: 4 },
        mb: 4,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        py: 3,
        position: 'relative',

        '&::before': {
          content: '""',
          position: 'absolute',
          // background: 'linear-gradient(to bottom, #f37335, #f37335)',
          background: 'linear-gradient(to bottom, #54278cff, #264395ff)',
          top: 23,
          mx: '-1px',
          right: 0,
          width: '100%',
          height: { xs: 40, sm: 50, md: 55, lg: 60 },
          transform: 'rotate(-2deg)',
          transformOrigin: 'center',

        },
      }}>

        {/* Left gradient */}
        <Box
          sx={{
            position: 'absolute',
            // border:'solid black',
            top: 0,
            left: -1,
            width: '10%',
            height: '100%',
            background: modeColor ?
              'linear-gradient(to left, rgba(0, 0, 0, 0), rgba(161, 141, 188, 1))' :
              'linear-gradient(to left, rgba(0, 0, 0, 0), rgba(205,192,223,1))',
            zIndex: 5,
            pointerEvents: 'none',
          }}
        />

        {/* Right gradient */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: -1,
            width: '10%',
            height: '100%',
            background: modeColor ?
              'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(161, 141, 188, 1))' :
              'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(205,192,223,1))',
            zIndex: 5,
            pointerEvents: 'none',
          }}
        />


        <Box
          sx={{
            overflow: 'hidden',
            // backgroundColor: 'rgba(126, 50, 239, 1)',
            backgroundColor: ' #287972ff',

            whiteSpace: 'nowrap',
            // py: 1.1,
            mx: '1px',
            zIndex: 1,
            transform: 'rotate(2deg)',
            transformOrigin: 'center',

          }}
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
        >

          {/* Moving container */}
          <Box
            className="slider-track"
            sx={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              animation: 'slide 20s linear infinite',
            }}
          >
            {/* Duplicate text list for seamless loop */}
            {[...texts, ...texts].map((text, index) => (
              <Typography
                key={index}
                component="span"
                sx={{
                  display: 'flex',
                  mx: 5,
                  height: 'fit-content',
                  lineHeight: 'fit-content',
                  verticalAlign: 'middle',
                  fontWeight: '450',
                  textShadow: modeColor ? '3px 10px 10px black' : '3px 5px 10px rgba(203, 193, 193, 1)',
                  color: index % 2 === 0 ? modeColor ? 'white' : '#000000ff' : '#ffd700',
                  fontSize: {
                    xs: index % 2 === 0 ? 10 : 25,
                    sm: index % 2 === 0 ? 16 : 28,
                    md: index % 2 === 0 ? 18 : 35,
                    lg: index % 2 === 0 ? 18 : 40,
                  },
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>
        </Box>

      </Box>

    </>
  );
};

export default TextSlider;
