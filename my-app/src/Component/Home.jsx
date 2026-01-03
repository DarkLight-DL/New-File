// import React, { useContext } from 'react';
// import { Box, Container } from '@mui/material';

// import About from './About';
// import Project from './Project';
// import Contact from './Contact';
// import Skills from './Skills';
// import Footer from './Footer';
// import Hero from './Hero';
// import ScrollBar from './ScrollBar';
// import ThemeContext from './ThemeContext';
// import ScrollTop from './ScrollTop';

// const Home = () => {

//   const { modeColor } = useContext(ThemeContext);
//   return (
    
//     <Box sx={{
//   minHeight: '100vh',
//   background: modeColor
//     ? 'linear-gradient(0deg, rgba(85,52,143,1) 50%, rgba(85,52,143,0.36) 100%)'  // deep purple gradient for dark mode
//     : 'linear-gradient(0deg, rgba(167,142,204,1) 50%, rgba(167,142,204,0.36) 100%)' // soft lavender gradient for light mode
// }}>
//   <Container>

//       <section id="home"><Hero /></section>
//       <section id="project"><Project /></section>
//       <section id="about"><About /></section>
//       <section id="skills"><Skills /></section>
//       <section id="contact"><Contact /></section>

//   </Container>
//       <Footer />
//       <ScrollBar />
//       <ScrollTop />
      

//     </Box>
//   );
// };

// export default Home;





















import React, { useContext } from 'react';
import { Box, Container, useMediaQuery, useTheme } from '@mui/material';

import About from './About';
import Project from './Project';
import Contact from './Contact';
import Skills from './Skills';
import Footer from './Footer';
import Hero from './Hero';
import ScrollBar from './ScrollBar';
import ThemeContext from './ThemeContext';
import ScrollTop from './ScrollTop';

const Home = () => {
  const { modeColor } = useContext(ThemeContext);
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('xl')); // true if screen width >= md

  const content = (
    <>
      <section id="home"><Hero /></section>
      <section id="project"><Project /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: modeColor
          ? 'linear-gradient(0deg, rgba(85,52,143,1) 50%, rgba(85,52,143,0.36) 100%)'
          : 'linear-gradient(0deg, rgba(167,142,204,1) 50%, rgba(167,142,204,0.36) 100%)',
      }}
    >
      {isMdUp ? <Container>{content}</Container> : content}

      <ScrollBar />
      <ScrollTop />
    </Box>
  );
};

export default Home;
