// // src/Component/ResumeViewer.jsx
// import React from 'react';
// import { Box, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import Resume from '../Assets/resume.pdf'; // 👈 Make sure this file exists

// const ResumeViewer = () => {
//   const navigate = useNavigate();

//   return (
//     <Box sx={{ height: '100vh', backgroundColor: '#f9f9f9' }}>
//       <Button
//         variant="contained"
//         onClick={() => navigate(-1)}
//         sx={{ m: 2,mt:6, backgroundColor: '#ff7e1b', '&:hover': { backgroundColor: '#e67300' } }}
//       >
//         ← Go Back
//       </Button>

//       <Box
//         sx={{
//           width: '100%',
//           height: 'calc(100% - 64px)',
//           px: 2,
//           pb: 2,
//         }}
//       >
//         <iframe
//           src={Resume}
//           title="Resume"
//           width="100%"
//           height="100%"
//           style={{ border: 'none' }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default ResumeViewer;







// src/Component/ResumeViewer.jsx
import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Resume from '../Assets/resume.pdf'; // Make sure this exists and is imported correctly

const ResumeViewer = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{height: '100vh', backgroundColor: '#f9f9f9' }}>
      <Button
        variant="contained"
        onClick={() => navigate(-1)}
        sx={{zIndex:10, m: 2, mt: 6, backgroundColor: '#ff7e1b', '&:hover': { backgroundColor: '#e67300' } }}
      >
        ← Go Back
      </Button>
      <Box
        sx={{
          width: '100%',
          height: 'calc(100% - 80px)',
        }}
      >
        <iframe
          src={`${Resume}#toolbar=0&navpanes=0&scrollbar=0`}
          title="Resume"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      </Box>
    </Box>
  );
};

export default ResumeViewer;
