import { Provider } from "react-redux";
import "./App.css";
import Login from "./components/Login";
import store from "./redux/store";
import { Route, Routes } from "react-router";
import SignUp from "./components/Signup";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Provider>
  );
}

export default App;
