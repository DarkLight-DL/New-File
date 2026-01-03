
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

import Linkus from './Linkus';
import Aboutpic from './Aboutpic';
import AboutText from './AboutText';

const About = () => {
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
          About Me
        </Typography>
      </Box>

      {/* Main About Section */}
      <Grid
        container
        sx={{
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
        }}
      >
        <Grid item xs={12} md={4}>
          <Aboutpic />
        </Grid>

        <Grid item xs={12} md={7} sx={{justifyItems:'center',alignContent:'center',}} >
          <AboutText />
        </Grid>
      </Grid>

      {/* Contact / Linkus Section */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems:'center',
          mt: 6,
        }}
      >
        <Box
          sx={{
            height: '70px',
            width:{xs:'85%',sm:'90%',md:'80%', lg:'90%'},
            bgcolor: 'rgba(254, 254, 254, 0.12)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            px: 2,
            mb:2,
          }}
        >
          <Linkus />
        </Box>
      </Box>
    </>
  );
};

export default About;
