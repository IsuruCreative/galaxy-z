import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../common/Loading";
import Error from "../common/Error";
import { Box, Container } from "@mui/material";
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

  console.log(data);

  if (!localStorage.getItem("notifications"))
    localStorage.setItem("notifications", JSON.stringify(data));

  const notifications = JSON.parse(localStorage.getItem("notifications"));

  const itemsToRender = limit ? data.slice(0, limit) : data;

  console.log(notifications);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { md: "repeat(2, 1fr)" },
        gap: 2,
      }}
    >
      {itemsToRender.map((item, index) => {
        return <NotifyCard notification={item} />;
      })}
    </Box>
  );
};

export default Notifications;
