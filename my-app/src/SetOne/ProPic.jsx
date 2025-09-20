// import React from 'react'
// import { Grid } from '@mui/material';


// import skill from '../Assets/skill.jpg';

// const ProPic = () => {
//   return (
//     <>


//       <Grid item lg={4} md={4} sm={12} xs={12} sx={{ zIndex: '1', height: '350px', width: '350px', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         <img style={{ height: { lg: '85vh', xl: '35vh' }, width: '300px', objectFit: 'cover', borderRadius: '5%', marginInline: '20px' }} src={skill} alt=" profile" />
//       </Grid>

//     </>
//   )
// }

// export default ProPic





import React from 'react'
import { Box } from '@mui/material';
import skill from '../Assets/skill.jpg';

const ProPic = () => {
  return (
    <>
         <Box
      component="section"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: { xs: 'auto', md: '60vh' },
        width: '100%',
        py: { xs: 2, sm: 3, md: 0 },
      }}
    >
      <Box>
        <Box
          component="img"
          src={skill}
          alt="Frontend developer profile picture"
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
          }}
        />
      </Box>
    </Box>
    </>
  )
}

export default ProPic







// import React from 'react';
// import { Box } from '@mui/material';
// import pic from '../Assets/pic.jpg';

// const Aboutpic = () => {
//   return (
//     <Box
//       component="section"
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: { xs: 'auto', md: '60vh' },
//         width: '100%',
//         py: { xs: 2, sm: 3, md: 0 },
//       }}
//     >
//       <Box>
//         <Box
//           component="img"
//           src={pic}
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
//   );
// };

// export default Aboutpic;
