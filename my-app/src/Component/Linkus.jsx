
import React from 'react';
import { Box, Button, Tooltip } from '@mui/material';

import email from '../Assets/email.svg';
import linkedin from '../Assets/linkedin.svg';
import github from '../Assets/github.svg';

const socials = [
  {
    href: 'mailto:your.email@example.com',
    icon: email,
    alt: 'Email',
    aria: 'Send Email',
    tooltip: 'Email Me',
  },
  {
    href: 'https://linkedin.com/',
    icon: linkedin,
    alt: 'LinkedIn',
    aria: 'Visit LinkedIn Profile',
    tooltip: 'Open LinkedIn',
  },
  {
    href: 'https://github.com/',
    icon: github,
    alt: 'GitHub',
    aria: 'Visit GitHub Profile',
    tooltip: 'Open GitHub',
    style: { backgroundColor: 'black', borderRadius: '50%' },
  },
];

const Linkus = () => {
  const iconBoxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '12px',
    height: '40px',
    width: '40px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.73)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      background: 'linear-gradient(135deg, rgba(215, 221, 232, 0.22), #a6b1c4)',
      boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.2)',
      transform: 'translateY(-2px)',
    },
  };

  return (
    <Box display="flex" gap={2} justifyContent="center">
      {socials.map(({ href, icon, alt, aria, tooltip, style = {} }, index) => (
        <Tooltip key={index} title={tooltip} arrow>
          <Box sx={iconBoxStyle}>
            <Button
              component="a"
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={aria}
              sx={{ minWidth: 0, padding: 1}}
            >
              <img src={icon} alt={alt} height="24px" style={style} />
            </Button>
          </Box>
        </Tooltip>
      ))}
    </Box>
  );
};

export default Linkus;
