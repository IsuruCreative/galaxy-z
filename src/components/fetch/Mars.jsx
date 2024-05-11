import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Loading from "../common/Loading";
import Error from "../common/Error";
import { Box, Button, Container, Typography } from "@mui/material";
import { fetchMarsRoverPics } from "../../api/nasa.api.mjs";
import RoverCard from "../common/cards/RoverCard";
import { MarsContext } from "../../ctx/MarsProvider";

const Mars = ({ limit }) => {
  const { search } = useContext(MarsContext);

  const [page, setPage] = useState(1);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["mars", search, page],
    queryFn: fetchMarsRoverPics,
  });

  const queryClient = useQueryClient();

  const handlePage = (action) => {
    if (action === "next") {
      setPage((prev) => prev + 1);
    } else if (action === "prev") {
      setPage((prev) => prev - 1);
    }

    queryClient.invalidateQueries(["mars"]);
  };

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
    <Box>
      {itemsToRender.length === 0 && (
        <Typography textAlign="center" variant="h6">
          No Images to be Found
        </Typography>
      )}

      {itemsToRender.length !== 0 ||
        (limit && (
          <Typography textAlign="left" variant="h4" sx={{ mb: 5 }}>
            Mars Rover Images
          </Typography>
        ))}

      <Box
        sx={{
          display: "grid",
          minHeight: "100vh",
          pb: 10,
          gridTemplateColumns: { md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
          gap: 2,
        }}
      >
        {itemsToRender.length !== 0 &&
          itemsToRender.map((item, index) => {
            return <RoverCard key={index} photo={item} />;
          })}
      </Box>

      {!limit && (
        <Box sx={{ mb: 4, display: "flex" }}>
          <Button
            sx={{
              variant: "contained",
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
            disabled={page === 1}
            onClick={() => handlePage("prev")}
          >
            Previous
          </Button>

          <Button
            variant="outlined"
            sx={{
              ml: 2,
              color: "white",
              borderRadius: 0,
              p: 2,
              px: 8,
              border: "2px solid white",
              ":hover": {
                backgroundColor: "#0B3D91",
                border: "2px solid",
              },
            }}
            disabled={itemsToRender.length === 0}
            onClick={() => handlePage("next")}
          >
            Next
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Mars;
