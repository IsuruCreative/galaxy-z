import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import background from "../../assets/bg2.jpg";
import ReactPlayer from "react-player/youtube";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 8,
        minHeight: { sm: "95vh", md: "85vh" },
        backgroundImage: `url(${background})`,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: { sm: "cente", md: "right top" },
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* <ReactPlayer
        controls={false}
        url="https://www.youtube.com/embed/WeA7edXsU40?si=b1h14926H_ExTMct"
        playing
        loop
        muted
        width="100vw"
        height="100%"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          filter: "grayscale(10%)", // This will make the video grayscale
        }}
      /> */}
      <Container>
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "4rem", sm: "5rem" },
            }}
            gutterBottom
          >
            Exploring the Cosmos with NASA
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
            Embark on a journey through the cosmos with our latest project.
            Leveraging the power of NASA's APIs, we've created an immersive
            experience that brings the universe to your fingertips. From
            tracking asteroids to observing weather patterns on Mars, our
            project provides a unique perspective on our universe.
          </Typography>

          <Divider
            sx={{
              borderBottomWidth: "5px",
              backgroundColor: "white",
              width: "70%",
            }}
          />
        </Box>
        <Box></Box>
      </Container>
    </Box>
  );
};

export default Hero;
