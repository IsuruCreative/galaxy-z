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
import { MarsContext } from "../../ctx/MarsProvider";
import dayjs from "dayjs";

const cameras = [
  "FHAZ",
  "RHAZ",
  "MAST",
  "CHEMCAM",
  "MAHLI",
  "MARDI",
  "NAVCAM",
  "MINITES",
];

const SearchMars = () => {
  const [startDate, setStartDate] = useState(dayjs("2015-6-3"));
  const [type, setType] = useState("");
  const [camera, setCamera] = useState("");

  const { setSearch } = useContext(MarsContext);

  const formatDate = (date) => {
    const day = dayjs(date).format("YYYY-MM-DD");
    return day;
  };

  const handleStartDateChange = (newValue) => {
    setStartDate(newValue);
  };

  const handleSearch = () => {
    console.log(formatDate(startDate));

    setSearch({
      earth_date: formatDate(startDate),
      camera: camera,
      page: 1,
    });
  };

  return (
    <Box sx={{ mb: 4, backgroundColor: "white" }}>
      <Container>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box
            sx={{
              p: 2,
              display: { sm: "grid", md: "flex" },
              gap: 2,
              justifyContent: "center",
            }}
          >
            <DatePicker
              sx={{ color: "white", backgroundColor: "white", width: "100%", mb: 2, my: 1 }}
              label="Start Date"
              value={startDate}
              onChange={handleStartDateChange}
            />

            <TextField
              sx={{
                color: "white",
                backgroundColor: "white",
                minWidth: "200px",
                width: "100%",
                my: 1
              }}
              select
              label="Camera"
              value={camera}
              onChange={(e) => setCamera(e.target.value)}
            >
              {cameras.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <Button
              sx={{ width: "100%", my: 1 }}
              onClick={handleSearch}
              variant="contained"
            >
              Search
            </Button>
          </Box>
        </LocalizationProvider>
      </Container>
      <Divider />
    </Box>
  );
};

export default SearchMars;
