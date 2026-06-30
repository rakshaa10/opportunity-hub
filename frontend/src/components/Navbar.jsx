import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav>
      <Link to="/">OpportunityHub</Link>

      {!user && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}

      {user && (
        <>
          {user.role === "ORGANIZER" && <Link to="/dashboard">Dashboard</Link>}

          <Link to="/bookmarks">Bookmarks</Link>

          <button onClick={logout}>Logout</button>

          <span>{user.name}</span>
        </>
      )}
    </nav>
  );
};

export default Navbar;
