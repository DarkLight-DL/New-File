// import React from 'react';
// import { Grid, Container ,Typography,Box} from '@mui/material';


// import Skills1 from './ProBar';
// import ProPic from './ProPic';



// const Skills = () => {
//   return (

//     // <Container>

//     //   <Box sx={{mt:'50px',pt:{xs:'20px', sm:'20px',md:'20px',lg:'20px'}}}>

//     //   <Typography 
//     //       variant="h2" 
//     //       sx={{
//     //         background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 10%, rgba(252,176,69,1) 17%)',
//     //         backgroundClip: 'text',
//     //         color: 'transparent',
//     //         fontWeight: '600',
//     //       }}
//     //       >
//     //       Skills 
//     //   </Typography>
//     //   </Box>


//     //   <Grid container alignItems="center" justifyContent="center" >
//     //    <ProPic/>
//     //    <Skills1/>
//     //   </Grid>

//     //   <Box height='10vh'>

//     //   </Box>

//     // </Container>





//       <Container >
//           <Box sx={{pt:{xs:'20px', sm:'20px',md:'20px',lg:'20px'},height: {xs:'800px',sm:'800px',md:'550px',lg:'550px'} }}>
//             <Typography 
//               variant="h2" 
//               sx={{
//                 background: 'rgb(0,0,0)',
//                 backgroundClip: 'text',
//                 color: 'transparent',
//                 fontWeight: '600',
//                 mb: '10px' ,
//                 mt: '50px',
//               }}
//             >
//               skills
//             </Typography>

//             <Grid container sx={{
//               alignItems:{lg:'flex-start'}, justifyContent:'space-around'
//             }}>
//               {/* <Profile />
//               <Intro/> */}

//                       <ProPic/>
//         <Skills1/>
//             </Grid>

//           </Box>

//                 <Box height='10vh'>

//                 </Box>
//         </Container>


//   );
// };

// export default Skills;





import React from 'react'
import { Grid, Typography, Box } from '@mui/material';


import Skills1 from './ProBar';
import ProPic from './ProPic';



const Skills = () => {
  return (
    <>

      {/* Section Title */}
      <Box sx={{ pt: { xs: 4, sm: 5, md: 6 }, px: { xs: 2, sm: 4, md: 6 } }}>
        <Typography
          variant="h3"
          sx={{
            background: 'linear-gradient(to right, #000, #333)',
            backgroundClip: 'text',
            color: 'transparent',
            fontWeight: '600',
            mb: 4,
          }}
        >
          Skills
        </Typography>
      </Box>

      {/* Main About Section */}
      <Grid
        container
        sx={{
          mb:'50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid item xs={12} md={4}>
          <ProPic />
        </Grid>

        <Grid item xs={12} md={8} >
          <Skills1 />
        </Grid>
      </Grid>
      {/* <Box height='20vh' /> */}

    </>
  )
}

export default Skills
