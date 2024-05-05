import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../common/Loading";
import Error from "../common/Error";
import { Box, Container } from "@mui/material";
import { fetchMarsRoverPics } from "../../api/nasa.api.mjs";
import RoverCard from "../common/cards/RoverCard";
import { MarsContext } from "../../ctx/MarsProvider";

const Mars = ({ limit }) => {
  const { search } = useContext(MarsContext);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["mars", search],
    queryFn: fetchMarsRoverPics,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error error={error.message} />;
  }

  localStorage.setItem("mars", JSON.stringify(data));

  const marsData = JSON.parse(localStorage.getItem("mars"));

  // Use the limit if provided, otherwise render all items
  const itemsToRender = limit
    ? marsData.photos.slice(0, limit)
    : marsData.photos;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
        gap: 2,
      }}
    >
      {itemsToRender.map((item, index) => {
        return <RoverCard key={index} photo={item} />;
      })}
    </Box>
  );
};

export default Mars;
