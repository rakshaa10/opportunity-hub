import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "../api/axios";

const DashboardPage = () => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    
    const fetchMyOpportunities = async () => {
      try {
        const response = await axios.get("/opportunities/my-opportunities", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setOpportunities(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMyOpportunities();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this opportunity?",
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`/opportunities/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setOpportunities(
        opportunities.filter((opportunity) => opportunity.id !== id),
      );
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Failed to delete opportunity");
    }
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "900px",
          margin: "50px auto",
          padding: "20px",
        }}
      >
        {/* Page Label */}
        <p
          style={{
            color: "#6B7280",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          ORGANIZER — /DASHBOARD
        </p>

        {/* Heading */}
        <h1
          style={{
            marginTop: "15px",
            color: "#FFFFFF",
            fontSize: "42px",
          }}
        >
          Your opportunities
        </h1>

        <p
          style={{
            color: "#9CA3AF",
            marginTop: "8px",
            marginBottom: "30px",
          }}
        >
          Manage what you've posted
        </p>

        {/* Create Opportunity Button */}
        <Link to="/create-opportunity">
          <button
            style={{
              padding: "14px 24px",
              backgroundColor: "#2563EB",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              marginBottom: "30px",
              fontWeight: "600",
            }}
          >
            + Post New Opportunity
          </button>
        </Link>

        {/* Opportunity List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              style={{
                backgroundColor: "#1F2937",
                border: "1px solid #374151",
                borderRadius: "14px",
                padding: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <h3
                  style={{
                    color: "white",
                    marginBottom: "8px",
                  }}
                >
                  {opportunity.title}
                </h3>

                <p
                  style={{
                    color: "#9CA3AF",
                  }}
                >
                  {opportunity.category} •{" "}
                  {new Date(opportunity.deadline).toLocaleDateString()}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                }}
              >
                <button
                  style={{
                    padding: "10px 18px",
                    borderRadius: "8px",
                    border: "1px solid #4B5563",
                    backgroundColor: "#374151",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(opportunity.id)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "8px",
                    border: "1px solid #4B5563",
                    backgroundColor: "#DC2626",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
