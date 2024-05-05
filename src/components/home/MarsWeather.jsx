import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../common/Loading";
import Error from "../common/Error";
import { Box, Container } from "@mui/material";
import { fetchMarsWeatherData } from "../../api/nasa.api.mjs";
// import RoverCard from "../common/cards/RoverCard";
// import NotifyCard from "../common/cards/NotifyCard";

const MarsWeather = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["weather"],
    queryFn: fetchMarsWeatherData,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error error={error.message} />;
  }

  console.log(data)

  //if (!localStorage.getItem("notifications"))
  //localStorage.setItem("notifications", JSON.stringify(data));

  //const notifications = JSON.parse(localStorage.getItem("notifications"));

  //console.log(notifications)

  return (
    <Container sx={{display: "grid", gridTemplateColumns: {md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)"} , gap: 2}}>
      {/* {notifications.map((item, index) => {
        return <NotifyCard notification={item} />;
      })} */}
    </Container>
  );
};

export default MarsWeather;
