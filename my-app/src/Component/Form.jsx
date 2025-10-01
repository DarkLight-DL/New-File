import React from 'react';
import { Box, Typography, Tooltip } from '@mui/material';
import Linkus from './Linkus';

import { ReactComponent as Gmail } from '../Assets/mail.svg';
import { ReactComponent as Phone } from '../Assets/phone.svg';
import { ReactComponent as Location } from '../Assets/location.svg';


// Common icon style
const iconSx = {
  height:'40px',
  width:'40px',
  // fill:'white',
  fontSize: { xs: '20px', sm: '28px' },
  bgcolor: 'rgba(10, 10, 10, 0.39)',
  borderRadius: '8px',

};

// Contact method data
const contactMethods = [
  {
    type: 'Email',
    tooltip: 'Email us',
    Icon: Gmail,
    href: 'mailto:a.asikahamedm@gmail.com',
    TextShow : 'a.asikahamedm@gmail.com',
  },
  {
    type: 'Phone',
    tooltip: 'Call us',
    Icon: Phone,
    href: 'tel:+919500302681',
    TextShow: '+91 9500302681',
  },
  {
    type: 'Location',
    tooltip: 'Location',
    Icon: Location,
    href: 'https://www.google.com/maps/place/Kanniyakumari',
    // href: 'https://www.google.com/maps/place/Kanniyakumari,thuckalay',
    TextShow: 'Kanniyakumari, IN',
  },
];

const Form = () => {
  return (
    <Box
      sx={{
        p: 3,
        height: { lg: '360px', md: '350px', sm: 'auto', xs: '80%' },
        width: { lg: '300px', md: '280px', sm: '50%', xs: '80%' },
        background: 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)',
        borderRadius: '16px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        fontFamily: 'Poppins, sans-serif',
        transition: 'all 0.3s ease-in-out',
        boxShadow: '-10px 10px 10px rgba(0, 0, 0, 0.52)',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.69)',
        },
      }}
    >
      {/* Heading */}
      <Typography
        variant="h5"
        mt={2}
        mb={2}
        sx={{
          color: '#ffffff',
          fontWeight: 600,
          width: '100%',
          borderBottom: '2px solid rgba(255,255,255,0.3)',
          pb: 1,
        }}
      >
        Contact Info
      </Typography>

      {/* Contact Methods */}
      {contactMethods.map(({ type, tooltip, Icon, href, TextShow }) => (
        <Tooltip title={tooltip} placement="top" key={type}>
          <Box
            sx={{
              p: 1,
              gap: 1,
              width: '90%',
              display: 'flex',
              alignItems: 'center',
              borderRadius: '8px',
              transition: '0.3s',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            {/* <Icon sx={iconSx} /> */}
             <Box component={Icon} sx={iconSx} />
            <Box
              component="a"
              href={href}
              sx={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >

              <Typography

                sx={{
                  fontSize: { xs: '8px', sm: '10px' },
                }}
              >
                {type}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                                  textDecoration: 'none',
                color: 'inherit',
                '&:hover': {
                  color: '#aaddff',
                  textDecoration: 'underline',
                },
                  fontSize: { xs: '10px', sm: '12px' },
                  fontWeight: 500,
                }}
              >
                {TextShow}
              </Typography>
            </Box>
          </Box>
        </Tooltip>
      ))}

      {/* Social Media Section */}
      <Box sx={{ width: '100%' }}>
        <Typography
          sx={{
            mt: '10px',
            color:'rgba(239, 238, 239, 1)',
            borderBottom: '2px solid rgba(255,255,255,0.3)',
            pb: 1,
          }}
        >
          Follow On
        </Typography>

        <Box
          sx={{
            height: '50px',
            bgcolor: 'rgba(254, 254, 254, 0.12)',
            borderRadius: '10px',
            my: 2,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            px: 2,
          }}
        >
          <Linkus />
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
