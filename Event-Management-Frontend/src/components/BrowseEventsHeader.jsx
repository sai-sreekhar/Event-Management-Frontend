import { Grid, Typography } from "@mui/material";

function BrowseEventsHeader() {
  return (
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
      sx={{
        height: "150px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Typography variant="h4" align="center">
        ALL UPCOMING
      </Typography>
      <Typography variant="h4" align="center">
        EVENTS
      </Typography>
    </Grid>
  );
}

export default BrowseEventsHeader;
