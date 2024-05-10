import React, { useState, useContext } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  MenuItem,
  TextField,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { SearchContext } from "../../ctx/NotifyProvider";

const types = ["all", "FLR", "SEP", "CME", "IPS", "MPC", "GST", "RBE"];

const SearchNotifications = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [type, setType] = useState("");

  const { setSearch } = useContext(SearchContext);

  const formatDate = (date) => {
    const day = dayjs(date).format("YYYY-MM-DD");
    return day;
  };

  const handleStartDateChange = (newValue) => {
    if (!endDate || newValue <= endDate) {
      // Check if the start date is before the end date
      setStartDate(newValue);
    }
  };

  const handleEndDateChange = (newValue) => {
    if (!startDate || newValue >= startDate) {
      // Check if the end date is after the start date
      setEndDate(newValue);
    }
  };

  const handleSearch = () => {
    setSearch({
      startDate: formatDate(startDate),
      endDate: formatDate(endDate),
      type: type,
    });
  };

  return (
    <Box sx={{ mb: 4, backgroundColor: "white" }}>
      <Container>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box
            sx={{
              p: 2,
              display: "flex",
              gap: 2,
              flexWrap: { sm: "wrap", md: "nowrap" },
              justifyContent: "center",
            }}
          >
            <DatePicker
              sx={{ color: "white", backgroundColor: "white", width: "100%" }}
              label="Start Date"
              value={startDate}
              onChange={handleStartDateChange}
            />
            <DatePicker
              sx={{ color: "white", backgroundColor: "white", width: "100%" }}
              label="End Date"
              value={endDate}
              onChange={handleEndDateChange}
            />
            <TextField
              sx={{
                color: "white",
                backgroundColor: "white",
                width: "100%",
              }}
              select
              label="Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              {types.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <Button
              sx={{ width: { xs: "100%", md: "50%" } }}
              onClick={handleSearch}
              variant="contained"
            >
              Search
            </Button>
            {/* <Button sx={{width: "40%"}} onClick={handleSearch} variant="contained">
            Reset
          </Button> */}
          </Box>
        </LocalizationProvider>
      </Container>
      <Divider />
    </Box>
  );
};

export default SearchNotifications;
