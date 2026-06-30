import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
const HeroSection = () => {
  return (
    <section
      style={{
        padding: "80px 40px",
        backgroundColor: "#F0F4FF",
      }}
    >
      <p
        style={{
          color: "#2563EB",
          fontWeight: "600",
        }}
      >
        NIT RAIPUR
      </p>

      <h1
        style={{
          fontSize: "48px",
          color: "#1E3A5F",
          marginTop: "10px",
          marginBottom: "20px",
        }}
      >
        Find opportunities
        <br />
        around your campus
      </h1>

      <p
        style={{
          color: "#6B7280",
          fontSize: "18px",
        }}
      >
        Hackathons, internships, workshops, scholarships — all in one place.
      </p>
      <SearchBar />
      <CategoryFilter />
    </section>
  );
};

export default HeroSection;
