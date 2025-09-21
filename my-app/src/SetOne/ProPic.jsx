// import React from 'react'
// import { Box } from '@mui/material';
// import skill from '../Assets/skill.jpg';

// const ProPic = () => {
//   return (
//     <>
//          <Box
//       component="section"
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         // height: { xs: 'auto', md: '60vh' },
//         height:'100%',
//         width: '100%',
//         py: { xs: 2, sm: 3, md: 0 },
//       }}
//     >
//       <Box>
//         <Box
//           component="img"
//           src={skill}
//           alt="Frontend developer profile picture"
//           sx={{
//             aspectRatio: '5 / 5',
//             height: 'auto',
//             width: '100%',
//             maxWidth: {
//               xs: '250px',
//               sm: '300px',
//               md: '280px',
//               lg: '310px',
//             },
//             objectFit: 'cover',
//             borderRadius: '5%',
//             display: 'block',
//             mx: 'auto',
//           }}
//         />
//       </Box>
//     </Box>
//     </>
//   )
// }

// export default ProPic














import React, { useState } from 'react';
import { Box } from '@mui/material';
import skill from '../Assets/skill.jpg';

const ProPic = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        py: { xs: 2, sm: 3, md: 0 },
      }}
    >
      <Box>
        <Box
          component="img"
          src={skill}
          alt="Frontend developer profile picture"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          sx={{
            aspectRatio: '5 / 5',
            height: 'auto',
            width: '100%',
            maxWidth: {
              xs: '250px',
              sm: '300px',
              md: '280px',
              lg: '310px',
            },
            objectFit: 'cover',
            borderRadius: '5%',
            display: 'block',
            mx: 'auto',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        />
      </Box>
    </Box>
  );
};

export default ProPic;
