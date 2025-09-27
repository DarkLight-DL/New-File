import React, { useState, useEffect, useRef } from 'react';
import { LinearProgress, Box, Typography, Card } from '@mui/material';


import { ReactComponent as Html } from '../Assets/html.svg';
import { ReactComponent as Js } from '../Assets/javascript.svg';
import { ReactComponent as Bootstrap } from '../Assets/bootstrap.svg';
import { ReactComponent as Mui } from '../Assets/Mui.svg';
import { ReactComponent as Reactjs } from '../Assets/react1.svg';
import { ReactComponent as Git } from '../Assets/github2.svg';

import { ReactComponent as Mongodb } from '../Assets/MongoDB.svg';
import { ReactComponent as Express } from '../Assets/express.svg';

  const iconStyle = { height: 40, width: 52 };


const datas = [
  { name: 'HTML & CSS', svg: <Html style={iconStyle} />, progress: 85 },
  { name: 'JavaScript', svg: <Js style={iconStyle} />, progress: 70 },
  { name: 'Bootstrap', svg: <Bootstrap style={iconStyle} />, progress: 60 },
  { name: 'Material UI', svg: <Mui style={iconStyle} />, progress: 75 },
  { name: 'React JS', svg: <Reactjs style={iconStyle} />, progress: 80 },
  { name: 'GitHub', svg: <Git style={iconStyle} />, progress: 77 },
  { name: 'Mongodb', svg: <Mongodb style={iconStyle} />, progress: 90 },
  { name: 'Express', svg: <Express style={iconStyle} />, progress: 70 },
];

const ProBar = ({ skill, targetProgress }) => {
  const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentCardRef = cardRef.current; // Store the current ref value in a variable

    if (currentCardRef) {
      observer.observe(currentCardRef);
    }

    return () => {
      if (currentCardRef) {
        observer.unobserve(currentCardRef); // Use the variable in the cleanup function
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const timer = setInterval(() => {
      setProgress((prev) => (prev >= targetProgress ? targetProgress : prev + 1));
    }, 20);

    return () => clearInterval(timer);
  }, [hasAnimated, targetProgress]);

  return (
    <div ref={cardRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 1 }}>
        <Typography sx={{ fontSize: { lg: '15px', md: '20px', sm: '20px', xs: '13px' } }} variant="h6">
          {skill}
        </Typography>
        <Typography sx={{ fontSize: { lg: '15px', md: '20px', sm: '20px', xs: '13px' } }}>
          {progress}%
        </Typography>
      </Box>
      <Box sx={{ width: '100%', position: 'relative',top:'-2px' }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: '8px',
            bgcolor: 'lightgray',
            boxShadow:'0px 1px 10px rgb(10, 10, 10)',
            '& .MuiLinearProgress-bar': {
              backgroundColor: 'blue',
              transition: 'width 0.5s ease-in-out',
            },
            borderRadius: '20px',
          }}
        />
      </Box>
    </div>
  );
};

const Skills1 = () => {
  return (

          <Box
      sx={{
        // height: '100%',
        justifyItems:'center',
        alignContent:'center',
        // bgcolor: '#f5f5f541',
      }}>

      {datas.map((web,index) => (
          <Card
          key={index}
            sx={{
              mb:1,
              // mx:{xs:2,sm:2,md:6,lg:12},
              height: '20px',
              width:'70%',
              display: 'flex',
              justifyContent:'center',
              alignItems: 'center',
              flexDirection: 'row',
              padding: '15px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '10px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                transform:'scale(1.090)'
              },
            }}
          >
            {/* Directly render the SVG */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 42,
                width: 45,
                objectFit:'contain',
                p:'1px',
                backgroundColor:'transparent',
                borderRadius:'10px',
                boxShadow:'0px 0px 10px rgb(10,10,10)'
              }}
            >
              {web.svg}
            </Box>

            <Box sx={{ flex: 2, paddingLeft: 2}}>
              <ProBar skill={web.name} targetProgress={web.progress} />
            </Box>
          </Card>
      ))}
      </Box>
  );
};

export default Skills1;
