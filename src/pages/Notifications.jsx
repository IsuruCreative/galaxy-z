import React from "react";
import NotificationData from "../components/fetch/Notifications";
import { Container } from "@mui/material";
import SearchNotifications from "../components/notifications/SearchNotifications";
import { NotifyProvider } from "../ctx/NotifyProvider";

const Notifications = () => {
  return (
    <NotifyProvider>
      <SearchNotifications />
      <Container>
        <NotificationData />
      </Container>
    </NotifyProvider>
  );
};

export default Notifications;
