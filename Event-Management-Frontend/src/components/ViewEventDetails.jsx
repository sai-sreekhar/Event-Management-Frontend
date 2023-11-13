import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { eventActions } from "../redux";
import {
  Backdrop,
  Box,
  Button,
  CardMedia,
  CircularProgress,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import imgUrl from "../assets/images/virat.jpg";
import { apiStatus } from "../redux/events/eventTypes";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ViewEventDetails() {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const eventId = params.eventId;
  const events = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(eventActions.getEventDetails(eventId));
  }, []);

  useEffect(() => {
    if (events.apiStatus === apiStatus.IN_PROGRESS) {
      setBackdropOpen(true);
      setSnackbarOpen(false);
    } else if (events.apiStatus === apiStatus.FAILURE) {
      setBackdropOpen(false);
      setSnackbarOpen(true);
    } else {
      setBackdropOpen(false);
      setSnackbarOpen(false);
    }
  }, [events.apiStatus]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {events.errorReason}
        </Alert>
      </Snackbar>

      {events.eventDetails[eventId] && (
        <Grid
          container
          display="flex"
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="h2">
              {events.eventDetails[eventId].name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <CardMedia
              component="img"
              height="300"
              image={imgUrl}
              alt="Event Image"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              flexGrow={1}
            >
              <Typography variant="h6">
                <b>Timing: </b>{" "}
                {new Date(events.eventDetails[eventId].date * 1000).toString()}
              </Typography>
              <Typography variant="h6">
                <b>Venue: </b>
                {events.eventDetails[eventId].location}
              </Typography>
              <Typography variant="h6">
                <b>Participants Limit: </b>
                {events.eventDetails[eventId].limit}
              </Typography>
              <Typography variant="body1">
                <b>Description: </b>
                {events.eventDetails[eventId].description}
              </Typography>
              <Typography variant="body1">
                <b>Organizer: </b>
                {events.eventDetails[eventId].hostName}
              </Typography>
              <Typography variant="body1">
                <b>Contact: </b>
                {events.eventDetails[eventId].hostContact}
              </Typography>
              <Typography variant="body1">
                <b>Email: </b>
                {events.eventDetails[eventId].hostEmail}
              </Typography>
              <Button variant="contained" color="primary" fullWidth >
                BUY TICKET
              </Button>
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default ViewEventDetails;
