import React, { useContext } from 'react';
import { Box, Container } from '@mui/material';

import About from './About';
import Project from './Project';
import Contact from './Contact';
import Skills from './Skills';
import Footer from './Footer';
import Hero from './Hero';
import ScrollTop from './ScrollTop';
import ThemeContext from './ThemeContext';

const Home = () => {
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.hash) {
  //     const Progess = document.querySelector(location.hash);
  //     if (Progess) Progess.scrollIntoView({ behavior: 'smooth' });
  //   } else {
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //   }
  // }, [location]);

  const { modeColor } = useContext(ThemeContext);
  return (
    
    <Box sx={{
  minHeight: '100vh',
  background: modeColor
    ? 'linear-gradient(343deg, rgba(85,52,143,1) 50%, rgba(85,52,143,0.36) 100%)'  // deep purple gradient for dark mode
    : 'linear-gradient(343deg, rgba(167,142,204,1) 50%, rgba(167,142,204,0.36) 100%)' // soft lavender gradient for light mode
}}>
  <Container>

      <section id="home"><Hero /></section>
      <section id="project"><Project /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>

  </Container>
      <Footer />
      <ScrollTop />
      

    </Box>
  );
};

export default Home;
