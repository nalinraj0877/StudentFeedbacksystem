import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FeedbackForm() {
  const navigate = useNavigate();

  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    alert("Feedback submitted successfully!");
    navigate("/student");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Course Feedback</h2>

      <div style={{ marginBottom: "20px" }}>
        <p>1. Rate the course content (1-5)</p>
        <input
          type="number"
          min="1"
          max="5"
          value={rating1}
          onChange={(e) => setRating1(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <p>2. Rate the instructor effectiveness (1-5)</p>
        <input
          type="number"
          min="1"
          max="5"
          value={rating2}
          onChange={(e) => setRating2(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <p>3. Additional Comments</p>
        <textarea
          rows="4"
          cols="40"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      <button onClick={handleSubmit} style={{ padding: "10px 20px" }}>
        Submit Feedback
      </button>
    </div>
  );
}

export default FeedbackForm;