import {
  Backdrop,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventActions } from "../redux";
import imgUrl from "../assets/images/virat.jpg";
import { apiStatus } from "../redux/events/eventTypes";
import * as React from "react";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function GetAllEvents() {
  const [backdropOpen, setBackdropOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  useEffect(() => {
    dispatch(eventActions.getAllEvents());
  }, []);

  useEffect(() => {
    if (events.apiStatus === apiStatus.IN_PROGRESS) {
      setBackdropOpen(true);
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

      <Grid item xs={12} sm={6} md={9} mt={1}>
        <Grid container spacing={2} pl={2} pr={2}>
          {events.events.map((event) => (
            <Grid item xs={12} sm={6} md={3} key={event._id}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={imgUrl}
                    alt="Event Image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {event.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {event.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(event.date * 1000).toString()}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default GetAllEvents;
