import { Link } from "react-router-dom";

function StudentDashboard() {
  const courses = [
    { id: 1, name: "Full Stack Application Development" },
    { id: 2, name: "Database Management Systems" }
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h2>Student Dashboard</h2>
      <h3>Available Courses</h3>

      {courses.map((course) => (
        <div
          key={course.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            margin: "10px 0",
            borderRadius: "8px"
          }}
        >
          <h4>{course.name}</h4>

          <Link to="/feedback">
            <button style={{ padding: "8px 15px" }}>
              Give Feedback
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default StudentDashboard;