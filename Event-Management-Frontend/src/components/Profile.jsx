import { useSelector } from "react-redux";
import withAuth from "./withAuth";

const Profile = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div>
      <h1>Profile Page</h1>
      <h2>Welcome {auth.userData.name}</h2>
    </div>
  );
}

export default withAuth(Profile);