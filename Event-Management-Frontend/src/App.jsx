import { Provider } from "react-redux";
import "./App.css";
import Login from "./components/Login";
import store from "./redux/store";
import { Route, Routes } from "react-router";
import SignUp from "./components/Signup";
import NoMatch from "./components/NoMatch";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NoMatch></NoMatch>}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
