import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../common/Loading";
import Error from "../common/Error";
import { Box, Container, Typography } from "@mui/material";
import { fetchDonkiNotifications } from "../../api/nasa.api.mjs";
import RoverCard from "../common/cards/RoverCard";
import NotifyCard from "../common/cards/NotifyCard";
import { SearchContext } from "../../ctx/NotifyProvider";

const Notifications = ({ limit }) => {
  const { search } = useContext(SearchContext);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["donki", search],
    queryFn: fetchDonkiNotifications,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error error={error.message} />;
  }

  if (!localStorage.getItem("notifications"))
    localStorage.setItem("notifications", JSON.stringify(data));

  const notifications = JSON.parse(localStorage.getItem("notifications"));

  const itemsToRender = limit ? data.slice(0, limit) : data;

  console.log(notifications);

  return (
    <Box>
      {itemsToRender.length === 0 && (
        <Typography textAlign="center" variant="h6">
          No Notifications to be Found
        </Typography>
      )}

      {(itemsToRender.length !== 0 || !limit) && (
        <Typography textAlign="left" variant="h4" sx={{ mb: 5 }}>
          Space Notifcations
        </Typography>
      )}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "repeat(2, 1fr)" },
          gap: 2,
        }}
      >
        {itemsToRender.length === 0 && (
          <Typography>
            No Notification to be Found from {search.startDate} to{" "}
            {search.endDate}
          </Typography>
        )}
        {itemsToRender.map((item, index) => {
          return <NotifyCard key={index} notification={item} />;
        })}
      </Box>
    </Box>
  );
};

export default Notifications;
