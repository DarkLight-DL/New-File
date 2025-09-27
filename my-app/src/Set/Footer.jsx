// import React from 'react'
// import { Box, Typography } from '@mui/material'

// const Footer = () => {
//     return (
//         <>

//         <Box sx={{
//             // bgcolor: 'rgb(5, 94, 196)',
//              height: '100px', width: '100%',
//              mt: '100px' 
//             }}>
//         </Box>

//         <Box sx={{
//             bgcolor: 'rgba(52, 136, 146, 0.36)',
//             height:'200px',
//             display:'flex',
//             justifyContent:'center',
//             alignItems:'center'
//         }}>
//             <Typography sx={{textAlign:'center',alignContent:'center'}}>
//                 Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with ❤️ by Asik Ahamed (●◡●) 

//             </Typography>

//         </Box>


//         </>
//     )
// }

// export default Footer










import React from 'react';
import { Box,
  //  Button,
   Typography } from '@mui/material';
// import { ReactComponent as Wave } from '../Assets/wave1.svg';
// import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
const Footer = () => {

// const handleScroll = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });

//   }
    return (
        <>
            {/* <Wave style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 0
                }} /> */}




            <Box sx={{
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '250px',
                width: '100%',
                position:'relative',
                borderTop:'solid',
            }}>
                {/* <Box  sx={{}}>
    
              <Button
                variant="contained"
                onClick={handleScroll}
                sx={{
                  m:0,
                  p:1,
                  minWidth:'0px',
                  borderRadius: '20px',
                  bgcolor: 'rgb(0, 0, 2)',
                  fontWeight: '700',
                  boxShadow: '-5px -5px 15px rgba(247, 247, 247, 0.12)',
                  position:'absolute',
                  top:50,
                  right:20,
                  '&:hover': {
                    transform: 'scale(1.020)',
                    bgcolor: 'rgba(0, 0, 0, 0.7)',
                    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.9)',
                  },


                }}>
                {/* }}>Submit <img style={{ marginLeft: '10px', height: '20px' }} src={send} alt="send" /> */}
                {/* <KeyboardDoubleArrowUpIcon sx={{ height: '20px',width:'20px' }}/>
              </Button>    
                </Box>  */}

                <Typography sx={{ textAlign: 'center', color: 'wheat',mt:'20px'}}>
                    Copyright &copy; {new Date().getFullYear()} All rights reserved |
                    Made with ❤️ by Asik Ahamed (●◡●)
                </Typography>

            </Box>
        </>
    );
};

export default Footer;
