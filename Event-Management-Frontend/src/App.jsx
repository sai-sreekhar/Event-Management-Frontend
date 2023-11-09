import "./App.css";
import Login from "./components/Login";
import { Route, Routes } from "react-router";
import SignUp from "./components/Signup";
import NoMatch from "./components/NoMatch";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";
import BrowseEvents from "./components/BrowseEvents";
import HostEvent from "./components/HostEvent";
import Profile from "./components/Profile";
import MyEvents from "./components/MyEvents";
import MyBookings from "./components/MyBookings";

function App() {
  return (
    <>
      <NavBar></NavBar>
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

        <Route path="*" element={<NoMatch></NoMatch>}></Route>
      </Routes>
    </>
  );
}

export default App;
