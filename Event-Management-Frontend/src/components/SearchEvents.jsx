import {
  Box,
  Container,
  Grid,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const defaultTheme = createTheme();

function SearchEvents() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              position: "sticky",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor:"lightyellow"
            }}
          >
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                id="searchEvents"
                label="Type Event Name or City or State"
                name="searchEvents"
                autoComplete="search-events"
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Select Date"
                  sx={{ mt: 1 }}
                  slotProps={{ textField: { fullWidth: true } }}
                  defaultValue={dayjs("2022-04-17")}
                />
              </LocalizationProvider>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Grid>
  );
}

export default SearchEvents;
