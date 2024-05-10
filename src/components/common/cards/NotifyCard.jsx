import React from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotifyCard = ({ notification }) => {
  const date = new Date(notification.messageIssueTime);
  const formattedDate = date.toLocaleString();

  const navigate = useNavigate();

  const handleNavigate = () => {
    localStorage.setItem(
      notification.messageIssueTime,
      notification.messageBody
    );
    navigate(`/notifications/${notification.messageIssueTime}`);
  };

  return (
    <Card sx={{ borderRadius: 0, height: "100%" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2, height: "88%" }}>
        <Divider sx={{ display: { sm: "hidden" } }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { sm: "column-reverse", md: "row" },
          }}
        >
          <Chip
            variant="outlined"
            sx={{ mt: { sm: 2, md: 0 } }}
            label={`Type ${notification.messageType}`}
          />
          <Typography variant="h6">Date {formattedDate}</Typography>
        </Box>

        <Divider />

        {/* <Typography variant="subtitle2"> */}

        {/* </Typography> */}

        <Typography sx={{ fontFamily: "Roboto" }}>
          Message
          {notification.messageBody
            .split("## Summary:")[1]
            .split("## Notes:")[0]
            .slice(0, 300)}
          ...
        </Typography>

        <Box sx={{ mt: "auto", display: "flex" }}>
          <Button
            onClick={handleNavigate}
            sx={{ ml: "auto", borderRadius: 0 }}
            variant="outlined"
          >
            Read More
          </Button>
        </Box>

        <Divider />
      </CardContent>
    </Card>
  );
};

export default NotifyCard;
