import React from "react";
import NotificationData from "../fetch/Notifications";
import { Box, Typography, Container, Divider, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";


const NotificationSection = () => {

  const navigate = useNavigate()

  return (
    <Container sx={{ my: 5 }}>
      <Divider
        sx={{
          borderBottomWidth: "2px",
          backgroundColor: "white",
        }}
      />
      
      <Typography sx={{ my: 5 }} variant="h2" gutterBottom>
       Notfications
      </Typography>

      <NotificationData limit={8} />

      <Box sx={{display: "flex", justifyContent: "end", mt: 4}}>
        <Button
          variant="outlined"
          sx={{
            color: "white",
            borderRadius: 0,
            p: 2,
            px: 5,
            border: "2px solid white",
            ":hover": {
              backgroundColor: "#0B3D91",
              border: "2px solid"
            }
          }}
          onClick={() => navigate("/notifications")}
          endIcon={<ArrowForwardIosIcon />}
        >
          Find More Discoveries
        </Button>

        
      </Box>

      <Divider  sx={{ borderBottomWidth: "2px", backgroundColor: "white", my: 4 }} />
    
    </Container>
  );
};

export default NotificationSection;
