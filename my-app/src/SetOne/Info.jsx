import React, { useContext } from 'react'
import Text from './Text';
// import TextAnimation from './TextAnimation';

import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import { ReactComponent as File } from '../Assets/file.svg';
import { ReactComponent as Person } from '../Assets/person.svg';


import ThemeContext from './ThemeContext';


const Info = () => {
  const { modeColor } = useContext(ThemeContext)
  return (
    <>
    <Box sx={{
      // bgcolor:'red',
      width:'100%',
      justifyItems:'flex-center',
      alignContent:'center',
    }}>

      <Box sx={{ display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
<Box sx={{ display: 'flex',justifyContent: 'center', alignItems: 'center', gap: 1 }} >

        <Typography variant='h4' sx={{p: 0, m: 0, color: modeColor ? 'black' : 'white', fontWeight: '900', fontSize: { lg: '3.2rem', md: '3rem', sm: '3rem', xs: '2rem' } }}>
          Hi, it's
        </Typography>

        <Typography variant='h4' sx={{ p: 0, m: 0, color: modeColor ? 'white' : 'black', fontWeight: '900', fontSize: { lg: '3.2rem', md: '3rem', sm: '3rem', xs: '2rem' } }}>
          Asik
        </Typography>

</Box>
      
      {/* <span style={{justifyItems:'center',alignContent:'center'}}> <TextAnimation/></span>  */}

      <Text /> {/* //text change// */}

      <Typography sx={{ mt: 1, color: 'black', fontSize: '10px' }}>people looking for inavation</Typography>
      </Box>




      <Box

        sx={{ display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'center', my: '20px' }}
      >
        <Link to="res" style={{
          textDecoration: 'none',

        }}>



          <Typography
            sx={{
              color: 'black',
              textAlign: 'center',
              fontSize: { xs: '12px', sm: '14px' },
              fontWeight: 400,
              borderRadius: '20px',
              border: '1px solid rgb(101, 100, 100)',
              padding: '10px 15px 10px 20px',
              transition: 'all 0.3s ease',
              bgcolor: 'rgba(158, 153, 153, 0)',
              boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.42)',
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1px',

              '&:hover': {

                color:  'white',
                border: '1px solid rgb(56, 91, 148)',
                bgcolor: 'rgb(56, 91, 148)',
                boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.8)',
                transform: 'scale(1.2)',
                '& svg': {
                  filter:'invert(1)',
                },
              },
            }}
          >
            Open CV’

            <Box
              component={File}
              sx={{
                height: '20px',
                width: '20px',
                filter: 'invert(0)',
                transition: 'filter 0.3s ease',
              }}
            />
          </Typography>

        </Link>

        <Link to="contact" style={{
          textDecoration: 'none',

        }}>

          <Typography
            sx={{
              color: 'white',
              textAlign: 'center',
              fontSize: { xs: '12px', sm: '14px' },
              fontWeight: 400,
              borderRadius: '20px',
              border: '1px solid rgb(101, 100, 100)',
              padding: '10px 15px 10px 20px',
              transition: 'all 0.3s ease',
              bgcolor: 'rgb(56, 91, 148)',
              boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.42)',
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1px',

              '&:hover': {

                color: 'black',
                border: '1px solid rgb(56, 91, 148)',
                bgcolor: 'rgba(158, 153, 153, 0)',
                boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.8)',
                transform: 'scale(1.2)',
                '& svg': {
                  filter: 'invert(0)',
                },
              },
            }}
          >
            Contact
            <Box
              component={Person}
              sx={{
                height: '20px',
                width: '20px',
                filter: 'invert(1)',
                transition: 'filter 0.3s ease',
              }}
            />
          </Typography>


        </Link>
      </Box>



    </Box>


    </>
  )
}

export default Info
