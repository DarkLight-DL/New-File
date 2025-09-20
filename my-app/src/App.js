import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Nave from './SetOne/Nave';
import Home from './SetOne/Home';
import About from './SetOne/About';
import Project from './SetOne/Project';
import Contact from './SetOne/Contact';
import Skills from './SetOne/Skills';
import { ThemeProvider } from './SetOne/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Box>
            <Nave />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </Box>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;









// | Purpose               | Dark Mode Color            | Light Mode Color        | Notes                       |
// | --------------------- | -------------------------- | ----------------------- | --------------------------- |
// | **Primary Purple**    | `#55358f` (Deep Purple)    | `#a78ecc` (Lavender)    | Matches your gradient       |
// | **Accent Orange**     | `#ff7e1b` (Vibrant Orange) | `#ffae42` (Soft Orange) | For buttons, highlights     |
// | **Text Primary**      | `#eeeeee` (Off-white)      | `#1a1a1a` (Dark Gray)   | Main text                   |
// | **Text Secondary**    | `#bbbbbb` (Light Gray)     | `#555555` (Medium Gray) | For less important text     |
// | **Button Background** | `#ff7e1b` (Orange)         | `#ffae42` (Soft Orange) | Call to action buttons      |
// | **Button Hover**      | `#e67300` (Dark Orange)    | `#cc8f00` (Goldenrod)   | Hover state for buttons     |
// | **Border/Divider**    | `rgba(255,255,255,0.15)`   | `rgba(0,0,0,0.1)`       | Subtle borders and dividers |


// Example styles for text and buttons

// const textStyle = {
//   color: modeColor ? '#eeeeee' : '#1a1a1a',
// };

// const secondaryTextStyle = {
//   color: modeColor ? '#bbbbbb' : '#555555',
// };

// const buttonStyle = {
//   backgroundColor: modeColor ? '#ff7e1b' : '#ffae42',
//   color: modeColor ? '#1a1a1a' : '#1a1a1a',
//   '&:hover': {
//     backgroundColor: modeColor ? '#e67300' : '#cc8f00',
//   },
// };
