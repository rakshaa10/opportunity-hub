import { Link } from "react-router-dom";

const OpportunityCard = ({ opportunity }) => {
  return (
    <Link
      to={`/opportunity/${opportunity.id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          backgroundColor: "#F8F9FB",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid #E5E7EB",
          width: "320px",
          marginTop: "60px",
        }}
      >
        {/* Banner */}
        <div
          style={{
            height: "160px",
            backgroundColor: "#2563EB",
          }}
        ></div>

        {/* Content */}
        <div
          style={{
            padding: "20px",
          }}
        >
          <span
            style={{
              backgroundColor: "#EEF2FF",
              color: "#2563EB",
              padding: "4px 10px",
              borderRadius: "999px",
              fontSize: "12px",
            }}
          >
            {opportunity.category}
          </span>

          <h3
            style={{
              marginTop: "16px",
              color: "#1E3A5F",
            }}
          >
            {opportunity.title}
          </h3>

          <p
            style={{
              color: "#6B7280",
            }}
          >
            {opportunity.organizer}
          </p>

          <p
            style={{
              marginTop: "16px",
              color: "#2563EB",
              fontWeight: "600",
            }}
          >
            Closes {opportunity.deadline}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default OpportunityCard;
