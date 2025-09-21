// import React from 'react';
// import {
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   CardActions,
//   Button,

// } from '@mui/material';
// import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// import YouTube from '../Assets/youtubeClone.png';


// import Echo from '../Assets/Echo.png';

// import Bloom from '../Assets/Bloom.png';


// import html from '../Assets/html.jpg';

// import Cart from '../Assets/Cart.png';




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
//     comp_libs: [Reactjs, Js, Mui, Youtube, Api],
//     img: [YouTube],
//     link: 'https://example.com/bloom',
//   },
//   {
//     name: 'Echo',
//     text: 'Echo is a modern, responsive SEO template with a minimal design like sliders and contact forms.',
//     comp_libs: [Html, Css, Bootstrap, Git],
//     img: [Echo],
//     link: 'https://example.com/echo',
//   },
//   {
//     name: 'Bloom',
//     text: 'Bloom website built using React.js, featuring a fully responsive design all devices views.',
//     comp_libs: [Reactjs, Mui, Git],
//     img: [Bloom],
//     link: 'https://example.com/bloom',
//   },
//   {
//     name: 'Shop(DOM)',
//     text: 'Shopping web side built using DOM, with dynamic interactions. File via a JSON Full responsiveness.',
//     comp_libs: [Html, Css, Js, Git],
//     img: [Cart],
//     link: 'https://example.com/Html',
//   },
//   {
//     name: 'Html',
//     text: 'Static website layout optimized for desktop devices, built using HTML and CSS. Design for larger screens.',
//     comp_libs: [Html, Css, Git],
//     img: [html],
//     link: 'https://example.com/Html',
//   },
// ];



// const Data = () => {



//   return (
//     <>



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
//                   height: { xs: '290px', sm: '400px', md: '430px', lg: '400px', xl: '420px' }, //card-height
//                   width: { xs: '155px', sm: '34%', md: '26%', lg: '26%', xl: '385px' },
//                   aspectRatio: '16/9',
//                   flex: '0 0 auto',
//                   scrollSnapAlign: 'start',
//                   display: 'flex',
//                   justifyContent: 'center',

//                 }}
//               >
//                 {/* <GlowWrapper > */}
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
//                     boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.42)',
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
//                       {web.comp_libs.map((LibIcon, index) => (
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
//                             zIndex: web.comp_libs.length + index, // ensure top icon is on top
//                             mr: -1, // negative margin to overlap

//                           }}
//                         >
//                           <LibIcon style={{ width: { xs: 16, sm: 18 }, height: { xs: 16, sm: 18 } }} />
//                         </Box>
//                       ))}
//                     </Box>



//                     <Box>

//                     </Box>


//                     <Box sx={{ position: 'absolute', bottom: '5px', width: '100%', }}>



//                       <CardActions sx={{ p: 0, justifyContent: 'center' }}>
//                         <Box sx={{ width: { md: '100%' }, display: 'flex', px: 1 }}>
//                           <Button
//                             component="a"
//                             href={web.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             sx={{
//                               p: 0,
//                               px: 1,
//                               py: 0.2,
//                               textTransform: 'none',
//                               textAlign: 'center',
//                               fontSize: { xs: '8px', sm: '13px', md: '14px', lg: '15px' },
//                               fontWeight: 400,
//                               // mx: { xs: 'px', sm: '13px', md: '14px', lg: '15px' },
//                               // py: { xs: '5px ', sm: '5px', md: '6px' },
//                               // flexGrow: 1,
//                               color: 'white',
//                               background: 'linear-gradient(90deg, rgb(56, 57, 57) 21%, rgb(26, 168, 18) 84%)',
//                               // borderRadius: '10px 0px ',
//                               transition: 'color 0.3s ease-in-out',
//                               boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.42)',

//                               '&:hover': {
//                                 // color: 'rgba(26, 168, 18, 0.99)',
//                                 boxShadow: '3px 7px 10px 0px rgba(54, 59, 115, 0.77)',
//                                 backgroundColor: '#f7f7f7',
//                                 transform: 'scale(1.020)',
//                               },
//                             }}
//                           >
//                             Visit
//                             <OpenInNewIcon sx={{ ml: 0.5, width: { xs: '8px', sm: '13px', md: '14px', lg: '15px' }, height: { xs: '8px', sm: '13px', md: '14px', lg: '15px' } }} />
//                           </Button>

//                         </Box>

//                       </CardActions>


//                     </Box>

//                   </CardContent>


//                 </Card>
//                 {/* </GlowWrapper> */}
//               </Box>
//             ))}
//           </Box>


//         </Box>

//       </Box>

//     </>
//   );
// };

// export default Data;
























import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  // Chip,

} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// import YouTube from '../Assets/youtubeClone.png';

import Shopping from '../Assets/Shopping.png';

import Echo from '../Assets/Echo.png';

import Bloom from '../Assets/Bloom.png';

import html from '../Assets/html.jpg';

import Cart from '../Assets/Cart.png';




import { ReactComponent as Html } from '../Assets/html.svg';
import { ReactComponent as Css } from '../Assets/css.svg';
import { ReactComponent as Js } from '../Assets/javascript.svg';
import { ReactComponent as Bootstrap } from '../Assets/bootstrap1.svg';
import { ReactComponent as Mui } from '../Assets/Mui.svg';
import { ReactComponent as Reactjs } from '../Assets/react1.svg';
import { ReactComponent as Git } from '../Assets/github2.svg';
// import { ReactComponent as Youtube } from '../Assets/youtube.svg';
import { ReactComponent as Api } from '../Assets/api.svg';

// import { ReactComponent as Mongodb } from '../Assets/MongoDB.svg';
// import { ReactComponent as Express } from '../Assets/express.svg';


const datas = [

  // {
  //   name: 'YouTubeClone',
  //   text: 'YouTube clone built with a real-time API, features both videos and shorts. Fully responsive website.',
  //   comp_libs: [Reactjs, Js, Mui, Youtube, Api],
  //   img: [YouTube],
  //   link: 'https://example.com/bloom',
  // },
  {
    name: 'Shopping',
    text: 'Shopping is a E-commear webside width responsive design using Api and Axios for Backend.',
    comp_libs: [Reactjs,Mui,Api, Git],
    img: [Shopping],
    link: 'https://darklight-dl.github.io/Shopping/',
  },
  {
    name: 'Echo',
    text: 'Echo is a modern, responsive SEO template with a minimal design like sliders and contact forms.',
    comp_libs: [Html, Css, Bootstrap, Git],
    img: [Echo],
    link: 'https://darklight-dl.github.io/Echo/',
  },
  {
    name: 'Bloom',
    text: 'Bloom website built using React.js, featuring a fully responsive design all devices views.',
    comp_libs: [Reactjs, Mui, Git],
    img: [Bloom],
    link: 'https://darklight-dl.github.io/Bloom/',
  },
  {
    name: 'Shop(Json)',
    text: 'Shopping web side built using DOM, with dynamic interactions. File via a JSON Full responsiveness.',
    comp_libs: [Html, Css, Js, Git],
    img: [Cart],
    link: 'https://darklight-dl.github.io/Cart/',
  },
  {
    name: 'Html',
    text: 'Static website layout optimized for desktop devices, built using HTML and CSS. Design for larger screens.',
    comp_libs: [Html, Css, Git],
    img: [html],
    link: 'https://darklight-dl.github.io/Html/',
  },
];




// const datas = [

//   {
//     name: 'YouTubeClone',
//     text: 'YouTube clone built with a real-time API, features both videos and shorts. Fully responsive website.',
//     comp_libs: ['Reactjs', 'Js', 'Mui', 'Api'],
//     img: [YouTube],
//     link: 'https://example.com/bloom',
//   },
// {
//   name: 'Sgooping',
//   text: 'Sgooping is a E-commear webside width responsive design using Api and Axios for Backend.',
//   comp_libs: ['Reactjs','Mui','Api', 'Git'],
//   img: [Echo],
//   link: 'https://example.com/echo',
// },
//   {
//     name: 'Echo',
//     text: 'Echo is a modern, responsive SEO template with a minimal design like sliders and contact forms.',
//     comp_libs: ['Html', 'Css', 'Bootstrap', 'Git'],
//     img: [Echo],
//     link: 'https://example.com/echo',
//   },
//   {
//     name: 'Bloom',
//     text: 'Bloom website built using React.js, featuring a fully responsive design all devices views.',
//     comp_libs: ['Reactjs', 'Mui', 'Git'],
//     img: [Bloom],
//     link: 'https://example.com/bloom',
//   },
//   {
//     name: 'Shop(DOM)',
//     text: 'Shopping web side built using DOM, with dynamic interactions. File via a JSON Full responsiveness.',
//     comp_libs: ['Html', 'Css', 'Js', 'Git'],
//     img: [Cart],
//     link: 'https://example.com/Html',
//   },
//   {
//     name: 'Html',
//     text: 'Static website layout optimized for desktop devices, built using HTML and CSS. Design for larger screens.',
//     comp_libs: ['Html', 'Css', 'Git'],
//     img: [html],
//     link: 'https://example.com/Html',
//   },
// ];


const Data = () => {



  return (
    <>



      <Box sx={{
        // ml: {lg:'5px',xl:'1%'},
        height: '100%',
        // width: {lg:'99%',xl:'100%'},
        width: '100%',

        // border:'solid red',
        // bgcolor:'blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
      }} >

        <Box
          sx={{
            height: '100%',
            width: '97%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

          }}
        >

          {/* Scrollable container */}
          <Box
            sx={{
              height: '100%',
              width: '100%',
              flexGrow: 1,
              display: 'flex',
              overflowX: 'auto',
              overflowY: 'clip',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {datas.map((web) => (
              <Box
                key={web.name}
                sx={{
                  // my: '5px',
                  height: { xs: '310px', sm: '400px', md: '430px', lg: '410px', xl: '420px' }, //card-height
                  width: { xs: '155px', sm: '34%', md: '26%', lg: '26%', xl: '385px' },
                  aspectRatio: '16/9',
                  flex: '0 0 auto',
                  scrollSnapAlign: 'start',
                  display: 'flex',
                  justifyContent: 'center',

                }}
              >
                {/* <GlowWrapper > */}
                <Card
                  sx={{
                    mx: {xs:'3px',sm:'5px',md:'10px'},
                    height: { xs: '78%', sm: '78%', md: '85%', lg: '85%' },
                    width: '100%',
                    borderRadius: '5px',
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundColor: '#fffbfbff',
                    transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                    boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.69)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '2px 10px 10px 0px rgba(0, 0, 0, 0.83)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.27)',
                      // height: { xs: '100px', sm: '130px', md: '170px', lg: '190px', xl: '300px' },  //height of img-pic
                                        aspectRatio: '16/9',

                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={web.img[0]}
                      alt={web.name}
                      sx={{
                        // height:'0px',
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        pointerEvents: 'none',
                      }}
                    />
                  </Box>

                  {/* Dots below card image */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mt: 1,
                      gap: '2px',
                    }}
                  >
                    {web.img.map((_, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          width: 5,
                          height: 5,
                          borderRadius: '50%',
                          cursor: 'default',
                        }}
                      />
                    ))}
                  </Box>

                  <CardContent sx={{ p: 0 }} >
                    <Box sx={{ mb: '10px', px: '10px', position: 'relative' }} >

                      <Typography variant='h6' fontWeight={700}>
                        {web.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: '#555',
                          fontSize: { xs: '7px', sm: '11px', md: '12px', lg: '13px' },
                        }}
                      >
                        {web.text}
                      </Typography>
                    </Box>


                    {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '2px', marginTop: '6px', mx: { xs: '5px', sm: '10px', md: '10px', lg: '10px' } }}>
                      {web.comp_libs.map((lib, index) => (
                        <Chip
                          key={index}
                          label={lib}
                          size="small"
                          sx={{ p:0, height: '15px', fontSize: { xs: '6px', sm: '10px', md: '11px' }, backgroundColor: '#e0e0e0' }}
                        />
                      ))}
                    </Box> */}




                    <Box sx={{ display: 'flex', gap: 0.5, ml:2, }}>
                      {web.comp_libs.map((LibIcon, index) => (
                        <Box
                          key={index}
                          sx={{
                            width: {xs:20,sm:25},
                            height:  {xs:20,sm:25},
                            borderRadius: '50%',
                            backgroundColor: '#e0e0e0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '0.5px solid black',
                            boxShadow:'-2px 3px 3px black',
                            position: 'relative',
                            zIndex: web.comp_libs.length + index, // ensure top icon is on top
                            mr:-1, // negative margin to overlap

                          }}
                        >
                          <LibIcon style={{ width: {xs:16,sm:18}, height: {xs:16,sm:18} }} />
                        </Box>
                      ))}
                    </Box>



                    <Box>

                    </Box>


                    <Box sx={{ position: 'absolute', bottom: '0px', width: '100%' }}>

                    {/* 
                      <CardActions sx={{ p: 0, justifyContent: 'center',alignContent:'center' }}>
                        <Box sx={{ 
                          display: 'flex', 
                          justifyContent:'center',
                          alignItems:'center',
                          // width: {md:'100%'}, 
                          px: 1
                         }}>
                          <Button
                            component="a"
                            href={web.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              p: 0,
                              px:1,
                              py:0.2,
                              flexGrow:1,
                              textTransform: 'none',
                              textAlign: 'center',
                              fontSize: { xs: '8px', sm: '13px', md: '14px', lg: '15px' },
                              fontWeight: 400,
                              // mx: { xs: 'px', sm: '13px', md: '14px', lg: '15px' },
                              // py: { xs: '5px ', sm: '5px', md: '6px' },
                              // flexGrow: 1,
                              color: 'white',
                              background: 'linear-gradient(90deg, rgb(56, 57, 57) 21%, rgb(26, 168, 18) 84%)',
                              // borderRadius: '10px 0px ',
                              transition: 'color 0.3s ease-in-out',
                              boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.42)',

                              '&:hover': {
                                // color: 'rgba(26, 168, 18, 0.99)',
                                boxShadow: '3px 0px 10px 0px rgba(54, 59, 115, 0.77)',
                                backgroundColor: '#f7f7f7',
                                transform: 'scale(1.20)',
                              },
                            }}
                          >
                            Visit
                            <OpenInNewIcon sx={{ ml:0.5,width: {xs: '8px', sm: '13px', md: '14px', lg: '15px' }, height: {xs: '8px', sm: '13px', md: '14px', lg: '15px' } }} />
                          </Button>

                        </Box>

                      </CardActions> */}

              <CardActions sx={{ mt:1,display:'flex',justifyContent:'center',alignItems:'center', paddingBottom: {sx:'5px',sm:'10px'} }}>
                <Button
                  component="a"
                  href={web.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    // width:'100%',
                    p:0,
                    textTransform:'none',
                    textAlign: 'center',
                    fontSize: { xs: '8px', sm: '13px', md: '14px', lg: '15px' },
                    
                    fontWeight: 400,
                    // flexGrow: 1,
                    mx: { xs: 'px', sm: '13px', md: '14px', lg: '15px' },
                    color: 'white',
                    background:
                    'linear-gradient(90deg, rgb(56, 57, 57) 21%, rgb(26, 168, 18) 84%)',
                    borderRadius: '10px',
                    padding: '3px 20px',
                    // py: { xs: '5px ', sm: '5px', md: '1px'},
                    transition: 'color 0.3s ease',
                    // p: { xs: '5px ', sm: '5px', md: '6px'},
                    '&:hover': {
                      fontWeight: 450,
                      background:
                        'linear-gradient(90deg, rgb(76, 87, 180) 21%, rgb(76, 68, 129) 84%)',
                      color: 'black',
                    },
                  }}
                >
                            Visit
                            <OpenInNewIcon sx={{ ml:0.5,width: {xs: '8px', sm: '13px', md: '14px', lg: '15px' }, height: {xs: '8px', sm: '13px', md: '14px', lg: '15px' } }} />
                          </Button>
              </CardActions>
                    </Box>

                  </CardContent>


                </Card>
                {/* </GlowWrapper> */}
              </Box>
            ))}
          </Box>


        </Box>

      </Box>

    </>
  );
};

export default Data;















































// import {
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   CardActions,
//   Button,
//   Grid,
//   // Chip,

// } from '@mui/material';

// import YouTube from '../Assets/youtubeClone.png';


// import Echo from '../Assets/Echo.png';

// import Bloom from '../Assets/Bloom.png';


// import html from '../Assets/html.jpg';

// import Cart from '../Assets/Cart.png';




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
//     comp_libs: [Reactjs, Js, Mui, Youtube, Api],
//     img: [YouTube],
//     link: 'https://example.com/bloom',
//   },
//   {
//     name: 'Echo',
//     text: 'Echo is a modern, responsive SEO template with a minimal design like sliders and contact forms.',
//     comp_libs: [Html, Css, Bootstrap, Git],
//     img: [Echo],
//     link: 'https://example.com/echo',
//   },
//   {
//     name: 'Bloom',
//     text: 'Bloom website built using React.js, featuring a fully responsive design all devices views.',
//     comp_libs: [Reactjs, Mui, Git],
//     img: [Bloom],
//     link: 'https://example.com/bloom',
//   },
//   {
//     name: 'Shop(DOM)',
//     text: 'Shopping web side built using DOM, with dynamic interactions. File via a JSON Full responsiveness.',
//     comp_libs: [Html, Css, Js, Git],
//     img: [Cart],
//     link: 'https://example.com/Html',
//   },
//   {
//     name: 'Html',
//     text: 'Static website layout optimized for desktop devices, built using HTML and CSS. Design for larger screens.',
//     comp_libs: [Html, Css, Git],
//     img: [html],
//     link: 'https://example.com/Html',
//   },
// ];

// const Data = () => {


// return (
//   <Box
//     sx={{
//       width: '100%',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       py: 4,
//     }}
//   >
//     <Grid
//       container
//       spacing={{ xs:1, sm: 3, md: 4 }}
//       sx={{
//         width: '97%',
//         justifyContent: 'center',
//       }}
//     >
//       {datas.map((web) => (
//         <Grid
//         key={web.name}

//           item
//           xs={6}
//           sm={6}
//           md={4}
//           lg={3}
//           xl={4}
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//           }}
//         >
//           <Card
//             sx={{
//               width: '100%',
//               maxWidth: 385,
//               borderRadius: '5px',
//               overflow: 'hidden',
//               backgroundColor: '#fffbfbff',
//               transition: 'transform 0.35s ease, box-shadow 0.35s ease',
//               boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.42)',
//               '&:hover': {
//                 transform: 'translateY(-2px)',
//                 boxShadow: '2px 10px 10px 0px rgba(0, 0, 0, 0.83)',
//               },
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'space-between',
//             }}
//           >
//             {/* Image */}
//             <Box
//               sx={{
//                 bgcolor: 'rgba(255, 255, 255, 0.27)',
//                 height: 200,
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 cursor: 'pointer',
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 image={web.img[0]}
//                 alt={web.name}
//                 sx={{
//                   maxHeight: '100%',
//                   maxWidth: '100%',
//                   objectFit: 'contain',
//                   pointerEvents: 'none',
//                 }}
//               />
//             </Box>

//             {/* Content */}
//             <CardContent sx={{ px: 2 }}>
//               <Typography variant="h6" fontWeight={700}>
//                 {web.name}
//               </Typography>
//               <Typography
//                 sx={{
//                   color: '#555',
//                   fontSize: { xs: '11px', sm: '13px', md: '14px' },
//                   mt: 1,
//                 }}
//               >
//                 {web.text}
//               </Typography>

//               {/* Tech icons */}
//               <Box sx={{ display: 'flex', gap: 0.5, mt: 2 }}>
//                 {web.comp_libs.map((LibIcon, index) => (
//                   <Box
//                     key={index}
//                     sx={{
//                       width: 25,
//                       height: 25,
//                       borderRadius: '50%',
//                       backgroundColor: '#e0e0e0',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       boxShadow: 1,
//                       border: '2px solid white',
//                       zIndex: web.comp_libs.length - index,
//                       ml: index === 0 ? 0 : -1.5,
//                     }}
//                   >
//                     <LibIcon style={{ width: 18, height: 18 }} />
//                   </Box>
//                 ))}
//               </Box>
//             </CardContent>

//             {/* Visit Button */}
//             <CardActions sx={{ px: 2, pb: 2 }}>
//               <Button
//                 component="a"
//                 href={web.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 fullWidth
//                 sx={{
//                   textTransform: 'none',
//                   fontSize: '14px',
//                   fontWeight: 500,
//                   color: 'white',
//                   background: 'linear-gradient(90deg, rgb(56, 57, 57) 21%, rgb(26, 168, 18) 84%)',
//                   borderRadius: '14px',
//                   boxShadow: '3px 7px 10px 0px rgba(0, 0, 0, 0.42)',
//                   '&:hover': {
//                     transform: 'scale(1.03)',
//                     backgroundColor: '#f7f7f7',
//                     boxShadow: '3px 7px 10px 0px rgba(54, 59, 115, 0.77)',
//                   },
//                 }}
//               >
//                 Visit
//               </Button>
//             </CardActions>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   </Box>
// );
// }
// export default Data;


