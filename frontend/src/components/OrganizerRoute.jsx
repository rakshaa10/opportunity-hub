import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const OrganizerRoute = ({ children }) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  if (user.role !== "ORGANIZER") {
    return <Navigate to="/" />;
  }

  return children;
};

export default OrganizerRoute;
