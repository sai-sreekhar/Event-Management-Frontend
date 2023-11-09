import { useSelector } from "react-redux";
import withAuth from "./withAuth";

const MyBookings = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div>
      <h1>My Bookings Page</h1>
      <h2>Welcome {auth.userData.name}</h2>
    </div>
  );
};

export default withAuth(MyBookings);
