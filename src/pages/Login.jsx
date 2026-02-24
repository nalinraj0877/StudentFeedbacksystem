import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "student") {
      navigate("/student");
    } else {
      navigate("/admin");
    }
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Login</h2>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ padding: "10px", margin: "10px" }}
      >
        <option value="student">Student</option>
        <option value="admin">Admin</option>
      </select>

      <br />

      <button onClick={handleLogin} style={{ padding: "10px 20px" }}>
        Login
      </button>
    </div>
  );
}

export default Login;