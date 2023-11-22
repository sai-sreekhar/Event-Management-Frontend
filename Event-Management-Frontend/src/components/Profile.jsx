import { useSelector } from "react-redux";
import withAuth from "./withAuth";

const Profile = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div style={{height:'130vh'}}>
      <h1 style={{textAlign:'center',color:'white',paddingTop:'50px'}}>Profile Page</h1>
      <h2 style={{textAlign:'center',color:'white'}}>Welcome {auth.userData.name}</h2>
    </div>
  );
};

export default withAuth(Profile);
