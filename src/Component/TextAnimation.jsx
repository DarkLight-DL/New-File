
/** @jsxImportSource @emotion/react */
import React from 'react';
import { Box } from '@mui/material';
import { ReactComponent as Pic1 } from '../Assets/Untitled-2.svg';
import { keyframes, css } from '@emotion/react';

// Define the keyframes for the stroke animation
const typeAnimation = keyframes`
    0%{
        stroke-dashoffset: 500;
    }
    50%{
        fill: transparent;
    }
    100%{
        fill: #000000ff;
        stroke-dashoffset: 0;
    }
`;

const svgAnimation = css`
fontSize:px,
  width: 100px;
  height: 30px;
  fill: transparent;
  stroke: #000000ff;
  stroke-width: 1;
  stroke-dasharray: 500;
  stroke-dashoffset: 500;
  animation: ${typeAnimation} 4s ease-in-out forwards;
`;
const TextAnimation = () => {

  return (
    <Box sx={{height:'10px',width:'200px'}}>
      <Pic1 css={svgAnimation} />
    </Box>
  );
};

export default TextAnimation
