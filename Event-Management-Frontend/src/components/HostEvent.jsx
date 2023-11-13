import { useDispatch, useSelector } from "react-redux";
import withAuth from "./withAuth";
import { Grid, Snackbar, TextField, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { DateTimePicker } from "@mui/x-date-pickers";
import LoadingButton from "@mui/lab/LoadingButton";
import { eventActions } from "../redux";
import React, { useEffect, useState } from "react";
import { apiStatus } from "../redux/events/eventTypes";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function HostEvent() {
  const auth = useSelector((state) => state.auth);
  const [dateTime, setDateTime] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);

  useEffect(() => {
    if (events.apiStatus === apiStatus.FAILURE) {
      setSnackbarOpen(true);
    } else {
      setSnackbarOpen(false);
    }
  }, [events.apiStatus]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    const eventDetails = {
      name: data.get("title"),
      location: data.get("location"),
      limit: data.get("limit"),
      description: data.get("description"),
      date: dateTime,
      image: "https://picsum.photos/200/300",
      price: 1000,
    };
    dispatch(eventActions.hostEvent(eventDetails));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const handleDateTimeChange = (newValue) => {
    setDateTime(newValue.$d.getTime() / 1000);
    console.log(dateTime);
  };

  return (
    <>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {events.errorReason}
        </Alert>
      </Snackbar>
      
      <Grid
        container
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          mt: 2,
          p: 2,
          backgroundColor: "lightblue",
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          xs={12}
          sm={12}
          md={6}
          mt={2}
          p={2}
        >
          <Typography variant="h3" color="black">
            Host Details
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            disabled
            id="name"
            label="Name"
            name="name"
            autoComplete="Name"
            defaultValue={auth.userData.name}
          />
          <TextField
            margin="normal"
            disabled
            fullWidth
            name="email"
            label="email"
            id="email"
            autoComplete="email"
            defaultValue={auth.userData.email}
          />
          <TextField
            margin="normal"
            disabled
            fullWidth
            id="contact"
            label="contact"
            name="contact"
            autoComplete="contact"
            defaultValue={auth.userData.contact}
          ></TextField>
        </Grid>
        <Grid
          item
          sx={{ display: "flex", flexDirection: "column" }}
          xs={12}
          sm={12}
          md={6}
          p={2}
        >
          <Typography variant="h3" color="black">
            Event Details
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            required
            id="title"
            label="Event Title"
            name="title"
            autoComplete="title"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            required
            id="location"
            label="Location"
            name="location"
            autoComplete="location"
          />
          <TextField
            margin="normal"
            fullWidth
            type="number"
            required
            id="limit"
            label="Participants Limit"
            name="limit"
            autoComplete="limit"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Select Date"
              slotProps={{ textField: { fullWidth: true } }}
              defaultValue={dayjs("2022-04-17")}
              sx={{
                mt: 1,
              }}
              name="date"
              onChange={handleDateTimeChange}
            />
          </LocalizationProvider>
          <TextField
            margin="normal"
            fullWidth
            required
            id="description"
            label="Description"
            name="description"
            autoComplete="description"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            loading={events.apiStatus === apiStatus.IN_PROGRESS}
          >
            Host Event
          </LoadingButton>
        </Grid>
      </Grid>
    </>
  );
}

export default withAuth(HostEvent);
