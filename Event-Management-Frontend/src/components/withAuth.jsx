import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const withAuth = (ComponentToProtect) => {
  const Auth = (props) => {
    console.log("Inside withAuth");
    const { accessToken } = useSelector((state) => state.auth);
    console.log("accessToken", accessToken);
    if (accessToken) {
      return <ComponentToProtect {...props} />;
    } else {
      return <Navigate to="/login" state={{ path: location.pathname }} />;
    }
  };
  return Auth;
};

export default withAuth;
