import React from "react";
import MarsData from "../components/fetch/Mars";
import { Container } from "@mui/material";
import SearchMars from "../components/mars/SearchMars";
import { MarsProvider } from "../ctx/MarsProvider";

const Mars = () => {
  return (
    <>
      <MarsProvider>
        <SearchMars />
        <Container>
          <MarsData />
        </Container>
      </MarsProvider>
    </>
  );
};

export default Mars;
