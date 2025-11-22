import "./successmodal.css";

const Successmodal = ({ type }) => {
  const isError = type === "error";

  return (
    <div
      className="toast-box"
      style={{
        background: isError ? "#ffe8e8" : " rgba(122, 171, 236, 1)",
        borderColor: isError ? "#ff4d4d" : "#76d193",
      }}
    >
      <span
        className="toast-icon"
        style={{ color: isError ? "#ff1a1a" : "#22c55e" }}
      >
        {isError ? "⚠" : "✓"}
      </span>

      <span className="toast-text">
        {isError ? "Please fill all required fields!" : "Project added successfully!"}
      </span>
    </div>
  );
};

export default Successmodal;
