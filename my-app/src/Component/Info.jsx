import React from 'react'
import Text from './Text';

import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import file from '../Assets/file.svg'

const Info = () => {
  return (
    <>
      {/* <Grid item lg={8} md={8} sm={12} xs={12} sx={{ textAlign: 'center', my: '10px', zIndex: '1', fontSize: { lg: '5rem', md: '3rem', sm: '3rem', xs: '2rem' } }}> */}
        <Typography variant='h2' sx={{ color: 'black', fontWeight: '900', fontSize: { lg: '3.2rem', md: '3rem', sm: '3rem', xs: '2rem' } }}>Hello</Typography>

        <Typography sx={{ color: 'black', fontSize: '10px' }}>people looking for inavation</Typography>
        <Typography variant='h4' sx={{ color: 'black', fontWeight: '900', mt: '15px' }}>

          <Text /> {/* //text change// */}
        </Typography>



        <Box

          sx={{ display: 'flex', gap:'15px', alignItems: 'center', justifyContent: 'center', my: '20px' }}
        >
          <Link to="res" style={{
            textDecoration: 'none',

          }}>
            <Typography
              sx={{
                color: 'black',
                textAlign: 'center',
                fontSize:{ xs:'12px',sm:'14px'},
                fontWeight: 400,
                borderRadius: '20px',
                border: '1px solid rgb(101, 100, 100)',
                p: '10px',
                px: '20px',
                pr:'35px',
                transition: 'all 0.3s ease',
                bgcolor: 'rgba(158, 153, 153, 0)',
                boxShadow: '3px 7px 10px 0px rgba(54, 59, 115, 0.45)',

                '&:hover': {
                  color: 'white',
                  border: '1px solid rgb(56, 91, 148)',
                  bgcolor: 'rgb(56, 91, 148)',
                  boxshadow: '3px 7px 10px 0px rgba(54, 59, 115, 0.77)',
                  transform:'scale(1.2)'

                },
                position:'relative'
              }}>
              Open CV’  
              <img style={{position:'absolute',bottom:'10px',marginLeft:'3px',height:'20px'}} src={file} alt="open" />
            </Typography>
          </Link>

          <Link to="contact" style={{
            textDecoration: 'none',

          }}>
            <Typography 
              sx={{
                color: 'white',
                textAlign: 'center',
                fontSize:{ xs:'12px',sm:'14px'},
                fontWeight: 400,
                borderRadius: '20px',
                border: '1px solid rgb(56, 91, 148)',
                p: '10px',
                px: '20px',
                bgcolor: 'rgb(56, 91, 148)',
                transition: 'all 0.3s ease',
                boxShadow: '3px 7px 10px 0px rgba(54, 59, 115, 0.45)',

                '&:hover': {
                  color: 'black',
                  border: '1px solid rgb(101, 100, 100)',
                  bgcolor: 'rgba(158, 153, 153, 0)',
                  boxshadow: '3px 7px 10px 0px rgba(54, 59, 115, 0.77)',
                  transform:'scale(1.2)',
                },
              }}>
              Contact Me
            </Typography>
          </Link>
        </Box>



      {/* </Grid> */}


    </>
  )
}

export default Info
