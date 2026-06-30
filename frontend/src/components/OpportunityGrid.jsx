import OpportunityCard from "./OpportunityCard";

const dummyData = [
  {
    id: 1,
    title: "Smart India Hackathon 2025",
    category: "Hackathon",
    organizer: "NIT Raipur Coding Club",
    deadline: "Jul 15",
  },
  {
    id: 2,
    title: "Microsoft Engage Program 2025",
    category: "Internship",
    organizer: "Microsoft India",
    deadline: "Aug 10",
  },
  {
    id: 3,
    title: "Web Dev Workshop",
    category: "Workshop",
    organizer: "Technocracy",
    deadline: "Jul 20",
  },
  {
    id: 4,
    title: "NTSE Scholarship",
    category: "Scholarship",
    organizer: "Ministry of Education",
    deadline: "Sep 1",
  },
  {
    id: 5,
    title: "CodeChef Snackdown",
    category: "Competition",
    organizer: "CodeChef",
    deadline: "Closed",
  },
  {
    id: 6,
    title: "NSS Volunteer Drive",
    category: "Club Recruitment",
    organizer: "NSS NIT Raipur",
    deadline: "Jul 18",
  },
];

const OpportunityGrid = () => {
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
      {dummyData.map((opportunity) => (
        <OpportunityCard key={opportunity.id} opportunity={opportunity} />
      ))}
    </div>
  );
};

export default OpportunityGrid;
