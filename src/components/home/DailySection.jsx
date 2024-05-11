import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import Error from "../common/Error";
import { fethcDailyPicture } from "../../api/nasa.api.mjs";
import Loading from "../common/Loading";

const Daily = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["daily"],
    queryFn: fethcDailyPicture,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error error={error.message} />;
  }


  console.log(data);

  return (
    <Box>
      <Container>
        <Divider
          sx={{
            borderBottomWidth: "2px",
            backgroundColor: "white",
          }}
        />
        <Typography sx={{ my: 3 }} variant="h2" gutterBottom>
          Daily Photo
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: 5,
            gridTemplateColumns: { lg: "repeat(2, 1fr)" },
          }}
        >
          <Box>
            <img style={{ width: "100%" }} src={data.url} />
          </Box>

          <Box>
            <Typography variant="h3" gutterBottom>
              {data.title}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Earth Date {data.date}
            </Typography>

            <Divider
              sx={{
                borderBottomWidth: "1px",
                backgroundColor: "white",
              }}
            />

            <Typography sx={{ my: 4, fontFamily: "Roboto" }}>
              {data.explanation}
            </Typography>
            <Typography variant="subtitle1">
              copyright {data.copyright}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Daily;
