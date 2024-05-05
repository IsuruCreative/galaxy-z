import dayjs from "dayjs";
import React from "react";
import { createContext, useState } from "react";

const MarsContext = createContext();

const MarsProvider = ({ children }) => {
  const [search, setSearch] = useState({
    earth_date: "2015-6-3",
    camera: null,
    page: 1,
  });

  const value = {
    search,
    setSearch,
  };

  return <MarsContext.Provider value={value}>{children}</MarsContext.Provider>;
};

export { MarsProvider, MarsContext };
