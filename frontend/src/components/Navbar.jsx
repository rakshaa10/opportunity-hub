import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#2563EB",
        }}
      >
        OpportunityHub
      </Link>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        {!user && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {user && (
          <>
            {user.role === "ORGANIZER" && (
              <Link to="/dashboard">Dashboard</Link>
            )}

            <Link to="/bookmarks">Bookmarks</Link>

            <button onClick={logout}>Logout</button>

            <div>{user.name}</div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
