import "./App.css";
import Login from "./components/Login";
import { Route, Routes, useLocation } from "react-router";
import SignUp from "./components/Signup";
import NoMatch from "./components/NoMatch";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import BrowseEvents from "./components/BrowseEvents";
import HostEvent from "./components/HostEvent";
import Profile from "./components/Profile";
import MyEvents from "./components/MyEvents";
import MyBookings from "./components/MyBookings";
import NavbarController from "./components/NavbarController";
import { useEffect, useState } from "react";
import Services from "./components/Services";
import Testinomials from "./components/Testinomials";
import Contact from "./components/Contact";
import { Box } from "@mui/material";
import ViewEventDetails from "./components/ViewEventDetails";
import UpdateEvent from "./components/UpdateEvent";
import EventRegistrations from "./components/EventRegistrations";

function App() {
  const [navbarState, setNavbarState] = useState(0);
  const location = useLocation();
  const dashboardNavbarRoutes = [
    "dashboard",
    "browseEvents",
    "browseEvents/*",
    "hostEvent",
    "profile",
    "myEvents",
    "myBookings",
    "updateEvent",
  ];

  useEffect(() => {
    if (dashboardNavbarRoutes.includes(location.pathname.split("/")[1])) {
      setNavbarState(1);
    } else {
      setNavbarState(0);
    }
  }, [location]);

  return (
    <>
      <NavbarController type={navbarState}></NavbarController>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "95%",
          }}
        >
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard></Dashboard>} />
            <Route
              path="/browseEvents"
              element={<BrowseEvents></BrowseEvents>}
            ></Route>
            <Route
              path="/browseEvents/:eventId"
              element={<ViewEventDetails></ViewEventDetails>}
            ></Route>
            <Route path="/hostEvent" element={<HostEvent></HostEvent>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route path="/myEvents" element={<MyEvents></MyEvents>}></Route>
            <Route
              path="/updateEvent/:eventId"
              element={<UpdateEvent></UpdateEvent>}
            ></Route>
            <Route
              path="/myBookings"
              element={<MyBookings></MyBookings>}
            ></Route>
            <Route
              path="/myEvents/registrations/:eventId"
              element={<EventRegistrations></EventRegistrations>}
            ></Route>
            <Route path="/services" element={<Services></Services>}></Route>
            <Route
              path="/testinomials"
              element={<Testinomials></Testinomials>}
            ></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="*" element={<NoMatch></NoMatch>}></Route>
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;
