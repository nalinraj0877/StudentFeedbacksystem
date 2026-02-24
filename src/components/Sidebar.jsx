import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{
  width: "220px",
  background: "#1e293b",
  color: "white",
  height: "100vh",
  padding: "20px"
}}>
      <h3>Feedback System</h3>
      <div style={{ marginTop: "20px" }}>
       <p>
  <Link to="/student" style={{ color: "#cbd5e1", textDecoration: "none" }}>
    Student Dashboard
  </Link>
</p>
      <p>
  <Link to="/admin" style={{ color: "#cbd5e1", textDecoration: "none" }}>
    Admin Dashboard
  </Link>
</p>
      </div>
    </div>
  );
}

export default Sidebar;