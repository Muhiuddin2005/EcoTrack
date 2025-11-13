import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import { BounceLoader } from "react-spinners";
const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <BounceLoader
  color="#0ff051"
  size={200}
  speedMultiplier={3}
/>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/logIn" state={location.pathname} />;
  }
  return children;
};

export default PrivateRoute;
