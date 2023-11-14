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

const defaultTheme = createTheme();

function SearchEvents() {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "lightcyan",
        pt: 2,
        pb: 2,
        mt: 2,
        mb: 2,
      }}
    >
      <div
        style={{
          position: "sticky",
          width: "100%",
          top: "0px",
        }}
      >
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
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
                  slotProps={{ textField: { fullWidth: true } }}
                  defaultValue={dayjs("2022-04-17")}
                />
              </LocalizationProvider>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </Grid>
  );
}

export default SearchEvents;
