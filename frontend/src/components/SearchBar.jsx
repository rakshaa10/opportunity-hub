const SearchBar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        marginTop: "30px",
      }}
    >
      <input
        type="text"
        placeholder="Search by title, club, or keyword..."
        style={{
          width: "500px",
          padding: "14px",
          borderRadius: "10px",
          border: "1px solid #D1D5DB",
        }}
      />

      <button
        style={{
          padding: "14px 24px",
          borderRadius: "10px",
          border: "none",
          backgroundColor: "#2563EB",
          color: "white",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
