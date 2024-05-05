import { Container, Box } from "@mui/material";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import background from "../assets/bg2.jpg";

const Notification = () => {
  const { id } = useParams();

  const message = localStorage.getItem(id);

  return (
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        mb: 8,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
        // backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat",
    
      }}
    >
      <Box
        sx={{
          px: 20,
          overflowY: "auto", 
          maxHeight: "100vh", 
        }}
      >
        <ReactMarkdown>{message}</ReactMarkdown>
      </Box>
    </Box>
  );
};

export default Notification;
