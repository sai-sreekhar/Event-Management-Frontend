import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { eventActions } from "../redux";

function GetAllEvents() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  useEffect(() => {
    dispatch(eventActions.getAllEvents());
  }, []);

  return (
    <Grid item xs={12} sm={6} md={9}>
      <Grid container spacing={2}>
        {events.map((event) => (
          <Grid item xs={12} sm={6} md={4} key={event._id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/src/assets/images/virat.jpg"
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
  );
}

export default GetAllEvents;