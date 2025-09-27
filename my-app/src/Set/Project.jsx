import React from 'react'
// import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Box, Container, Typography, } from '@mui/material'
import Data from './Data'



// const StyledLink = styled(Link)`
//   text-decoration: none;
//   text-align: center;
//   font-size: 14px;
//   font-weight: 400;
//   &:hover {
//     font-weight: 450;
//     background-color: rgb(240, 68, 68);
//     color: black;
//   }

//   color: white;
//   background-color: orange;
//   border-radius: 5px;
//   padding: 5px;
//   padding-bottom: 8px;
//   padding-inline: 17px;
//   transition: color 0.3s ease;
// `;






const Project = () => {
  return (
    <>

      <Box sx={{ pt: { xs: '40px', sm: '40px', md: '40px', lg: '45px' } }}>
        <Container>

          <Typography
            variant="h2"
            sx={{
                      bgcolor:'blue',

              background: 'rgb(0,0,0)',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: '600',

            }}
          >
            Project
          </Typography>
          <Box>
            <Typography
              variant="subtitle1"
              align="center"
              sx={{ color: 'rgb(67, 66, 66)', my:{xs: 2,sm:5 },mx:{xs:'10px',sm:'100px'},fontSize:{xs:10,sm:16,md:18}}}
            >
              Here are some projects built with HTML, CSS, JavaScript, Bootstrap, Material-UI (MUI), and React.js.
              The backend is integrated using Axios for JSON data handling and user-friendly responsive UI design.
            </Typography>
          </Box>
        </Container>

        <Data />
      </Box>



      <Box sx={{ mx: '20px', height: '50px', bgcolor: 'rgb(235, 226, 226)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* <StyledLink  to="/contact">

          For More Details Contact Us
        </StyledLink> */}


        <Link to='contact' style={{ textDecoration: 'none' }}>
          <Typography
            sx={{
              color: 'white',
              textAlign: 'center',
              fontSize: { xs: '10px', sm: '14px' },
              fontWeight: 400,
              bgcolor: 'rgb(56, 91, 148)',
              borderRadius: '20px',
              border: '1px solid #9e9999',
              p: '5px',
              px: '20px',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: 'rgba(158, 153, 153, 0)',
                color: 'black',
                fontWeight: 450,
              },
            }}>

            More Details Contact Us
          </Typography>
        </Link>

      </Box>
      <Box height='50px'>
      </Box>

    </>
  )
}

export default Project
