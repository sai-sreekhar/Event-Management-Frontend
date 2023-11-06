import { useSelector } from "react-redux";
import { authStatus } from "../redux/auth/authTypes";
import { Navigate } from "react-router";

export default function Dashboard() {
  const auth = useSelector((state) => state.auth);
  return (
    <div>
      {auth.accessToken ? (
        <div>
          <h1>Dashboard</h1>
          <h2>Welcome {auth.userData.name}</h2>
        </div>
      ) : (
        <Navigate to="/login"></Navigate>
      )}
    </div>
  );
}
