import React, { useContext  } from "react";
import { Box, GlobalStyles } from "@mui/material";
import BallImg from "../Assets/basketball.png";
import HoopImg from "../Assets/baskethoop1.png";
// import HoopImg from "../Assets/baskethoop2.png";

import ThemeContext from "./ThemeContext";

const ToggleSwitch = () => {

  const { modeColor, handleColor } = useContext(ThemeContext);

  // checked is now the global theme (true = dark mode)
  const checked = modeColor;

  

  return (
    <>
      {/* Ball animations */}
      <GlobalStyles
        styles={{
          "@keyframes ball": {
            "0%": { transform: "none" },
            "40%": { transform: "rotate(-150deg)" },
            "48%": { transform: "rotate(-150deg) translateY(47px)" },
            "52%": { transform: "rotate(-150deg) translate(-5px, 40px)" },
            "56%": { transform: "rotate(-150deg) translate(-10px, 47px)" },
            "60%": { transform: "rotate(-150deg) translate(-13px, 42px)" },
            "65%": { transform: "rotate(-150deg) translate(-15px, 47px)" },
            "70%": { transform: "rotate(-150deg) translate(-20px, 43px)" },
            "75%": { transform: "rotate(-150deg) translate(-28px, 47px)" },
            "80%": { transform: "rotate(-150deg) translate(-31px, 44px)" },
            "85%": { transform: "rotate(-150deg) translate(-36px, 47px)" },
            "90%": { transform: "rotate(-150deg) translate(-43px, 46px)" },
            "95%": { transform: "rotate(-150deg) translate(-46px, 46px)" },
            "100%": { transform: "rotate(-150deg) translate(-48px, 47px)" }
          },

          "@keyframes ballReturn": {
            "0%": { transform: "translate(34px,0px) rotate(220deg)" },
            "100%": { transform: "translate(0,0) rotate(0deg)" }
          },


          "@keyframes ball-wrapper": {
            "0%": { transform: "none" },
            "40%": { transform: "rotate(150deg)" },
            "100%": { transform: "rotate(150deg)" }
          }
        }}
      />

      {/* Root container */}
      <Box sx={{
        position: "relative",
        height: 'fit-content',
        width: "fit-content",
      }}>
        {/* Hidden checkbox */}
        <Box
          component="input"
          type="checkbox"
          id="mui-hoop"
          checked={checked}
          onChange={() => handleColor(!checked)}
          sx={{ display: "none" }}
        />

        {/* Main switch label */}
        <Box
          component="label"
          htmlFor="mui-hoop"
          sx={{
            background: checked ? "#542583" : "#ffffffff",
            boxShadow:'2px 2px 5px black',
            width: "55px",
            height: "25px",
            borderRadius: "20px",
            display: "block",
            cursor: "pointer",
            position: "relative",
            transition: "background 0.4s ease",
          }}
        >
          {/* Invisible slider to show direction of toggle */}
          <Box
            sx={{
              position: "absolute",
              top: "4px",
              left: checked ? "34px" : "4px",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              transition: "left 0.4s ease",
              opacity: 0
            }}
          />

          {/* Hoop image */}
          <Box
            component="img"
            src={HoopImg}
            alt="Hoop"
            sx={{
              position: "absolute",
              top: "-30px",
              right: "-67px",
              width: "60px",
              // width: "90px",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* Ball arc wrapper */}
          <Box
            sx={{
              position: "absolute",
              width: "175%",
              height: "50%",
              top: 0,
              left: 0,
              transformOrigin: "60% -2%",
              transition: ".4s ease",
              animation: checked ? "ball-wrapper 1.3s linear forwards" : "none"
            }}
          >
            {/* Ball image */}
            <Box
              component="img"
              src={BallImg}
              alt="Ball"
              sx={{
                position: "absolute",
                top: "2px",
                left: "2px",
                // width: "32px",
                // height: "32px",
                width: "22px",
                height: "22px",
                transition: ".4s ease",
                animation: checked ? "ball 1.3s linear forwards" : "ballReturn 0.8s ease-out forwards"
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ToggleSwitch;




// <GlobalStyles
//   styles={{
//     "@keyframes ball": {
//       "0%": { transform: "none" },
//       "40%": { transform: "rotate(-150deg)" },
//       "48%": { transform: "rotate(-150deg) translateY(92px)" },
//       "52%": { transform: "rotate(-150deg) translate(-10px, 80px)" },
//       "56%": { transform: "rotate(-150deg) translate(-25px, 91px)" },
//       "60%": { transform: "rotate(-150deg) translate(-35px, 86px)" },
//       "65%": { transform: "rotate(-150deg) translate(-45px, 91px)" },
//       "70%": { transform: "rotate(-150deg) translate(-50px, 87px)" },
//       "75%": { transform: "rotate(-150deg) translate(-60px, 91px)" },
//       "80%": { transform: "rotate(-150deg) translate(-65px, 88px)" },
//       "85%": { transform: "rotate(-150deg) translate(-70px, 91px)" },
//       "90%": { transform: "rotate(-150deg) translate(-75px, 90px)" },
//       "95%": { transform: "rotate(-150deg) translate(-80px, 90px)" },
//       "100%": { transform: "rotate(-150deg) translate(-82px, 91px)" }
//     },