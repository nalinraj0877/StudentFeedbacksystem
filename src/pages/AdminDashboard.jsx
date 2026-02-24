function AdminDashboard() {
  const totalResponses = 42;
  const avgContentRating = 4.3;
  const avgInstructorRating = 4.6;

  return (
    <div style={{ padding: "40px" }}>
      <h2>Admin Dashboard</h2>
      <h3>Feedback Overview</h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          flexWrap: "wrap"
        }}
      >
        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            width: "200px"
          }}
        >
          <h4>Total Responses</h4>
          <p style={{ fontSize: "24px" }}>{totalResponses}</p>
        </div>

        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            width: "200px"
          }}
        >
          <h4>Avg Course Rating</h4>
          <p style={{ fontSize: "24px" }}>{avgContentRating}</p>
        </div>

        <div
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
            width: "200px"
          }}
        >
          <h4>Avg Instructor Rating</h4>
          <p style={{ fontSize: "24px" }}>{avgInstructorRating}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;