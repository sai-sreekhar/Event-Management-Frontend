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

function App() {
  const [navbarState, setNavbarState] = useState(0);
  const location = useLocation();
  const homeNavbarRoutes = ["home", "services", "testinomials", "contact"];

  useEffect(() => {
    const { pathname } = location;
    console.log("New path:", pathname);
    if (pathname === "/") {
      setNavbarState(0);
    } else if (homeNavbarRoutes.includes(pathname.substring(1))) {
      setNavbarState(0);
    } else {
      setNavbarState(1);
    }
  }, [location]);

  return (
    <>
      <NavbarController type={navbarState}></NavbarController>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/browseEvents" element={<BrowseEvents></BrowseEvents>} />
        <Route path="/hostEvent" element={<HostEvent></HostEvent>}></Route>
        <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/myEvents" element={<MyEvents></MyEvents>}></Route>
        <Route path="/myBookings" element={<MyBookings></MyBookings>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route
          path="/testinomials"
          element={<Testinomials></Testinomials>}
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<NoMatch></NoMatch>}></Route>
      </Routes>
    </>
  );
}

export default App;
