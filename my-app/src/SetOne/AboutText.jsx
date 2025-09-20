import React from 'react';
import { Box, List, ListItem, ListItemText, Typography, Avatar } from '@mui/material';
import Frontend from '../Assets/frontend.png';

const Points = [
  {
    text: "I am a Frontend Developer who loves building websites that are interactive and easy to use. I focus on writing clean code and creating beautiful designs that help turn ideas into reality. I'm always eager to learn and improve my skills.",
    pic: Frontend,
  },
  {
    text: "My goal is to create user-friendly interfaces with modern design and performance in mind. I enjoy working with React and learning new frameworks.",
    pic: Frontend,
  },
  {
    text: "I believe in continuous improvement, writing scalable code, and contributing to open-source when possible.",
    pic: Frontend,
  },
];

const AboutText = () => {
  return (
    <Box
      sx={{
        bgcolor: '#f5f5f541',
        borderRadius: '10px',
        height: '100%',
        width:{xs:'97%',sm:'90%',md:'99%', lg:'99%'},
      }}
    >
      <List>
        {Points.map((point, index) => (
          <ListItem key={index} alignItems="flex-start" sx={{ pb: 1 }}>
            <Box sx={{ mr: 2 }}>
              <Avatar
                src={point.pic}
                alt="Frontend"
                sx={{
                  width: 30,
                  height: 30,
                  bgcolor: 'black',
                  borderRadius: 2,
                  boxShadow: '5px 5px 10px rgba(0, 0, 0, 1)',
                }}
                variant="rounded"
              />
            </Box>
            <ListItemText
              primary={
                <Typography
                  color="textPrimary"
                  sx={{
                    fontSize: {
                      xs: '0.6rem',
                      sm: '1rem',
                      md: '1.1rem',
                      lg: '1.2rem',
                    },
                    lineHeight: 1.6,
                  }}
                >
                  {point.text}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AboutText;
