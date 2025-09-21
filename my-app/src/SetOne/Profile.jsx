// import React from 'react'
// import { Box } from '@mui/material'
// import pic from '../Assets/pic.jpg'
// const Profile = () => {
//   return (
//     <>


//         {/* <Box
//           component="img"
//           src={pic}
//           alt="Profile picture of the frontend developer"
//           sx={{
//             height: { xs: '250px', sm: '300px', md: '300px', lg: '50vh', xl: '40vh' },
//             width: { xs: '250px', sm: '300px', md: '280px', lg: '310px' },
//             // objectFit: 'cover',
//             borderRadius: '5%',
//             marginInline: 'auto',
//             display: 'block'
//           }}
//         /> */}

//         <Box>
//           <Box
//             component="img"
//             src={pic}
//             alt="Profile picture of the frontend developer"
//             sx={{
//               height: { xs: '250px', sm: '300px', md: '300px', lg: '50vh', xl: '40vh' },
//               width: { xs: '250px', sm: '300px', md: '280px', lg: '310px' },
//               // objectFit: 'cover',
//               borderRadius: '5%',
//               marginInline: 'auto',
//               display: 'block'
//             }}
//           />
//         </Box>

//     </>
//   )
// }

// export default Profile










import React from 'react'
import { Box } from '@mui/material';
import pic from '../Assets/pic.jpg';

const Profile = () => {
  return (
    <>
          <Box
      component="section"
      sx={{
        display: 'flex',
        justifyContent: {xs:'center',sm:'center', md:'start', lg:'start'},
        alignItems: 'center',
        // height: { xs: 'auto', md: '60vh' },
        height:'100%',
        width: '100%',
        py: { xs: 2, sm: 3, md: 0 },
      }}
    >
      <Box>
        <Box
          component="img"
          src={pic}
          alt="Frontend developer profile picture"
          sx={{
            boxShadow: '0 0 20px 5px rgba(0, 123, 255, 0.6)',
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

export default Profile



