import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Form from './Form'
import Forms from './Forms'

const Contact = () => {
  return (
    <>
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
          Get in Touch
        </Typography>
      </Box>


        <Grid container rowGap={1} mb='50px' >

          <Grid item lg={5} md={6} sm={12} xs={12}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent:'center',
              // justifyContent: {xs: 'center',sm: 'center',md: 'flex-end',lg: 'flex-end',},
            }}
          >

            <Form />
          </Grid>

          <Grid item lg={7} md={6} sm={12} xs={12} 
          sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent:'center' ,

          // justifyContent: { lg: 'left', md: 'left', sm: 'center', xs: 'center' } 
          }}>
            <Forms />
          </Grid>



        </Grid>


    </>
  )
}

export default Contact
