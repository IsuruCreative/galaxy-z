import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

const RoverCard = ({ photo }) => {
  return (
    <Card sx={{ borderRadius: 0 }}>
      <CardMedia
        component="img"
        image={photo.img_src}
        alt="Live from space album cover"
      />

      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 500 }} gutterBottom>
          Rover {photo.rover.name}
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="h6" gutterBottom>
          Camera {photo.camera.name}
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="h6" gutterBottom>
          Taken In {photo.earth_date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RoverCard;
