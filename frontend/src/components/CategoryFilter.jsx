const categories = [
  "All",
  "Hackathon",
  "Internship",
  "Workshop",
  "Scholarship",
  "Competition",
  "Club Recruitment",
];

const CategoryFilter = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        flexWrap: "wrap",
        marginTop: "24px",
      }}
    >
      {categories.map((category) => (
        <button
          key={category}
          style={{
            padding: "10px 18px",
            borderRadius: "999px",
            border: "1px solid #D1D5DB",
            backgroundColor: category === "All" ? "#2563EB" : "#FFFFFF",
            color: category === "All" ? "#FFFFFF" : "#1E3A5F",
            cursor: "pointer",
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
