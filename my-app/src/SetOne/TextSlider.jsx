// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const texts = [
//   'Frontend Developer', '⁕',
//   'Backend Developer', '⁕',
//   'React Js Developer', '⁕',
//   'MERN Stack Developer', '⁕'
// ];

// const sliderStyles = {
//   overflow: 'hidden',
//   backgroundColor: 'rgba(167, 142, 204, 1)',
//   whiteSpace: 'nowrap',
//   position: 'relative',
//   marginTop:'30px',
//   marginBottom:'20px',
//   py:'15px',
// };

// const gradientLeft = {
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   width: '250px',
//   height: '100%',
//   background: 'linear-gradient(to left , rgba(10, 10, 10, 0),rgba(205, 192, 223, 1))',
//   zIndex: 2,
//   pointerEvents: 'none',
// };

// const gradientRight = {
//   position: 'absolute',
//   top: 0,
//   right: 0,
//   width: '250px',
//   height: '100%',
//   background: 'linear-gradient(to right , rgba(10, 10, 10, 0), rgba(205, 192, 223, 1))',
//   zIndex: 2,
//   pointerEvents: 'none',
// };

// const sliderTrackStyles = {
//   display: 'inline-block',
//   animation: 'slide 35s linear infinite',
// };

// const textItemStyles = {
//   display: 'inline-block',
//   margin: '0 20px',
//   height: 'fit-content',
//   lineHeight: 'fit-content',
//   verticalAlign: 'middle',
//   fontSize:{xs:10,sm:16,md:18}
// };

// const keyframesStyle = `
// @keyframes slide {
//   from {
//     transform: translateX(0);
//   }
//   to {
//     transform: translateX(-100%);
//   }
// }
// `;

// const TextSlider = () => {
//   const handlePause = (e) => {
//     const tracks = e.currentTarget.querySelectorAll('.slider-track');
//     tracks.forEach(track => {
//       track.style.animationPlayState = 'paused';
//     });
//   };

//   const handleResume = (e) => {
//     const tracks = e.currentTarget.querySelectorAll('.slider-track');
//     tracks.forEach(track => {
//       track.style.animationPlayState = 'running';
//     });
//   };

//   return (
//     <Box sx={sliderStyles} onMouseEnter={handlePause} onMouseLeave={handleResume}>
//       {/* Inject keyframes */}
//       <style>{keyframesStyle}</style>

//       {/* Gradient overlays */}
//       <Box sx={gradientLeft}></Box>
//       <Box sx={gradientRight}></Box>

//       {/* Two identical tracks for seamless loop */}
//       <Box className="slider-track" sx={sliderTrackStyles}>
//         {texts.map((text, index) => (
//           <Typography key={index} component="span" sx={textItemStyles}>
//             {text}
//           </Typography>
//         ))}
//       </Box>

//       <Box className="slider-track" sx={sliderTrackStyles}>
//         {texts.map((text, index) => (
//           <Typography key={`copy-${index}`} component="span" sx={textItemStyles}>
//             {text}
//           </Typography>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default TextSlider;
















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
        mt: { xs: 1, sm: 2, md: 3, lg: 3 },
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        py: 3,
        position: 'relative',

        '&::before': {
          content: '""',
          position: 'absolute',
          backgroundColor: 'rgba(42, 122, 122, 1)',

          top: 25,
          right: 0,
          width: '100%',
          height: 50,
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
            left: 0,
            width: '20%',
            height: '100%',
            background: modeColor?
            'linear-gradient(to left, rgba(0, 0, 0, 0), rgba(161, 141, 188, 1))':
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
            right: 0,
            width: '20%',
            height: '100%',
            background: modeColor?
            'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(161, 141, 188, 1))':
            'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(205,192,223,1))',
            zIndex: 5,
            pointerEvents: 'none',
          }}
        />


        <Box
          sx={{
            overflow: 'hidden',
            backgroundColor: 'rgba(126, 50, 239, 1)',
            whiteSpace: 'nowrap',
            py: 1.8,
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
              animation: 'slide 35s linear infinite',
            }}
          >
            {/* Duplicate text list for seamless loop */}
            {[...texts, ...texts].map((text, index) => (
              <Typography
                key={index}
                component="span"
                sx={{
                  display: 'inline-block',
                  mx: 1.5,
                  height: 'fit-content',
                  lineHeight: 'fit-content',
                  verticalAlign: 'middle',
                  fontWeight: '450',
                  fontSize: {
                    xs: 10,
                    sm: 16,
                    md: 18,
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
