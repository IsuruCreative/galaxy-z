import { createContext, useState } from "react";

const SearchContext = createContext();

const NotifyProvider = ({ children }) => {
  const [search, setSearch] = useState({
    start: null,
    end: null,
    type: "all",
  });

  const value = {
    search,
    setSearch,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export { SearchContext, NotifyProvider };
