import { useSelector } from "react-redux";
import withAuth from "./withAuth";
import { Typography } from "@mui/material";

function Dashboard() {
  const auth = useSelector((state) => state.auth);
  return (
    <Typography variant="h1" component="div" sx={{ flexGrow: 1, color: "red" }}>
      Welcome {auth.userData.name}
    </Typography>
  );
}

export default withAuth(Dashboard);
