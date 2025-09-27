// import React, { useContext, useState } from 'react';
// import { Box, TextField, Button, Typography, Tooltip, Snackbar, Alert } from '@mui/material';
// import send from '../Assets/send1.png';
// import ThemeContext from './ThemeContext';

// const Forms = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [status, setStatus] = useState(null); // null | 'success' | 'error'
//   const [loading, setLoading] = useState(false);
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const {modeColor}=useContext(ThemeContext)
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setStatus(null);

//     try {
//       const response = await fetch('https://formspree.io/f/xjkenlej', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setStatus('success');
//         setFormData({ name: '', email: '', message: '' }); // reset form
//       } else {
//         setStatus('error');
//       }
//     } catch (error) {
//       setStatus('error');
//     }

//     setSnackbarOpen(true); // show snackbar alert
//     setLoading(false);
//   };

//   const handleSnackbarClose = (event, reason) => {
//     if (reason === 'clickaway') return;
//     setSnackbarOpen(false);
//   };

//   return (
//     <Box
//       height={{ lg: '100%', md: '450px', sm: 'auto', xs: '100%' }}
//       width={{ lg: '80%', md: '400px', sm: '60%', xs: '80%' }}
//       sx={{
//         bgcolor: 'rgba(255, 255, 255, 0.26)',
//         p: 1,
//         px: 3,
//         borderRadius: 2,
//         boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.52)',
//         '&:hover': {
//           boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.69)',
//         },
//       }}
//     >
//       <Typography variant="h5" align="center" mt="25px" mb="20px" gutterBottom fontWeight="900">
//         Send a Message
//       </Typography>

//       <form onSubmit={handleSubmit}>
//         <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={2}>
//           {/* Honeypot field to prevent spam */}
//           <input type="text" name="_gotcha" style={{ display: 'none' }} />

//           <TextField
//             color="black"
//             label="Your Name"
//             variant="outlined"
//             fullWidth
//             required
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <TextField
//             color="black"
//             label="Your Email"
//             variant="outlined"
//             fullWidth
//             required
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <TextField
//             color="black"
//             label="Your Message"
//             variant="outlined"
//             fullWidth
//             required
//             multiline
//             rows={4}
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//           />

//           <Tooltip title="Send" arrow>
//             <Button
//               variant="contained"
//               type="submit"
//               disabled={loading}
//               sx={{
//                 mt: '10px',
//                 px: '20px',
//                 borderRadius: '10px',
//                 bgcolor: 'rgb(0, 0, 2)',
//                 fontWeight: '700',
//                 boxShadow: '-5px -5px 15px rgba(247, 247, 247, 0.27)',
//                 '&:hover': {
//                   transform: 'scale(1.020)',
//                   boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.9)',
//                 },
//               }}
//             >
//               {loading ? 'Sending...' : 'Submit'}
//               <img style={{ marginLeft: '10px', height: '20px' }} src={send} alt="send" />
//             </Button>
//           </Tooltip>
//         </Box>
//       </form>

//       {/* Snackbar Alert */}
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={400}
//         onClose={handleSnackbarClose}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}

//       >
//         {/* <Alert
//           onClose={handleSnackbarClose}
//           severity={status === 'success' ? 'success' : 'error'}
//           sx={{
//             color: 'black',
//             bgcolor: 'rgba(255, 255, 255, 0.2)',
//             borderRadius: '16px',
//             boxShadow: '0 2px 5px rgba(0, 0, 0, 1)',
//             backdropFilter: 'blur(2px)',
//             WebkitBackdropFilter: 'blur(2px)',
//             border: '1px solid rgba(255, 255, 255, 0.18)',
//           }}        >
//            {status === 'success' ? (
//              <>
//                Message sent successfully. <br />
//                We'll be in touch soon.
//              </>
//            ) : (
//              <>
//                Oops! Something went wrong. <br />
//                Please try again.
//              </>
//            )}
//          </Alert> */}





//                  <Alert
//           onClose={handleSnackbarClose}
//           severity={status === 'success' ? 'success' : 'error'}
//           sx={{
//             color: modeColor ? 'rgba(243, 243, 243, 1)' : 'black',
//             bgcolor: modeColor ?  'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.2)',
//             borderRadius: '16px',
//             boxShadow: modeColor ? '0 2px 5px rgba(255, 255, 255, 0.8)':'0 2px 5px rgba(0, 0, 0, 1)'  ,
//             backdropFilter: 'blur(2px)',
//             WebkitBackdropFilter: 'blur(2px)',
//             border: modeColor ?  '1px solid rgba(255,255,255,0.3)' :'1px solid rgba(255, 255, 255, 0.18)',
//           }}
//         >
//           {status === 'success' ? (
//             <>
//               Message sent successfully. <br />
//               We'll be in touch soon.
//             </>
//           ) : (
//             <>
//               Oops! Something went wrong. <br />
//               Please try again.
//             </>
//           )}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };

// export default Forms;
































import React, { useState, useContext } from 'react';
import { Box, TextField, Button, Typography, Tooltip, Snackbar, Alert } from '@mui/material';
import send from '../Assets/send1.png';
import ThemeContext from '../Component/ThemeContext';  

const Forms = () => {
  const { modeColor } = useContext(ThemeContext); 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xjkenlej', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }

    setSnackbarOpen(true);
    setLoading(false);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  return (
    <Box
      height={{ lg: '98%', md: '450px', sm: 'auto', xs: '99%' }}
      width={{ lg: '80%', md: '400px', sm: '60%', xs: '80%' }}
      sx={{
        bgcolor:'rgba(255, 255, 255, 0.26)',
        p: 1,
        px: 3,
        borderRadius: 2,
        boxShadow: modeColor
        ? '10px 10px 20px rgba(0, 0, 0, 0.2)'
          : '10px 10px 10px rgba(0, 0, 0, 0.52)',
        '&:hover': {
          boxShadow:'0px 0px 50px rgba(0, 0, 0, 0.69)',
        },
      }}
    >
      <Typography
        variant="h5"
        align="center"
        mt="15px"
        mb="20px"
        gutterBottom
        fontWeight="900"
        sx={{ color: modeColor ? 'rgba(243, 243, 243, 1)' : 'black' }}
      >
        Send a Message
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={2}>
          {/* Honeypot field */}
          <input type="text" name="_gotcha" style={{ display: 'none' }} />

          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            InputLabelProps={{ style: { color: modeColor ? 'rgba(243, 243, 243, 1)' : 'black' } }}
            sx={{
              input: { color: modeColor ? 'rgba(243, 243, 243, 1)' : 'black'  },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: modeColor ? 'rgba(243, 243, 243, 1)' : 'black' },
                '&:hover fieldset': { borderColor: modeColor ? 'rgba(243, 243, 243, 1)' : 'black' },
                '&.Mui-focused fieldset': { borderColor: modeColor ? 'rgba(243, 243, 243, 1)' : 'black'  },
              },
            }}
          />
          <TextField
            color="primary"
            label="Your Email"
            variant="outlined"
            fullWidth
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            InputLabelProps={{ style: { color: modeColor ? 'rgba(243, 243, 243, 1)' : 'black' } }}
            sx={{
              input: { color: modeColor ? 'rgba(243, 243, 243, 1)' : 'black' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: modeColor ? 'rgba(243, 243, 243, 1)' : 'black' },
                '&:hover fieldset': { borderColor: modeColor ? 'rgba(243, 243, 243, 1)' : 'black' },
                '&.Mui-focused fieldset': { borderColor: modeColor ? 'rgba(243, 243, 243, 1)' : 'black' },
              },
            }}
          />
          <TextField
            color="primary"
            label="Your Message"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            InputLabelProps={{ style: { color: modeColor ? 'rgba(243, 243, 243, 1)' : 'black'  } }}
            sx={{
              textarea: { color: modeColor ? 'rgba(243, 243, 243, 1)' : 'black'  },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: modeColor ? 'rgba(243, 243, 243, 1)' : 'black' },
                '&:hover fieldset': { borderColor: modeColor ? 'rgba(243, 243, 243, 1)' : 'black'  },
                '&.Mui-focused fieldset': { borderColor: modeColor ? 'rgba(243, 243, 243, 1)' : 'black'  },
              },
            }}
          />

          <Tooltip title="Send" arrow>
            <Button
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{
                mt: '10px',
                px: '20px',
                borderRadius: '10px',
                bgcolor:'rgb(0, 0, 2)' ,
                color:'rgba(243, 243, 243, 1)',
                fontWeight: '700',
                boxShadow: modeColor
                ? ' 2px 5px 5px rgba(238, 238, 248, 0.63)'
                  : ' 5px 5px 10px rgba(23, 22, 22, 1)',
                '&:hover': {
                  transform: 'scale(1.020)',
                  boxShadow: modeColor
                  ? '2px 5px 15px rgba(255, 255, 255, 0.9)'
                    : '2px 5px 15px rgba(0, 0, 0, 0.9)',
                },
              }}
            >
              {loading ? 'Sending...' : 'Submit'}
              <Box component={'img'}>
                
              </Box>
              <img style={{ marginLeft: '10px', height: '20px' }} src={send} alt="send" />
            </Button>
          </Tooltip>
        </Box>
      </form>

      {/* Snackbar Alert */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={status === 'success' ? 'success' : 'error'}
          sx={{
            color: modeColor ? 'rgba(243, 243, 243, 1)' : 'black',
            bgcolor: modeColor ?  'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            boxShadow: modeColor ? '0 2px 5px rgba(255, 255, 255, 0.8)':'0 2px 5px rgba(0, 0, 0, 1)'  ,
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            border: modeColor ?  '1px solid rgba(255,255,255,0.3)' :'1px solid rgba(255, 255, 255, 0.18)',
          }}
        >
          {status === 'success' ? (
            <>
              Message sent successfully. <br />
              We'll be in touch soon.
            </>
          ) : (
            <>
              Oops! Something went wrong. <br />
              Please try again.
            </>
          )}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Forms;






















// import React, { useContext, useState } from 'react';
// import { Box, TextField, Button, Snackbar, Alert, Typography } from '@mui/material';
// import ThemeContext from './ThemeContext';

// const DemoSnackbarForm = () => {
//   const [formData, setFormData] = useState({ name: '', email: '' });
//   const [status, setStatus] = useState(null); // 'success' | 'error'
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [testMode, setTestMode] = useState('random'); // 'success' | 'error' | 'random'
// const{modeColor}=useContext(ThemeContext)
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Handle test mode logic
//     let isSuccess;
//     if (testMode === 'success') isSuccess = true;
//     else if (testMode === 'error') isSuccess = false;
//     else isSuccess = Math.random() > 0.5; // Random success or error

//     setStatus(isSuccess ? 'success' : 'error');
//     setSnackbarOpen(true);

//     if (isSuccess) {
//       setFormData({ name: '', email: '' }); // reset form on success
//     }
//   };

//   const handleSnackbarClose = (event, reason) => {
//     if (reason === 'clickaway') return;
//     setSnackbarOpen(false);
//   };

//   return (
//     <Box
//       sx={{
//         maxWidth: 400,
//         mx: 'auto',
//         mt: 5,
//         p: 3,
//         borderRadius: 2,
//         boxShadow: 3,
//         bgcolor: modeColor ?  'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.2)',

//       }}
//     >
//       <Typography variant="h5" align="center" mb={3}>
//         Demo Snackbar Form
//       </Typography>

//       {/* Test Mode Buttons */}
//       <Box mb={2}>
//         <Typography variant="subtitle2">Test Mode:</Typography>
//         <Button onClick={() => setTestMode('success')} size="small" sx={{ mr: 1 }}>Success</Button>
//         <Button onClick={() => setTestMode('error')} size="small" sx={{ mr: 1 }}>Error</Button>
//         <Button onClick={() => setTestMode('random')} size="small">Random</Button>
//       </Box>

//       <form onSubmit={handleSubmit}>
//         <TextField
//           fullWidth
//           label="Name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           label="Email"
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           margin="normal"
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           fullWidth
//           sx={{ mt: 2 }}
//         >
//           Submit
//         </Button>
//       </form>

//       {/* Snackbar Alert */}
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={4000000}
//         onClose={handleSnackbarClose}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//       >
//         <Alert
//           onClose={handleSnackbarClose}
//           severity={status === 'success' ? 'success' : 'error'}
//           sx={{
//             color: modeColor ? 'rgba(243, 243, 243, 1)' : 'black',
//             bgcolor: modeColor ?  'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.2)',
//             borderRadius: '16px',
//             boxShadow: modeColor ? '0 2px 5px rgba(255, 255, 255, 0.8)':'0 2px 5px rgba(0, 0, 0, 1)'  ,
//             backdropFilter: 'blur(2px)',
//             WebkitBackdropFilter: 'blur(2px)',
//             border: modeColor ?  '1px solid rgba(255,255,255,0.3)' :'1px solid rgba(255, 255, 255, 0.18)',
//           }}
//         >
//           {status === 'success' ? (
//             <>
//               Message sent successfully. <br />
//               We'll be in touch soon.
//             </>
//           ) : (
//             <>
//               Oops! Something went wrong. <br />
//               Please try again.
//             </>
//           )}
//         </Alert>
//       </Snackbar>


//     </Box>
//   );
// };

// export default DemoSnackbarForm;
