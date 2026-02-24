import { Link } from "react-router-dom";

function Landing() {
  return (
    <div style={{
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
}}>
      <h1>Student Feedback & Evaluation System</h1>
      <p>Enhancing academic quality through structured feedback.</p>

      <Link to="/login">
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>
          Login
        </button>
      </Link>
    </div>
  );
}

export default Landing;