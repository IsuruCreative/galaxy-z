import React from "react";
import { Typography, Box, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ py: 3, px: 5 }}>
      {/* <Divider
        sx={{
          my: 4,
          borderBottomWidth: "2px",
          backgroundColor: "white",
        }}
      /> */}
      <Typography sx={{ textAlign: "center" }} variant="subtitle1" gutterBottom>
        Created for SLIIT Application Framework Module 🚀👨‍🚀🚀
      </Typography>
    </Box>
  );
};

export default Footer;
