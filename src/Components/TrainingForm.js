import React, { useState } from "react";

const trainingOptions = [
  "Power BI",
  "Azure",
  "Power Platform",
  "MS Fabric",
];

const TrainingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    training: trainingOptions[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Training Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="training">Choose Training:</label>
          <select
            id="training"
            name="training"
            value={formData.training}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.5rem" }}
          >
            {trainingOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" style={{ padding: "0.5rem 2rem", backgroundColor: "#FFA500", color: "#fff", border: "none", borderRadius: "4px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default TrainingForm;
