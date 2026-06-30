import { useEffect, useState } from "react";
import axios from "../api/axios";

import OpportunityCard from "./OpportunityCard";

const OpportunityGrid = () => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const response = await axios.get("/opportunities");

        console.log(response.data);

        setOpportunities(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOpportunities();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        justifyContent: "center",
        padding: "60px 40px",
      }}
    >
      {opportunities.map((opportunity) => (
        <OpportunityCard
          key={opportunity.id}
          opportunity={{
            ...opportunity,

            organizer: opportunity.organizer?.name || "Unknown Organizer",

            deadline: new Date(opportunity.deadline).toLocaleDateString(),
          }}
        />
      ))}
    </div>
  );
};

export default OpportunityGrid;
