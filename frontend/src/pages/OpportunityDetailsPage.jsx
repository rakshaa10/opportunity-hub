import Navbar from "../components/Navbar";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";

const OpportunityDetailsPage = () => {
  const { id } = useParams();

  const [opportunity, setOpportunity] = useState(null);

  useEffect(() => {
    const fetchOpportunity = async () => {
      try {
        const response = await axios.get(`/opportunities/${id}`);

        console.log(response.data);

        setOpportunity(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOpportunity();
  }, [id]);

  if (!opportunity) {
    return (
      <>
        <Navbar />
        <h1 style={{ textAlign: "center", marginTop: "100px" }}>Loading...</h1>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "1000px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        {/* Back Button */}
        <p
          style={{
            color: "#6B7280",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          ← Back to opportunities
        </p>

        {/* Banner */}
        <div
          style={{
            height: "250px",
            backgroundColor: "#2563EB",
            borderRadius: "20px",
            marginBottom: "30px",
          }}
        ></div>

        {/* Header Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            gap: "30px",
          }}
        >
          <div>
            <span
              style={{
                backgroundColor: "#EEF2FF",
                color: "#2563EB",
                padding: "6px 12px",
                borderRadius: "999px",
                fontSize: "12px",
              }}
            >
              {opportunity.category}
            </span>

            <h1
              style={{
                color: "#1E3A5F",
                marginTop: "20px",
              }}
            >
              {opportunity.title}
            </h1>

            <p
              style={{
                color: "#6B7280",
              }}
            >
              Posted by {opportunity.organizer?.name}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <button
              style={{
                padding: "14px 24px",
                backgroundColor: "#2563EB",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Register Now
            </button>

            <button
              style={{
                padding: "14px 24px",
                backgroundColor: "white",
                color: "#1E3A5F",
                border: "1px solid #D1D5DB",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Save Opportunity
            </button>
          </div>
        </div>

        {/* Metadata */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "40px",
            paddingTop: "20px",
            borderTop: "1px solid #E5E7EB",
            borderBottom: "1px solid #E5E7EB",
            paddingBottom: "20px",
          }}
        >
          <div>
            <h4>Deadline</h4>
            <p>{new Date(opportunity.deadline).toLocaleDateString()}</p>
          </div>

          <div>
            <h4>Category</h4>
            <p>{opportunity.category}</p>
          </div>

          <div>
            <h4>Organizer</h4>
            <p>{opportunity.organizer?.name}</p>
          </div>
        </div>

        {/* Description */}
        <div
          style={{
            marginTop: "40px",
          }}
        >
          <h2
            style={{
              color: "#1E3A5F",
            }}
          >
            About this opportunity
          </h2>

          <p
            style={{
              color: "#6B7280",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            {opportunity.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default OpportunityDetailsPage;
