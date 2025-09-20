import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Tooltip } from '@mui/material';
import axios from 'axios';

import send from '../Assets/send1.png'
const Forms = () => {
  const [formData, setFormData] = useState(
    {
      name: '',
      email: '',
      message: ''
    });

  // // Handle form input changes//
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({...formData,[name]: value});
  // };

  // // Handle form submission//
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form data submission//
  //   console.log(formData);

  // };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/submit-form', formData);
      console.log('Server response:', response.data);
      alert('Form submitted and stored!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to store form data.');
    }
  };


  return (
    <>


        <Box
          height={{ lg: '100%', md: '450px', sm: 'auto', xs: '100%' }}
          width={{ lg: '80%', md: '400px', sm: '60%', xs: '80%' }}
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.26)',
            p: 1,
            px: 3,
            borderRadius: 2,
            boxShadow:' 10px 10px 10px rgba(0, 0, 0, 0.52)',

          '&:hover': {
          boxShadow:' 0px 0px 50px rgba(0, 0, 0, 0.69)',

          }

          }}
        >

          <Typography variant="h5" align="center" mt='20px' mb='30px' gutterBottom fontWeight='900'>
            Send a Message
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap={2}
            >
              <TextField
                color='black'
                label="Your Name"
                variant="outlined"
                // variant="filled"
                // variant="standard"
                fullWidth
                required
                type='text'
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                color='black'
                bgcolor='rgba(255, 255, 255, 0.26)'

                label="Your Email"
                variant="outlined"
                fullWidth
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                color='black'
                bgcolor='rgba(255, 255, 255, 0.26)'
                label="Your Message"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <Tooltip title={'send'} arrow>

              <Button
                variant="contained"
                type="submit"
                sx={{
                  mt: '20px',
                  px: '20px',
                  borderRadius: '10px',
                  bgcolor: 'rgb(0, 0, 2)',
                  fontWeight: '700',
                  boxShadow: '-5px -5px 15px rgba(247, 247, 247, 0.27)',
                  '&:hover': {
                    transform: 'scale(1.020)',
                    // bgcolor: 'rgba(18, 39, 39, 0.52)',
                    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.9)',
                  },
                  
                  
                }}>Submit <img style={{ marginLeft: '10px', height: '20px' }} src={send} alt="send" />
              </Button>
                </Tooltip>

            </Box>
          </form>
        </Box>



    </>
  );
};

export default Forms;










