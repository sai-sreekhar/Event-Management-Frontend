import withAuth from "./withAuth";
import { Grid } from "@mui/material";
import BrowseEventsHeader from "./BrowseEventsHeader";
import SearchEvents from "./SearchEvents";
import GetAllEvents from "./GetAllEvents";

const BrowseEvents = () => {
  return (
    <>
      <Grid container spacing={2}>
        <BrowseEventsHeader />
        <SearchEvents />
        <GetAllEvents />
      </Grid>
    </>
  );
};

export default withAuth(BrowseEvents);
