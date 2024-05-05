import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Card, Box } from "@mui/material";

const Skeletons = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
        gap: 2,
      }}
    >
      {[...Array(3)].map((_, i) => (
        <Card key={i} sx={{ borderRadius: 0, p: 2 }}>
          <Stack spacing={1}>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="rectangular" height={300} />
            <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
          </Stack>
        </Card>
      ))}
    </Box>
  );
};

export default Skeletons;
