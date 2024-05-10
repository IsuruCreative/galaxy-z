import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import background from "../../assets/bg4.jpg";
import ReactPlayer from "react-player/youtube";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Hero = () => {
  const { isAuthenticated } = useKindeAuth();

  console.log(isAuthenticated);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 8,
        minHeight: { xs: "90vh", md: "85vh" },
        backgroundImage: `url(${background})`,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Container>
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "4rem", sm: "5rem" },
            }}
            gutterBottom
          >
            Disover the Galaxy
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
            NASA, the National Aeronautics and Space Administration, has been
            unveiling the secrets of the universe for more than 60 years. From
            the iconic Apollo moon landings to the Mars rovers, NASA's
            groundbreaking endeavors have set the stage for a new era of
            exploration and discovery. Join us as we continue to reach for the
            stars and unlock the mysteries of the cosmos.
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
