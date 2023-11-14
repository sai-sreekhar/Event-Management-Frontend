import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { eventActions } from "../redux";
import {
  Backdrop,
  Box,
  CardMedia,
  CircularProgress,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import { apiStatus, eventOperations } from "../redux/events/eventTypes";
import MuiAlert from "@mui/material/Alert";
import withAuth from "./withAuth";
import LoadingButton from "@mui/lab/LoadingButton";

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
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(eventActions.getEventDetails(eventId));
  }, []);

  useEffect(() => {
    if (
      events.apiStatus === apiStatus.IN_PROGRESS &&
      events.eventOperation === eventOperations.GET_EVENT_DETAILS
    ) {
      setBackdropOpen(true);
      setSnackbarOpen(false);
    } else if (
      events.apiStatus === apiStatus.FAILURE &&
      events.eventOperation === eventOperations.GET_EVENT_DETAILS
    ) {
      setBackdropOpen(false);
      setSnackbarOpen(true);
    } else if (
      events.apiStatus === apiStatus.SUCCESS &&
      events.eventOperation === eventOperations.GET_EVENT_DETAILS
    ) {
      setBackdropOpen(false);
      setSnackbarOpen(false);
    } else if (
      events.apiStatus === apiStatus.FAILURE &&
      events.eventOperation === eventOperations.BUY_TICKET
    ) {
      setBackdropOpen(false);
      setSnackbarOpen(true);
    } else if (
      events.apiStatus === apiStatus.SUCCESS &&
      events.eventOperation === eventOperations.BUY_TICKET
    ) {
      setBackdropOpen(false);
      setSnackbarOpen(false);
      navigate("/myBookings");
    } else if (
      events.apiStatus === apiStatus.IN_PROGRESS &&
      events.eventOperation === eventOperations.BUY_TICKET
    ) {
      setBackdropOpen(false);
      setSnackbarOpen(false);
    }
  }, [events.apiStatus, events.eventOperation]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const buyTicketHandler = () => {
    dispatch(eventActions.buyTicket(eventId));
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
              height="250"
              image={events.eventDetails[eventId].image}
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
              <Typography variant="h5">
                <b>Timing: </b>{" "}
                {new Date(
                  Number(events.eventDetails[eventId].date)
                ).toUTCString()}
              </Typography>
              <Typography variant="h5">
                <b>Venue: </b>
                {events.eventDetails[eventId].location}
              </Typography>
              <Typography variant="h5">
                <b>Participants Limit: </b>
                {events.eventDetails[eventId].limit}
              </Typography>
              <Typography variant="h6">
                <b>Description: </b>
                {events.eventDetails[eventId].description}
              </Typography>
              <Typography variant="h6">
                <b>Organizer: </b>
                {events.eventDetails[eventId].hostName}
              </Typography>
              <Typography variant="h6">
                <b>Contact: </b>
                {events.eventDetails[eventId].hostContact}
              </Typography>
              <Typography variant="h6">
                <b>Email: </b>
                {events.eventDetails[eventId].hostEmail}
              </Typography>
              <LoadingButton
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={buyTicketHandler}
                loading={
                  events.apiStatus === apiStatus.IN_PROGRESS &&
                  events.eventOperation === eventOperations.BUY_TICKET
                }
              >
                BUY TICKET
              </LoadingButton>
            </Box>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default withAuth(ViewEventDetails);
