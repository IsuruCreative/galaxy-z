import React from "react";
import MarsData from "../fetch/Mars";
import { Box, Typography, Container, Divider, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const MarsSection = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ my: 5 }}>
      <Divider
        sx={{
          borderBottomWidth: "2px",
          backgroundColor: "white",
        }}
      />
      <Typography sx={{ my: 5 }} variant="h2" gutterBottom>
        Mars Rover Discoveries
      </Typography>

      <MarsData limit={3} />

      <Box sx={{ display: "flex", justifyContent: "end", mt: 4 }}>
        <Button
          onClick={() => navigate("/mars")}
          variant="outlined"
          sx={{
            color: "white",
            borderRadius: 0,
            p: 2,
            px: 5,
            border: "2px solid white",
            ":hover": {
              backgroundColor: "#0B3D91",
              border: "2px solid",
            },
          }}
          endIcon={<ArrowForwardIosIcon />}
        >
          Find More Discoveries
        </Button>
      </Box>
    </Container>
  );
};

export default MarsSection;
