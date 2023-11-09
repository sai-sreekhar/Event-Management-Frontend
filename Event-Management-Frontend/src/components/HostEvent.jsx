import { useSelector } from "react-redux";
import withAuth from "./withAuth";

function HostEvent() {
  const auth = useSelector((state) => state.auth);
  return (
    <div>
      <h1>Host Event Page</h1>
      <h2>Welcome {auth.userData.name}</h2>
    </div>
  );
}

export default withAuth(HostEvent);
