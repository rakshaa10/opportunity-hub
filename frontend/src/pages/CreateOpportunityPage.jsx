import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "../api/axios";

const CreateOpportunityPage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("HACKATHON");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [registrationLink, setRegistrationLink] = useState("");
  const handleSubmit = async () => {
    try {
      await axios.post(
        "/opportunities",
        {
          title,
          category,
          deadline,
          description,
          registrationLink,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      alert("Opportunity created successfully");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Failed to create opportunity");
    }
  };
  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        {/* Back button */}
        <Link
          to="/dashboard"
          style={{
            color: "#6B7280",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          ← Back to dashboard
        </Link>

        {/* Heading */}
        <div
          style={{
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              color: "#FFFFFF",
              marginBottom: "8px",
            }}
          >
            Post an opportunity
          </h1>

          <p
            style={{
              color: "#9CA3AF",
            }}
          >
            Fill in the details below. Students will see this on the home feed.
          </p>
        </div>

        {/* Title */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>Title</label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Web Dev Workshop — Technocracy"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #374151",
              backgroundColor: "#1F2937",
              color: "white",
            }}
          />
        </div>

        {/* Category + Deadline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <div>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #374151",
                backgroundColor: "#1F2937",
                color: "white",
              }}
            >
              <option value="HACKATHON">Hackathon</option>
              <option value="INTERNSHIP">Internship</option>
              <option value="WORKSHOP">Workshop</option>
              <option value="SCHOLARSHIP">Scholarship</option>
              <option value="COMPETITION">Competition</option>
              <option value="CLUB_RECRUITMENT">Club Recruitment</option>
            </select>
          </div>

          <div>
            <label style={{ display: "block", marginBottom: "8px" }}>
              Application deadline
            </label>

            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "1px solid #374151",
                backgroundColor: "#1F2937",
                color: "white",
              }}
            />
          </div>
        </div>

        {/* Description */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Description
          </label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the opportunity — what it is, who can apply, what to expect..."
            rows={6}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #374151",
              backgroundColor: "#1F2937",
              color: "white",
              resize: "vertical",
            }}
          />
        </div>

        {/* Registration link */}
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Registration link
          </label>

          <input
            type="text"
            value={registrationLink}
            onChange={(e) => setRegistrationLink(e.target.value)}
            placeholder="https://unstop.com/your-event"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #374151",
              backgroundColor: "#1F2937",
              color: "white",
            }}
          />
        </div>

        {/* Banner Upload Placeholder */}
        <div style={{ marginBottom: "30px" }}>
          <label style={{ display: "block", marginBottom: "8px" }}>
            Banner image
          </label>

          <div
            style={{
              border: "2px dashed #4B5563",
              borderRadius: "12px",
              padding: "40px",
              textAlign: "center",
              color: "#9CA3AF",
            }}
          >
            Click to upload or drag and drop
            <br />
            PNG or JPG, max 2MB
          </div>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
          }}
        >
          <Link to="/dashboard">
            <button
              style={{
                padding: "12px 20px",
                borderRadius: "10px",
                border: "1px solid #4B5563",
                backgroundColor: "transparent",
                color: "white",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </Link>

          <button
            onClick={handleSubmit}
            style={{
              padding: "12px 20px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "#2563EB",
              color: "white",
              cursor: "pointer",
            }}
          >
            Post Opportunity
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateOpportunityPage;
