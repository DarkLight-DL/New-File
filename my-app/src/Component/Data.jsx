// background: url('/stars.gif'), linear-gradient(to bottom, #000428, #004e92);
// background-size: cover;

// import React from 'react';
// import {
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   CardActions,
//   Button,
//   Link as MUILink,
// } from '@mui/material';
// import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// import YouTube from '../Assets/youtubeClone.png';
// import Shopping from '../Assets/Shopping.png';
// import Echo from '../Assets/Echo.png';
// import Bloom from '../Assets/Bloom.png';
// import html from '../Assets/html.jpg';
// import Cart from '../Assets/Cart.png';

// import { HashLink as Link } from 'react-router-hash-link';
// import { Link as RouterLink } from 'react-router-dom';


// import { ReactComponent as Html } from '../Assets/html.svg';
// import { ReactComponent as Css } from '../Assets/css.svg';
// import { ReactComponent as Js } from '../Assets/javascript.svg';
// import { ReactComponent as Bootstrap } from '../Assets/bootstrap1.svg';
// import { ReactComponent as Mui } from '../Assets/Mui.svg';
// import { ReactComponent as Reactjs } from '../Assets/react1.svg';
// import { ReactComponent as Git } from '../Assets/github2.svg';
// import { ReactComponent as Youtube } from '../Assets/youtube.svg';
// import { ReactComponent as Api } from '../Assets/api.svg';

// // import { ReactComponent as Mongodb } from '../Assets/MongoDB.svg';
// // import { ReactComponent as Express } from '../Assets/express.svg';


// const datas = [

//   {
//     name: 'YouTubeClone',
//     text: 'YouTube clone built with a real-time API, features both videos and shorts. Fully responsive website.',
//     icons: [Reactjs, Js, Mui, Youtube, Api],
//     img: [YouTube],
//     link: '/projects',
//     button: 'Hosted',
//   },
//   {
//     name: 'Shopping',
//     text: 'Shopping is an E-commerce website with responsive design, using API and Axios for the backend.',
//     icons: [Reactjs, Mui, Api, Git],
//     img: [Shopping],
//     link: 'https://darklight-dl.github.io/Shopping/',
//     button: 'Visit',
//   },
//   {
//     name: 'Echo',
//     text: 'Echo is a modern, responsive SEO template with a minimal design like sliders and contact forms.',
//     icons: [Html, Css, Bootstrap, Git],
//     img: [Echo],
//     link: 'https://darklight-dl.github.io/Echo/',
//     button: 'Visit',
//   },
//   {
//     name: 'Bloom',
//     text: 'Bloom website built using React.js, featuring a fully responsive design all devices views.',
//     icons: [Reactjs, Mui, Git],
//     img: [Bloom],
//     link: 'https://darklight-dl.github.io/Bloom/',
//     button: 'Visit',
//   },
//   {
//     name: 'Shop(Json)',
//     text: 'Shopping web side built using DOM, with dynamic interactions. File via a JSON Full responsiveness.',
//     icons: [Html, Css, Js, Git],
//     img: [Cart],
//     link: 'https://darklight-dl.github.io/Cart/',
//     button: 'Visit',
//   },
//   {
//     name: 'Html',
//     text: 'Static website layout optimized for desktop devices, built using HTML and CSS. Design for larger screens.',
//     icons: [Html, Css, Git],
//     img: [html],
//     link: 'https://darklight-dl.github.io/Html/',
//     button: 'Visit',
//   },
// ];


// const Data = () => {

//   return (
//     <>

//       <MUILink
//         component={Link}
//         smooth
//         to="/#ViewProjects"
//         underline="none"
//       ></MUILink>



//       <Box sx={{
//         // ml: {lg:'5px',xl:'1%'},
//         height: '100%',
//         // width: {lg:'99%',xl:'100%'},
//         width: '100%',

//         // border:'solid red',
//         // bgcolor:'blue',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         alignContent: 'center'
//       }} >

//         <Box
//           sx={{
//             height: '100%',
//             width: '97%',
//             position: 'relative',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',

//           }}
//         >

//           {/* Scrollable container */}
//           <Box
//             sx={{
//               height: '100%',
//               width: '100%',
//               flexGrow: 1,
//               display: 'flex',
//               overflowX: 'auto',
//               overflowY: 'clip',
//               scrollSnapType: 'x mandatory',
//               scrollbarWidth: 'none',
//               msOverflowStyle: 'none',
//               '&::-webkit-scrollbar': { display: 'none' },
//             }}
//           >
//             {datas.map((web) => (
//               <Box
//                 key={web.name}
//                 sx={{
//                   // my: '5px',
//                   height: { xs: '310px', sm: '400px', md: '430px', lg: '430px', xl: '420px' }, //card-height
//                   width: { xs: '155px', sm: '34%', md: '26%', lg: '26%', xl: '385px' },
//                   aspectRatio: '16/9',
//                   flex: '0 0 auto',
//                   scrollSnapAlign: 'start',
//                   display: 'flex',
//                   justifyContent: 'center',

//                 }}
//               >
//                 <Card
//                   sx={{
//                     mx: { xs: '3px', sm: '5px', md: '10px' },
//                     height: { xs: '78%', sm: '78%', md: '85%', lg: '85%' },
//                     width: '100%',
//                     borderRadius: '5px',
//                     overflow: 'hidden',
//                     position: 'relative',
//                     backgroundColor: '#fffbfbff',
//                     transition: 'transform 0.35s ease, box-shadow 0.35s ease',
//                     boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.69)',
//                     '&:hover': {
//                       transform: 'translateY(-2px)',
//                       boxShadow: '2px 10px 10px 0px rgba(0, 0, 0, 0.83)',
//                     },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       bgcolor: 'rgba(255, 255, 255, 0.27)',
//                       // height: { xs: '100px', sm: '130px', md: '170px', lg: '190px', xl: '300px' },  //height of img-pic
//                       aspectRatio: '16/9',
//                       display: 'flex',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       cursor: 'pointer',
//                     }}
//                   >
//                     <CardMedia
//                       component="img"
//                       image={web.img[0]}
//                       alt={web.name}
//                       sx={{
//                         // height:'0px',
//                         maxHeight: '100%',
//                         maxWidth: '100%',
//                         objectFit: 'contain',
//                         pointerEvents: 'none',
//                       }}
//                     />
//                   </Box>

//                   {/* Dots below card image */}
//                   <Box
//                     sx={{
//                       display: 'flex',
//                       justifyContent: 'center',
//                       mt: 1,
//                       gap: '2px',
//                     }}
//                   >
//                     {web.img.map((_, idx) => (
//                       <Box
//                         key={idx}
//                         sx={{
//                           width: 5,
//                           height: 5,
//                           borderRadius: '50%',
//                           cursor: 'default',
//                         }}
//                       />
//                     ))}
//                   </Box>

//                   <CardContent sx={{ p: 0 }} >
//                     <Box sx={{ mb: '10px', px: '10px', position: 'relative' }} >

//                       <Typography variant='h6' fontWeight={700}>
//                         {web.name}
//                       </Typography>
//                       <Typography
//                         sx={{
//                           color: '#555',
//                           fontSize: { xs: '7px', sm: '11px', md: '12px', lg: '13px' },
//                         }}
//                       >
//                         {web.text}
//                       </Typography>
//                     </Box>

//                     <Box sx={{ display: 'flex', gap: 0.5, ml: 2, }}>
//                       {web.icons.map((LibIcon, index) => (
//                         <Box
//                           key={index}
//                           sx={{
//                             width: { xs: 20, sm: 25 },
//                             height: { xs: 20, sm: 25 },
//                             borderRadius: '50%',
//                             backgroundColor: '#e0e0e0',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             border: '0.5px solid black',
//                             boxShadow: '-2px 3px 3px black',
//                             position: 'relative',
//                             zIndex: web.icons.length + index, // ensure top icon is on top
//                             mr: -1, // negative margin to overlap

//                           }}
//                         >
//                           <LibIcon style={{ width: { xs: 16, sm: 18 }, height: { xs: 16, sm: 18 } }} />
//                         </Box>
//                       ))}
//                     </Box>



//                     <Box>

//                     </Box>


//                     <Box sx={{ position: 'absolute', bottom: '0px', width: '100%' }}>


//                       <CardActions sx={{ mt: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: { sx: '5px', sm: '10px' } }}>
//                         <Button
//                           component={web.button === 'Hosted' ? RouterLink : 'a'}
//                           to={web.button === 'Hosted' ? web.link : undefined}
//                           href={web.button !== 'Hosted' ? web.link : undefined}
//                           target={web.button !== 'Hosted' ? "_blank" : undefined}
//                           rel={web.button !== 'Hosted' ? "noopener noreferrer" : undefined}
//                           sx={{
//                             p: 0,
//                             textTransform: 'none',
//                             textAlign: 'center',
//                             fontSize: { xs: '8px', sm: '13px', md: '14px', lg: '15px' },
//                             fontWeight: 400,
//                             mx: { xs: 'px', sm: '13px', md: '14px', lg: '15px' },
//                             color: 'white',
//                             background: 'linear-gradient(90deg, rgb(56, 57, 57) 21%, rgb(26, 168, 18) 84%)',
//                             borderRadius: '10px',
//                             padding: '3px 20px',
//                             transition: 'color 0.3s ease',
//                             '&:hover': {
//                               fontWeight: 450,
//                               background: 'linear-gradient(90deg, rgb(76, 87, 180) 21%, rgb(76, 68, 129) 84%)',
//                               color: 'black',
//                             },
//                           }}
//                         >
//                           {web.button === 'Hosted' ? 'View' : 'Visit'}
//                           <OpenInNewIcon sx={{ ml: 0.5, width: { xs: '8px', sm: '13px' }, height: { xs: '8px', sm: '13px' } }} />
//                         </Button>
//                       </CardActions>

//                     </Box>

//                   </CardContent>


//                 </Card>
//               </Box>
//             ))}
//           </Box>


//         </Box>

//       </Box>

//     </>
//   );
// };

// export default Data;






























// import React, { useState, useContext } from 'react';
// import {
//   Box,
//   Typography,
//   CardMedia,
//   Button,
// } from '@mui/material';
// import OpenInNewIcon from '@mui/icons-material/OpenInNew';
// import { Link as RouterLink } from 'react-router-dom';
// import ThemeContext from './ThemeContext';

// // Project Images
// import YouTube from '../Assets/youtubeClone.png';
// import Shopping from '../Assets/Shopping.png';
// import Echo from '../Assets/Echo.png';
// import Bloom from '../Assets/Bloom.png';
// import html from '../Assets/html.jpg';
// import Cart from '../Assets/Cart.png';


// // Tech stack SVGs
// import { ReactComponent as Html } from '../Assets/html.svg';
// import { ReactComponent as Css } from '../Assets/css.svg';
// import { ReactComponent as Js } from '../Assets/javascript.svg';
// import { ReactComponent as Bootstrap } from '../Assets/bootstrap1.svg';
// import { ReactComponent as Mui } from '../Assets/Mui.svg';
// import { ReactComponent as Reactjs } from '../Assets/react1.svg';
// import { ReactComponent as Git } from '../Assets/github2.svg';
// import { ReactComponent as Youtube } from '../Assets/youtube.svg';
// import { ReactComponent as Api } from '../Assets/api.svg';


// // Project Data
// const projects = [
//   {
//     name: 'YouTube',
//     webside: 'YouTube Clone',
//     text: 'YouTube clone built with a real-time API, features both videos and shorts. Fully responsive website.',
//     icons: [Reactjs, Js, Mui, Youtube, Api],
//     img: YouTube,
//     video: '',
//     link: '/projects',
//     type: 'internal',
//     button: 'View',
//   },
//   {
//     name: 'Shopping',
//     webside: 'E-Commerce',
//     text: 'Shopping is an E-commerce website with responsive design, using API and Axios for the backend.',
//     icons: [Reactjs, Mui, Api, Git],
//     img: Shopping,
//     video: '',
//     link: 'https://darklight-dl.github.io/Shopping/',
//     type: 'external',
//     button: 'Visit',
//   },
//   {
//     name: 'Echo',
//     webside: 'SEO template',
//     text: 'Echo is a modern, responsive SEO template with a minimal design like sliders and contact forms.',
//     icons: [Html, Css, Bootstrap, Git],
//     img: Echo,
//     video: '',
//     link: 'https://darklight-dl.github.io/Echo/',
//     type: 'external',
//     button: 'Visit',
//   },
//   {
//     name: 'Bloom',
//     webside: 'SEO template',
//     text: 'Bloom website built using React.js, featuring a fully responsive design all devices views.',
//     icons: [Reactjs, Mui, Git],
//     img: Bloom,
//     video: '',
//     link: 'https://darklight-dl.github.io/Bloom/',
//     type: 'external',
//     button: 'Visit',
//   },
//   {
//     name: 'Shop',
//     webside: 'E-Commerce',
//     text: 'Shopping web side built using DOM, with dynamic interactions. File via a JSON Full responsiveness.',
//     icons: [Html, Css, Js, Git],
//     img: Cart,
//     video: '',
//     link: 'https://darklight-dl.github.io/Cart/',
//     type: 'external',
//     button: 'Visit',
//   },
//   {
//     name: 'HTML',
//     webside: 'Static layout',
//     text: 'Static website layout optimized for desktop devices, built using HTML and CSS. Design for larger screens.',
//     icons: [Html, Css, Git],
//     img: html,
//     video: '',
//     link: 'https://darklight-dl.github.io/Html/',
//     type: 'external',
//     button: 'Visit',
//   },
// ];

// // Component
// const ProjectShowcase = () => {
//   const { modeColor } = useContext(ThemeContext);
//   const [showAll, setShowAll] = useState(false);

//   const textStyle = {
//     color: modeColor ? '#eeeeee' : '#1a1a1a',
//   };

//   const visibleProjects = showAll ? projects : projects.slice(0, 3);
//   const remainingProjects = projects.length - visibleProjects.length;

//   return (
//     <Box
//       sx={{
//         width: '100%',
//         Height: '100vh',
//         color: textStyle.color,
//         backgroundImage: modeColor
//           ? 'radial-gradient(#ffffff11 1px, transparent 1px)'
//           : 'radial-gradient(#00000011 1px, transparent 1px)',
//         backgroundSize: '40px 40px',
//         py: 4,
//       }}
//     >

// {visibleProjects.map((web, index) => (
//   <Box
//     key={index}
//     sx={{
      
//       display: 'flex',
//       flexDirection: { xs: 'column', md: 'row' },
//       alignItems: 'center',
//       justifyContent: 'center',
//       width: '100%',
//       border:'solid',
//       maxHeight:'300px',
//       aspectRatio:'16/9',
//       gap: 4,
//       py: 4,

//     }}
//   >
//     {/* Image or Video Box */}
//     <Box sx={{ width: { xs: '80%', md: '45%',aspectRatio: '16 / 9', }, position: 'relative' }}>
//       <CardMedia
      
//         component="img"
//         image={web.img}
//         alt={`${web.name} screenshot`}
//         sx={{
//           aspectRatio: '16 / 9',
//           width: '100%',
//           borderRadius: '10px',
//           boxShadow: '0 8px 16px rgba(0,0,0,0.6)',
//         }}
//       />
//       {/* Project Title on Image */}
//       <Typography
//         variant="h5"
//         sx={{
//           position: 'absolute',
//           bottom: 10,
//           right: 10,
//           color: '#fff',
//           fontWeight: 'bold',
//           background: 'rgba(0,0,0,0.5)',
//           p: 1,
//           borderRadius: 2,
//         }}
//       >
//         {web.name}
//       </Typography>
//     </Box>

//     {/* Text Content */}
//     <Box sx={{ width: { xs: '80%', md: '45%',aspectRatio: '16 / 9', } }}>
//       <Typography
//         variant="h6"
//         sx={{ fontWeight: 'bold', mb: 1, color: textStyle.color }}
//       >
//         <span style={{ color: '#1f07baff' }}>{web.webside}</span> Website
//       </Typography>
//       <Typography
//         sx={{
//           fontSize: '0.9rem',
//           mb: 2,
//           color: modeColor ? '#bbbbbb' : '#555555',
//         }}
//       >
//         {web.text}
//       </Typography>

//       {/* Tech Stack Icons */}
//       <Box sx={{ display: 'flex', gap: 0.5, ml: 1, mb: 2 }}>
//         {web.icons.map((LibIcon, idx) => (
//           <Box
//             key={idx}
//             sx={{
//               width: 30,
//               height: 30,
//               borderRadius: '50%',
//               backgroundColor: '#e0e0e0',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               border: '0.5px solid black',
//               boxShadow: '-2px 3px 3px black',
//               zIndex: web.icons.length - idx,
//               mr: -1,
//             }}
//           >
//             <LibIcon style={{ width: '90%', height: '90%' }} />
//           </Box>
//         ))}
//       </Box>

//       {/* View/Visit Button */}
//       <Button
//         component={web.type === 'internal' ? RouterLink : 'a'}
//         to={web.type === 'internal' ? web.link : undefined}
//         href={web.type === 'external' ? web.link : undefined}
//         target={web.type === 'external' ? '_blank' : undefined}
//         rel="noopener noreferrer"
//         sx={{
//           mt: 2,
//           px: 3,
//           py: 1,
//           borderRadius: 2,
//           textTransform: 'none',
//           fontWeight: 400,
//           color: 'white',
//           background:
//             'linear-gradient(90deg, rgb(56, 57, 57) 21%, rgb(26, 168, 18) 84%)',
//           '&:hover': {
//             fontWeight: 450,
//             background:
//               'linear-gradient(90deg, rgb(76, 87, 180) 21%, rgb(76, 68, 129) 84%)',
//             color: 'black',
//           },
//         }}
//       >
//         {web.button}
//         <OpenInNewIcon sx={{ ml: 1, fontSize: 'small' }} />
//       </Button>
//     </Box>
    
//   </Box>
// ))}

//       {/* Show More / Show Less Button */}

//  <Box sx={{ textAlign: 'center', py: 4 }}>
//     <Button
//       variant="contained"
//       onClick={() => setShowAll(!showAll)}
//       sx={{
//         px: 6,
//         py: 1,
//         fontWeight: 600,
//         borderRadius: 2,
//         background: 'linear-gradient(to right, #444, #1aa812)',
//         '&:hover': {
//           background: 'linear-gradient(to right, #4c57b4, #4c4481)',
//           color: 'white',
//         },
//       }}
//     >
//       {showAll
//         ? 'Close'
//         : `Show (${remainingProjects})`}
//     </Button>
//   </Box>
//     </Box>
//   );
// };

// export default ProjectShowcase;































import React, { useState, useContext } from 'react';
import {
  Box,
  Typography,
  CardMedia,
  Button,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Link as RouterLink } from 'react-router-dom';
import ThemeContext from './ThemeContext';


// Project Images
import YouTube from '../Assets/youtubeClone.png';
import Shopping from '../Assets/Shopping.png';
import Echo from '../Assets/Echo.png';
import Bloom from '../Assets/Bloom.png';
import html from '../Assets/html.jpg';
import Cart from '../Assets/Cart.png';


// Tech stack SVGs
import { ReactComponent as Html } from '../Assets/html.svg';
import { ReactComponent as Css } from '../Assets/css.svg';
import { ReactComponent as Js } from '../Assets/javascript.svg';
import { ReactComponent as Bootstrap } from '../Assets/bootstrap1.svg';
import { ReactComponent as Mui } from '../Assets/Mui.svg';
import { ReactComponent as Reactjs } from '../Assets/react1.svg';
import { ReactComponent as Git } from '../Assets/github2.svg';
import { ReactComponent as Youtube } from '../Assets/youtube.svg';
import { ReactComponent as Api } from '../Assets/api.svg';

// Project Data
const projects = [
  {
    name: 'YouTube',
    webside: 'YouTube Clone',
    text: 'YouTube clone built with a real-time API, features both videos and shorts. Fully responsive website.',
    icons: [Reactjs, Js, Mui, Youtube, Api],
    img: YouTube,
    video: '',
    link: '/projects',
    type: 'internal',
    button: 'View',
  },
  {
    name: 'Shopping',
    webside: 'E-Commerce',
    text: 'Shopping is an E-commerce website with responsive design, using API and Axios for the backend.',
    icons: [Reactjs, Mui, Api, Git],
    img: Shopping,
    video: '',
    link: 'https://darklight-dl.github.io/Shopping/',
    type: 'external',
    button: 'Visit',
  },
  {
    name: 'Echo',
    webside: 'SEO template',
    text: 'Echo is a modern, responsive SEO template with a minimal design like sliders and contact forms.',
    icons: [Html, Css, Bootstrap, Git],
    img: Echo,
    video: '',
    link: 'https://darklight-dl.github.io/Echo/',
    type: 'external',
    button: 'Visit',
  },
  {
    name: 'Bloom',
    webside: 'SEO template',
    text: 'Bloom website built using React.js, featuring a fully responsive design all devices views.',
    icons: [Reactjs, Mui, Git],
    img: Bloom,
    video: '',
    link: 'https://darklight-dl.github.io/Bloom/',
    type: 'external',
    button: 'Visit',
  },
  {
    name: 'Shop',
    webside: 'E-Commerce',
    text: 'Shopping web side built using DOM, with dynamic interactions. File via a JSON Full responsiveness.',
    icons: [Html, Css, Js, Git],
    img: Cart,
    video: '',
    link: 'https://darklight-dl.github.io/Cart/',
    type: 'external',
    button: 'Visit',
  },
  {
    name: 'HTML',
    webside: 'Static layout',
    text: 'Static website layout optimized for desktop devices, built using HTML and CSS. Design for larger screens.',
    icons: [Html, Css, Git],
    img: html,
    video: '',
    link: 'https://darklight-dl.github.io/Html/',
    type: 'external',
    button: 'Visit',
  },
];

const ProjectShowcase = () => {
  const { modeColor } = useContext(ThemeContext);
  const [showAll, setShowAll] = useState(false);

  const textStyle = {
    color: modeColor ? '#eeeeee' : '#1a1a1a',
  };

  const visibleProjects = showAll ? projects : projects.slice(0, 3);
  const remainingProjects = projects.length - visibleProjects.length;

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        color: textStyle.color,
        backgroundImage: modeColor
          ? 'radial-gradient(#ffffff11 1px, transparent 1px)'
          : 'radial-gradient(#00000011 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        py: 4,
      }}
    >
      {visibleProjects.map((web, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            gap: 4,
            py: 4,
          }}
        >
          {/* Image Box with aspect ratio */}
          <Box
            sx={{
              width: { xs: '90%', md: '45%' },
              position: 'relative',
              aspectRatio: '16 / 9',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 8px 16px rgba(0,0,0,0.6)',
            }}
          >
            <CardMedia
              component="img"
              image={web.img}
              alt={`${web.name} screenshot`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            {/* Project Title on Image */}
            <Typography
              variant="h5"
              sx={{
                position: 'absolute',
                bottom: 10,
                right: 10,
                color: '#fff',
                fontWeight: 'bold',
                background: 'rgba(0,0,0,0.5)',
                p: 1,
                borderRadius: 2,
                zIndex: 10,
              }}
            >
              {web.name}
            </Typography>
          </Box>

          {/* Text Content Box */}
          <Box sx={{ width: { xs: '90%', md: '45%' } }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', mb: 1, color: textStyle.color }}
            >
              <span style={{ color: '#1f07baff' }}>{web.webside}</span> Website
            </Typography>
            <Typography
              sx={{
                fontSize: '0.9rem',
                mb: 2,
                color: modeColor ? '#bbbbbb' : '#555555',
              }}
            >
              {web.text}
            </Typography>

            {/* Tech Stack Icons */}
            <Box sx={{ display: 'flex', gap: 0.5, ml: 1, mb: 2 }}>
              {web.icons.map((LibIcon, idx) => (
                <Box
                  key={idx}
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    backgroundColor: '#e0e0e0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '0.5px solid black',
                    boxShadow: '-2px 3px 3px black',
                    zIndex: web.icons.length - idx,
                    mr: -1,
                  }}
                >
                  <LibIcon style={{ width: '90%', height: '90%' }} />
                </Box>
              ))}
            </Box>

            {/* View/Visit Button */}
            <Button
              component={web.type === 'internal' ? RouterLink : 'a'}
              to={web.type === 'internal' ? web.link : undefined}
              href={web.type === 'external' ? web.link : undefined}
              target={web.type === 'external' ? '_blank' : undefined}
              rel="noopener noreferrer"
              sx={{
                mt: 2,
                px: 3,
                py: 1,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 400,
                color: 'white',
                background:
                  'linear-gradient(90deg, rgb(56, 57, 57) 21%, rgb(26, 168, 18) 84%)',
                '&:hover': {
                  fontWeight: 450,
                  background:
                    'linear-gradient(90deg, rgb(76, 87, 180) 21%, rgb(76, 68, 129) 84%)',
                  color: 'black',
                },
              }}
            >
              {web.button}
              <OpenInNewIcon sx={{ ml: 1, fontSize: 'small' }} />
            </Button>
          </Box>
        </Box>
      ))}

      {/* Show More / Show Less Button */}
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Button
          variant="contained"
          onClick={() => setShowAll(!showAll)}
          sx={{
            px: 6,
            py: 1,
            fontWeight: 600,
            borderRadius: 2,
            background: 'linear-gradient(to right, #444, #1aa812)',
            '&:hover': {
              background: 'linear-gradient(to right, #4c57b4, #4c4481)',
              color: 'white',
            },
          }}
        >
          {showAll ? 'Close' : `Show (${remainingProjects})`}
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectShowcase;
