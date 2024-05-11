import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Typography, Box, Button, Divider } from "@mui/material";
import background from "../assets/bg6.jpg";
import React from "react";

const ProtectedProvider = ({ children }) => {
  const { isAuthenticated, isLoading, login, register } = useKindeAuth();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!isAuthenticated && !isLoading) {
    return (
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          mb: 8,
          height: "100vh",
          backgroundImage: `url(${background})`,
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "right top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            display: "relative",
            mx: "auto",
            my: "auto",
            maxWidth: "500px",
            py: 12,
            px: { xs: 4, md: 12 },
          }}
        >
          <Typography variant="h4" sx={{ mb: 1 }}>
            Wecome to the Galaxy Z
          </Typography>

          <Typography variant="h6" sx={{ mb: 5, color: "red" }} gutterBottom>
            You don't have permission to access the page please login
          </Typography>
          <Typography variant="h6"></Typography>
          <Button
            sx={{
              width: "100%",
              ":hover": {
                borderBottom: "3px solid white",
              },
              mb: 2,
            }}
            onClick={login}
            variant="contained"
          >
            Log In
          </Button>

          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              my: 2,
            }}
          >
            If you don't have an account please register
          </Typography>

          <Button
            sx={{
              width: "100%",
              ":hover": {
                borderBottom: "3px solid white",
              },
            }}
            onClick={register}
            variant="contained"
          >
            Register
          </Button>
        </Box>
      </Box>
    );
  }

  if (isAuthenticated && !isLoading) {
    return children;
  }
};

export default ProtectedProvider;
