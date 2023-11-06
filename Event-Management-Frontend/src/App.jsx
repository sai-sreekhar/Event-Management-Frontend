import "./App.css";
import Login from "./components/Login";
import { Route, Routes } from "react-router";
import SignUp from "./components/Signup";
import NoMatch from "./components/NoMatch";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard></Dashboard>} />
      <Route path="*" element={<NoMatch></NoMatch>}></Route>
    </Routes>
  );
}

export default App;
