// import { Grid } from '@mui/material'
// import React from 'react'
// import Info from './Info'
// import Profile from './Profile'

// const Hero = () => {
//     return (
//         <>
//             <Grid container sx={{ py: '0px', pt: { xs: '60px', sm: '10px', md: '80px', lg: '100px' } }}>
//                 <Info />

//                     <Profile />







//             </Grid>

//         </>
//     )
// }

// export default Hero






import React from 'react';
import { Grid } from '@mui/material';
import Info from './Info';
import Profile from './Profile';

const Hero = () => {
    return (
        <Grid container sx={{ height:'100vh',py: 0,pt:'60px'}}>

            <Grid item xs={12} sm={12} md={7} lg={7} sx={{ justifyItems:'center',alignContent:'center', textAlign: 'center', my: '10px', zIndex: '1', fontSize: { lg: '5rem', md: '3rem', sm: '3rem', xs: '2rem' } }}>

                <Info />
            </Grid>


            <Grid item xs={12} sm={12} md={5} lg={5}
                sx={{
                    // bgcolor: 'red',
                    display: 'flex',
                    justifyContent: { xs: 'center', sm: 'center', md: 'center', lg: 'left', xl: 'left' },
                    alignItems: 'center',


                }}>

                <Profile />
            </Grid>

        </Grid>
    );
};

export default Hero;
